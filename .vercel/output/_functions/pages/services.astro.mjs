import { e as createAstro, f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BxQs--Zw.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Container } from '../chunks/BaseLayout_BKU1RhHw.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rework.agency");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const services = [
    {
      title: "D\xE9veloppement Web",
      description: "Sites vitrines, applications web et plateformes sur mesure avec les technologies modernes.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      color: "from-violet-500 to-purple-600",
      features: [
        "Sites vitrines modernes et responsive",
        "Applications web complexes (SaaS, dashboards)",
        "Progressive Web Apps (PWA)",
        "Int\xE9gration d'APIs tierces",
        "Optimisation des performances"
      ],
      technologies: ["React", "Next.js", "Astro", "TypeScript", "Node.js"]
    },
    {
      title: "E-commerce",
      description: "Boutiques en ligne performantes et \xE9volutives pour d\xE9velopper votre activit\xE9 commerciale.",
      icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
      color: "from-cyan-500 to-blue-600",
      features: [
        "Boutiques Shopify sur mesure",
        "WooCommerce & WordPress",
        "Prestashop",
        "Int\xE9gration paiement s\xE9curis\xE9",
        "Gestion des stocks et commandes"
      ],
      technologies: ["Shopify", "WooCommerce", "Prestashop", "Stripe", "PayPal"]
    },
    {
      title: "WordPress Headless",
      description: "Combinez la puissance de WordPress avec les performances d'un frontend moderne d\xE9coupl\xE9.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      color: "from-orange-500 to-red-600",
      features: [
        "Architecture d\xE9coupl\xE9e performante",
        "API GraphQL avec WPGraphQL",
        "Contenu flexible avec ACF Pro",
        "D\xE9ploiement sur CDN (Vercel, Cloudflare)",
        "Temps de chargement ultra-rapide"
      ],
      technologies: ["WordPress", "WPGraphQL", "ACF Pro", "Astro", "Next.js"]
    },
    {
      title: "UI/UX Design",
      description: "Interfaces utilisateur intuitives et exp\xE9riences m\xE9morables centr\xE9es sur vos utilisateurs.",
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      color: "from-pink-500 to-rose-600",
      features: [
        "Maquettes haute fid\xE9lit\xE9 (Figma)",
        "Prototypage interactif",
        "Design System complet",
        "Tests utilisateurs",
        "Accessibilit\xE9 (WCAG)"
      ],
      technologies: ["Figma", "Prototyping", "Design System", "User Testing"]
    },
    {
      title: "Maintenance & Support",
      description: "Gardez votre site performant et s\xE9curis\xE9 avec notre support technique continu.",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      color: "from-emerald-500 to-teal-600",
      features: [
        "Mises \xE0 jour r\xE9guli\xE8res",
        "Sauvegardes automatiques",
        "Monitoring 24/7",
        "Support technique r\xE9actif",
        "Rapports mensuels"
      ],
      technologies: ["Monitoring", "Backup", "Security", "Updates"]
    },
    {
      title: "SEO & Performance",
      description: "Optimisez votre visibilit\xE9 et vos performances pour attirer plus de clients.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "from-amber-500 to-yellow-600",
      features: [
        "Audit SEO complet",
        "Optimisation on-page",
        "Core Web Vitals",
        "Strat\xE9gie de contenu",
        "Suivi des performances"
      ],
      technologies: ["Google Analytics", "Search Console", "Lighthouse", "SEMrush"]
    }
  ];
  const process = [
    {
      step: "01",
      title: "D\xE9couverte",
      description: "Nous analysons vos besoins, votre march\xE9 et d\xE9finissons ensemble les objectifs du projet."
    },
    {
      step: "02",
      title: "Conception",
      description: "Cr\xE9ation des maquettes, prototypes et validation de l'exp\xE9rience utilisateur."
    },
    {
      step: "03",
      title: "D\xE9veloppement",
      description: "D\xE9veloppement it\xE9ratif avec des points r\xE9guliers pour valider chaque \xE9tape."
    },
    {
      step: "04",
      title: "Lancement",
      description: "Tests, optimisation et mise en production. Formation et documentation incluses."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Services", "description": "D\xE9couvrez nos services de d\xE9veloppement web, e-commerce, WordPress headless, UI/UX design et maintenance pour votre entreprise.", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="pt-40 pb-20 relative overflow-hidden" data-astro-cid-ucd2ps2b> <div class="absolute inset-0" data-astro-cid-ucd2ps2b> <div class="absolute inset-0 grid-bg opacity-20" data-astro-cid-ucd2ps2b></div> <div class="absolute top-1/4 left-0 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[150px]" data-astro-cid-ucd2ps2b></div> <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-secondary/10 rounded-full blur-[150px]" data-astro-cid-ucd2ps2b></div> </div> ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto text-center reveal" data-astro-cid-ucd2ps2b> <span class="inline-block px-4 py-2 rounded-full glass text-sm text-accent-primary mb-6" data-astro-cid-ucd2ps2b>
Nos expertises
</span> <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" data-astro-cid-ucd2ps2b>
Des solutions <span class="gradient-text" data-astro-cid-ucd2ps2b>sur mesure</span><br data-astro-cid-ucd2ps2b>pour vos projets
</h1> <p class="text-xl text-text-secondary max-w-2xl mx-auto" data-astro-cid-ucd2ps2b>
De la conception à la mise en ligne, nous vous accompagnons à chaque étape
          pour créer des expériences digitales exceptionnelles.
</p> </div> ` })} </section>  <section class="py-32 relative" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-ucd2ps2b": true }, { "default": ($$result3) => renderTemplate` <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-ucd2ps2b> ${services.map((service, index) => renderTemplate`<div class="service-card group reveal"${addAttribute(index + 1, "data-delay")} data-astro-cid-ucd2ps2b> <div class="relative h-full p-8 rounded-2xl bg-bg-secondary/50 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-bg-secondary/80 overflow-hidden" data-astro-cid-ucd2ps2b> <!-- Gradient background on hover --> <div${addAttribute(`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`, "class")} data-astro-cid-ucd2ps2b></div> <!-- Icon --> <div${addAttribute(`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6`, "class")} data-astro-cid-ucd2ps2b> <div class="w-full h-full rounded-[10px] bg-bg-primary flex items-center justify-center" data-astro-cid-ucd2ps2b> <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ucd2ps2b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${addAttribute(service.icon, "d")} data-astro-cid-ucd2ps2b></path> </svg> </div> </div> <!-- Content --> <h3 class="text-xl font-bold mb-3 group-hover:text-white transition-colors" data-astro-cid-ucd2ps2b> ${service.title} </h3> <p class="text-text-secondary mb-6 leading-relaxed" data-astro-cid-ucd2ps2b> ${service.description} </p> <!-- Features --> <ul class="space-y-2 mb-6" data-astro-cid-ucd2ps2b> ${service.features.slice(0, 3).map((feature) => renderTemplate`<li class="flex items-start gap-2 text-sm text-text-muted" data-astro-cid-ucd2ps2b> <svg class="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ucd2ps2b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ucd2ps2b></path> </svg> <span data-astro-cid-ucd2ps2b>${feature}</span> </li>`)} </ul> <!-- Technologies --> <div class="flex flex-wrap gap-2" data-astro-cid-ucd2ps2b> ${service.technologies.slice(0, 4).map((tech) => renderTemplate`<span class="text-xs px-2.5 py-1 rounded-full bg-white/5 text-text-muted border border-white/5" data-astro-cid-ucd2ps2b> ${tech} </span>`)} </div> <!-- Decorative line --> <div${addAttribute(`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`, "class")} data-astro-cid-ucd2ps2b></div> </div> </div>`)} </div> ` })} </section>  <section class="py-32 relative overflow-hidden bg-bg-secondary/30" data-astro-cid-ucd2ps2b> <div class="absolute inset-0" data-astro-cid-ucd2ps2b> <div class="absolute inset-0 grid-bg opacity-10" data-astro-cid-ucd2ps2b></div> </div> ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-16 reveal" data-astro-cid-ucd2ps2b> <span class="inline-block px-4 py-2 rounded-full glass text-sm text-accent-secondary mb-6" data-astro-cid-ucd2ps2b>
Notre méthode
</span> <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-astro-cid-ucd2ps2b>
Un processus <span class="gradient-text" data-astro-cid-ucd2ps2b>éprouvé</span> </h2> <p class="text-lg text-text-secondary max-w-2xl mx-auto" data-astro-cid-ucd2ps2b>
Une approche structurée pour garantir le succès de chaque projet.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-ucd2ps2b> ${process.map((step, index) => renderTemplate`<div class="process-step reveal"${addAttribute(index + 1, "data-delay")} data-astro-cid-ucd2ps2b> <div class="relative" data-astro-cid-ucd2ps2b> <!-- Step number --> <div class="text-7xl font-bold text-white/5 mb-4" data-astro-cid-ucd2ps2b> ${step.step} </div> <!-- Content --> <h3 class="text-xl font-bold mb-3" data-astro-cid-ucd2ps2b>${step.title}</h3> <p class="text-text-secondary text-sm leading-relaxed" data-astro-cid-ucd2ps2b> ${step.description} </p> <!-- Connector line --> ${index < process.length - 1 && renderTemplate`<div class="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent" data-astro-cid-ucd2ps2b></div>`} </div> </div>`)} </div> ` })} </section>  <section class="py-32 relative overflow-hidden" data-astro-cid-ucd2ps2b> <div class="absolute inset-0" data-astro-cid-ucd2ps2b> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent-primary/10 rounded-full blur-[150px]" data-astro-cid-ucd2ps2b></div> </div> ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result3) => renderTemplate` <div class="reveal" data-astro-cid-ucd2ps2b> <div class="relative p-1 rounded-3xl bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary" data-astro-cid-ucd2ps2b> <div class="relative p-12 md:p-16 rounded-[22px] bg-bg-primary text-center" data-astro-cid-ucd2ps2b> <!-- Decorative orbs --> <div class="absolute top-0 left-1/4 w-32 h-32 bg-accent-primary/20 rounded-full blur-[60px]" data-astro-cid-ucd2ps2b></div> <div class="absolute bottom-0 right-1/4 w-32 h-32 bg-accent-secondary/20 rounded-full blur-[60px]" data-astro-cid-ucd2ps2b></div> <div class="relative z-10" data-astro-cid-ucd2ps2b> <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent-tertiary mb-6" data-astro-cid-ucd2ps2b> <span class="relative flex h-2 w-2" data-astro-cid-ucd2ps2b> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-tertiary opacity-75" data-astro-cid-ucd2ps2b></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-tertiary" data-astro-cid-ucd2ps2b></span> </span>
Disponible pour nouveaux projets
</span> <h2 class="text-4xl md:text-5xl font-bold mb-6" data-astro-cid-ucd2ps2b>
Prêt à <span class="gradient-text" data-astro-cid-ucd2ps2b>démarrer</span> ?
</h2> <p class="text-lg text-text-secondary max-w-xl mx-auto mb-8" data-astro-cid-ucd2ps2b>
Discutons de votre projet et trouvons ensemble la meilleure solution pour votre entreprise.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-astro-cid-ucd2ps2b> <a href="/contact" class="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-bg-primary font-semibold hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300" data-astro-cid-ucd2ps2b> <span data-astro-cid-ucd2ps2b>Demander un devis gratuit</span> <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ucd2ps2b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-ucd2ps2b></path> </svg> </a> <a href="/projets" class="inline-flex items-center gap-2 px-6 py-4 text-text-secondary hover:text-white transition-colors" data-astro-cid-ucd2ps2b> <span data-astro-cid-ucd2ps2b>Voir nos réalisations</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ucd2ps2b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-ucd2ps2b></path> </svg> </a> </div> </div> </div> </div> </div> ` })} </section> ` })} ${renderScript($$result, "C:/MAMP/htdocs/rework/src/pages/services.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/MAMP/htdocs/rework/src/pages/services.astro", void 0);

const $$file = "C:/MAMP/htdocs/rework/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
