export { renderers } from '../../renderers.mjs';

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    if (data.honeypot) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Inscription r�ussie !"
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!data.email || !isValidEmail(data.email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Veuillez entrer une adresse email valide"
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    console.info("Newsletter subscription:", {
      email: data.email,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Merci pour votre inscription ! Vous recevrez nos actualit�s tr�s bient�t."
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Une erreur est survenue. Veuillez r�essayer."
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
