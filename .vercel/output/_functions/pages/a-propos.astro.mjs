import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_BxQs--Zw.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Container } from '../chunks/BaseLayout_BKU1RhHw.mjs';
import { $ as $$Card } from '../chunks/Card_BoCi4hJR.mjs';
import { $ as $$Button } from '../chunks/Button_Dnng69pH.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rework.agency");
const $$GradientBlob = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GradientBlob;
  const { class: className, size = "md", color = "mixed" } = Astro2.props;
  const sizes = {
    sm: "w-64 h-64",
    md: "w-96 h-96",
    lg: "w-[500px] h-[500px]"
  };
  const colors = {
    primary: "bg-accent-primary/30",
    secondary: "bg-accent-secondary/30",
    mixed: "bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "absolute rounded-full blur-3xl opacity-50 pointer-events-none blob-animate",
    sizes[size],
    colors[color],
    className
  ], "class:list")} aria-hidden="true"></div>`;
}, "C:/MAMP/htdocs/rework/src/components/ui/GradientBlob.astro", void 0);

const $$APropos = createComponent(($$result, $$props, $$slots) => {
  const values = [
    {
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque ligne de code et chaque pixel de design.",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    },
    {
      title: "Innovation",
      description: "Nous restons \xE0 la pointe des technologies pour offrir les meilleures solutions.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Transparence",
      description: "Communication claire et honn\xEAte \xE0 chaque \xE9tape de votre projet.",
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    },
    {
      title: "Engagement",
      description: "Votre succ\xE8s est notre priorit\xE9. Nous nous impliquons \xE0 100% dans chaque projet.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    }
  ];
  const stats = [
    { value: "50+", label: "Projets livr\xE9s" },
    { value: "98%", label: "Clients satisfaits" },
    { value: "5+", label: "Ann\xE9es d'exp\xE9rience" },
    { value: "24h", label: "Temps de r\xE9ponse" }
  ];
  const team = [
    {
      name: "Alexandre Martin",
      role: "Fondateur & Lead Developer",
      bio: "Expert en d\xE9veloppement web avec plus de 10 ans d'exp\xE9rience."
    },
    {
      name: "Sophie Bernard",
      role: "UI/UX Designer",
      bio: "Passionn\xE9e par la cr\xE9ation d'exp\xE9riences utilisateur m\xE9morables."
    },
    {
      name: "Thomas Dubois",
      role: "Full-Stack Developer",
      bio: "Sp\xE9cialiste React et Node.js, amoureux du code propre."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\xC0 propos", "description": "D\xE9couvrez Rework Agency, votre partenaire de confiance pour le d\xE9veloppement web et e-commerce. Notre \xE9quipe, nos valeurs, notre vision." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="pt-32 pb-12 relative overflow-hidden"> <div class="absolute inset-0 grid-bg opacity-50"></div> ${renderComponent($$result2, "GradientBlob", $$GradientBlob, { "class": "-top-48 right-1/4", "size": "lg", "color": "mixed" })} ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10" }, { "default": ($$result3) => renderTemplate` <div class="max-w-3xl"> <h1 class="text-5xl md:text-6xl font-bold tracking-tight mb-6">
Une équipe <span class="gradient-text">passionnée</span> </h1> <p class="text-xl text-text-secondary">
Nous sommes une agence digitale spécialisée dans la création d'expériences web
          modernes et performantes. Notre mission : transformer vos idées en succès numériques.
</p> </div> ` })} </section>  <section class="py-20"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="grid lg:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-3xl md:text-4xl font-bold mb-6">Notre histoire</h2> <div class="space-y-4 text-text-secondary"> <p>
Fondée en 2019, Rework Agency est née d'une conviction simple : le web peut être
              à la fois beau, rapide et accessible à tous.
</p> <p>
Après des années passées à travailler pour de grandes agences et startups,
              nous avons décidé de créer notre propre structure, avec une approche différente :
              un accompagnement personnalisé et une attention particulière aux détails.
</p> <p>
Aujourd'hui, nous accompagnons des entreprises de toutes tailles dans leur
              transformation digitale, du site vitrine à la plateforme e-commerce complexe.
</p> </div> </div> <div class="relative"> ${renderComponent($$result3, "Card", $$Card, { "hover": false, "class": "aspect-square flex items-center justify-center" }, { "default": ($$result4) => renderTemplate` <div class="text-center"> <div class="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center"> <span class="text-4xl font-bold text-white">R</span> </div> <p class="text-text-muted">Rework Agency</p> </div> ` })} </div> </div> ` })} </section>  <section class="py-20 bg-bg-secondary/50"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">Nos valeurs</h2> <p class="text-text-secondary max-w-2xl mx-auto">
Les principes qui guident notre travail au quotidien.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${values.map((value) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "class": "text-center" }, { "default": ($$result4) => renderTemplate` <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center"> <svg class="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${addAttribute(value.icon, "d")}></path> </svg> </div> <h3 class="text-lg font-semibold mb-2">${value.title}</h3> <p class="text-text-secondary text-sm">${value.description}</p> ` })}`)} </div> ` })} </section>  <section class="py-20"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="grid grid-cols-2 md:grid-cols-4 gap-8"> ${stats.map((stat) => renderTemplate`<div class="text-center"> <div class="text-4xl md:text-5xl font-bold gradient-text mb-2">${stat.value}</div> <div class="text-text-muted">${stat.label}</div> </div>`)} </div> ` })} </section>  <section class="py-20 bg-bg-secondary/50"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4">Notre équipe</h2> <p class="text-text-secondary max-w-2xl mx-auto">
Des experts passionnés à votre service.
</p> </div> <div class="grid md:grid-cols-3 gap-8"> ${team.map((member) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "class": "text-center" }, { "default": ($$result4) => renderTemplate` <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center"> <span class="text-2xl font-semibold text-accent-primary"> ${member.name.split(" ").map((n) => n[0]).join("")} </span> </div> <h3 class="text-lg font-semibold mb-1">${member.name}</h3> <p class="text-accent-primary text-sm mb-3">${member.role}</p> <p class="text-text-secondary text-sm">${member.bio}</p> ` })}`)} </div> ` })} </section>  <section class="py-20 relative overflow-hidden"> ${renderComponent($$result2, "GradientBlob", $$GradientBlob, { "class": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "size": "lg", "color": "mixed" })} ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10" }, { "default": ($$result3) => renderTemplate` <div class="glass p-8 md:p-12 rounded-3xl text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-4">
Envie de travailler ensemble ?
</h2> <p class="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
Nous serions ravis de discuter de votre projet et de voir comment nous pouvons vous aider.
</p> ${renderComponent($$result3, "Button", $$Button, { "href": "/contact", "size": "lg" }, { "default": ($$result4) => renderTemplate`
Contactez-nous
` })} </div> ` })} </section> ` })}`;
}, "C:/MAMP/htdocs/rework/src/pages/a-propos.astro", void 0);

const $$file = "C:/MAMP/htdocs/rework/src/pages/a-propos.astro";
const $$url = "/a-propos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$APropos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
