import { e as createAstro, f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, h as addAttribute } from '../../chunks/astro/server_BxQs--Zw.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Container } from '../../chunks/BaseLayout_BKU1RhHw.mjs';
import { $ as $$Button } from '../../chunks/Button_Dnng69pH.mjs';
import { i as isWordPressAvailable, f as fetchGraphQL } from '../../chunks/wordpress_HYMlOqo-.mjs';
import { G as GET_PROJECT_BY_SLUG } from '../../chunks/projects_Ba39OmdP.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://rework.agency");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  function getTechnologies(project2) {
    if (project2.technologies?.nodes) {
      return project2.technologies.nodes.map((t) => t.name);
    }
    return [];
  }
  const mockProjects = {
    "ecommerce-mode": {
      id: "1",
      slug: "ecommerce-mode",
      title: "E-commerce Mode Premium",
      content: `
      <h2>Le d\xE9fi</h2>
      <p>Maison \xC9l\xE9gance, une marque de mode parisienne, souhaitait lancer sa boutique en ligne pour toucher une client\xE8le internationale tout en conservant l'exp\xE9rience luxueuse de ses boutiques physiques.</p>

      <h2>Notre solution</h2>
      <p>Nous avons d\xE9velopp\xE9 une boutique Shopify sur mesure avec un design \xE9pur\xE9 et \xE9l\xE9gant. L'accent a \xE9t\xE9 mis sur la qualit\xE9 des visuels produits et une navigation intuitive.</p>

      <h2>Fonctionnalit\xE9s cl\xE9s</h2>
      <ul>
        <li>Design responsive premium</li>
        <li>Galeries produits haute d\xE9finition avec zoom</li>
        <li>Syst\xE8me de tailles intelligent</li>
        <li>Paiement multi-devises</li>
        <li>Livraison internationale int\xE9gr\xE9e</li>
      </ul>

      <h2>R\xE9sultats</h2>
      <p>+150% de ventes en ligne la premi\xE8re ann\xE9e, avec un taux de conversion de 3.2% (vs 1.8% moyenne du secteur).</p>
    `,
      featuredImage: void 0,
      technologies: { nodes: [{ name: "Shopify", slug: "shopify" }, { name: "Liquid", slug: "liquid" }, { name: "JavaScript", slug: "javascript" }, { name: "SCSS", slug: "scss" }] },
      projectFields: {
        client: "Maison \xC9l\xE9gance",
        year: "2024",
        liveUrl: "https://exemple.com"
      }
    },
    "saas-dashboard": {
      id: "2",
      slug: "saas-dashboard",
      title: "Dashboard SaaS Analytics",
      content: `
      <h2>Le d\xE9fi</h2>
      <p>DataFlow, une startup tech, avait besoin d'une plateforme permettant \xE0 ses clients de visualiser et analyser leurs donn\xE9es en temps r\xE9el de mani\xE8re intuitive.</p>

      <h2>Notre solution</h2>
      <p>D\xE9veloppement d'une application React avec des visualisations D3.js interactives et un backend Node.js performant pour le traitement des donn\xE9es.</p>

      <h2>Fonctionnalit\xE9s cl\xE9s</h2>
      <ul>
        <li>Tableaux de bord personnalisables</li>
        <li>Graphiques interactifs en temps r\xE9el</li>
        <li>Export de rapports PDF/Excel</li>
        <li>Syst\xE8me d'alertes configurables</li>
        <li>API REST document\xE9e</li>
      </ul>

      <h2>R\xE9sultats</h2>
      <p>Adoption par +200 entreprises dans les 6 premiers mois avec un NPS de 72.</p>
    `,
      featuredImage: void 0,
      technologies: { nodes: [{ name: "React", slug: "react" }, { name: "TypeScript", slug: "typescript" }, { name: "D3.js", slug: "d3js" }, { name: "Node.js", slug: "nodejs" }, { name: "PostgreSQL", slug: "postgresql" }] },
      projectFields: {
        client: "DataFlow",
        year: "2024",
        liveUrl: "https://exemple.com"
      }
    },
    "site-vitrine-architecte": {
      id: "3",
      slug: "site-vitrine-architecte",
      title: "Portfolio Architecte",
      content: `
      <h2>Le d\xE9fi</h2>
      <p>Studio Archi cherchait un site portfolio qui mette en valeur leurs projets architecturaux avec une esth\xE9tique minimaliste refl\xE9tant leur philosophie de design.</p>

      <h2>Notre solution</h2>
      <p>Un site Astro ultra-performant avec des galeries immersives et des animations subtiles au scroll pour une exp\xE9rience de navigation m\xE9morable.</p>

      <h2>Fonctionnalit\xE9s cl\xE9s</h2>
      <ul>
        <li>Galeries plein \xE9cran avec transitions fluides</li>
        <li>Animations GSAP au scroll</li>
        <li>Score Lighthouse 100/100</li>
        <li>Filtrage par type de projet</li>
        <li>Formulaire de contact int\xE9gr\xE9</li>
      </ul>

      <h2>R\xE9sultats</h2>
      <p>+80% de demandes de devis via le site et mention dans plusieurs blogs d'architecture.</p>
    `,
      featuredImage: void 0,
      technologies: { nodes: [{ name: "Astro", slug: "astro" }, { name: "Tailwind CSS", slug: "tailwind-css" }, { name: "GSAP", slug: "gsap" }, { name: "TypeScript", slug: "typescript" }] },
      projectFields: {
        client: "Studio Archi",
        year: "2023",
        liveUrl: "https://exemple.com"
      }
    }
  };
  const { slug } = Astro2.params;
  let project = null;
  let isFromWordPress = false;
  try {
    const wpAvailable = await isWordPressAvailable();
    if (wpAvailable) {
      const data = await fetchGraphQL(GET_PROJECT_BY_SLUG, { slug });
      if (data.project) {
        project = data.project;
        isFromWordPress = true;
      }
    }
  } catch (error) {
    console.error("Error fetching project:", error);
  }
  if (!project && slug && mockProjects[slug]) {
    project = mockProjects[slug];
  }
  if (!project) {
    return Astro2.redirect("/projets");
  }
  const technologies = getTechnologies(project);
  const projectResults = [
    { value: "+150%", label: "Ventes en ligne" },
    { value: "3.2%", label: "Taux de conversion" },
    { value: "100", label: "Score Lighthouse" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": project.title, "description": project.excerpt || `D\xE9couvrez notre r\xE9alisation : ${project.title}`, "data-astro-cid-yf64fhpi": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-32 pb-20 overflow-hidden" data-astro-cid-yf64fhpi> <!-- Background --> <div class="absolute inset-0 grid-bg opacity-30" data-astro-cid-yf64fhpi></div> <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent-primary/20 via-accent-secondary/10 to-transparent rounded-full blur-3xl" data-astro-cid-yf64fhpi></div> <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-secondary/15 to-transparent rounded-full blur-3xl" data-astro-cid-yf64fhpi></div> ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-yf64fhpi": true }, { "default": async ($$result3) => renderTemplate`  <a href="/projets" class="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors mb-8 group reveal" data-astro-cid-yf64fhpi> <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-yf64fhpi></path> </svg> <span data-astro-cid-yf64fhpi>Retour aux projets</span> </a> <div class="grid lg:grid-cols-2 gap-12 items-center" data-astro-cid-yf64fhpi> <!-- Left Column - Info --> <div data-astro-cid-yf64fhpi> <!-- Client Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 mb-6 reveal" data-astro-cid-yf64fhpi> <span class="w-2 h-2 rounded-full bg-accent-primary" data-astro-cid-yf64fhpi></span> <span class="text-sm font-medium text-accent-primary" data-astro-cid-yf64fhpi>${project.projectFields.client}</span> </div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 reveal" data-astro-cid-yf64fhpi> ${project.title} </h1> ${project.excerpt && renderTemplate`<p class="text-xl text-text-secondary mb-8 reveal" data-astro-cid-yf64fhpi>${unescapeHTML(project.excerpt)}</p>`} <!-- Meta Info --> <div class="flex flex-wrap gap-6 mb-8 reveal" data-astro-cid-yf64fhpi> <div class="flex items-center gap-2" data-astro-cid-yf64fhpi> <svg class="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-yf64fhpi></path> </svg> <span class="text-text-secondary" data-astro-cid-yf64fhpi>${project.projectFields.year}</span> </div> ${project.projectFields.liveUrl && renderTemplate`<a${addAttribute(project.projectFields.liveUrl, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-accent-primary hover:underline" data-astro-cid-yf64fhpi> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-yf64fhpi></path> </svg> <span data-astro-cid-yf64fhpi>Voir le site</span> </a>`} </div> <!-- Technologies --> <div class="reveal" data-astro-cid-yf64fhpi> <h3 class="text-sm text-text-muted uppercase tracking-wider mb-3" data-astro-cid-yf64fhpi>Technologies</h3> <div class="flex flex-wrap gap-2" data-astro-cid-yf64fhpi> ${technologies.map((tech) => renderTemplate`<span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-text-secondary hover:border-accent-primary/50 hover:text-white transition-all" data-astro-cid-yf64fhpi> ${tech} </span>`)} </div> </div> </div> <!-- Right Column - Image --> <div class="reveal" data-astro-cid-yf64fhpi> <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50" data-astro-cid-yf64fhpi> <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10" data-astro-cid-yf64fhpi></div> ${project.featuredImage?.node ? renderTemplate`<img${addAttribute(project.featuredImage.node.sourceUrl, "src")}${addAttribute(project.featuredImage.node.altText || project.title, "alt")} class="w-full aspect-video object-cover relative z-10" data-astro-cid-yf64fhpi>` : renderTemplate`<div class="w-full aspect-video bg-gradient-to-br from-bg-tertiary to-bg-secondary flex items-center justify-center relative z-10" data-astro-cid-yf64fhpi> <div class="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center" data-astro-cid-yf64fhpi> <svg class="w-12 h-12 text-accent-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-yf64fhpi></path> </svg> </div> </div>`} </div> </div> </div> ` })} </section>  <section class="py-20 relative" data-astro-cid-yf64fhpi> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-yf64fhpi": true }, { "default": async ($$result3) => renderTemplate` <div class="grid lg:grid-cols-3 gap-12" data-astro-cid-yf64fhpi> <!-- Main Content --> <div class="lg:col-span-2" data-astro-cid-yf64fhpi> ${project.content && renderTemplate`<div class="prose prose-invert prose-lg max-w-none reveal
                     prose-headings:font-bold prose-headings:text-text-primary
                     prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:bg-gradient-to-r prose-h2:from-accent-primary prose-h2:to-accent-secondary prose-h2:bg-clip-text prose-h2:text-transparent
                     prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6
                     prose-li:text-text-secondary prose-li:marker:text-accent-primary
                     prose-ul:my-6 prose-ul:space-y-3
                     prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline
                     prose-strong:text-text-primary prose-strong:font-semibold" data-astro-cid-yf64fhpi>${unescapeHTML(project.content)}</div>`} </div> <!-- Sidebar --> <div class="space-y-6" data-astro-cid-yf64fhpi> <!-- Project Info Card --> <div class="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm reveal" data-astro-cid-yf64fhpi> <h3 class="font-semibold text-lg mb-6 flex items-center gap-2" data-astro-cid-yf64fhpi> <svg class="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-yf64fhpi></path> </svg>
Informations
</h3> <dl class="space-y-5" data-astro-cid-yf64fhpi> <div class="flex items-start gap-4" data-astro-cid-yf64fhpi> <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center flex-shrink-0" data-astro-cid-yf64fhpi> <svg class="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-yf64fhpi></path> </svg> </div> <div data-astro-cid-yf64fhpi> <dt class="text-text-muted text-sm" data-astro-cid-yf64fhpi>Client</dt> <dd class="font-medium text-white" data-astro-cid-yf64fhpi>${project.projectFields.client}</dd> </div> </div> <div class="flex items-start gap-4" data-astro-cid-yf64fhpi> <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center flex-shrink-0" data-astro-cid-yf64fhpi> <svg class="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-yf64fhpi></path> </svg> </div> <div data-astro-cid-yf64fhpi> <dt class="text-text-muted text-sm" data-astro-cid-yf64fhpi>Année</dt> <dd class="font-medium text-white" data-astro-cid-yf64fhpi>${project.projectFields.year}</dd> </div> </div> ${project.projectFields.liveUrl && renderTemplate`<div class="flex items-start gap-4" data-astro-cid-yf64fhpi> <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center flex-shrink-0" data-astro-cid-yf64fhpi> <svg class="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" data-astro-cid-yf64fhpi></path> </svg> </div> <div data-astro-cid-yf64fhpi> <dt class="text-text-muted text-sm" data-astro-cid-yf64fhpi>Site web</dt> <dd data-astro-cid-yf64fhpi> <a${addAttribute(project.projectFields.liveUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-accent-primary hover:underline inline-flex items-center gap-1" data-astro-cid-yf64fhpi>
Visiter
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-yf64fhpi></path> </svg> </a> </dd> </div> </div>`} </dl> </div> <!-- Results Card --> <div class="p-6 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 reveal" data-astro-cid-yf64fhpi> <h3 class="font-semibold text-lg mb-6 flex items-center gap-2" data-astro-cid-yf64fhpi> <svg class="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" data-astro-cid-yf64fhpi></path> </svg>
Résultats
</h3> <div class="space-y-4" data-astro-cid-yf64fhpi> ${projectResults.map((result) => renderTemplate`<div class="flex items-center justify-between" data-astro-cid-yf64fhpi> <span class="text-text-secondary text-sm" data-astro-cid-yf64fhpi>${result.label}</span> <span class="font-bold text-xl bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent" data-astro-cid-yf64fhpi> ${result.value} </span> </div>`)} </div> </div> <!-- CTA Card --> <div class="p-6 rounded-2xl bg-white/5 border border-white/10 text-center reveal" data-astro-cid-yf64fhpi> <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center" data-astro-cid-yf64fhpi> <svg class="w-8 h-8 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" data-astro-cid-yf64fhpi></path> </svg> </div> <h3 class="font-semibold mb-2" data-astro-cid-yf64fhpi>Un projet similaire ?</h3> <p class="text-text-secondary text-sm mb-4" data-astro-cid-yf64fhpi>
Discutons de votre projet et voyons comment nous pouvons vous aider.
</p> ${renderComponent($$result3, "Button", $$Button, { "href": "/contact", "size": "sm", "class": "w-full", "data-astro-cid-yf64fhpi": true }, { "default": async ($$result4) => renderTemplate`
Nous contacter
` })} </div> </div> </div> ` })} </section>  <section class="py-20 border-t border-white/10" data-astro-cid-yf64fhpi> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-yf64fhpi": true }, { "default": async ($$result3) => renderTemplate` <div class="flex flex-col sm:flex-row justify-between items-center gap-6 reveal" data-astro-cid-yf64fhpi> <a href="/projets" class="group flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-all" data-astro-cid-yf64fhpi> <svg class="w-5 h-5 text-text-muted group-hover:text-accent-primary transition-colors transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-yf64fhpi></path> </svg> <span class="text-text-secondary group-hover:text-white transition-colors" data-astro-cid-yf64fhpi>Tous les projets</span> </a> ${renderComponent($$result3, "Button", $$Button, { "href": "/contact", "size": "lg", "class": "group", "data-astro-cid-yf64fhpi": true }, { "default": async ($$result4) => renderTemplate` <span data-astro-cid-yf64fhpi>Démarrer votre projet</span> <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-yf64fhpi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-yf64fhpi></path> </svg> ` })} </div> ` })} </section> ` })}  ${renderScript($$result, "C:/MAMP/htdocs/rework/src/pages/projets/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/MAMP/htdocs/rework/src/pages/projets/[slug].astro", void 0);

const $$file = "C:/MAMP/htdocs/rework/src/pages/projets/[slug].astro";
const $$url = "/projets/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
