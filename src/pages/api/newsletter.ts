import type { APIRoute } from 'astro';

interface NewsletterData {
  email: string;
  honeypot?: string;
}

interface NewsletterResponse {
  success: boolean;
  message: string;
}

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data: NewsletterData = await request.json();

    // Honeypot check - if filled, it's a bot
    if (data.honeypot) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Inscription réussie !',
        } satisfies NewsletterResponse),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email
    if (!data.email || !isValidEmail(data.email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Veuillez entrer une adresse email valide',
        } satisfies NewsletterResponse),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // In production, integrate with your newsletter service (Mailchimp, ConvertKit, etc.)
    // For now, we log the subscription
    console.info('Newsletter subscription:', {
      email: data.email,
      timestamp: new Date().toISOString(),
    });

    // TODO: Add integration with newsletter service
    // Example with Mailchimp:
    // const MAILCHIMP_API_KEY = import.meta.env.MAILCHIMP_API_KEY;
    // const MAILCHIMP_LIST_ID = import.meta.env.MAILCHIMP_LIST_ID;
    // await fetch(`https://us1.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email_address: data.email,
    //     status: 'subscribed',
    //   }),
    // });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Merci pour votre inscription ! Vous recevrez nos actualités très bientôt.',
      } satisfies NewsletterResponse),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Une erreur est survenue. Veuillez réessayer.',
      } satisfies NewsletterResponse),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};