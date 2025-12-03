import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate } from './astro/server_BxQs--Zw.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://rework.agency");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { hover = true, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "p-6 rounded-2xl",
    hover ? "card-glow hover:border-white/15 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]" : "glass",
    className
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/MAMP/htdocs/rework/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
