'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplates/supportEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitSupportRequest(formData) {
  try {
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
    return { success: true, message: 'Support request submitted successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'An unexpected error occurred' };
  }
}
