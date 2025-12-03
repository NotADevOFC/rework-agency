import { e as createAstro, f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_BxQs--Zw.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Container } from '../../chunks/BaseLayout_BKU1RhHw.mjs';
import { $ as $$Button } from '../../chunks/Button_Dnng69pH.mjs';
import { i as isWordPressAvailable, f as fetchGraphQL } from '../../chunks/wordpress_HYMlOqo-.mjs';
import { G as GET_POST_BY_SLUG } from '../../chunks/posts_UTxFa5XW.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://rework.agency");
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const mockPosts = {
    "pourquoi-choisir-astro-2024": {
      id: "1",
      slug: "pourquoi-choisir-astro-2024",
      title: "Pourquoi choisir Astro en 2024 ?",
      content: `
      <p>Astro s'est impos\xE9 comme l'un des frameworks les plus innovants de ces derni\xE8res ann\xE9es. Con\xE7u pour cr\xE9er des sites web rapides et orient\xE9s contenu, il offre une approche unique qui s\xE9duit de plus en plus de d\xE9veloppeurs.</p>

      <h2>Le concept d'Islands Architecture</h2>
      <p>Astro introduit le concept d'"Islands Architecture" (architecture en \xEElots). L'id\xE9e est simple mais puissante : par d\xE9faut, Astro g\xE9n\xE8re du HTML statique sans JavaScript. Les composants interactifs sont isol\xE9s en "\xEElots" qui s'hydratent ind\xE9pendamment.</p>

      <p>Cette approche offre plusieurs avantages :</p>
      <ul>
        <li><strong>Performance exceptionnelle</strong> : moins de JavaScript = site plus rapide</li>
        <li><strong>SEO optimis\xE9</strong> : contenu HTML statique indexable</li>
        <li><strong>Flexibilit\xE9</strong> : utilisez React, Vue, Svelte ou rien du tout</li>
      </ul>

      <h2>Z\xE9ro JavaScript par d\xE9faut</h2>
      <p>Contrairement \xE0 Next.js ou Nuxt qui envoient syst\xE9matiquement du JavaScript au client, Astro ne le fait que lorsque c'est explicitement demand\xE9. R\xE9sultat : des sites ultra-l\xE9gers avec des scores Lighthouse parfaits.</p>

      <h2>Support multi-frameworks</h2>
      <p>Astro est agnostique : vous pouvez utiliser React, Vue, Svelte, Solid, Preact ou m\xEAme du vanilla JavaScript dans le m\xEAme projet. Id\xE9al pour les \xE9quipes avec des comp\xE9tences vari\xE9es.</p>

      <h2>Quand utiliser Astro ?</h2>
      <p>Astro est parfait pour :</p>
      <ul>
        <li>Sites vitrines et portfolios</li>
        <li>Blogs et sites de documentation</li>
        <li>Sites e-commerce statiques</li>
        <li>Landing pages optimis\xE9es</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Si vous cherchez \xE0 cr\xE9er un site rapide, SEO-friendly et facile \xE0 maintenir, Astro est un excellent choix en 2024. C'est d'ailleurs le framework que nous utilisons pour ce site !</p>
    `,
      date: "2024-01-15",
      featuredImage: void 0,
      categories: { nodes: [{ id: "1", name: "D\xE9veloppement", slug: "developpement" }] },
      author: { node: { name: "Alexandre Martin", avatar: void 0 } }
    },
    "wordpress-headless-guide-complet": {
      id: "2",
      slug: "wordpress-headless-guide-complet",
      title: "WordPress Headless : Le guide complet",
      content: `
      <p>WordPress headless combine le meilleur des deux mondes : la puissance de WordPress comme CMS et les performances d'un frontend moderne. Voici comment \xE7a fonctionne.</p>

      <h2>Qu'est-ce que WordPress Headless ?</h2>
      <p>Dans une configuration "headless", WordPress ne g\xE8re que le contenu (le "corps") tandis qu'un frontend s\xE9par\xE9 (la "t\xEAte") s'occupe de l'affichage. La communication se fait via API REST ou GraphQL.</p>

      <h2>Les avantages</h2>
      <ul>
        <li><strong>Performance</strong> : frontend statique ultra-rapide</li>
        <li><strong>S\xE9curit\xE9</strong> : WordPress n'est pas expos\xE9 publiquement</li>
        <li><strong>Flexibilit\xE9</strong> : libert\xE9 totale sur le frontend</li>
        <li><strong>Scalabilit\xE9</strong> : CDN pour le frontend, serveur pour le CMS</li>
      </ul>

      <h2>L'architecture typique</h2>
      <p>Une architecture WordPress headless comprend g\xE9n\xE9ralement :</p>
      <ul>
        <li>WordPress + WPGraphQL sur un serveur d\xE9di\xE9</li>
        <li>Frontend Astro/Next.js d\xE9ploy\xE9 sur Vercel ou Cloudflare</li>
        <li>Webhooks pour le rebuild automatique</li>
      </ul>

      <h2>WPGraphQL : l'API id\xE9ale</h2>
      <p>WPGraphQL transforme WordPress en API GraphQL. Contrairement \xE0 REST, vous demandez exactement les donn\xE9es dont vous avez besoin, rien de plus.</p>

      <h2>Exemple de requ\xEAte</h2>
      <pre><code>query GetPosts {
  posts(first: 10) {
    nodes {
      title
      slug
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}</code></pre>

      <h2>Conclusion</h2>
      <p>WordPress headless est id\xE9al pour les projets n\xE9cessitant performance et flexibilit\xE9 tout en conservant une gestion de contenu famili\xE8re. N'h\xE9sitez pas \xE0 nous contacter pour discuter de votre projet !</p>
    `,
      date: "2024-01-10",
      featuredImage: void 0,
      categories: { nodes: [{ id: "2", name: "WordPress", slug: "wordpress" }] },
      author: { node: { name: "Alexandre Martin", avatar: void 0 } }
    },
    "optimiser-core-web-vitals": {
      id: "3",
      slug: "optimiser-core-web-vitals",
      title: "Comment optimiser vos Core Web Vitals",
      content: `
      <p>Les Core Web Vitals sont devenus un facteur de ranking Google. Voici comment les optimiser pour am\xE9liorer votre SEO et l'exp\xE9rience utilisateur.</p>

      <h2>Les 3 m\xE9triques cl\xE9s</h2>
      <ul>
        <li><strong>LCP (Largest Contentful Paint)</strong> : temps de chargement du plus grand \xE9l\xE9ment visible. Objectif : &lt; 2.5s</li>
        <li><strong>INP (Interaction to Next Paint)</strong> : r\xE9activit\xE9 aux interactions. Objectif : &lt; 200ms</li>
        <li><strong>CLS (Cumulative Layout Shift)</strong> : stabilit\xE9 visuelle. Objectif : &lt; 0.1</li>
      </ul>

      <h2>Optimiser le LCP</h2>
      <ul>
        <li>Optimisez les images (WebP, lazy loading, dimensions)</li>
        <li>Pr\xE9chargez les ressources critiques</li>
        <li>Utilisez un CDN</li>
        <li>Minimisez le CSS et JS bloquants</li>
      </ul>

      <h2>Am\xE9liorer l'INP</h2>
      <ul>
        <li>R\xE9duisez le JavaScript sur le thread principal</li>
        <li>Divisez les longues t\xE2ches</li>
        <li>Utilisez requestIdleCallback pour les t\xE2ches non urgentes</li>
      </ul>

      <h2>R\xE9duire le CLS</h2>
      <ul>
        <li>D\xE9finissez toujours width/height pour les images</li>
        <li>R\xE9servez l'espace pour les contenus dynamiques</li>
        <li>\xC9vitez d'ins\xE9rer du contenu au-dessus du fold</li>
      </ul>

      <h2>Outils de mesure</h2>
      <ul>
        <li>Lighthouse dans Chrome DevTools</li>
        <li>PageSpeed Insights</li>
        <li>Search Console (rapport Core Web Vitals)</li>
        <li>web.dev/measure</li>
      </ul>

      <h2>Conclusion</h2>
      <p>L'optimisation des Core Web Vitals demande une approche m\xE9thodique. Commencez par mesurer, identifiez les probl\xE8mes, puis corrigez-les un par un. Les gains sont significatifs tant pour le SEO que pour l'exp\xE9rience utilisateur.</p>
    `,
      date: "2024-01-05",
      featuredImage: void 0,
      categories: { nodes: [{ id: "3", name: "Performance", slug: "performance" }] },
      author: { node: { name: "Sophie Bernard", avatar: void 0 } }
    }
  };
  const { slug } = Astro2.params;
  let post = null;
  let isFromWordPress = false;
  try {
    const wpAvailable = await isWordPressAvailable();
    if (wpAvailable) {
      const data = await fetchGraphQL(GET_POST_BY_SLUG, { slug });
      if (data.post) {
        post = data.post;
        isFromWordPress = true;
      }
    }
  } catch (error) {
    console.error("Error fetching post:", error);
  }
  if (!post && slug && mockPosts[slug]) {
    post = mockPosts[slug];
  }
  if (!post) {
    return Astro2.redirect("/blog");
  }
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  function getReadingTime(content) {
    if (!content) return "3 min";
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min`;
  }
  const relatedPosts = Object.values(mockPosts).filter((p) => p.slug !== slug).slice(0, 3);
  function extractHeadings(content) {
    const regex = /<h2[^>]*>(.*?)<\/h2>/gi;
    const headings2 = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      const text = match[1].replace(/<[^>]*>/g, "");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      headings2.push({ id, text });
    }
    return headings2;
  }
  const headings = post.content ? extractHeadings(post.content) : [];
  let processedContent = post.content || "";
  headings.forEach(({ id, text }) => {
    processedContent = processedContent.replace(
      new RegExp(`<h2[^>]*>${text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</h2>`, "i"),
      `<h2 id="${id}">${text}</h2>`
    );
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.title, "description": post.excerpt || `Lisez notre article : ${post.title}`, "type": "article", "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<article data-astro-cid-4sn4zg3r> <header class="relative pt-32 pb-16 overflow-hidden" data-astro-cid-4sn4zg3r> <!-- Background --> <div class="absolute inset-0 grid-bg opacity-30" data-astro-cid-4sn4zg3r></div> <div class="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-secondary/20 via-accent-primary/10 to-transparent rounded-full blur-3xl" data-astro-cid-4sn4zg3r></div> ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result3) => renderTemplate`  <a href="/blog" class="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors mb-8 group reveal" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-4sn4zg3r></path> </svg> <span data-astro-cid-4sn4zg3r>Retour au blog</span> </a> <div class="max-w-4xl" data-astro-cid-4sn4zg3r> <!-- Category & Date --> <div class="flex flex-wrap items-center gap-4 mb-6 reveal" data-astro-cid-4sn4zg3r> ${post.categories?.nodes?.[0] && renderTemplate`<span class="px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 text-sm font-medium text-accent-primary" data-astro-cid-4sn4zg3r> ${post.categories.nodes[0].name} </span>`} <div class="flex items-center gap-2 text-text-muted text-sm" data-astro-cid-4sn4zg3r> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-4sn4zg3r></path> </svg> ${formatDate(post.date)} </div> <div class="flex items-center gap-2 text-text-muted text-sm" data-astro-cid-4sn4zg3r> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-4sn4zg3r></path> </svg> ${getReadingTime(post.content)} de lecture
</div> </div> <!-- Title --> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 reveal" data-astro-cid-4sn4zg3r> ${post.title} </h1> <!-- Author --> ${post.author?.node && renderTemplate`<div class="flex items-center gap-4 reveal" data-astro-cid-4sn4zg3r> <div class="w-14 h-14 rounded-full bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 flex items-center justify-center border-2 border-accent-primary/30" data-astro-cid-4sn4zg3r> <span class="text-lg font-semibold text-accent-primary" data-astro-cid-4sn4zg3r> ${post.author.node.name.split(" ").map((n) => n[0]).join("")} </span> </div> <div data-astro-cid-4sn4zg3r> <p class="font-semibold text-lg" data-astro-cid-4sn4zg3r>${post.author.node.name}</p> <p class="text-text-muted" data-astro-cid-4sn4zg3r>Auteur</p> </div> </div>`} </div> ` })} </header> <!-- Featured Image --> <section class="pb-16" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result3) => renderTemplate` <div class="max-w-5xl mx-auto reveal" data-astro-cid-4sn4zg3r> <div class="aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50" data-astro-cid-4sn4zg3r> ${post.featuredImage?.node ? renderTemplate`<img${addAttribute(post.featuredImage.node.sourceUrl, "src")}${addAttribute(post.featuredImage.node.altText || post.title, "alt")} class="w-full h-full object-cover" data-astro-cid-4sn4zg3r>` : renderTemplate`<div class="w-full h-full bg-gradient-to-br from-accent-primary/20 via-accent-secondary/10 to-bg-tertiary flex items-center justify-center" data-astro-cid-4sn4zg3r> <div class="w-32 h-32 rounded-3xl bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 flex items-center justify-center" data-astro-cid-4sn4zg3r> <svg class="w-16 h-16 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-4sn4zg3r></path> </svg> </div> </div>`} </div> </div> ` })} </section> <!-- Content Section --> <section class="py-12" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result3) => renderTemplate` <div class="grid lg:grid-cols-4 gap-12 max-w-6xl mx-auto" data-astro-cid-4sn4zg3r> <!-- Table of Contents (Sticky) --> ${headings.length > 0 && renderTemplate`<aside class="hidden lg:block" data-astro-cid-4sn4zg3r> <div class="sticky top-32 reveal" data-astro-cid-4sn4zg3r> <div class="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm" data-astro-cid-4sn4zg3r> <h3 class="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4 flex items-center gap-2" data-astro-cid-4sn4zg3r> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" data-astro-cid-4sn4zg3r></path> </svg>
Sommaire
</h3> <nav class="space-y-2" data-astro-cid-4sn4zg3r> ${headings.map((heading) => renderTemplate`<a${addAttribute(`#${heading.id}`, "href")} class="block text-sm text-text-secondary hover:text-accent-primary transition-colors py-1 border-l-2 border-white/10 hover:border-accent-primary pl-3" data-astro-cid-4sn4zg3r> ${heading.text} </a>`)} </nav> </div> </div> </aside>`} <!-- Main Content --> <div${addAttribute(["lg:col-span-3", headings.length === 0 && "lg:col-span-4 max-w-3xl mx-auto"], "class:list")} data-astro-cid-4sn4zg3r> <div class="prose prose-invert prose-lg max-w-none reveal
                     prose-headings:font-bold prose-headings:text-text-primary prose-headings:scroll-mt-24
                     prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-white/10
                     prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                     prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6
                     prose-li:text-text-secondary prose-li:marker:text-accent-primary
                     prose-ul:my-6 prose-ul:space-y-3
                     prose-ol:my-6 prose-ol:space-y-3
                     prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline
                     prose-strong:text-text-primary prose-strong:font-semibold
                     prose-code:text-accent-primary prose-code:bg-bg-tertiary prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm
                     prose-pre:bg-bg-tertiary prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:p-6
                     prose-blockquote:border-accent-primary prose-blockquote:bg-white/5 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic" data-astro-cid-4sn4zg3r>${unescapeHTML(processedContent)}</div> <!-- Share Section --> <div class="mt-16 pt-8 border-t border-white/10 reveal" data-astro-cid-4sn4zg3r> <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" data-astro-cid-4sn4zg3r> <div data-astro-cid-4sn4zg3r> <p class="font-semibold mb-1" data-astro-cid-4sn4zg3r>Vous avez aimé cet article ?</p> <p class="text-text-muted text-sm" data-astro-cid-4sn4zg3r>Partagez-le sur vos réseaux sociaux</p> </div> <div class="flex items-center gap-3" data-astro-cid-4sn4zg3r> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${Astro2.url}`, "href")} target="_blank" rel="noopener noreferrer" class="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-accent-primary/20 hover:border-accent-primary/50 transition-all group" aria-label="Partager sur Twitter" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 text-text-muted group-hover:text-accent-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-4sn4zg3r></path> </svg> </a> <a${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${Astro2.url}`, "href")} target="_blank" rel="noopener noreferrer" class="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-accent-primary/20 hover:border-accent-primary/50 transition-all group" aria-label="Partager sur LinkedIn" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 text-text-muted group-hover:text-accent-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" data-astro-cid-4sn4zg3r></path> </svg> </a> <button onclick="navigator.clipboard.writeText(window.location.href); this.querySelector('span').textContent = 'Copié !'; setTimeout(() => this.querySelector('span').textContent = 'Copier le lien', 2000)" class="flex items-center gap-2 px-4 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-accent-primary/20 hover:border-accent-primary/50 transition-all group" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 text-text-muted group-hover:text-accent-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" data-astro-cid-4sn4zg3r></path> </svg> <span class="text-sm text-text-muted group-hover:text-accent-primary transition-colors" data-astro-cid-4sn4zg3r>Copier le lien</span> </button> </div> </div> </div> <!-- Author Bio --> ${post.author?.node && renderTemplate`<div class="mt-12 p-8 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 reveal" data-astro-cid-4sn4zg3r> <div class="flex items-start gap-6" data-astro-cid-4sn4zg3r> <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 flex items-center justify-center flex-shrink-0 border-2 border-accent-primary/30" data-astro-cid-4sn4zg3r> <span class="text-2xl font-bold text-accent-primary" data-astro-cid-4sn4zg3r> ${post.author.node.name.split(" ").map((n) => n[0]).join("")} </span> </div> <div data-astro-cid-4sn4zg3r> <h3 class="font-semibold text-xl mb-2" data-astro-cid-4sn4zg3r>${post.author.node.name}</h3> <p class="text-text-secondary mb-4" data-astro-cid-4sn4zg3r>
Expert en développement web et passionné par les nouvelles technologies.
                      Partage régulièrement ses connaissances à travers des articles et tutoriels.
</p> <div class="flex items-center gap-3" data-astro-cid-4sn4zg3r> <a href="#" class="text-accent-primary hover:underline text-sm" data-astro-cid-4sn4zg3r>Tous ses articles</a> <span class="text-text-muted" data-astro-cid-4sn4zg3r>•</span> <a href="#" class="text-accent-primary hover:underline text-sm" data-astro-cid-4sn4zg3r>LinkedIn</a> </div> </div> </div> </div>`} </div> </div> ` })} </section> </article>  ${relatedPosts.length > 0 && renderTemplate`<section class="py-24 bg-bg-secondary/50" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result3) => renderTemplate` <div class="text-center mb-12 reveal" data-astro-cid-4sn4zg3r> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-4sn4zg3r>
Articles <span class="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent" data-astro-cid-4sn4zg3r>similaires</span> </h2> <p class="text-text-secondary" data-astro-cid-4sn4zg3r>Continuez votre lecture avec ces articles</p> </div> <div class="grid md:grid-cols-3 gap-8" data-astro-cid-4sn4zg3r> ${relatedPosts.map((relatedPost, index) => renderTemplate`<a${addAttribute(`/blog/${relatedPost.slug}`, "href")} class="group reveal"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-4sn4zg3r> <article class="h-full rounded-2xl overflow-hidden bg-bg-primary border border-white/10 hover:border-accent-primary/50 transition-all duration-500" data-astro-cid-4sn4zg3r> <div class="aspect-video bg-gradient-to-br from-bg-tertiary to-bg-secondary flex items-center justify-center" data-astro-cid-4sn4zg3r> <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center" data-astro-cid-4sn4zg3r> <svg class="w-6 h-6 text-accent-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-4sn4zg3r></path> </svg> </div> </div> <div class="p-6" data-astro-cid-4sn4zg3r> <div class="flex items-center gap-3 mb-3" data-astro-cid-4sn4zg3r> ${relatedPost.categories?.nodes?.[0] && renderTemplate`<span class="px-2.5 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs text-accent-primary" data-astro-cid-4sn4zg3r> ${relatedPost.categories.nodes[0].name} </span>`} <span class="text-text-muted text-xs" data-astro-cid-4sn4zg3r>${formatDate(relatedPost.date)}</span> </div> <h3 class="font-semibold text-lg group-hover:text-white transition-colors line-clamp-2" data-astro-cid-4sn4zg3r> ${relatedPost.title} </h3> </div> </article> </a>`)} </div> ` })} </section>`} <section class="py-24" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result3) => renderTemplate` <div class="max-w-3xl mx-auto text-center reveal" data-astro-cid-4sn4zg3r> <h2 class="text-3xl md:text-4xl font-bold mb-6" data-astro-cid-4sn4zg3r>
Besoin d'aide pour votre projet ?
</h2> <p class="text-text-secondary text-lg mb-8" data-astro-cid-4sn4zg3r>
Notre équipe d'experts est là pour transformer vos idées en réalité.
          Contactez-nous pour en discuter.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-astro-cid-4sn4zg3r> ${renderComponent($$result3, "Button", $$Button, { "href": "/contact", "size": "lg", "class": "group", "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result4) => renderTemplate` <span data-astro-cid-4sn4zg3r>Nous contacter</span> <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-4sn4zg3r></path> </svg> ` })} ${renderComponent($$result3, "Button", $$Button, { "href": "/projets", "variant": "outline", "size": "lg", "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result4) => renderTemplate`
Voir nos réalisations
` })} </div> </div> ` })} </section> ` })}  ${renderScript($$result, "C:/MAMP/htdocs/rework/src/pages/blog/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/MAMP/htdocs/rework/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/MAMP/htdocs/rework/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
