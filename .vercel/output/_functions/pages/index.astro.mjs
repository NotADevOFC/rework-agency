import { f as createComponent, m as maybeRenderHead, k as renderComponent, l as renderScript, r as renderTemplate, e as createAstro, h as addAttribute, u as unescapeHTML } from '../chunks/astro/server_BxQs--Zw.mjs';
import 'piccolore';
import { a as $$Container, $ as $$BaseLayout } from '../chunks/BaseLayout_BKU1RhHw.mjs';
/* empty css                                 */
import { i as isWordPressAvailable, f as fetchGraphQL } from '../chunks/wordpress_HYMlOqo-.mjs';
import { a as GET_PROJECTS } from '../chunks/projects_Ba39OmdP.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden" data-astro-cid-anhloy43> <!-- Animated Background --> <div class="absolute inset-0" data-astro-cid-anhloy43> <!-- Grid Pattern --> <div class="absolute inset-0 grid-bg opacity-30" data-astro-cid-anhloy43></div> <!-- Gradient Orbs --> <div class="orb orb-primary w-[600px] h-[600px] -top-48 -right-48" data-astro-cid-anhloy43></div> <div class="orb orb-secondary w-[500px] h-[500px] -bottom-32 -left-32" style="animation-delay: -4s;" data-astro-cid-anhloy43></div> <div class="orb orb-tertiary w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" style="animation-delay: -2s;" data-astro-cid-anhloy43></div> <!-- Floating Particles --> <div class="absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-anhloy43> <div class="particle" style="top: 20%; left: 10%; animation-delay: 0s;" data-astro-cid-anhloy43></div> <div class="particle" style="top: 60%; left: 20%; animation-delay: 1s;" data-astro-cid-anhloy43></div> <div class="particle" style="top: 30%; left: 80%; animation-delay: 2s;" data-astro-cid-anhloy43></div> <div class="particle" style="top: 70%; left: 70%; animation-delay: 3s;" data-astro-cid-anhloy43></div> <div class="particle" style="top: 40%; left: 50%; animation-delay: 4s;" data-astro-cid-anhloy43></div> <div class="particle" style="top: 80%; left: 90%; animation-delay: 5s;" data-astro-cid-anhloy43></div> </div> <!-- Radial gradient overlay --> <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg-primary)_70%)]" data-astro-cid-anhloy43></div> </div> ${renderComponent($$result, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` <div class="max-w-5xl mx-auto text-center" data-astro-cid-anhloy43> <!-- Announcement Badge --> <div class="hero-badge mb-8 opacity-0" data-astro-cid-anhloy43> <a href="/projets" class="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/10 hover:border-accent-primary/50 transition-all duration-300" data-astro-cid-anhloy43> <span class="flex h-2 w-2 relative" data-astro-cid-anhloy43> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75" data-astro-cid-anhloy43></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-primary" data-astro-cid-anhloy43></span> </span> <span class="text-sm text-text-secondary group-hover:text-white transition-colors" data-astro-cid-anhloy43>
Découvrez nos dernières réalisations
</span> <svg class="w-4 h-4 text-text-muted group-hover:text-accent-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-anhloy43> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-anhloy43></path> </svg> </a> </div> <!-- Main Title --> <h1 class="hero-title opacity-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]" data-astro-cid-anhloy43> <span class="block" data-astro-cid-anhloy43>Créons ensemble</span> <span class="block mt-2" data-astro-cid-anhloy43> <span class="gradient-text text-glow" data-astro-cid-anhloy43>l'extraordinaire</span> </span> </h1> <!-- Subtitle --> <p class="hero-subtitle opacity-0 text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed" data-astro-cid-anhloy43>
Nous concevons des expériences digitales uniques qui transforment
<span class="text-white font-medium" data-astro-cid-anhloy43>vos ambitions</span> en
<span class="text-white font-medium" data-astro-cid-anhloy43>réalité</span>.
</p> <!-- CTA Buttons --> <div class="hero-cta opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" data-astro-cid-anhloy43> <a href="/contact" class="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:scale-105" data-astro-cid-anhloy43> <span class="relative z-10" data-astro-cid-anhloy43>Démarrer un projet</span> <svg class="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-anhloy43> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-anhloy43></path> </svg> <div class="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-anhloy43></div> </a> <a href="/projets" class="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white font-semibold hover:border-white/30 hover:bg-white/5 transition-all duration-300" data-astro-cid-anhloy43> <span data-astro-cid-anhloy43>Voir nos projets</span> <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-anhloy43> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-anhloy43></path> </svg> </a> </div> <!-- Stats --> <div class="hero-stats opacity-0 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" data-astro-cid-anhloy43> <div class="stat-item group text-center p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300 cursor-default" data-astro-cid-anhloy43> <div class="text-4xl md:text-5xl font-bold gradient-text-static mb-2 group-hover:scale-110 transition-transform" data-astro-cid-anhloy43>50+</div> <div class="text-sm text-text-muted" data-astro-cid-anhloy43>Projets livrés</div> </div> <div class="stat-item group text-center p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300 cursor-default" style="animation-delay: 0.1s;" data-astro-cid-anhloy43> <div class="text-4xl md:text-5xl font-bold gradient-text-static mb-2 group-hover:scale-110 transition-transform" data-astro-cid-anhloy43>98%</div> <div class="text-sm text-text-muted" data-astro-cid-anhloy43>Clients satisfaits</div> </div> <div class="stat-item group text-center p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300 cursor-default" style="animation-delay: 0.2s;" data-astro-cid-anhloy43> <div class="text-4xl md:text-5xl font-bold gradient-text-static mb-2 group-hover:scale-110 transition-transform" data-astro-cid-anhloy43>5+</div> <div class="text-sm text-text-muted" data-astro-cid-anhloy43>Années d'expertise</div> </div> <div class="stat-item group text-center p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300 cursor-default" style="animation-delay: 0.3s;" data-astro-cid-anhloy43> <div class="text-4xl md:text-5xl font-bold gradient-text-static mb-2 group-hover:scale-110 transition-transform" data-astro-cid-anhloy43>24h</div> <div class="text-sm text-text-muted" data-astro-cid-anhloy43>Réponse rapide</div> </div> </div> </div> ` })} <!-- Scroll Indicator --> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 scroll-indicator" data-astro-cid-anhloy43> <a href="#services" class="flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors" data-astro-cid-anhloy43> <span class="text-xs uppercase tracking-widest" data-astro-cid-anhloy43>Découvrir</span> <div class="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2" data-astro-cid-anhloy43> <div class="w-1 h-2 bg-current rounded-full animate-bounce" data-astro-cid-anhloy43></div> </div> </a> </div> </section> ${renderScript($$result, "C:/MAMP/htdocs/rework/src/components/sections/Hero.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/MAMP/htdocs/rework/src/components/sections/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://rework.agency");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services;
  const services = [
    {
      title: "D\xE9veloppement Web",
      description: "Sites vitrines, applications web et plateformes sur mesure avec les technologies les plus modernes.",
      icon: "code",
      features: ["React / Next.js", "Astro", "TypeScript", "API REST & GraphQL"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "E-commerce",
      description: "Boutiques en ligne performantes et \xE9volutives pour d\xE9velopper votre activit\xE9 en ligne.",
      icon: "cart",
      features: ["Shopify", "WooCommerce", "Prestashop", "Paiement s\xE9curis\xE9"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "WordPress Headless",
      description: "Combinez la puissance de WordPress avec les performances d'un frontend ultra-rapide.",
      icon: "bolt",
      features: ["WPGraphQL", "ACF Pro", "Contenu flexible", "Performance optimale"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "UI/UX Design",
      description: "Interfaces utilisateur intuitives et exp\xE9riences m\xE9morables qui convertissent.",
      icon: "design",
      features: ["Maquettes Figma", "Prototypage", "Design System", "Mobile-first"],
      gradient: "from-amber-500 to-orange-500"
    }
  ];
  const icons = {
    code: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />`,
    cart: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />`,
    bolt: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />`,
    design: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />`
  };
  return renderTemplate`${maybeRenderHead()}<section id="services" class="py-32 relative overflow-hidden" data-astro-cid-bp4bfslc> <!-- Background Elements --> <div class="absolute inset-0 grid-bg opacity-20" data-astro-cid-bp4bfslc></div> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-primary/10 rounded-full blur-[120px]" data-astro-cid-bp4bfslc></div> ${renderComponent($$result, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-bp4bfslc": true }, { "default": ($$result2) => renderTemplate`  <div class="text-center mb-20 reveal" data-astro-cid-bp4bfslc> <span class="inline-block px-4 py-2 rounded-full glass text-sm text-accent-primary mb-6" data-astro-cid-bp4bfslc>
Nos expertises
</span> <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-astro-cid-bp4bfslc>
Des solutions
<span class="gradient-text" data-astro-cid-bp4bfslc>complètes</span> </h2> <p class="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto" data-astro-cid-bp4bfslc>
De la conception à la mise en ligne, nous vous accompagnons à chaque étape de votre projet digital.
</p> </div>  <div class="grid md:grid-cols-2 gap-6 lg:gap-8" data-astro-cid-bp4bfslc> ${services.map((service, index) => renderTemplate`<div class="service-card group reveal"${addAttribute(index + 1, "data-delay")} data-astro-cid-bp4bfslc> <div class="relative h-full p-8 rounded-2xl bg-bg-secondary/50 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-bg-secondary/80" data-astro-cid-bp4bfslc> <!-- Spotlight Effect --> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" data-astro-cid-bp4bfslc> <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent" data-astro-cid-bp4bfslc></div> </div> <!-- Gradient Line Top --> <div${addAttribute(`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`, "class")} data-astro-cid-bp4bfslc></div> <div class="relative z-10" data-astro-cid-bp4bfslc> <!-- Icon --> <div${addAttribute(`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500`, "class")} data-astro-cid-bp4bfslc> <div class="w-full h-full rounded-2xl bg-bg-primary flex items-center justify-center" data-astro-cid-bp4bfslc> <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bp4bfslc>${unescapeHTML(icons[service.icon])}</svg> </div> </div> <!-- Content --> <h3 class="text-2xl font-bold mb-3 group-hover:text-white transition-colors" data-astro-cid-bp4bfslc> ${service.title} </h3> <p class="text-text-secondary mb-6 leading-relaxed" data-astro-cid-bp4bfslc> ${service.description} </p> <!-- Features --> <div class="flex flex-wrap gap-2" data-astro-cid-bp4bfslc> ${service.features.map((feature) => renderTemplate`<span class="text-sm px-3 py-1.5 rounded-full bg-white/5 text-text-muted border border-white/5 group-hover:border-white/10 group-hover:text-text-secondary transition-all" data-astro-cid-bp4bfslc> ${feature} </span>`)} </div> <!-- Arrow --> <div class="mt-6 flex items-center gap-2 text-text-muted group-hover:text-accent-primary transition-colors" data-astro-cid-bp4bfslc> <span class="text-sm font-medium" data-astro-cid-bp4bfslc>En savoir plus</span> <svg class="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bp4bfslc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-bp4bfslc></path> </svg> </div> </div> </div> </div>`)} </div> ` })} </section> ${renderScript($$result, "C:/MAMP/htdocs/rework/src/components/sections/Services.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/MAMP/htdocs/rework/src/components/sections/Services.astro", void 0);

const $$Astro$1 = createAstro("https://rework.agency");
const $$RecentProjects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RecentProjects;
  function getTechnologies(project) {
    if (project.technologies?.nodes) {
      return project.technologies.nodes.map((t) => t.name);
    }
    return [];
  }
  const mockProjects = [
    {
      id: "1",
      slug: "ecommerce-mode",
      title: "E-commerce Mode Premium",
      excerpt: "Boutique en ligne haut de gamme pour une marque de mode parisienne.",
      featuredImage: void 0,
      technologies: { nodes: [{ name: "Shopify", slug: "shopify" }, { name: "Liquid", slug: "liquid" }, { name: "JavaScript", slug: "javascript" }] },
      projectFields: { client: "Maison \xC9l\xE9gance", year: "2024", liveUrl: "https://exemple.com" }
    },
    {
      id: "2",
      slug: "saas-dashboard",
      title: "Dashboard SaaS Analytics",
      excerpt: "Plateforme d'analyse de donn\xE9es en temps r\xE9el pour une startup tech.",
      featuredImage: void 0,
      technologies: { nodes: [{ name: "React", slug: "react" }, { name: "TypeScript", slug: "typescript" }, { name: "D3.js", slug: "d3js" }] },
      projectFields: { client: "DataFlow", year: "2024", liveUrl: "https://exemple.com" }
    },
    {
      id: "3",
      slug: "site-vitrine-architecte",
      title: "Portfolio Architecte",
      excerpt: "Site vitrine minimaliste pour un cabinet d'architecture.",
      featuredImage: void 0,
      technologies: { nodes: [{ name: "Astro", slug: "astro" }, { name: "Tailwind CSS", slug: "tailwind-css" }, { name: "GSAP", slug: "gsap" }] },
      projectFields: { client: "Studio Archi", year: "2023", liveUrl: "https://exemple.com" }
    }
  ];
  let projects = [];
  try {
    const wpAvailable = await isWordPressAvailable();
    if (wpAvailable) {
      const data = await fetchGraphQL(GET_PROJECTS, { first: 3 });
      if (data.projects.nodes.length > 0) {
        projects = data.projects.nodes;
      }
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
  if (projects.length === 0) {
    projects = mockProjects;
  }
  return renderTemplate`${maybeRenderHead()}<section class="py-32 relative overflow-hidden" data-astro-cid-xsfmj2wv> <!-- Background --> <div class="absolute inset-0" data-astro-cid-xsfmj2wv> <div class="absolute inset-0 grid-bg opacity-20" data-astro-cid-xsfmj2wv></div> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent-secondary/10 rounded-full blur-[150px]" data-astro-cid-xsfmj2wv></div> </div> ${renderComponent($$result, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-xsfmj2wv": true }, { "default": async ($$result2) => renderTemplate`  <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 reveal" data-astro-cid-xsfmj2wv> <div class="max-w-2xl" data-astro-cid-xsfmj2wv> <span class="inline-block px-4 py-2 rounded-full glass text-sm text-accent-secondary mb-6" data-astro-cid-xsfmj2wv>
Portfolio
</span> <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-astro-cid-xsfmj2wv>
Nos dernières
<span class="gradient-text" data-astro-cid-xsfmj2wv>réalisations</span> </h2> <p class="text-lg text-text-secondary" data-astro-cid-xsfmj2wv>
Chaque projet est une nouvelle histoire. Découvrez comment nous transformons les visions de nos clients en expériences digitales exceptionnelles.
</p> </div> <a href="/projets" class="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 hover:border-white/20 transition-all shrink-0" data-astro-cid-xsfmj2wv>
Voir tous les projets
<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-xsfmj2wv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-xsfmj2wv></path> </svg> </a> </div>  <div class="grid lg:grid-cols-3 gap-6 lg:gap-8" data-astro-cid-xsfmj2wv> ${projects.map((project, index) => renderTemplate`<a${addAttribute(`/projets/${project.slug}`, "href")} class="project-card group reveal"${addAttribute(index + 1, "data-delay")} data-astro-cid-xsfmj2wv> <div class="relative h-full rounded-2xl bg-bg-secondary/50 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-bg-secondary/80 hover:shadow-2xl hover:shadow-accent-primary/5" data-astro-cid-xsfmj2wv> <!-- Image Container --> <div class="relative aspect-[4/3] overflow-hidden" data-astro-cid-xsfmj2wv> ${project.featuredImage?.node ? renderTemplate`<img${addAttribute(project.featuredImage.node.sourceUrl, "src")}${addAttribute(project.featuredImage.node.altText || project.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-xsfmj2wv>` : renderTemplate`<div class="w-full h-full bg-gradient-to-br from-bg-tertiary to-bg-secondary flex items-center justify-center" data-astro-cid-xsfmj2wv> <div class="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center" data-astro-cid-xsfmj2wv> <svg class="w-10 h-10 text-text-muted/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-xsfmj2wv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-xsfmj2wv></path> </svg> </div> </div>`} <!-- Overlay gradient --> <div class="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" data-astro-cid-xsfmj2wv></div> <!-- Year Badge --> <div class="absolute top-4 left-4" data-astro-cid-xsfmj2wv> <span class="px-3 py-1.5 rounded-full glass text-xs font-medium text-white" data-astro-cid-xsfmj2wv> ${project.projectFields.year} </span> </div> <!-- View Project Indicator --> <div class="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" data-astro-cid-xsfmj2wv> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-xsfmj2wv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-xsfmj2wv></path> </svg> </div> </div> <!-- Content --> <div class="p-6" data-astro-cid-xsfmj2wv> <!-- Client --> <p class="text-sm text-accent-primary font-medium mb-2" data-astro-cid-xsfmj2wv> ${project.projectFields.client} </p> <!-- Title --> <h3 class="text-xl font-bold mb-3 group-hover:text-white transition-colors" data-astro-cid-xsfmj2wv> ${project.title} </h3> <!-- Excerpt --> <div class="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3" data-astro-cid-xsfmj2wv>${unescapeHTML(project.excerpt)}</div> <!-- Technologies --> <div class="flex flex-wrap gap-2" data-astro-cid-xsfmj2wv> ${getTechnologies(project).slice(0, 3).map((tech) => renderTemplate`<span class="text-xs px-2.5 py-1 rounded-full bg-white/5 text-text-muted border border-white/5" data-astro-cid-xsfmj2wv> ${tech} </span>`)} </div> </div> </div> </a>`)} </div> ` })} </section> ${renderScript($$result, "C:/MAMP/htdocs/rework/src/components/sections/RecentProjects.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/MAMP/htdocs/rework/src/components/sections/RecentProjects.astro", void 0);

const GET_TESTIMONIALS = `
  query GetTestimonials($first: Int = 6) {
    testimonials(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        title
        content
        testimonialFields {
          author
          role
          company
          avatar {
            sourceUrl
          }
        }
      }
    }
  }
`;

const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const mockTestimonials = [
    {
      id: "1",
      title: "T\xE9moignage Sophie Bernard",
      content: "Une \xE9quipe professionnelle et r\xE9active. Notre e-commerce a vu ses ventes augmenter de 150% depuis la refonte. Je recommande vivement !",
      testimonialFields: {
        authorName: "Sophie Bernard",
        authorRole: "Directrice Marketing",
        company: "Maison \xC9l\xE9gance",
        rating: 5
      }
    },
    {
      id: "2",
      title: "T\xE9moignage Thomas Dubois",
      content: "Le dashboard qu'ils ont d\xE9velopp\xE9 est exactement ce dont nous avions besoin. Interface intuitive, performances au rendez-vous. Un vrai plaisir de travailler avec eux.",
      testimonialFields: {
        authorName: "Thomas Dubois",
        authorRole: "CEO",
        company: "DataFlow",
        rating: 5
      }
    },
    {
      id: "3",
      title: "T\xE9moignage Marie Laurent",
      content: "Notre site portfolio est magnifique et ultra-rapide. L'\xE9quipe a parfaitement compris notre vision minimaliste. Score Lighthouse parfait !",
      testimonialFields: {
        authorName: "Marie Laurent",
        authorRole: "Architecte",
        company: "Studio Archi",
        rating: 5
      }
    }
  ];
  let testimonials = [];
  try {
    const wpAvailable = await isWordPressAvailable();
    if (wpAvailable) {
      const data = await fetchGraphQL(GET_TESTIMONIALS, { first: 6 });
      if (data.testimonials.nodes.length > 0) {
        testimonials = data.testimonials.nodes;
      }
    }
  } catch (error) {
    console.error("Error fetching testimonials:", error);
  }
  if (testimonials.length === 0) {
    testimonials = mockTestimonials;
  }
  return renderTemplate`${maybeRenderHead()}<section class="py-32 relative overflow-hidden bg-bg-secondary/30" data-astro-cid-dnksfipb> <!-- Background --> <div class="absolute inset-0" data-astro-cid-dnksfipb> <div class="absolute inset-0 grid-bg opacity-10" data-astro-cid-dnksfipb></div> <div class="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent-tertiary/10 rounded-full blur-[150px]" data-astro-cid-dnksfipb></div> <div class="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[150px]" data-astro-cid-dnksfipb></div> </div> ${renderComponent($$result, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-dnksfipb": true }, { "default": async ($$result2) => renderTemplate`  <div class="text-center mb-16 reveal" data-astro-cid-dnksfipb> <span class="inline-block px-4 py-2 rounded-full glass text-sm text-accent-tertiary mb-6" data-astro-cid-dnksfipb>
Témoignages
</span> <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-astro-cid-dnksfipb>
Ils nous font
<span class="gradient-text" data-astro-cid-dnksfipb>confiance</span> </h2> <p class="text-lg text-text-secondary max-w-2xl mx-auto" data-astro-cid-dnksfipb>
Découvrez les retours de nos clients sur leur collaboration avec notre équipe.
</p> </div>  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-astro-cid-dnksfipb> ${testimonials.map((testimonial, index) => renderTemplate`<div class="testimonial-card group reveal"${addAttribute(index + 1, "data-delay")} data-astro-cid-dnksfipb> <div class="relative h-full p-8 rounded-2xl bg-bg-primary/50 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-bg-primary/80" data-astro-cid-dnksfipb> <!-- Quote Icon --> <div class="absolute -top-4 -left-2 text-6xl text-accent-primary/20 font-serif select-none" data-astro-cid-dnksfipb>
"
</div> <!-- Stars --> <div class="flex gap-1 mb-6" data-astro-cid-dnksfipb> ${[...Array(5)].map((_, i) => renderTemplate`<svg${addAttribute(`w-5 h-5 ${i < (testimonial.testimonialFields.rating || 5) ? "text-amber-400" : "text-white/10"}`, "class")} fill="currentColor" viewBox="0 0 20 20" data-astro-cid-dnksfipb> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-dnksfipb></path> </svg>`)} </div> <!-- Quote Content --> <blockquote class="mb-8" data-astro-cid-dnksfipb> <p class="text-text-secondary leading-relaxed text-lg" data-astro-cid-dnksfipb>${unescapeHTML(testimonial.content)}</p> </blockquote> <!-- Author --> <div class="flex items-center gap-4" data-astro-cid-dnksfipb> <div class="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary p-0.5" data-astro-cid-dnksfipb> <div class="w-full h-full rounded-full bg-bg-primary flex items-center justify-center" data-astro-cid-dnksfipb> <span class="text-sm font-bold gradient-text-static" data-astro-cid-dnksfipb> ${testimonial.testimonialFields.authorName.split(" ").map((n) => n[0]).join("")} </span> </div> </div> <div data-astro-cid-dnksfipb> <p class="font-semibold text-white" data-astro-cid-dnksfipb>${testimonial.testimonialFields.authorName}</p> <p class="text-text-muted text-sm" data-astro-cid-dnksfipb> ${testimonial.testimonialFields.authorRole} ${testimonial.testimonialFields.company && renderTemplate`<span class="text-accent-primary" data-astro-cid-dnksfipb> · ${testimonial.testimonialFields.company}</span>`} </p> </div> </div> <!-- Decorative gradient line --> <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-dnksfipb></div> </div> </div>`)} </div>  <div class="mt-16 pt-16 border-t border-white/5 reveal" data-astro-cid-dnksfipb> <div class="flex flex-wrap items-center justify-center gap-8 md:gap-16" data-astro-cid-dnksfipb> <div class="text-center" data-astro-cid-dnksfipb> <div class="text-4xl font-bold gradient-text-static mb-1" data-astro-cid-dnksfipb>50+</div> <div class="text-sm text-text-muted" data-astro-cid-dnksfipb>Projets réalisés</div> </div> <div class="w-px h-12 bg-white/10 hidden md:block" data-astro-cid-dnksfipb></div> <div class="text-center" data-astro-cid-dnksfipb> <div class="text-4xl font-bold gradient-text-static mb-1" data-astro-cid-dnksfipb>98%</div> <div class="text-sm text-text-muted" data-astro-cid-dnksfipb>Satisfaction client</div> </div> <div class="w-px h-12 bg-white/10 hidden md:block" data-astro-cid-dnksfipb></div> <div class="text-center" data-astro-cid-dnksfipb> <div class="text-4xl font-bold gradient-text-static mb-1" data-astro-cid-dnksfipb>5.0</div> <div class="text-sm text-text-muted" data-astro-cid-dnksfipb>Note moyenne</div> </div> <div class="w-px h-12 bg-white/10 hidden md:block" data-astro-cid-dnksfipb></div> <div class="text-center" data-astro-cid-dnksfipb> <div class="text-4xl font-bold gradient-text-static mb-1" data-astro-cid-dnksfipb>100%</div> <div class="text-sm text-text-muted" data-astro-cid-dnksfipb>Recommandation</div> </div> </div> </div> ` })} </section> ${renderScript($$result, "C:/MAMP/htdocs/rework/src/components/sections/Testimonials.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/MAMP/htdocs/rework/src/components/sections/Testimonials.astro", void 0);

const $$Astro = createAstro("https://rework.agency");
const $$TechMarquee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TechMarquee;
  const technologies = [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Astro", icon: "astro" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Node.js", icon: "nodejs" },
    { name: "WordPress", icon: "wordpress" },
    { name: "Shopify", icon: "shopify" },
    { name: "GraphQL", icon: "graphql" },
    { name: "Figma", icon: "figma" },
    { name: "Vercel", icon: "vercel" },
    { name: "PostgreSQL", icon: "postgresql" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 relative overflow-hidden border-y border-white/5" data-astro-cid-4v4djhkr> <div class="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary z-10 pointer-events-none" data-astro-cid-4v4djhkr></div> <div class="marquee-wrapper" data-astro-cid-4v4djhkr> <div class="marquee-content" data-astro-cid-4v4djhkr> ${[...technologies, ...technologies].map((tech) => renderTemplate`<div class="flex items-center gap-3 px-8 py-4 mx-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all cursor-default group" data-astro-cid-4v4djhkr> <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors" data-astro-cid-4v4djhkr> <span class="text-lg font-bold gradient-text-static" data-astro-cid-4v4djhkr>${tech.name[0]}</span> </div> <span class="text-text-secondary font-medium whitespace-nowrap group-hover:text-white transition-colors" data-astro-cid-4v4djhkr> ${tech.name} </span> </div>`)} </div> </div> </section> `;
}, "C:/MAMP/htdocs/rework/src/components/sections/TechMarquee.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-32 relative overflow-hidden"> <!-- Background --> <div class="absolute inset-0"> <div class="absolute inset-0 grid-bg opacity-20"></div> <!-- Animated Gradient Background --> <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20 animate-gradient" style="background-size: 200% 200%;"></div> <!-- Orbs --> <div class="orb orb-primary w-[500px] h-[500px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div> <div class="orb orb-secondary w-[400px] h-[400px] bottom-0 right-0 translate-x-1/2 translate-y-1/2" style="animation-delay: -3s;"></div> </div> ${renderComponent($$result, "Container", $$Container, { "class": "relative z-10" }, { "default": ($$result2) => renderTemplate` <div class="reveal relative"> <!-- Main CTA Card --> <div class="relative p-12 md:p-16 lg:p-20 rounded-3xl overflow-hidden"> <!-- Gradient Border --> <div class="absolute inset-0 rounded-3xl p-px bg-gradient-to-br from-accent-primary/50 via-accent-secondary/30 to-accent-tertiary/50"> <div class="w-full h-full rounded-3xl bg-bg-primary/95 backdrop-blur-xl"></div> </div> <!-- Animated Glow --> <div class="absolute inset-0 rounded-3xl opacity-50"> <div class="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div> <div class="absolute bottom-0 right-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div> </div> <!-- Content --> <div class="relative z-10 text-center"> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent-primary mb-8"> <span class="relative flex h-2 w-2"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span> </span>
Consultation gratuite
</div> <!-- Title --> <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
Prêt à créer quelque chose
<span class="block mt-2 gradient-text">d'extraordinaire ?</span> </h2> <!-- Description --> <p class="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
Transformons ensemble votre vision en une expérience digitale mémorable.
            Discutons de votre projet sans engagement.
</p> <!-- CTA Buttons --> <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"> <a href="/contact" class="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:scale-105"> <span class="relative z-10">Démarrer maintenant</span> <svg class="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> <div class="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> </a> <a href="mailto:contact@rework.fr" class="inline-flex items-center gap-2 px-8 py-4 text-text-secondary hover:text-white transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
contact@rework.fr
</a> </div> <!-- Trust Indicators --> <div class="flex flex-wrap items-center justify-center gap-8 text-text-muted"> <div class="flex items-center gap-2"> <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-sm">Réponse sous 24h</span> </div> <div class="flex items-center gap-2"> <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-sm">Devis gratuit</span> </div> <div class="flex items-center gap-2"> <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-sm">Sans engagement</span> </div> </div> </div> </div> </div> ` })} </section> ${renderScript($$result, "C:/MAMP/htdocs/rework/src/components/sections/CTA.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/MAMP/htdocs/rework/src/components/sections/CTA.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Accueil", "description": "Rework Agency - Agence de d\xE9veloppement web et e-commerce. Sites modernes, performants et sur mesure pour votre entreprise." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "TechMarquee", $$TechMarquee, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "RecentProjects", $$RecentProjects, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/MAMP/htdocs/rework/src/pages/index.astro", void 0);

const $$file = "C:/MAMP/htdocs/rework/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
