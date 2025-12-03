import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, n as renderSlot, r as renderTemplate } from './astro/server_BxQs--Zw.mjs';
import 'clsx';

const $$Astro = createAstro("https://rework.agency");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    href,
    class: className,
    type = "button",
    ...rest
  } = Astro2.props;
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg cursor-pointer";
  const variants = {
    primary: "btn-shine bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:opacity-90 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]",
    secondary: "glass text-white hover:border-white/20",
    ghost: "text-text-secondary hover:text-white hover:bg-white/5"
  };
  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5"
  };
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([baseStyles, variants[variant], sizes[size], className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(type, "type")}${addAttribute([baseStyles, variants[variant], sizes[size], className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "C:/MAMP/htdocs/rework/src/components/ui/Button.astro", void 0);

export { $$Button as $ };
