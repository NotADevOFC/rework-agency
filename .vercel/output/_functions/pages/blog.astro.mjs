import { e as createAstro, f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../chunks/astro/server_BxQs--Zw.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Container } from '../chunks/BaseLayout_BKU1RhHw.mjs';
import { $ as $$Button } from '../chunks/Button_Dnng69pH.mjs';
import { i as isWordPressAvailable, f as fetchGraphQL } from '../chunks/wordpress_HYMlOqo-.mjs';
import { a as GET_POSTS } from '../chunks/posts_UTxFa5XW.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rework.agency");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const categories = [
    { id: "all", name: "Tous", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
    { id: "developpement", name: "Dev", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
    { id: "wordpress", name: "WordPress", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { id: "performance", name: "Perf", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { id: "ux-ui", name: "UX/UI", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" }
  ];
  const mockPosts = [
    {
      id: "1",
      slug: "pourquoi-choisir-astro-2024",
      title: "Pourquoi choisir Astro en 2024 ?",
      excerpt: "Astro s'impose comme le framework de choix pour les sites orient\xE9s contenu. D\xE9couvrez ses avantages et pourquoi nous l'utilisons.",
      date: "2024-01-15",
      featuredImage: void 0,
      categories: { nodes: [{ id: "1", name: "D\xE9veloppement", slug: "developpement" }] },
      author: { node: { name: "Alexandre Martin", avatar: void 0 } },
      categorySlug: "developpement"
    },
    {
      id: "2",
      slug: "wordpress-headless-guide-complet",
      title: "WordPress Headless : Le guide complet",
      excerpt: "Comment utiliser WordPress comme CMS headless avec un frontend moderne. Architecture, avantages et mise en place.",
      date: "2024-01-10",
      featuredImage: void 0,
      categories: { nodes: [{ id: "2", name: "WordPress", slug: "wordpress" }] },
      author: { node: { name: "Alexandre Martin", avatar: void 0 } },
      categorySlug: "wordpress"
    },
    {
      id: "3",
      slug: "optimiser-core-web-vitals",
      title: "Comment optimiser vos Core Web Vitals",
      excerpt: "Les Core Web Vitals sont essentiels pour le SEO. Voici nos techniques pour obtenir un score parfait sur Lighthouse.",
      date: "2024-01-05",
      featuredImage: void 0,
      categories: { nodes: [{ id: "3", name: "Performance", slug: "performance" }] },
      author: { node: { name: "Sophie Bernard", avatar: void 0 } },
      categorySlug: "performance"
    },
    {
      id: "4",
      slug: "tailwind-css-vs-css-modules",
      title: "Tailwind CSS vs CSS Modules : que choisir ?",
      excerpt: "Comparatif d\xE9taill\xE9 entre Tailwind CSS et CSS Modules. Avantages, inconv\xE9nients et cas d'usage.",
      date: "2023-12-20",
      featuredImage: void 0,
      categories: { nodes: [{ id: "1", name: "D\xE9veloppement", slug: "developpement" }] },
      author: { node: { name: "Thomas Dubois", avatar: void 0 } },
      categorySlug: "developpement"
    },
    {
      id: "5",
      slug: "ecommerce-tendances-2024",
      title: "E-commerce : les tendances 2024",
      excerpt: "IA, personnalisation, social commerce... Les tendances qui vont fa\xE7onner le e-commerce cette ann\xE9e.",
      date: "2023-12-15",
      featuredImage: void 0,
      categories: { nodes: [{ id: "4", name: "E-commerce", slug: "ecommerce" }] },
      author: { node: { name: "Alexandre Martin", avatar: void 0 } },
      categorySlug: "developpement"
    },
    {
      id: "6",
      slug: "accessibilite-web-guide",
      title: "Accessibilit\xE9 web : par o\xF9 commencer ?",
      excerpt: "L'accessibilit\xE9 n'est pas optionnelle. Guide pratique pour rendre votre site accessible \xE0 tous.",
      date: "2023-12-10",
      featuredImage: void 0,
      categories: { nodes: [{ id: "5", name: "UX/UI", slug: "ux-ui" }] },
      author: { node: { name: "Sophie Bernard", avatar: void 0 } },
      categorySlug: "ux-ui"
    }
  ];
  let posts = [];
  let isFromWordPress = false;
  try {
    const wpAvailable = await isWordPressAvailable();
    if (wpAvailable) {
      const data = await fetchGraphQL(GET_POSTS, { first: 20 });
      if (data.posts.nodes.length > 0) {
        posts = data.posts.nodes.map((post) => ({
          ...post,
          categorySlug: post.categories?.nodes?.[0]?.slug || "all"
        }));
        isFromWordPress = true;
      }
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
  if (posts.length === 0) {
    posts = mockPosts;
  }
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  function getReadingTime(content) {
    return "3 min";
  }
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog", "description": "Conseils, tutoriels et actualit\xE9s sur le d\xE9veloppement web, le e-commerce et le design. Restez inform\xE9 des derni\xE8res tendances.", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-32 pb-20 overflow-hidden" data-astro-cid-5tznm7mj> <!-- Background --> <div class="absolute inset-0 grid-bg opacity-30" data-astro-cid-5tznm7mj></div> <div class="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-secondary/20 via-accent-primary/10 to-transparent rounded-full blur-3xl" data-astro-cid-5tznm7mj></div> <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-accent-primary/15 to-transparent rounded-full blur-3xl" data-astro-cid-5tznm7mj></div> ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto text-center" data-astro-cid-5tznm7mj> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 reveal" data-astro-cid-5tznm7mj> <span class="w-2 h-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary animate-pulse" data-astro-cid-5tznm7mj></span> <span class="text-sm text-text-secondary" data-astro-cid-5tznm7mj>Ressources & Insights</span> </div> <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 reveal" data-astro-cid-5tznm7mj>
Notre <span class="bg-gradient-to-r from-accent-primary via-purple-400 to-accent-secondary bg-clip-text text-transparent" data-astro-cid-5tznm7mj>blog</span> </h1> <p class="text-xl text-text-secondary max-w-2xl mx-auto reveal" data-astro-cid-5tznm7mj>
Conseils, tutoriels et réflexions sur le développement web,
          le e-commerce et les dernières tendances digitales.
</p> </div> ` })} </section>  ${featuredPost && renderTemplate`<section class="py-12" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-5tznm7mj": true }, { "default": async ($$result3) => renderTemplate`${!isFromWordPress && renderTemplate`<div class="mb-8 p-4 rounded-xl bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 text-center reveal" data-astro-cid-5tznm7mj> <p class="text-text-secondary text-sm" data-astro-cid-5tznm7mj>
Données de démonstration. Connectez WordPress pour afficher vos vrais articles.
</p> </div>`}<a${addAttribute(`/blog/${featuredPost.slug}`, "href")} class="group block reveal" data-astro-cid-5tznm7mj> <article class="relative rounded-3xl overflow-hidden bg-bg-secondary border border-white/10 hover:border-accent-primary/50 transition-all duration-500" data-astro-cid-5tznm7mj> <div class="grid lg:grid-cols-2 gap-0" data-astro-cid-5tznm7mj> <!-- Image --> <div class="relative aspect-[16/10] lg:aspect-auto overflow-hidden" data-astro-cid-5tznm7mj> ${featuredPost.featuredImage?.node ? renderTemplate`<img${addAttribute(featuredPost.featuredImage.node.sourceUrl, "src")}${addAttribute(featuredPost.featuredImage.node.altText || featuredPost.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-astro-cid-5tznm7mj>` : renderTemplate`<div class="w-full h-full min-h-[300px] bg-gradient-to-br from-accent-primary/20 via-accent-secondary/10 to-bg-tertiary flex items-center justify-center" data-astro-cid-5tznm7mj> <div class="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 flex items-center justify-center" data-astro-cid-5tznm7mj> <svg class="w-12 h-12 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5tznm7mj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-5tznm7mj></path> </svg> </div> </div>`} <!-- Featured Badge --> <div class="absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-sm font-medium text-white shadow-lg" data-astro-cid-5tznm7mj>
Article à la une
</div> </div> <!-- Content --> <div class="p-8 lg:p-12 flex flex-col justify-center" data-astro-cid-5tznm7mj> <div class="flex items-center gap-4 mb-4" data-astro-cid-5tznm7mj> ${featuredPost.categories?.nodes?.[0] && renderTemplate`<span class="px-3 py-1 rounded-full bg-accent-primary/20 border border-accent-primary/30 text-sm text-accent-primary" data-astro-cid-5tznm7mj> ${featuredPost.categories.nodes[0].name} </span>`} <span class="text-text-muted text-sm" data-astro-cid-5tznm7mj>${formatDate(featuredPost.date)}</span> </div> <h2 class="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-white transition-colors" data-astro-cid-5tznm7mj> ${featuredPost.title} </h2> <p class="text-text-secondary text-lg mb-6 line-clamp-3" data-astro-cid-5tznm7mj>${unescapeHTML(featuredPost.excerpt)}</p> <!-- Author --> ${featuredPost.author?.node && renderTemplate`<div class="flex items-center gap-4 pt-6 border-t border-white/10" data-astro-cid-5tznm7mj> <div class="w-12 h-12 rounded-full bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 flex items-center justify-center" data-astro-cid-5tznm7mj> <span class="text-sm font-semibold text-accent-primary" data-astro-cid-5tznm7mj> ${featuredPost.author.node.name.split(" ").map((n) => n[0]).join("")} </span> </div> <div data-astro-cid-5tznm7mj> <p class="font-medium" data-astro-cid-5tznm7mj>${featuredPost.author.node.name}</p> <p class="text-sm text-text-muted" data-astro-cid-5tznm7mj>${getReadingTime()} de lecture</p> </div> </div>`} </div> </div> </article> </a> ` })} </section>`} <section class="py-20" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-5tznm7mj": true }, { "default": async ($$result3) => renderTemplate`  <div class="flex flex-wrap justify-center gap-3 mb-12 reveal" id="filter-container" data-astro-cid-5tznm7mj> ${categories.map((cat, index) => renderTemplate`<button${addAttribute(cat.id, "data-filter")}${addAttribute([
    "filter-btn flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
    index === 0 ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-accent-primary/25" : "bg-white/5 border border-white/10 text-text-secondary hover:bg-white/10 hover:text-white"
  ], "class:list")} data-astro-cid-5tznm7mj> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5tznm7mj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(cat.icon, "d")} data-astro-cid-5tznm7mj></path> </svg> ${cat.name} </button>`)} </div>  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="posts-grid" data-astro-cid-5tznm7mj> ${otherPosts.map((post, index) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="group post-card reveal"${addAttribute(post.categorySlug || post.categories?.nodes?.[0]?.slug || "all", "data-category")}${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-5tznm7mj> <article class="relative h-full rounded-2xl overflow-hidden bg-bg-secondary border border-white/10 hover:border-accent-primary/50 transition-all duration-500 flex flex-col" data-astro-cid-5tznm7mj> <!-- Gradient Overlay on Hover --> <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-5tznm7mj></div> <!-- Image --> <div class="relative aspect-[16/10] overflow-hidden" data-astro-cid-5tznm7mj> ${post.featuredImage?.node ? renderTemplate`<img${addAttribute(post.featuredImage.node.sourceUrl, "src")}${addAttribute(post.featuredImage.node.altText || post.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" data-astro-cid-5tznm7mj>` : renderTemplate`<div class="w-full h-full bg-gradient-to-br from-bg-tertiary to-bg-secondary flex items-center justify-center" data-astro-cid-5tznm7mj> <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center" data-astro-cid-5tznm7mj> <svg class="w-6 h-6 text-accent-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5tznm7mj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-5tznm7mj></path> </svg> </div> </div>`} </div> <!-- Content --> <div class="relative p-6 flex-1 flex flex-col" data-astro-cid-5tznm7mj> <div class="flex items-center gap-3 mb-3" data-astro-cid-5tznm7mj> ${post.categories?.nodes?.[0] && renderTemplate`<span class="px-2.5 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs text-accent-primary" data-astro-cid-5tznm7mj> ${post.categories.nodes[0].name} </span>`} <span class="text-text-muted text-xs" data-astro-cid-5tznm7mj>${formatDate(post.date)}</span> </div> <h3 class="text-xl font-semibold mb-3 group-hover:text-white transition-colors line-clamp-2" data-astro-cid-5tznm7mj> ${post.title} </h3> <p class="text-text-secondary text-sm mb-4 flex-1 line-clamp-2" data-astro-cid-5tznm7mj>${unescapeHTML(post.excerpt)}</p> <!-- Author & Read Time --> <div class="flex items-center justify-between pt-4 border-t border-white/5" data-astro-cid-5tznm7mj> ${post.author?.node && renderTemplate`<div class="flex items-center gap-2" data-astro-cid-5tznm7mj> <div class="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center" data-astro-cid-5tznm7mj> <span class="text-xs font-medium text-accent-primary" data-astro-cid-5tznm7mj> ${post.author.node.name.split(" ").map((n) => n[0]).join("")} </span> </div> <span class="text-sm text-text-muted" data-astro-cid-5tznm7mj>${post.author.node.name.split(" ")[0]}</span> </div>`} <span class="text-xs text-text-muted" data-astro-cid-5tznm7mj>${getReadingTime()} de lecture</span> </div> </div> </article> </a>`)} </div> ` })} </section>  <section class="py-32 relative overflow-hidden" data-astro-cid-5tznm7mj> <!-- Background --> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" data-astro-cid-5tznm7mj></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-3xl opacity-30" data-astro-cid-5tznm7mj></div> ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result3) => renderTemplate` <div class="max-w-3xl mx-auto text-center reveal" data-astro-cid-5tznm7mj> <div class="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 flex items-center justify-center" data-astro-cid-5tznm7mj> <svg class="w-10 h-10 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5tznm7mj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-5tznm7mj></path> </svg> </div> <h2 class="text-4xl md:text-5xl font-bold mb-6" data-astro-cid-5tznm7mj>
Restez <span class="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent" data-astro-cid-5tznm7mj>informé</span> </h2> <p class="text-xl text-text-secondary mb-10" data-astro-cid-5tznm7mj>
Recevez nos derniers articles et conseils directement dans votre boîte mail.
          Pas de spam, promis.
</p> <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" data-astro-cid-5tznm7mj> <input type="email" placeholder="votre@email.com" class="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted focus:outline-none focus:border-accent-primary transition-colors" required data-astro-cid-5tznm7mj> ${renderComponent($$result3, "Button", $$Button, { "type": "submit", "size": "lg", "class": "whitespace-nowrap", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result4) => renderTemplate`
S'abonner
` })} </form> <p class="text-sm text-text-muted mt-4" data-astro-cid-5tznm7mj>
En vous inscrivant, vous acceptez notre politique de confidentialité.
</p> </div> ` })} </section> ` })}  ${renderScript($$result, "C:/MAMP/htdocs/rework/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/MAMP/htdocs/rework/src/pages/blog/index.astro", void 0);

const $$file = "C:/MAMP/htdocs/rework/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
