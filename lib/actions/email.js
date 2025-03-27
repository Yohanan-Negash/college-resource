'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplates/supportEmailTemplate';
import { FeedbackEmailTemplate } from '../../components/EmailTemplates/feedbackEmailTemplate';
import { headers } from 'next/headers';
import { kv } from '@vercel/kv';
import { createClient } from '@/lib/supabase/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 3600; // 1 hour in seconds
const MAX_REQUESTS_PER_WINDOW = 2; // Maximum 3 emails per hour

// Helper function to check rate limit using Vercel KV
async function checkRateLimit(identifier, type) {
  try {
    const key = `ratelimit:${type}:${identifier}`;

    // Get current count
    const count = (await kv.get(key)) || 0;

    if (count >= MAX_REQUESTS_PER_WINDOW) {
      const ttl = await kv.ttl(key);
      return {
        allowed: false,
        remaining: 0,
        resetAt: ttl > 0 ? ttl : RATE_LIMIT_WINDOW,
      };
    }

    // Increment counter
    await kv.incr(key);

    // Set expiry if this is a new key
    if (count === 0) {
      await kv.expire(key, RATE_LIMIT_WINDOW);
    }

    // Get TTL to know when limit resets
    const ttl = await kv.ttl(key);

    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_WINDOW - (count + 1),
      resetAt: ttl > 0 ? ttl : RATE_LIMIT_WINDOW,
    };
  } catch (error) {
    console.error('Rate limiting error:', error);
    // In case of error, allow the request but log it
    return {
      allowed: true,
      remaining: 0,
      error: true,
    };
  }
}

// Get a unique identifier for the authenticated user
async function getUserIdentifier() {
  try {
    // Get authenticated user from Supabase
    const supabase = await createClient();
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError || !userData || !userData.user) {
      console.error('Error getting authenticated user:', userError);
      // Fallback to IP address if user data is not available
      const headersList = headers();
      const forwardedFor = headersList.get('x-forwarded-for');
      if (forwardedFor) {
        return forwardedFor.split(',')[0];
      }
      return `anonymous_${Date.now()}`;
    }

    // Use authenticated user's email
    return userData.user.email.toLowerCase();
  } catch (error) {
    console.error('Error identifying user:', error);
    // Fallback to IP address
    const headersList = headers();
    const forwardedFor = headersList.get('x-forwarded-for');
    if (forwardedFor) {
      return forwardedFor.split(',')[0];
    }
    return `anonymous_${Date.now()}`;
  }
}

// Format time remaining in a human-readable format
function formatTimeRemaining(seconds) {
  if (seconds < 60) {
    return `${seconds} seconds`;
  } else if (seconds < 3600) {
    return `${Math.ceil(seconds / 60)} minutes`;
  } else {
    return `${Math.ceil(seconds / 3600)} hours`;
  }
}

export async function submitSupportRequest(formData) {
  try {
    const userIdentifier = await getUserIdentifier();

    // Check if user has exceeded rate limit
    const rateLimitResult = await checkRateLimit(userIdentifier, 'support');

    if (!rateLimitResult.allowed) {
      const timeRemaining = formatTimeRemaining(rateLimitResult.resetAt);
      return {
        success: false,
        message: `We've received several requests from you recently. Please try again later.`,
      };
    }

    const { data, error } = await resend.emails.send({
      from: 'Support <onboarding@resend.dev>',
      to: [process.env.SUPPORT_EMAIL || 'yonidigital896@gmail.com'],
      subject: `New Support Request: ${formData.subject}`,
      react: EmailTemplate(formData),
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Failed to submit support request' };
    }

    console.log('Email sent successfully:', data);

    // Simple success message without rate limit details
    const message =
      'Support request submitted successfully. We will reach out to you within the next couple of days regarding your request.';

    return {
      success: true,
      message,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'An unexpected error occurred' };
  }
}

export async function submitFeedback(formData) {
  try {
    const userIdentifier = await getUserIdentifier();

    // Check if user has exceeded rate limit
    const rateLimitResult = await checkRateLimit(userIdentifier, 'feedback');

    if (!rateLimitResult.allowed) {
      const timeRemaining = formatTimeRemaining(rateLimitResult.resetAt);
      return {
        success: false,
        message: `We've received several feedback submissions from you recently. Please try again later.`,
      };
    }

    const { data, error } = await resend.emails.send({
      from: 'Support <onboarding@resend.dev>',
      to: [process.env.FEEDBACK_EMAIL || 'yonidigital896@gmail.com'],
      subject: `New Feedback: ${formData.subject}`,
      react: FeedbackEmailTemplate(formData),
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Failed to submit feedback' };
    }

    console.log('Email sent successfully:', data);

    // Simple success message without rate limit details
    const message =
      'Feedback submitted successfully. Thank you for your input! If necessary, we will reach out to you within the next couple of days regarding your feedback.';

    return {
      success: true,
      message,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'An unexpected error occurred' };
  }
}
