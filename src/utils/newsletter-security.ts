import NodeCache from 'node-cache';

// Cache configuration
const rateCache = new NodeCache({ 
  stdTTL: 3600, // 1 hour TTL for rate limiting
  checkperiod: 600 // Check for expired keys every 10 minutes
});

const subscriptionCache = new NodeCache({ 
  stdTTL: 86400, // 24 hours TTL for duplicate check
  checkperiod: 3600 // Check for expired keys every hour
});

// Rate limiting configuration
const RATE_LIMIT = {
  MAX_REQUESTS: 5, // Maximum requests per IP
  TIME_WINDOW: 3600000, // 1 hour in milliseconds
  RESET_TIME: 3600000, // Reset window time
};

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: number;
  retryAfter?: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  const key = `rate_${ip}`;
  const now = Date.now();
  
  // Get current rate limit data
  const rateLimitData = rateCache.get<{
    count: number;
    firstRequest: number;
  }>(key);

  if (!rateLimitData) {
    // First request from this IP
    rateCache.set(key, {
      count: 1,
      firstRequest: now,
    });
    
    return {
      allowed: true,
      remaining: RATE_LIMIT.MAX_REQUESTS - 1,
      resetTime: now + RATE_LIMIT.TIME_WINDOW,
    };
  }

  // Check if the time window has expired
  if (now - rateLimitData.firstRequest > RATE_LIMIT.TIME_WINDOW) {
    // Reset the counter
    rateCache.set(key, {
      count: 1,
      firstRequest: now,
    });
    
    return {
      allowed: true,
      remaining: RATE_LIMIT.MAX_REQUESTS - 1,
      resetTime: now + RATE_LIMIT.TIME_WINDOW,
    };
  }

  // Check if limit exceeded
  if (rateLimitData.count >= RATE_LIMIT.MAX_REQUESTS) {
    const resetTime = rateLimitData.firstRequest + RATE_LIMIT.TIME_WINDOW;
    return {
      allowed: false,
      remaining: 0,
      resetTime,
      retryAfter: Math.ceil((resetTime - now) / 1000), // seconds
    };
  }

  // Increment the counter
  rateCache.set(key, {
    count: rateLimitData.count + 1,
    firstRequest: rateLimitData.firstRequest,
  });

  return {
    allowed: true,
    remaining: RATE_LIMIT.MAX_REQUESTS - (rateLimitData.count + 1),
    resetTime: rateLimitData.firstRequest + RATE_LIMIT.TIME_WINDOW,
  };
}

export function checkDuplicateSubscription(email: string): boolean {
  const key = `sub_${email.toLowerCase()}`;
  const exists = subscriptionCache.has(key);
  
  if (!exists) {
    // Mark email as subscribed
    subscriptionCache.set(key, {
      subscribedAt: new Date().toISOString(),
      email: email.toLowerCase(),
    });
  }
  
  return exists;
}

export function sanitizeEmail(email: string): string {
  return email
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '') // Remove all whitespace
    .replace(/[^\w@.-]/g, '') // Remove special characters except @, ., -
    .substring(0, 254); // Limit length according to RFC 5321
}

export function validateEmail(email: string): { isValid: boolean; error?: string } {
  // Basic format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Invalid email format' };
  }

  // Length checks
  if (email.length > 254) {
    return { isValid: false, error: 'Email address too long' };
  }

  const [localPart, domain] = email.split('@');
  
  if (localPart.length > 64) {
    return { isValid: false, error: 'Email local part too long' };
  }

  if (domain.length > 253) {
    return { isValid: false, error: 'Email domain too long' };
  }

  // Check for common disposable email domains
  const disposableDomains = [
    '10minutemail.com',
    'tempmail.org',
    'guerrillamail.com',
    'mailinator.com',
    'throwaway.email',
  ];

  if (disposableDomains.some(disposable => domain.endsWith(disposable))) {
    return { isValid: false, error: 'Disposable email addresses are not allowed' };
  }

  return { isValid: true };
}

// Cleanup function to clear expired entries (optional)
export function clearExpiredEntries(): void {
  const now = Date.now();
  const rateKeys = rateCache.keys();
  const subKeys = subscriptionCache.keys();

  // Clear expired rate limit entries
  rateKeys.forEach(key => {
    const data = rateCache.get<{ firstRequest: number }>(key);
    if (data && now - data.firstRequest > RATE_LIMIT.TIME_WINDOW) {
      rateCache.del(key);
    }
  });

  console.log(`Cleaned up ${rateKeys.length} rate limit entries and ${subKeys.length} subscription entries`);
}
