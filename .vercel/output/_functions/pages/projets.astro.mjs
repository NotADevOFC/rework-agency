import { e as createAstro, f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../chunks/astro/server_BxQs--Zw.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Container } from '../chunks/BaseLayout_BKU1RhHw.mjs';
import { $ as $$Button } from '../chunks/Button_Dnng69pH.mjs';
import { i as isWordPressAvailable, f as fetchGraphQL } from '../chunks/wordpress_HYMlOqo-.mjs';
import { a as GET_PROJECTS } from '../chunks/projects_Ba39OmdP.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rework.agency");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  function getTechnologies(project) {
    if (project.technologies?.nodes) {
      return project.technologies.nodes.map((t) => t.name);
    }
    if (project._mockTechnologies) {
      return project._mockTechnologies;
    }
    return [];
  }
  const categories = [
    { id: "all", name: "Tous les projets" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "saas", name: "SaaS" },
    { id: "vitrine", name: "Site vitrine" },
    { id: "webapp", name: "Application" }
  ];
  const mockProjects = [
    {
      id: "1",
      slug: "ecommerce-mode",
      title: "E-commerce Mode Premium",
      excerpt: "Boutique en ligne haut de gamme pour une marque de mode parisienne. Design \xE9l\xE9gant et exp\xE9rience d'achat fluide.",
      featuredImage: void 0,
      technologies: { nodes: [{ name: "Shopify", slug: "shopify" }, { name: "Liquid", slug: "liquid" }, { name: "JavaScript", slug: "javascript" }] },
      projectFields: {
        client: "Maison \xC9l\xE9gance",
        year: "2024",
        liveUrl: "https://exemple.com"
      },
      category: "ecommerce"
    },
    {
      id: "2",
      slug: "saas-dashboard",
      title: "Dashboard SaaS Analytics",
      excerpt: "Plateforme d'analyse de donn\xE9es en temps r\xE9el pour une startup tech. Interface intuitive et visualisations dynamiques.",
      featuredImage: void 0,
      technologies: { nodes: [{ name: "React", slug: "react" }, { name: "TypeScript", slug: "typescript" }, { name: "D3.js", slug: "d3js" }, { name: "Node.js", slug: "nodejs" }] },
      projectFields: {
        client: "DataFlow",
        year: "2024",
        liveUrl: "https://exemple.com"
      },
      category: "saas"
    },
    {
      id: "3",
      slug: "site-vitrine-architecte",
      title: "Portfolio Architecte",
      excerpt: "Site vitrine minimaliste pour un cabinet d'architecture. Mise en valeur des projets avec galeries immersives.",
      featuredImage: void 0,
      technologies: { nodes: [{ name: "Astro", slug: "astro" }, { name: "Tailwind CSS", slug: "tailwind-css" }, { name: "GSAP", slug: "gsap" }] },
      projectFields: {
        client: "Studio Archi",
        year: "2023",
        liveUrl: "https://exemple.com"
      },
      category: "vitrine"
    },
    {
      id: "4",
      slug: "marketplace-artisans",
      title: "Marketplace Artisans",
      excerpt: "Plateforme multi-vendeurs pour artisans locaux. Syst\xE8me de commandes, paiements et livraisons int\xE9gr\xE9.",
      featuredImage: void 0,
      technologies: { nodes: [{ name: "WooCommerce", slug: "woocommerce" }, { name: "WordPress", slug: "wordpress" }, { name: "PHP", slug: "php" }] },
      projectFields: {
        client: "Artisans R\xE9unis",
        year: "2023",
        liveUrl: "https://exemple.com"
      },
      category: "ecommerce"
    },
    {
      id: "5",
      slug: "app-reservation-restaurant",
      title: "App R\xE9servation Restaurant",
      excerpt: "Application web de r\xE9servation pour un groupe de restaurants. Gestion des tables et notifications en temps r\xE9el.",
      featuredImage: void 0,
      technologies: { nodes: [{ name: "Next.js", slug: "nextjs" }, { name: "Prisma", slug: "prisma" }, { name: "PostgreSQL", slug: "postgresql" }] },
      projectFields: {
        client: "Groupe Gastronomie",
        year: "2023",
        liveUrl: "https://exemple.com"
      },
      category: "webapp"
    },
    {
      id: "6",
      slug: "site-immobilier",
      title: "Agence Immobili\xE8re",
      excerpt: "Site avec recherche avanc\xE9e de biens, estimations en ligne et prise de rendez-vous automatis\xE9e.",
      featuredImage: void 0,
      technologies: { nodes: [{ name: "WordPress", slug: "wordpress" }, { name: "ACF", slug: "acf" }, { name: "Algolia", slug: "algolia" }] },
      projectFields: {
        client: "Immo Premium",
        year: "2023",
        liveUrl: "https://exemple.com"
      },
      category: "vitrine"
    }
  ];
  let projects = [];
  let isFromWordPress = false;
  try {
    const wpAvailable = await isWordPressAvailable();
    if (wpAvailable) {
      const data = await fetchGraphQL(GET_PROJECTS, { first: 20 });
      if (data.projects.nodes.length > 0) {
        projects = data.projects.nodes;
        isFromWordPress = true;
      }
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
  if (projects.length === 0) {
    projects = mockProjects;
  }
  const stats = [
    { value: "50+", label: "Projets livr\xE9s" },
    { value: "98%", label: "Clients satisfaits" },
    { value: "15+", label: "Technologies" },
    { value: "5 ans", label: "D'exp\xE9rience" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projets", "description": "D\xE9couvrez nos r\xE9alisations : sites web, e-commerce, applications et plus. Chaque projet est une histoire de collaboration et d'innovation.", "data-astro-cid-5etv5t6g": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-32 pb-24 overflow-hidden" data-astro-cid-5etv5t6g> <!-- Background Elements --> <div class="absolute inset-0 grid-bg opacity-30" data-astro-cid-5etv5t6g></div> <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent-primary/20 via-accent-secondary/10 to-transparent rounded-full blur-3xl" data-astro-cid-5etv5t6g></div> <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-secondary/15 to-transparent rounded-full blur-3xl" data-astro-cid-5etv5t6g></div> ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-5etv5t6g": true }, { "default": async ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto text-center" data-astro-cid-5etv5t6g> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 reveal" data-astro-cid-5etv5t6g> <span class="w-2 h-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary animate-pulse" data-astro-cid-5etv5t6g></span> <span class="text-sm text-text-secondary" data-astro-cid-5etv5t6g>Portfolio</span> </div> <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 reveal" data-astro-cid-5etv5t6g>
Nos <span class="bg-gradient-to-r from-accent-primary via-purple-400 to-accent-secondary bg-clip-text text-transparent" data-astro-cid-5etv5t6g>réalisations</span> </h1> <p class="text-xl text-text-secondary max-w-2xl mx-auto mb-12 reveal" data-astro-cid-5etv5t6g>
Chaque projet est unique. Découvrez comment nous avons aidé nos clients
          à transformer leurs idées en expériences digitales exceptionnelles.
</p> <!-- Stats --> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 reveal" data-astro-cid-5etv5t6g> ${stats.map((stat) => renderTemplate`<div class="relative group" data-astro-cid-5etv5t6g> <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-5etv5t6g></div> <div class="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm" data-astro-cid-5etv5t6g> <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-1" data-astro-cid-5etv5t6g> ${stat.value} </div> <div class="text-sm text-text-muted" data-astro-cid-5etv5t6g>${stat.label}</div> </div> </div>`)} </div> </div> ` })} </section>  <section class="py-20 relative" data-astro-cid-5etv5t6g> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-5etv5t6g": true }, { "default": async ($$result3) => renderTemplate`${!isFromWordPress && renderTemplate`<div class="mb-8 p-4 rounded-xl bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 text-center reveal" data-astro-cid-5etv5t6g> <p class="text-text-secondary text-sm" data-astro-cid-5etv5t6g>
Données de démonstration. Connectez WordPress pour afficher vos vrais projets.
</p> </div>`} <div class="flex flex-wrap justify-center gap-3 mb-12 reveal" id="filter-container" data-astro-cid-5etv5t6g> ${categories.map((cat, index) => renderTemplate`<button${addAttribute(cat.id, "data-filter")}${addAttribute([
    "filter-btn px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
    index === 0 ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-accent-primary/25" : "bg-white/5 border border-white/10 text-text-secondary hover:bg-white/10 hover:text-white"
  ], "class:list")} data-astro-cid-5etv5t6g> ${cat.name} </button>`)} </div>  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid" data-astro-cid-5etv5t6g> ${projects.map((project, index) => renderTemplate`<a${addAttribute(`/projets/${project.slug}`, "href")} class="group project-card reveal"${addAttribute(project.category || "all", "data-category")}${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-5etv5t6g> <article class="relative h-full rounded-2xl overflow-hidden bg-bg-secondary border border-white/10 hover:border-accent-primary/50 transition-all duration-500" data-astro-cid-5etv5t6g> <!-- Gradient Overlay on Hover --> <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-5etv5t6g></div> <!-- Image --> <div class="relative aspect-[16/10] overflow-hidden" data-astro-cid-5etv5t6g> ${project.featuredImage?.node ? renderTemplate`<img${addAttribute(project.featuredImage.node.sourceUrl, "src")}${addAttribute(project.featuredImage.node.altText || project.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" data-astro-cid-5etv5t6g>` : renderTemplate`<div class="w-full h-full bg-gradient-to-br from-bg-tertiary to-bg-secondary flex items-center justify-center" data-astro-cid-5etv5t6g> <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center" data-astro-cid-5etv5t6g> <svg class="w-8 h-8 text-accent-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5etv5t6g> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-5etv5t6g></path> </svg> </div> </div>`} <!-- Year Badge --> <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs font-medium text-white" data-astro-cid-5etv5t6g> ${project.projectFields.year} </div> </div> <!-- Content --> <div class="relative p-6" data-astro-cid-5etv5t6g> <!-- Client --> <div class="text-sm text-accent-primary mb-2 font-medium" data-astro-cid-5etv5t6g> ${project.projectFields.client} </div> <!-- Title --> <h2 class="text-xl font-semibold mb-3 group-hover:text-white transition-colors" data-astro-cid-5etv5t6g> ${project.title} </h2> <!-- Excerpt --> <div class="text-text-secondary text-sm mb-4 line-clamp-3" data-astro-cid-5etv5t6g>${unescapeHTML(project.excerpt)}</div> <!-- Technologies --> <div class="flex flex-wrap gap-2 mb-4" data-astro-cid-5etv5t6g> ${getTechnologies(project).slice(0, 3).map((tech) => renderTemplate`<span class="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-text-muted" data-astro-cid-5etv5t6g> ${tech} </span>`)} ${getTechnologies(project).length > 3 && renderTemplate`<span class="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-text-muted" data-astro-cid-5etv5t6g>
+${getTechnologies(project).length - 3} </span>`} </div> <!-- View Project Link --> <div class="flex items-center gap-2 text-sm font-medium text-accent-primary group-hover:gap-3 transition-all" data-astro-cid-5etv5t6g> <span data-astro-cid-5etv5t6g>Voir le projet</span> <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5etv5t6g> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-5etv5t6g></path> </svg> </div> </div> </article> </a>`)} </div> ` })} </section>  <section class="py-32 relative overflow-hidden" data-astro-cid-5etv5t6g> <!-- Background --> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" data-astro-cid-5etv5t6g></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-3xl opacity-30" data-astro-cid-5etv5t6g></div> ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-5etv5t6g": true }, { "default": async ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto text-center reveal" data-astro-cid-5etv5t6g> <h2 class="text-4xl md:text-5xl font-bold mb-6" data-astro-cid-5etv5t6g>
Votre projet sera-t-il le <span class="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent" data-astro-cid-5etv5t6g>prochain</span> ?
</h2> <p class="text-xl text-text-secondary mb-10 max-w-2xl mx-auto" data-astro-cid-5etv5t6g>
Nous sommes impatients de découvrir votre vision et de la transformer en réalité.
          Parlons de votre projet dès aujourd'hui.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-astro-cid-5etv5t6g> ${renderComponent($$result3, "Button", $$Button, { "href": "/contact", "size": "lg", "class": "group", "data-astro-cid-5etv5t6g": true }, { "default": async ($$result4) => renderTemplate` <span data-astro-cid-5etv5t6g>Démarrer un projet</span> <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5etv5t6g> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-5etv5t6g></path> </svg> ` })} ${renderComponent($$result3, "Button", $$Button, { "href": "/services", "variant": "outline", "size": "lg", "data-astro-cid-5etv5t6g": true }, { "default": async ($$result4) => renderTemplate`
Découvrir nos services
` })} </div> </div> ` })} </section> ` })}  ${renderScript($$result, "C:/MAMP/htdocs/rework/src/pages/projets/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/MAMP/htdocs/rework/src/pages/projets/index.astro", void 0);

const $$file = "C:/MAMP/htdocs/rework/src/pages/projets/index.astro";
const $$url = "/projets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
