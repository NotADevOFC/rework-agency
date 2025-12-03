import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BxQs--Zw.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Container } from '../chunks/BaseLayout_BKU1RhHw.mjs';
export { renderers } from '../renderers.mjs';

const $$MentionsLegales = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Mentions l\xE9gales", "description": "Mentions l\xE9gales de Rework Agency - Informations sur l'\xE9diteur, l'h\xE9bergeur et les conditions d'utilisation du site." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pt-32 pb-24"> ${renderComponent($$result2, "Container", $$Container, { "size": "md" }, { "default": ($$result3) => renderTemplate` <h1 class="text-4xl md:text-5xl font-bold mb-8">Mentions légales</h1> <div class="prose prose-invert max-w-none space-y-8"> <p class="text-text-secondary text-lg">
Dernière mise à jour : ${(/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })} </p> <section class="space-y-4"> <h2 class="text-2xl font-semibold">1. Éditeur du site</h2> <div class="glass p-6 rounded-xl"> <p class="mb-2"><strong>Rework Agency</strong></p> <p class="text-text-secondary">
[Forme juridique]<br>
Capital social : [Montant] €<br>
RCS [Ville] : [Numéro]<br>
SIRET : [Numéro]<br>
TVA Intracommunautaire : [Numéro]
</p> <p class="text-text-secondary mt-4"> <strong>Siège social :</strong><br>
[Adresse]<br>
[Code postal] [Ville]<br>
France
</p> <p class="text-text-secondary mt-4"> <strong>Contact :</strong><br>
Email : contact@rework-agency.com<br>
Téléphone : +33 1 23 45 67 89
</p> </div> </section> <section class="space-y-4"> <h2 class="text-2xl font-semibold">2. Directeur de la publication</h2> <p class="text-text-secondary">
[Nom du directeur de publication], en qualité de [fonction].
</p> </section> <section class="space-y-4"> <h2 class="text-2xl font-semibold">3. Hébergement</h2> <div class="glass p-6 rounded-xl"> <p class="mb-2"><strong>Vercel Inc.</strong></p> <p class="text-text-secondary">
340 S Lemon Ave #4133<br>
Walnut, CA 91789<br>
États-Unis
</p> </div> </section> <section class="space-y-4"> <h2 class="text-2xl font-semibold">4. Propriété intellectuelle</h2> <p class="text-text-secondary">
L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
            et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour
            les documents téléchargeables et les représentations iconographiques et photographiques.
</p> <p class="text-text-secondary">
La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement
            interdite sauf autorisation expresse de Rework Agency.
</p> </section> <section class="space-y-4"> <h2 class="text-2xl font-semibold">5. Données personnelles</h2> <p class="text-text-secondary">
Les informations recueillies via le formulaire de contact sont enregistrées dans un fichier
            informatisé par Rework Agency pour la gestion de notre relation commerciale.
</p> <p class="text-text-secondary">
Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès
            aux données vous concernant et les faire rectifier en contactant : contact@rework-agency.com
</p> <p class="text-text-secondary">
Pour plus d'informations, consultez notre
<a href="/politique-confidentialite" class="text-accent-primary hover:underline">politique de confidentialité</a>.
</p> </section> <section class="space-y-4"> <h2 class="text-2xl font-semibold">6. Cookies</h2> <p class="text-text-secondary">
Ce site utilise des cookies pour améliorer l'expérience utilisateur et mesurer l'audience.
            En naviguant sur ce site, vous acceptez l'utilisation de cookies conformément à notre
            politique de confidentialité.
</p> </section> <section class="space-y-4"> <h2 class="text-2xl font-semibold">7. Liens hypertextes</h2> <p class="text-text-secondary">
Les liens hypertextes mis en place dans le cadre du présent site internet en direction
            d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité
            de Rework Agency.
</p> </section> <section class="space-y-4"> <h2 class="text-2xl font-semibold">8. Droit applicable</h2> <p class="text-text-secondary">
Le présent site est soumis au droit français. En cas de litige, les tribunaux français
            seront seuls compétents.
</p> </section> </div> <div class="mt-12 pt-8 border-t border-white/10"> <a href="/" class="text-accent-primary hover:underline">&larr; Retour à l'accueil</a> </div> ` })} </section> ` })}`;
}, "C:/MAMP/htdocs/rework/src/pages/mentions-legales.astro", void 0);

const $$file = "C:/MAMP/htdocs/rework/src/pages/mentions-legales.astro";
const $$url = "/mentions-legales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MentionsLegales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
