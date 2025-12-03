import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BxQs--Zw.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Container } from '../chunks/BaseLayout_BKU1RhHw.mjs';
import { $ as $$Button } from '../chunks/Button_Dnng69pH.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page non trouv\xE9e", "description": "La page que vous recherchez n'existe pas ou a \xE9t\xE9 d\xE9plac\xE9e.", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[80vh] flex items-center justify-center relative overflow-hidden" data-astro-cid-zetdm5md> <!-- Background --> <div class="absolute inset-0 grid-bg opacity-30" data-astro-cid-zetdm5md></div> <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent-primary/20 via-accent-secondary/10 to-transparent rounded-full blur-3xl" data-astro-cid-zetdm5md></div> <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-accent-secondary/15 to-transparent rounded-full blur-3xl" data-astro-cid-zetdm5md></div> ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-zetdm5md": true }, { "default": ($$result3) => renderTemplate` <div class="max-w-2xl mx-auto text-center" data-astro-cid-zetdm5md> <!-- 404 Number --> <div class="mb-8" data-astro-cid-zetdm5md> <span class="text-[150px] md:text-[200px] font-bold leading-none bg-gradient-to-r from-accent-primary via-purple-400 to-accent-secondary bg-clip-text text-transparent opacity-20" data-astro-cid-zetdm5md>
404
</span> </div> <!-- Glitch Icon --> <div class="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 flex items-center justify-center" data-astro-cid-zetdm5md> <svg class="w-12 h-12 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-zetdm5md> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-zetdm5md></path> </svg> </div> <h1 class="text-4xl md:text-5xl font-bold mb-4" data-astro-cid-zetdm5md>
Page non <span class="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent" data-astro-cid-zetdm5md>trouvée</span> </h1> <p class="text-xl text-text-secondary mb-10" data-astro-cid-zetdm5md>
Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          Pas de panique, vous pouvez revenir à l'accueil ou explorer nos autres pages.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-astro-cid-zetdm5md> ${renderComponent($$result3, "Button", $$Button, { "href": "/", "size": "lg", "class": "group", "data-astro-cid-zetdm5md": true }, { "default": ($$result4) => renderTemplate` <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-zetdm5md> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-astro-cid-zetdm5md></path> </svg> <span data-astro-cid-zetdm5md>Retour à l'accueil</span> ` })} ${renderComponent($$result3, "Button", $$Button, { "href": "/contact", "variant": "outline", "size": "lg", "data-astro-cid-zetdm5md": true }, { "default": ($$result4) => renderTemplate`
Nous contacter
` })} </div> <!-- Quick Links --> <div class="mt-16 pt-8 border-t border-white/10" data-astro-cid-zetdm5md> <p class="text-text-muted text-sm mb-6" data-astro-cid-zetdm5md>Pages populaires</p> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-zetdm5md> <a href="/services" class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:border-accent-primary/50 transition-all text-sm" data-astro-cid-zetdm5md>
Services
</a> <a href="/projets" class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:border-accent-primary/50 transition-all text-sm" data-astro-cid-zetdm5md>
Projets
</a> <a href="/blog" class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:border-accent-primary/50 transition-all text-sm" data-astro-cid-zetdm5md>
Blog
</a> <a href="/about" class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:border-accent-primary/50 transition-all text-sm" data-astro-cid-zetdm5md>
À propos
</a> </div> </div> </div> ` })} </section> ` })} `;
}, "C:/MAMP/htdocs/rework/src/pages/404.astro", void 0);

const $$file = "C:/MAMP/htdocs/rework/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
