'use server';

import { Resend } from 'resend';
import { WaitlistEmailTemplate } from '../../components/EmailTemplates/waitlistEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWaitlistEmail(formData) {
  try {
    const { firstName, lastName, email } = formData;
    const { data, error } = await resend.emails.send({
      from: 'PhazeOne Team <team@phazeone.tech>',
      to: [email],
      subject: 'Welcome to the Waitlist!',
      react: WaitlistEmailTemplate({ firstName, lastName }),
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Failed to send waitlist email' };
    }

    console.log('Email sent successfully:', data);
    return { success: true, message: 'Waitlist email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'An unexpected error occurred' };
  }
}
