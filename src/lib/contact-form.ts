/**
 * Contact Form 7 REST API Integration
 *
 * This module handles form submission to WordPress Contact Form 7
 * via its REST API endpoint.
 */

const WP_URL = import.meta.env.PUBLIC_WORDPRESS_URL || 'http://local.rework.com';
const CF7_FORM_ID = import.meta.env.PUBLIC_CF7_FORM_ID || '1';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  service?: string;
  message: string;
}

interface CF7Response {
  status: 'mail_sent' | 'mail_failed' | 'validation_failed' | 'spam' | 'aborted';
  message: string;
  posted_data_hash?: string;
  invalid_fields?: Array<{
    field: string;
    message: string;
  }>;
}

/**
 * Submit form data to Contact Form 7 REST API
 */
export async function submitContactForm(data: ContactFormData): Promise<CF7Response> {
  const formData = new FormData();

  // CF7 field names - these must match your CF7 form configuration
  formData.append('your-name', data.name);
  formData.append('your-email', data.email);
  formData.append('your-company', data.company || '');
  formData.append('your-budget', data.budget || '');
  formData.append('your-service', data.service || '');
  formData.append('your-message', data.message);

  try {
    const response = await fetch(
      `${WP_URL}/wp-json/contact-form-7/v1/contact-forms/${CF7_FORM_ID}/feedback`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: CF7Response = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      status: 'mail_failed',
      message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.',
    };
  }
}

/**
 * Check if WordPress/CF7 is available
 */
export async function isContactFormAvailable(): Promise<boolean> {
  try {
    const response = await fetch(
      `${WP_URL}/wp-json/contact-form-7/v1/contact-forms/${CF7_FORM_ID}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.ok;
  } catch {
    return false;
  }
}
