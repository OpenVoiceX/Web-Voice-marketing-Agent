import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { 
  checkRateLimit, 
  checkDuplicateSubscription, 
  sanitizeEmail, 
  validateEmail 
} from '@/utils/newsletter-security';

// GET endpoint for health check
export async function GET() {
  return NextResponse.json(
    { 
      status: 'healthy',
      service: 'newsletter-api',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = 
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      request.headers.get('cf-connecting-ip') ||
      '127.0.0.1';

    // Check rate limiting first
    const rateLimitResult = checkRateLimit(clientIP);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many subscription attempts. Please try again later.',
          retryAfter: rateLimitResult.retryAfter 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': rateLimitResult.retryAfter?.toString() || '3600',
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.ceil(rateLimitResult.resetTime / 1000).toString(),
          }
        }
      );
    }

    // Extract and validate request body
    const body = await request.json();
    let { email } = body;

    // Basic input validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Sanitize email input
    email = sanitizeEmail(email);

    // Enhanced email validation
    const validationResult = validateEmail(email);
    if (!validationResult.isValid) {
      return NextResponse.json(
        { error: validationResult.error || 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check for duplicate subscription
    const isDuplicate = checkDuplicateSubscription(email);
    if (isDuplicate) {
      return NextResponse.json(
        { 
          error: 'This email is already subscribed to our newsletter.',
          message: 'If you haven\'t received our emails, please check your spam folder or contact support.'
        },
        { status: 409 }
      );
    }

    // Verify environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email configuration environment variables');
      return NextResponse.json(
        { error: 'Email service is currently unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    // Create transporter with additional security options
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      secure: true, // Use TLS
      tls: {
        rejectUnauthorized: true, // Verify SSL certificates
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Email transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration error. Please try again later.' },
        { status: 503 }
      );
    }

    // Email content for subscriber with improved security headers
    const subscriberMailOptions = {
      from: {
        name: 'Voice Marketing Agents',
        address: process.env.GMAIL_USER,
      },
      to: email,
      subject: 'Welcome to Voice Marketing Agents Newsletter! 🎉',
      text: `Welcome to Voice Marketing Agents!

Thank you for subscribing to our newsletter. You'll receive:
- Latest updates on Voice Marketing Agents framework
- Tips and best practices for voice AI development
- New features and improvements
- Tutorials and documentation updates
- Community highlights and success stories

We're excited to have you on board!

Visit us on GitHub: https://github.com/your-username/voice-marketing-agents

© ${new Date().getFullYear()} Voice Marketing Agents. All rights reserved.
Built with ❤️ by the Voice Marketing Agents community`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #99e39e 0%, #1dc8cd 100%); padding: 30px; border-radius: 10px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">Welcome to Voice Marketing Agents!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Thank you for subscribing to our newsletter</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">What to expect:</h2>
            <ul style="color: #666; line-height: 1.6;">
              <li>🚀 Latest updates on Voice Marketing Agents framework</li>
              <li>💡 Tips and best practices for voice AI development</li>
              <li>🔧 New features and improvements</li>
              <li>📚 Tutorials and documentation updates</li>
              <li>🎯 Community highlights and success stories</li>
            </ul>
            
            <p style="color: #666; margin-top: 20px;">
              We're excited to have you on board! Stay tuned for exciting updates about our blazing-fast, open-source voice AI framework.
            </p>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://github.com/OpenVoiceX/Web-Voice-marketing-Agent" 
                 style="background: linear-gradient(135deg, #99e39e 0%, #1dc8cd 100%); color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                Explore on GitHub
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #888; font-size: 14px;">
            <p>© ${new Date().getFullYear()} Voice Marketing Agents. All rights reserved.</p>
            <p>Built with ❤️ by the Voice Marketing Agents community</p>
            <p style="margin-top: 15px;">
              <a href="mailto:${process.env.GMAIL_USER}?subject=Unsubscribe%20Request" style="color: #666; text-decoration: none;">
                Unsubscribe
              </a> | 
              <a href="https://github.com/your-username/voice-marketing-agents" style="color: #666; text-decoration: none; margin-left: 5px;">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      `,
      headers: {
        'List-Unsubscribe': `<mailto:${process.env.GMAIL_USER}?subject=Unsubscribe%20Request>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
    };

    // Email notification for admin with enhanced security info
    const adminMailOptions = {
      from: {
        name: 'Voice Marketing Agents Newsletter',
        address: process.env.GMAIL_USER,
      },
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: 'New Newsletter Subscription 📧',
      text: `New Newsletter Subscription

Email: ${email}
Date: ${new Date().toLocaleString()}
IP: ${clientIP}
User Agent: ${request.headers.get('user-agent') || 'Unknown'}
Remaining Rate Limit: ${rateLimitResult.remaining}

This is an automated notification from your Voice Marketing Agents website.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">New Newsletter Subscription</h2>
          <p style="color: #666;">You have a new subscriber to the Voice Marketing Agents newsletter:</p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <strong>Email:</strong> ${email}<br>
            <strong>Date:</strong> ${new Date().toLocaleString()}<br>
            <strong>IP:</strong> ${clientIP}<br>
            <strong>User Agent:</strong> ${request.headers.get('user-agent') || 'Unknown'}<br>
            <strong>Remaining Rate Limit:</strong> ${rateLimitResult.remaining}/5
          </div>
          <p style="color: #666; font-size: 14px;">
            This is an automated notification from your Voice Marketing Agents website.
          </p>
        </div>
      `,
    };

    // Send emails with timeout and retry logic
    const emailTimeout = 30000; // 30 seconds timeout
    
    try {
      await Promise.race([
        Promise.all([
          transporter.sendMail(subscriberMailOptions),
          transporter.sendMail(adminMailOptions),
        ]),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email sending timeout')), emailTimeout)
        ),
      ]);
    } catch (emailError) {
      console.error('Failed to send emails:', emailError);
      
      // Return error but don't reveal internal details
      return NextResponse.json(
        { error: 'Failed to send confirmation email. Please try again later.' },
        { status: 503 }
      );
    }

    // Success response with rate limit headers
    return NextResponse.json(
      { 
        message: 'Successfully subscribed to newsletter!',
        info: 'You should receive a confirmation email shortly.'
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': Math.ceil(rateLimitResult.resetTime / 1000).toString(),
        }
      }
    );
  } catch (error) {
    // Log error details for debugging
    console.error('Newsletter subscription error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });

    // Return generic error to prevent information leakage
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
