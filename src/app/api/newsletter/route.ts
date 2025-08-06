import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content for subscriber
    const subscriberMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Welcome to Voice Marketing Agents Newsletter! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; color: white;">
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
              <a href="https://github.com/your-username/voice-marketing-agents" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                Explore on GitHub
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #888; font-size: 14px;">
            <p>© ${new Date().getFullYear()} Voice Marketing Agents. All rights reserved.</p>
            <p>Built with ❤️ by the Voice Marketing Agents community</p>
          </div>
        </div>
      `,
    };

    // Email notification for admin
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: 'New Newsletter Subscription 📧',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">New Newsletter Subscription</h2>
          <p style="color: #666;">You have a new subscriber to the Voice Marketing Agents newsletter:</p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <strong>Email:</strong> ${email}<br>
            <strong>Date:</strong> ${new Date().toLocaleString()}<br>
            <strong>IP:</strong> ${request.headers.get('x-forwarded-for') || 'Unknown'}
          </div>
          <p style="color: #666; font-size: 14px;">
            This is an automated notification from your Voice Marketing Agents website.
          </p>
        </div>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(subscriberMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
