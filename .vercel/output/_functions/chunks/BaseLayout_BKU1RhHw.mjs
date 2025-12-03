import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate, l as renderScript, k as renderComponent, o as Fragment, u as unescapeHTML, p as defineScriptVars, q as renderHead } from './astro/server_BxQs--Zw.mjs';
import 'piccolore';
/* empty css                            */
import 'clsx';

const $$Astro$6 = createAstro("https://rework.agency");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className, size = "lg" } = Astro2.props;
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mx-auto px-4 sm:px-6 lg:px-8 w-full", sizes[size], className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/MAMP/htdocs/rework/src/components/ui/Container.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" type="button" class="theme-toggle group relative w-10 h-10 flex items-center justify-center rounded-full glass text-text-secondary hover:text-white transition-all duration-300" aria-label="Changer de thème" data-astro-cid-lfoluaxz> <!-- Sun icon (visible in dark mode) --> <svg class="sun-icon w-5 h-5 absolute transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-lfoluaxz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-lfoluaxz></path> </svg> <!-- Moon icon (visible in light mode) --> <svg class="moon-icon w-5 h-5 absolute transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-lfoluaxz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-astro-cid-lfoluaxz></path> </svg> <!-- Glow effect on hover --> <div class="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark-glow" data-astro-cid-lfoluaxz></div> <div class="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 light-glow" data-astro-cid-lfoluaxz></div> </button>  ${renderScript($$result, "C:/MAMP/htdocs/rework/src/components/ui/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/MAMP/htdocs/rework/src/components/ui/ThemeToggle.astro", void 0);

const $$Astro$5 = createAstro("https://rework.agency");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projets", href: "/projets" },
    { name: "Blog", href: "/blog" },
    { name: "\xC0 propos", href: "/a-propos" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" data-astro-cid-qlfjksao> <!-- Background with blur - initially transparent --> <div class="header-bg absolute inset-0 bg-bg-primary/0 backdrop-blur-0 border-b border-transparent transition-all duration-300" data-astro-cid-qlfjksao></div> ${renderComponent($$result, "Container", $$Container, { "class": "relative", "data-astro-cid-qlfjksao": true }, { "default": ($$result2) => renderTemplate` <nav class="flex items-center justify-between h-20" data-astro-cid-qlfjksao> <!-- Logo --> <a href="/" class="flex items-center gap-3 group" data-astro-cid-qlfjksao> <div class="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300" data-astro-cid-qlfjksao> <span class="text-white font-bold text-lg" data-astro-cid-qlfjksao>R</span> <!-- Shine effect --> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" data-astro-cid-qlfjksao></div> </div> <div class="flex flex-col" data-astro-cid-qlfjksao> <span class="text-lg font-bold text-white tracking-tight" data-astro-cid-qlfjksao>
Rework
</span> <span class="text-[10px] text-text-muted uppercase tracking-widest hidden sm:block" data-astro-cid-qlfjksao>
Digital Agency
</span> </div> </a> <!-- Desktop Navigation --> <div class="hidden md:flex items-center" data-astro-cid-qlfjksao> <div class="flex items-center gap-1 p-1.5 rounded-full glass" data-astro-cid-qlfjksao> ${navigation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
    currentPath === item.href ? "text-white" : "text-text-secondary hover:text-white"
  ], "class:list")} data-astro-cid-qlfjksao> ${currentPath === item.href && renderTemplate`<span class="absolute inset-0 rounded-full bg-white/10 border border-white/10" data-astro-cid-qlfjksao></span>`} <span class="relative z-10" data-astro-cid-qlfjksao>${item.name}</span> </a>`)} </div> </div> <!-- CTA + Theme Toggle + Mobile Menu --> <div class="flex items-center gap-3" data-astro-cid-qlfjksao> <!-- Theme Toggle --> ${renderComponent($$result2, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-qlfjksao": true })} <a href="/contact" class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary text-white font-semibold text-sm hover:bg-accent-primary/90 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300" data-astro-cid-qlfjksao>
Nous contacter
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-qlfjksao></path> </svg> </a> <!-- Mobile Menu Button --> <button type="button" class="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full glass text-text-secondary hover:text-white transition-colors" aria-label="Menu" id="mobile-menu-button" data-astro-cid-qlfjksao> <div class="menu-icon w-5 h-4 relative flex flex-col justify-between" data-astro-cid-qlfjksao> <span class="menu-line w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center" data-astro-cid-qlfjksao></span> <span class="menu-line w-full h-0.5 bg-current rounded-full transition-all duration-300" data-astro-cid-qlfjksao></span> <span class="menu-line w-3/4 h-0.5 bg-current rounded-full transition-all duration-300 origin-center ml-auto" data-astro-cid-qlfjksao></span> </div> </button> </div> </nav> ` })} <!-- Mobile Menu --> <div id="mobile-menu" class="mobile-menu md:hidden fixed inset-0 top-20 bg-bg-primary/98 backdrop-blur-xl opacity-0 invisible transition-all duration-300" data-astro-cid-qlfjksao> ${renderComponent($$result, "Container", $$Container, { "class": "h-full", "data-astro-cid-qlfjksao": true }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col h-full py-8" data-astro-cid-qlfjksao> <!-- Navigation Links --> <nav class="flex-1 space-y-2" data-astro-cid-qlfjksao> ${navigation.map((item, index) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "mobile-nav-item block px-6 py-4 text-2xl font-semibold rounded-2xl transition-all duration-300 opacity-0 translate-y-4",
    currentPath === item.href ? "text-white bg-white/5" : "text-text-secondary hover:text-white hover:bg-white/5"
  ], "class:list")}${addAttribute(`transition-delay: ${index * 50}ms`, "style")} data-astro-cid-qlfjksao> <span class="flex items-center justify-between" data-astro-cid-qlfjksao> ${item.name} <svg class="w-5 h-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-qlfjksao></path> </svg> </span> </a>`)} </nav> <!-- CTA Button --> <div class="mobile-nav-item pt-8 border-t border-white/5 opacity-0 translate-y-4" style="transition-delay: 250ms" data-astro-cid-qlfjksao> <a href="/contact" class="flex items-center justify-center gap-3 w-full px-8 py-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold text-lg" data-astro-cid-qlfjksao>
Démarrer un projet
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-qlfjksao></path> </svg> </a> </div> </div> ` })} </div> </header> ${renderScript($$result, "C:/MAMP/htdocs/rework/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/MAMP/htdocs/rework/src/components/layout/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const quickLinks = [
    { name: "Services", href: "/services" },
    { name: "Projets", href: "/projets" },
    { name: "Blog", href: "/blog" },
    { name: "\xC0 propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" }
  ];
  const services = [
    { name: "D\xE9veloppement Web", href: "/services#web" },
    { name: "E-commerce", href: "/services#ecommerce" },
    { name: "Applications", href: "/services#apps" },
    { name: "UI/UX Design", href: "/services#design" }
  ];
  const legalLinks = [
    { name: "Mentions l\xE9gales", href: "/mentions-legales" },
    { name: "Politique de confidentialit\xE9", href: "/politique-confidentialite" }
  ];
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/rework-agency",
      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/rework_agency",
      icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    },
    {
      name: "GitHub",
      href: "https://github.com/rework-agency",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    },
    {
      name: "Dribbble",
      href: "https://dribbble.com/rework-agency",
      icon: "M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm7.885 5.505a10.188 10.188 0 012.091 5.97c-.31-.056-3.388-.687-6.494-.298-.072-.152-.142-.307-.216-.464-.204-.463-.423-.93-.65-1.39 3.45-1.407 5.015-3.42 5.269-3.818zM12 1.837c2.491 0 4.77.894 6.54 2.376-.21.356-1.632 2.238-4.928 3.466a52.546 52.546 0 00-3.72-5.822A10.177 10.177 0 0112 1.837zM7.604 2.62c.68.894 2.085 2.828 3.756 5.727-4.737 1.26-8.917 1.239-9.37 1.235a10.21 10.21 0 015.614-6.962zM1.835 12.008v-.308c.444.008 5.348.069 10.404-1.448.29.567.568 1.142.826 1.716l-.372.106c-5.281 1.702-8.087 6.349-8.351 6.79a10.18 10.18 0 01-2.507-6.856zm3.996 7.886c.166-.319 2.278-4.386 7.96-6.384.018-.006.035-.01.052-.016a51.57 51.57 0 012.195 7.79 10.183 10.183 0 01-10.207-1.39zm12.13.318a48.157 48.157 0 00-2.02-7.334c2.874-.458 5.392.283 5.712.39a10.199 10.199 0 01-3.692 6.944z"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative overflow-hidden"> <!-- Background Effects --> <div class="absolute inset-0"> <div class="absolute inset-0 grid-bg opacity-10"></div> <div class="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-accent-primary/10 rounded-full blur-[150px]"></div> <div class="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-accent-secondary/10 rounded-full blur-[150px]"></div> </div> <!-- Top CTA Banner --> <div class="relative border-y border-white/5 bg-gradient-to-r from-bg-primary via-bg-secondary/50 to-bg-primary"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="py-16 flex flex-col lg:flex-row items-center justify-between gap-8"> <div class="text-center lg:text-left"> <h3 class="text-2xl md:text-3xl font-bold mb-2">
Prêt à <span class="gradient-text">transformer</span> votre vision ?
</h3> <p class="text-text-secondary">
Discutons de votre projet et créons quelque chose d'extraordinaire ensemble.
</p> </div> <a href="/contact" class="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-bg-primary font-semibold hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300"> <span>Démarrer un projet</span> <div class="w-8 h-8 rounded-full bg-bg-primary/10 flex items-center justify-center group-hover:bg-bg-primary/20 transition-colors"> <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </div> </a> </div> ` })} </div> <!-- Main Footer Content --> ${renderComponent($$result, "Container", $$Container, { "class": "relative z-10" }, { "default": ($$result2) => renderTemplate` <div class="py-20"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"> <!-- Brand Column --> <div class="lg:col-span-5"> <a href="/" class="inline-flex items-center gap-3 group mb-6"> <div class="relative w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary p-0.5 group-hover:scale-105 transition-transform duration-300"> <div class="w-full h-full rounded-[10px] bg-bg-primary flex items-center justify-center"> <span class="text-xl font-bold gradient-text-static">R</span> </div> <!-- Glow effect --> <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div> </div> <div> <span class="text-xl font-bold text-white tracking-tight block">Rework</span> <span class="text-xs text-text-muted uppercase tracking-widest">Digital Agency</span> </div> </a> <p class="text-text-secondary max-w-sm mb-8 leading-relaxed">
Nous transformons vos idées en expériences digitales exceptionnelles.
            Design moderne, code performant, résultats mesurables.
</p> <!-- Social Links --> <div class="flex items-center gap-3"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} target="_blank" rel="noopener noreferrer" class="group/social relative w-11 h-11 flex items-center justify-center rounded-xl glass text-text-muted hover:text-white transition-all duration-300"${addAttribute(social.name, "aria-label")}> <svg class="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24"> <path${addAttribute(social.icon, "d")}></path> </svg> <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div> </a>`)} </div> </div> <!-- Navigation Column --> <div class="lg:col-span-2"> <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2"> <span class="w-8 h-px bg-gradient-to-r from-accent-primary to-transparent"></span>
Navigation
</h4> <ul class="space-y-4"> ${quickLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="group/link inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors"> <span class="w-0 h-px bg-accent-primary group-hover/link:w-3 transition-all duration-300"></span> ${link.name} </a> </li>`)} </ul> </div> <!-- Services Column --> <div class="lg:col-span-2"> <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2"> <span class="w-8 h-px bg-gradient-to-r from-accent-secondary to-transparent"></span>
Services
</h4> <ul class="space-y-4"> ${services.map((service) => renderTemplate`<li> <a${addAttribute(service.href, "href")} class="group/link inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors"> <span class="w-0 h-px bg-accent-secondary group-hover/link:w-3 transition-all duration-300"></span> ${service.name} </a> </li>`)} </ul> </div> <!-- Contact Column --> <div class="lg:col-span-3"> <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2"> <span class="w-8 h-px bg-gradient-to-r from-accent-tertiary to-transparent"></span>
Contact
</h4> <ul class="space-y-4"> <li> <a href="mailto:hello@rework.agency" class="group/contact flex items-center gap-3 text-text-secondary hover:text-white transition-colors"> <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/contact:bg-white/10 transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <span>hello@rework.agency</span> </a> </li> <li> <a href="tel:+33123456789" class="group/contact flex items-center gap-3 text-text-secondary hover:text-white transition-colors"> <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover/contact:bg-white/10 transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <span>+33 1 23 45 67 89</span> </a> </li> <li class="flex items-start gap-3 text-text-secondary"> <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <span>Paris, France<br><span class="text-text-muted text-sm">Remote Friendly</span></span> </li> </ul> </div> </div> </div> ` })} <!-- Bottom Bar --> <div class="relative border-t border-white/5"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="py-8 flex flex-col md:flex-row items-center justify-between gap-4"> <p class="text-sm text-text-muted text-center md:text-left">
&copy; ${currentYear} Rework Agency. Tous droits réservés.
</p> <div class="flex items-center gap-6"> ${legalLinks.map((link, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <a${addAttribute(link.href, "href")} class="text-sm text-text-muted hover:text-white transition-colors"> ${link.name} </a> ${index < legalLinks.length - 1 && renderTemplate`<span class="w-1 h-1 rounded-full bg-white/20"></span>`}` })}`)} </div> <div class="flex items-center gap-2 text-sm text-text-muted"> <span>Fait avec</span> <span class="text-red-500 animate-pulse">♥</span> <span>et beaucoup de</span> <span class="text-amber-500">☕</span> </div> </div> ` })} </div> </footer>`;
}, "C:/MAMP/htdocs/rework/src/components/layout/Footer.astro", void 0);

const $$Astro$4 = createAstro("https://rework.agency");
const $$TechBackground = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TechBackground;
  const { opacity = 0.5 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="tech-background"${addAttribute(`--bg-opacity: ${opacity}`, "style")} data-astro-cid-w6j3rlmx> <!-- Canvas for particle network --> <canvas id="particle-canvas" data-astro-cid-w6j3rlmx></canvas> <!-- Floating particles (CSS) --> <div class="particles" data-astro-cid-w6j3rlmx> ${[...Array(30)].map((_, i) => renderTemplate`<div class="particle"${addAttribute(`
          --x: ${Math.random() * 100}vw;
          --y: ${Math.random() * 100}vh;
          --duration: ${20 + Math.random() * 30}s;
          --delay: ${-Math.random() * 20}s;
          --size: ${2 + Math.random() * 3}px;
        `, "style")} data-astro-cid-w6j3rlmx></div>`)} </div> <!-- Horizontal scan line --> <div class="scan-line" data-astro-cid-w6j3rlmx></div> <!-- Grid overlay --> <div class="grid-overlay" data-astro-cid-w6j3rlmx></div> <!-- Glow orbs --> <div class="orb orb-1" data-astro-cid-w6j3rlmx></div> <div class="orb orb-2" data-astro-cid-w6j3rlmx></div> <div class="orb orb-3" data-astro-cid-w6j3rlmx></div> <!-- Data streams --> <div class="streams" data-astro-cid-w6j3rlmx> ${[...Array(4)].map((_, i) => renderTemplate`<div class="stream"${addAttribute(`
          --y: ${20 + i * 20}%;
          --duration: ${4 + Math.random() * 3}s;
          --delay: ${i * 1.2}s;
          --width: ${80 + Math.random() * 120}px;
        `, "style")} data-astro-cid-w6j3rlmx></div>`)} </div> </div>  ${renderScript($$result, "C:/MAMP/htdocs/rework/src/components/ui/TechBackground.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/MAMP/htdocs/rework/src/components/ui/TechBackground.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$3 = createAstro("https://rework.agency");
const $$SchemaOrg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SchemaOrg;
  const { type, data = {} } = Astro2.props;
  const baseUrl = "https://rework.agency";
  const schemas = {
    Organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Rework Agency",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: "Agence de d\xE9veloppement web et e-commerce. Sites modernes, performants et sur mesure.",
      foundingDate: "2023",
      founders: [
        {
          "@type": "Person",
          name: "Rework Team"
        }
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33-1-23-45-67-89",
        contactType: "customer service",
        availableLanguage: ["French", "English"]
      },
      sameAs: [
        "https://linkedin.com/company/rework-agency",
        "https://twitter.com/rework_agency",
        "https://github.com/rework-agency"
      ],
      ...data
    },
    WebSite: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Rework Agency",
      url: baseUrl,
      description: "Agence de d\xE9veloppement web et e-commerce. Sites modernes, performants et sur mesure.",
      publisher: {
        "@type": "Organization",
        name: "Rework Agency",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`
        }
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/recherche?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      },
      ...data
    },
    Article: {
      "@context": "https://schema.org",
      "@type": "Article",
      publisher: {
        "@type": "Organization",
        name: "Rework Agency",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`
        }
      },
      ...data
    },
    Service: {
      "@context": "https://schema.org",
      "@type": "Service",
      provider: {
        "@type": "Organization",
        name: "Rework Agency"
      },
      areaServed: {
        "@type": "Country",
        name: "France"
      },
      ...data
    },
    LocalBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": baseUrl,
      name: "Rework Agency",
      image: `${baseUrl}/logo.png`,
      url: baseUrl,
      telephone: "+33-1-23-45-67-89",
      email: "hello@rework.agency",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.8566,
        longitude: 2.3522
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      },
      priceRange: "\u20AC\u20AC\u20AC",
      ...data
    }
  };
  const schema = schemas[type];
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)));
}, "C:/MAMP/htdocs/rework/src/components/seo/SchemaOrg.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://rework.agency");
const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Analytics;
  const plausibleDomain = "rework.agency";
  const gaId = undefined                            ;
  const isProd = true;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", `
  const COOKIE_CONSENT_KEY = 'cookie-consent';

  function getConsent() {
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Ignore parsing errors
    }
    return null;
  }

  function loadPlausible() {
    if (!plausibleDomain || !isProd) return;

    // Check if already loaded
    if (document.querySelector('script[data-domain="' + plausibleDomain + '"]')) return;

    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = plausibleDomain;
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  }

  function loadGoogleAnalytics() {
    if (!gaId || !isProd) return;

    // Check if already loaded
    if (document.querySelector('script[src*="googletagmanager.com/gtag"]')) return;

    // Load gtag.js
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
    document.head.appendChild(gtagScript);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  }

  function loadAnalytics() {
    const consent = getConsent();

    // Only load if user has accepted and analytics is enabled
    if (consent && consent.accepted && consent.analytics) {
      loadPlausible();
      loadGoogleAnalytics();
    }
  }

  // Load on page load if consent exists
  loadAnalytics();

  // Listen for consent changes
  window.addEventListener('cookie-consent-changed', (e) => {
    const consent = e.detail;
    if (consent.accepted && consent.analytics) {
      loadAnalytics();
    }
  });

  // Re-check after Astro page transitions
  document.addEventListener('astro:page-load', loadAnalytics);
})();</script>`])), defineScriptVars({ plausibleDomain, gaId, isProd }));
}, "C:/MAMP/htdocs/rework/src/components/seo/Analytics.astro", void 0);

const $$Astro$1 = createAstro("https://rework.agency");
const $$CookieBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CookieBanner;
  return renderTemplate`${maybeRenderHead()}<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transform translate-y-full transition-transform duration-500" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description"> <div class="max-w-4xl mx-auto"> <div class="glass rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl"> <div class="flex flex-col lg:flex-row lg:items-center gap-6"> <!-- Content --> <div class="flex-1"> <div class="flex items-center gap-3 mb-3"> <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center"> <svg class="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> </div> <h2 id="cookie-title" class="text-lg font-semibold">Nous respectons votre vie privee</h2> </div> <p id="cookie-description" class="text-text-secondary text-sm leading-relaxed">
Nous utilisons des cookies pour analyser le trafic et ameliorer votre experience.
            En cliquant sur "Accepter", vous consentez a l'utilisation de cookies analytiques.
<a href="/politique-confidentialite" class="text-accent-primary hover:underline ml-1">
En savoir plus
</a> </p> </div> <!-- Actions --> <div class="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0"> <button id="cookie-reject" type="button" class="px-6 py-3 rounded-xl border border-white/10 text-text-secondary hover:text-white hover:bg-white/5 transition-all text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-primary">
Refuser
</button> <button id="cookie-accept" type="button" class="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium text-sm hover:opacity-90 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-bg-primary">
Accepter
</button> </div> </div> <!-- Cookie preferences (expandable) --> <details class="mt-4 pt-4 border-t border-white/5"> <summary class="text-sm text-text-muted cursor-pointer hover:text-text-secondary transition-colors">
Personnaliser mes choix
</summary> <div class="mt-4 space-y-4"> <!-- Essential cookies --> <div class="flex items-center justify-between p-4 rounded-xl bg-white/5"> <div> <p class="font-medium text-sm">Cookies essentiels</p> <p class="text-text-muted text-xs mt-1">Necessaires au fonctionnement du site</p> </div> <div class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
Toujours actif
</div> </div> <!-- Analytics cookies --> <div class="flex items-center justify-between p-4 rounded-xl bg-white/5"> <div> <p class="font-medium text-sm">Cookies analytiques</p> <p class="text-text-muted text-xs mt-1">Nous aident a comprendre comment vous utilisez le site</p> </div> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="cookie-analytics" class="sr-only peer" checked> <div class="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-primary"></div> </label> </div> </div> </details> </div> </div> </div> ${renderScript($$result, "C:/MAMP/htdocs/rework/src/components/ui/CookieBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/MAMP/htdocs/rework/src/components/ui/CookieBanner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://rework.agency");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    image = "/og-default.jpg",
    type = "website",
    noindex = false,
    article
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const siteName = "Rework Agency";
  return renderTemplate(_a || (_a = __template(['<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="canonical"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8b5cf6"><meta name="msapplication-TileColor" content="#050505"><!-- Primary Meta Tags --><title>', " | ", '</title><meta name="title"', '><meta name="description"', '><meta name="author" content="Rework Agency"><meta name="robots"', '><meta name="googlebot"', '><!-- Keywords (still useful for some search engines) --><meta name="keywords" content="d\xE9veloppement web, e-commerce, cr\xE9ation site internet, agence web, Paris, React, Next.js, Astro, WordPress, Shopify"><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"', '><meta property="og:site_name"', '><meta property="og:locale" content="fr_FR"><!-- Article specific meta -->', '<!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:creator" content="@rework_agency"><meta name="twitter:site" content="@rework_agency"><!-- PWA / Mobile --><link rel="manifest" href="/manifest.json"><meta name="theme-color" content="#8b5cf6" media="(prefers-color-scheme: dark)"><meta name="theme-color" content="#7c3aed" media="(prefers-color-scheme: light)"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="Rework"><meta name="application-name" content="Rework Agency"><!-- Geo --><meta name="geo.region" content="FR-75"><meta name="geo.placename" content="Paris"><meta name="geo.position" content="48.8566;2.3522"><meta name="ICBM" content="48.8566, 2.3522"><!-- Preconnect for performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="dns-prefetch" href="//www.google-analytics.com"><link rel="dns-prefetch" href="//www.googletagmanager.com"><!-- Preload critical resources --><link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossorigin><!-- RSS Feed --><link rel="alternate" type="application/rss+xml"', ' href="/rss.xml"><meta name="generator"', "><!-- Prevent theme flash --><script>\n      (function() {\n        const theme = localStorage.getItem('theme');\n        if (theme === 'light') {\n          document.documentElement.classList.add('light');\n        } else if (!theme && window.matchMedia('(prefers-color-scheme: light)').matches) {\n          document.documentElement.classList.add('light');\n        }\n      })();\n    <\/script><!-- Schema.org structured data -->", "", "<!-- Analytics -->", "", '</head> <body class="min-h-screen flex flex-col relative"> <!-- Skip to main content for accessibility --> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-primary focus:text-white focus:rounded-lg">\nAller au contenu principal\n</a> <!-- Tech Background Animation --> <div class="fixed inset-0 z-0" aria-hidden="true"> ', " </div> ", ' <main id="main-content" class="flex-1 relative z-10"> ', " </main> ", " <!-- Cookie Consent Banner --> ", " <!-- Scroll Animations Script --> ", " </body> </html>"])), addAttribute(canonicalURL, "href"), title, siteName, addAttribute(`${title} | ${siteName}`, "content"), addAttribute(description, "content"), addAttribute(noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1", "content"), addAttribute(noindex ? "noindex, nofollow" : "index, follow", "content"), addAttribute(type, "content"), addAttribute(canonicalURL, "content"), addAttribute(`${title} | ${siteName}`, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.site), "content"), addAttribute(title, "content"), addAttribute(siteName, "content"), type === "article" && article && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${article.publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(article.publishedTime, "content")}>`}${article.modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(article.modifiedTime, "content")}>`}${article.author && renderTemplate`<meta property="article:author"${addAttribute(article.author, "content")}>`}${article.tags?.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`)}` })}`, addAttribute(canonicalURL, "content"), addAttribute(`${title} | ${siteName}`, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.site), "content"), addAttribute(`${siteName} - Blog RSS Feed`, "title"), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "type": "Organization" }), renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "type": "WebSite" }), renderComponent($$result, "Analytics", $$Analytics, {}), renderHead(), renderComponent($$result, "TechBackground", $$TechBackground, { "opacity": 0.4 }), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "CookieBanner", $$CookieBanner, {}), renderScript($$result, "C:/MAMP/htdocs/rework/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/MAMP/htdocs/rework/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Container as a };
