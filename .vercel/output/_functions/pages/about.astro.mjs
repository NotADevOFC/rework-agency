import { e as createAstro, f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BxQs--Zw.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Container } from '../chunks/BaseLayout_BKU1RhHw.mjs';
import { $ as $$Button } from '../chunks/Button_Dnng69pH.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rework.agency");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const team = [
    {
      name: "Alexandre Martin",
      role: "Fondateur & Lead Developer",
      bio: "Passionn\xE9 par le web depuis 15 ans, Alexandre a fond\xE9 Rework Agency avec la vision de cr\xE9er des exp\xE9riences digitales exceptionnelles.",
      initials: "AM",
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "Sophie Bernard",
      role: "UI/UX Designer",
      bio: "Experte en design d'interfaces, Sophie transforme les id\xE9es complexes en exp\xE9riences utilisateur intuitives et \xE9l\xE9gantes.",
      initials: "SB",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Thomas Dubois",
      role: "Full-Stack Developer",
      bio: "Sp\xE9cialiste React et Node.js, Thomas ma\xEEtrise les architectures modernes et les meilleures pratiques de d\xE9veloppement.",
      initials: "TD",
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Marie Laurent",
      role: "Project Manager",
      bio: "Marie assure la coordination parfaite entre \xE9quipes et clients, garantissant le succ\xE8s de chaque projet.",
      initials: "ML",
      color: "from-orange-500 to-amber-500"
    }
  ];
  const values = [
    {
      title: "Excellence",
      description: "Nous visons la perfection dans chaque pixel et chaque ligne de code.",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    },
    {
      title: "Innovation",
      description: "Nous explorons constamment les nouvelles technologies pour offrir le meilleur.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Transparence",
      description: "Communication claire et honn\xEAte \xE0 chaque \xE9tape de votre projet.",
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    },
    {
      title: "Collaboration",
      description: "Votre succ\xE8s est notre succ\xE8s. Nous travaillons ensemble vers vos objectifs.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    }
  ];
  const stats = [
    { value: "50+", label: "Projets livr\xE9s" },
    { value: "5+", label: "Ann\xE9es d'exp\xE9rience" },
    { value: "98%", label: "Clients satisfaits" },
    { value: "15+", label: "Technologies ma\xEEtris\xE9es" }
  ];
  const milestones = [
    { year: "2019", title: "Cr\xE9ation de Rework Agency", description: "Lancement de l'agence avec une vision : cr\xE9er des exp\xE9riences web exceptionnelles." },
    { year: "2020", title: "Premiers grands projets", description: "Collaboration avec des startups innovantes et premiers sites e-commerce \xE0 succ\xE8s." },
    { year: "2021", title: "Sp\xE9cialisation headless", description: "Adoption de l'architecture headless et WordPress d\xE9coupl\xE9 comme expertise principale." },
    { year: "2022", title: "Expansion de l'\xE9quipe", description: "L'\xE9quipe s'agrandit pour r\xE9pondre \xE0 une demande croissante." },
    { year: "2023", title: "Expertise Astro", description: "Adoption d'Astro comme framework principal pour des performances optimales." },
    { year: "2024", title: "Aujourd'hui", description: "Plus de 50 projets livr\xE9s et une vision tourn\xE9e vers l'innovation continue." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\xC0 propos", "description": "D\xE9couvrez l'\xE9quipe Rework Agency, notre histoire et nos valeurs. Experts en d\xE9veloppement web, e-commerce et WordPress headless depuis 2019.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative pt-32 pb-24 overflow-hidden" data-astro-cid-kh7btl4r> <!-- Background --> <div class="absolute inset-0 grid-bg opacity-30" data-astro-cid-kh7btl4r></div> <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent-primary/20 via-accent-secondary/10 to-transparent rounded-full blur-3xl" data-astro-cid-kh7btl4r></div> <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-secondary/15 to-transparent rounded-full blur-3xl" data-astro-cid-kh7btl4r></div> ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto text-center" data-astro-cid-kh7btl4r> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 reveal" data-astro-cid-kh7btl4r> <span class="w-2 h-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary animate-pulse" data-astro-cid-kh7btl4r></span> <span class="text-sm text-text-secondary" data-astro-cid-kh7btl4r>Notre histoire</span> </div> <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 reveal" data-astro-cid-kh7btl4r>
Créateurs d'expériences <span class="bg-gradient-to-r from-accent-primary via-purple-400 to-accent-secondary bg-clip-text text-transparent" data-astro-cid-kh7btl4r>digitales</span> </h1> <p class="text-xl text-text-secondary max-w-2xl mx-auto mb-12 reveal" data-astro-cid-kh7btl4r>
Nous sommes une équipe passionnée de développeurs et designers qui transforment
          les idées en expériences web mémorables depuis 2019.
</p> <!-- Stats --> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 reveal" data-astro-cid-kh7btl4r> ${stats.map((stat) => renderTemplate`<div class="relative group" data-astro-cid-kh7btl4r> <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-kh7btl4r></div> <div class="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm" data-astro-cid-kh7btl4r> <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-1" data-astro-cid-kh7btl4r> ${stat.value} </div> <div class="text-sm text-text-muted" data-astro-cid-kh7btl4r>${stat.label}</div> </div> </div>`)} </div> </div> ` })} </section>  <section class="py-24" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="grid lg:grid-cols-2 gap-16 items-center" data-astro-cid-kh7btl4r> <div class="reveal" data-astro-cid-kh7btl4r> <span class="text-accent-primary font-medium mb-4 block" data-astro-cid-kh7btl4r>Notre mission</span> <h2 class="text-4xl md:text-5xl font-bold mb-6" data-astro-cid-kh7btl4r>
Transformer vos idées en <span class="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent" data-astro-cid-kh7btl4r>réalité digitale</span> </h2> <p class="text-text-secondary text-lg mb-6" data-astro-cid-kh7btl4r>
Chez Rework Agency, nous croyons que chaque entreprise mérite une présence
            web exceptionnelle. Notre mission est de créer des solutions digitales qui
            non seulement répondent à vos besoins, mais dépassent vos attentes.
</p> <p class="text-text-secondary text-lg" data-astro-cid-kh7btl4r>
Nous combinons expertise technique, créativité et une approche centrée sur
            l'utilisateur pour livrer des projets qui font la différence.
</p> </div> <div class="grid grid-cols-2 gap-6 reveal" data-astro-cid-kh7btl4r> ${values.map((value) => renderTemplate`<div class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-all duration-500 group" data-astro-cid-kh7btl4r> <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" data-astro-cid-kh7btl4r> <svg class="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-kh7btl4r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(value.icon, "d")} data-astro-cid-kh7btl4r></path> </svg> </div> <h3 class="font-semibold text-lg mb-2" data-astro-cid-kh7btl4r>${value.title}</h3> <p class="text-text-secondary text-sm" data-astro-cid-kh7btl4r>${value.description}</p> </div>`)} </div> </div> ` })} </section>  <section class="py-24 bg-bg-secondary/50" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-16 reveal" data-astro-cid-kh7btl4r> <span class="text-accent-primary font-medium mb-4 block" data-astro-cid-kh7btl4r>L'équipe</span> <h2 class="text-4xl md:text-5xl font-bold mb-6" data-astro-cid-kh7btl4r>
Des experts <span class="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent" data-astro-cid-kh7btl4r>passionnés</span> </h2> <p class="text-text-secondary text-lg max-w-2xl mx-auto" data-astro-cid-kh7btl4r>
Une équipe pluridisciplinaire réunie par la passion du web et l'envie
          de créer des projets qui font la différence.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-kh7btl4r> ${team.map((member, index) => renderTemplate`<div class="reveal"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-kh7btl4r> <div class="group relative" data-astro-cid-kh7btl4r> <div${addAttribute(["absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl", [member.color]], "class:list")} data-astro-cid-kh7btl4r></div> <div class="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent-primary/50 transition-all duration-500 text-center" data-astro-cid-kh7btl4r> <!-- Avatar --> <div${addAttribute(["w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br flex items-center justify-center group-hover:scale-110 transition-transform duration-500", member.color], "class:list")} data-astro-cid-kh7btl4r> <span class="text-3xl font-bold text-white" data-astro-cid-kh7btl4r>${member.initials}</span> </div> <h3 class="font-semibold text-xl mb-1" data-astro-cid-kh7btl4r>${member.name}</h3> <p class="text-accent-primary text-sm mb-4" data-astro-cid-kh7btl4r>${member.role}</p> <p class="text-text-secondary text-sm" data-astro-cid-kh7btl4r>${member.bio}</p> <!-- Social Links --> <div class="flex justify-center gap-3 mt-6 pt-6 border-t border-white/10" data-astro-cid-kh7btl4r> <a href="#" class="w-10 h-10 rounded-lg bg-white/5 hover:bg-accent-primary/20 flex items-center justify-center transition-colors" data-astro-cid-kh7btl4r> <svg class="w-4 h-4 text-text-muted" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-kh7btl4r> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" data-astro-cid-kh7btl4r></path> </svg> </a> <a href="#" class="w-10 h-10 rounded-lg bg-white/5 hover:bg-accent-primary/20 flex items-center justify-center transition-colors" data-astro-cid-kh7btl4r> <svg class="w-4 h-4 text-text-muted" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-kh7btl4r> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-kh7btl4r></path> </svg> </a> </div> </div> </div> </div>`)} </div> ` })} </section>  <section class="py-24" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-16 reveal" data-astro-cid-kh7btl4r> <span class="text-accent-primary font-medium mb-4 block" data-astro-cid-kh7btl4r>Notre parcours</span> <h2 class="text-4xl md:text-5xl font-bold mb-6" data-astro-cid-kh7btl4r>
Une histoire de <span class="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent" data-astro-cid-kh7btl4r>croissance</span> </h2> </div> <div class="max-w-4xl mx-auto" data-astro-cid-kh7btl4r> <div class="relative" data-astro-cid-kh7btl4r> <!-- Timeline Line --> <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary" data-astro-cid-kh7btl4r></div> ${milestones.map((milestone, index) => renderTemplate`<div${addAttribute(["relative flex items-center gap-8 mb-12 reveal", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"], "class:list")}${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-kh7btl4r> <!-- Content --> <div${addAttribute(["flex-1 ml-20 md:ml-0", index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"], "class:list")} data-astro-cid-kh7btl4r> <span class="text-accent-primary font-bold text-lg" data-astro-cid-kh7btl4r>${milestone.year}</span> <h3 class="font-semibold text-xl mt-1 mb-2" data-astro-cid-kh7btl4r>${milestone.title}</h3> <p class="text-text-secondary" data-astro-cid-kh7btl4r>${milestone.description}</p> </div> <!-- Dot --> <div class="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary shadow-lg shadow-accent-primary/50" data-astro-cid-kh7btl4r></div> <!-- Empty space for alignment --> <div class="hidden md:block flex-1" data-astro-cid-kh7btl4r></div> </div>`)} </div> </div> ` })} </section>  <section class="py-32 relative overflow-hidden" data-astro-cid-kh7btl4r> <!-- Background --> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" data-astro-cid-kh7btl4r></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-full blur-3xl opacity-30" data-astro-cid-kh7btl4r></div> ${renderComponent($$result2, "Container", $$Container, { "class": "relative z-10", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div class="max-w-4xl mx-auto text-center reveal" data-astro-cid-kh7btl4r> <h2 class="text-4xl md:text-5xl font-bold mb-6" data-astro-cid-kh7btl4r>
Prêt à travailler <span class="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent" data-astro-cid-kh7btl4r>ensemble</span> ?
</h2> <p class="text-xl text-text-secondary mb-10 max-w-2xl mx-auto" data-astro-cid-kh7btl4r>
Nous serions ravis de discuter de votre projet et de voir comment nous pouvons
          vous aider à atteindre vos objectifs.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-astro-cid-kh7btl4r> ${renderComponent($$result3, "Button", $$Button, { "href": "/contact", "size": "lg", "class": "group", "data-astro-cid-kh7btl4r": true }, { "default": ($$result4) => renderTemplate` <span data-astro-cid-kh7btl4r>Démarrer un projet</span> <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-kh7btl4r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-kh7btl4r></path> </svg> ` })} ${renderComponent($$result3, "Button", $$Button, { "href": "/projets", "variant": "outline", "size": "lg", "data-astro-cid-kh7btl4r": true }, { "default": ($$result4) => renderTemplate`
Voir nos réalisations
` })} </div> </div> ` })} </section> ` })}  ${renderScript($$result, "C:/MAMP/htdocs/rework/src/pages/about.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/MAMP/htdocs/rework/src/pages/about.astro", void 0);

const $$file = "C:/MAMP/htdocs/rework/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
