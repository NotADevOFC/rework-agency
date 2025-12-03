import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, o as Fragment } from '../chunks/astro/server_BxQs--Zw.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Container } from '../chunks/BaseLayout_BKU1RhHw.mjs';
import { $ as $$Card } from '../chunks/Card_BoCi4hJR.mjs';
import { i as isWordPressAvailable, f as fetchGraphQL } from '../chunks/wordpress_HYMlOqo-.mjs';
export { renderers } from '../renderers.mjs';

const $$TestGraphql = createComponent(async ($$result, $$props, $$slots) => {
  const TEST_QUERY = `
  query TestQuery {
    generalSettings {
      title
      description
      url
    }
    projects(first: 5) {
      nodes {
        id
        title
        slug
      }
    }
    posts(first: 5) {
      nodes {
        id
        title
        slug
      }
    }
  }
`;
  let wpAvailable = false;
  let data = null;
  let error = null;
  try {
    wpAvailable = await isWordPressAvailable();
    if (wpAvailable) {
      data = await fetchGraphQL(TEST_QUERY);
    }
  } catch (e) {
    error = e instanceof Error ? e.message : "Erreur inconnue";
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Test GraphQL", "description": "Page de test de la connexion WordPress GraphQL" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-32"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` <h1 class="text-4xl font-bold mb-8">Test GraphQL</h1>  ${renderComponent($$result3, "Card", $$Card, { "class": "mb-8" }, { "default": async ($$result4) => renderTemplate` <h2 class="text-xl font-semibold mb-4">Statut de connexion</h2> <div class="flex items-center gap-3"> <div${addAttribute(`w-4 h-4 rounded-full ${wpAvailable ? "bg-success" : "bg-error"}`, "class")}></div> <span${addAttribute(wpAvailable ? "text-success" : "text-error", "class")}> ${wpAvailable ? "WordPress GraphQL connecté" : "WordPress non disponible"} </span> </div> <p class="text-text-muted mt-2 text-sm">
URL: ${"https://admin.rework.agency/graphql"} </p> ` })} ${error && renderTemplate`${renderComponent($$result3, "Card", $$Card, { "class": "mb-8 border-error/50" }, { "default": async ($$result4) => renderTemplate` <h2 class="text-xl font-semibold mb-4 text-error">Erreur</h2> <pre class="text-sm text-error bg-error/10 p-4 rounded-lg overflow-auto">${error}</pre> ` })}`}${data && renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate`  ${renderComponent($$result4, "Card", $$Card, { "class": "mb-8" }, { "default": async ($$result5) => renderTemplate` <h2 class="text-xl font-semibold mb-4">Paramètres WordPress</h2> <dl class="space-y-2"> <div class="flex gap-2"> <dt class="text-text-muted">Titre:</dt> <dd>${data.generalSettings?.title || "Non défini"}</dd> </div> <div class="flex gap-2"> <dt class="text-text-muted">Description:</dt> <dd>${data.generalSettings?.description || "Non défini"}</dd> </div> <div class="flex gap-2"> <dt class="text-text-muted">URL:</dt> <dd>${data.generalSettings?.url || "Non défini"}</dd> </div> </dl> ` })}  ${renderComponent($$result4, "Card", $$Card, { "class": "mb-8" }, { "default": async ($$result5) => renderTemplate` <h2 class="text-xl font-semibold mb-4">
Projets (${data.projects?.nodes?.length || 0})
</h2> ${data.projects?.nodes?.length > 0 ? renderTemplate`<ul class="space-y-2"> ${data.projects.nodes.map((project) => renderTemplate`<li class="flex items-center gap-2"> <span class="w-2 h-2 rounded-full bg-accent-primary"></span> <span>${project.title}</span> <span class="text-text-muted text-sm">/${project.slug}</span> </li>`)} </ul>` : renderTemplate`<p class="text-text-muted">Aucun projet trouvé. Créez-en dans WordPress Admin.</p>`}` })}  ${renderComponent($$result4, "Card", $$Card, { "class": "mb-8" }, { "default": async ($$result5) => renderTemplate` <h2 class="text-xl font-semibold mb-4">
Articles (${data.posts?.nodes?.length || 0})
</h2> ${data.posts?.nodes?.length > 0 ? renderTemplate`<ul class="space-y-2"> ${data.posts.nodes.map((post) => renderTemplate`<li class="flex items-center gap-2"> <span class="w-2 h-2 rounded-full bg-accent-secondary"></span> <span>${post.title}</span> <span class="text-text-muted text-sm">/${post.slug}</span> </li>`)} </ul>` : renderTemplate`<p class="text-text-muted">Aucun article trouvé.</p>`}` })} ` })}`} ${renderComponent($$result3, "Card", $$Card, { "hover": false }, { "default": async ($$result4) => renderTemplate` <h2 class="text-xl font-semibold mb-4">Debug</h2> <pre class="text-xs text-text-muted bg-bg-tertiary p-4 rounded-lg overflow-auto max-h-64">${JSON.stringify({ wpAvailable, data, error }, null, 2)}
        </pre> ` })} <div class="mt-8"> <a href="/" class="text-accent-primary hover:underline">&larr; Retour à l'accueil</a> </div> ` })} </section> ` })}`;
}, "C:/MAMP/htdocs/rework/src/pages/test-graphql.astro", void 0);
const $$file = "C:/MAMP/htdocs/rework/src/pages/test-graphql.astro";
const $$url = "/test-graphql";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestGraphql,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
