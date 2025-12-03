import type { APIRoute } from 'astro';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  service?: string;
  message: string;
  honeypot?: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

const WP_URL = import.meta.env.WP_REST_URL || 'http://local.rework.com/wp-json';
const CF7_FORM_ID = import.meta.env.CF7_FORM_ID || '1';

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate form data
function validateFormData(data: ContactFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caracteres';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Veuillez entrer une adresse email valide';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caracteres';
  }

  return errors;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data: ContactFormData = await request.json();

    // Honeypot check - if filled, it's a bot
    if (data.honeypot) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Message envoye avec succes !',
        } satisfies ContactResponse),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate form data
    const errors = validateFormData(data);
    if (Object.keys(errors).length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Veuillez corriger les erreurs du formulaire',
          errors,
        } satisfies ContactResponse),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Try to send to WordPress CF7
    try {
      const formData = new FormData();
      formData.append('your-name', data.name);
      formData.append('your-email', data.email);
      formData.append('your-company', data.company || '');
      formData.append('your-budget', data.budget || '');
      formData.append('your-service', data.service || '');
      formData.append('your-message', data.message);

      const wpResponse = await fetch(
        `${WP_URL}/contact-form-7/v1/contact-forms/${CF7_FORM_ID}/feedback`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (wpResponse.ok) {
        const result = await wpResponse.json();
        if (result.status === 'mail_sent') {
          return new Response(
            JSON.stringify({
              success: true,
              message: 'Message envoye avec succes ! Nous vous repondrons rapidement.',
            } satisfies ContactResponse),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
          );
        }
      }
    } catch {
      // WordPress not available, fallback behavior
      console.error('WordPress CF7 not available, using fallback');
    }

    // Fallback: Log the message (in production, you might want to save to a database or send via SMTP)
    console.warn('Contact form submission (fallback mode):', {
      name: data.name,
      email: data.email,
      company: data.company,
      service: data.service,
      budget: data.budget,
      message: data.message.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message envoye avec succes ! Nous vous repondrons rapidement.',
      } satisfies ContactResponse),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Une erreur est survenue. Veuillez reessayer.',
      } satisfies ContactResponse),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
