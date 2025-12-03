export { renderers } from '../../renderers.mjs';

const WP_URL = "https://admin.rework.agency/wp-json";
const CF7_FORM_ID = "123";
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validateFormData(data) {
  const errors = {};
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Le nom doit contenir au moins 2 caracteres";
  }
  if (!data.email || !isValidEmail(data.email)) {
    errors.email = "Veuillez entrer une adresse email valide";
  }
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Le message doit contenir au moins 10 caracteres";
  }
  return errors;
}
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    if (data.honeypot) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Message envoye avec succes !"
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    const errors = validateFormData(data);
    if (Object.keys(errors).length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Veuillez corriger les erreurs du formulaire",
          errors
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    try {
      const formData = new FormData();
      formData.append("your-name", data.name);
      formData.append("your-email", data.email);
      formData.append("your-company", data.company || "");
      formData.append("your-budget", data.budget || "");
      formData.append("your-service", data.service || "");
      formData.append("your-message", data.message);
      const wpResponse = await fetch(
        `${WP_URL}/contact-form-7/v1/contact-forms/${CF7_FORM_ID}/feedback`,
        {
          method: "POST",
          body: formData
        }
      );
      if (wpResponse.ok) {
        const result = await wpResponse.json();
        if (result.status === "mail_sent") {
          return new Response(
            JSON.stringify({
              success: true,
              message: "Message envoye avec succes ! Nous vous repondrons rapidement."
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        }
      }
    } catch {
      console.error("WordPress CF7 not available, using fallback");
    }
    console.warn("Contact form submission (fallback mode):", {
      name: data.name,
      email: data.email,
      company: data.company,
      service: data.service,
      budget: data.budget,
      message: data.message.substring(0, 100) + "...",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Message envoye avec succes ! Nous vous repondrons rapidement."
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Une erreur est survenue. Veuillez reessayer."
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
