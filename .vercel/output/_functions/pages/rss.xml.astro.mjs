import { i as isWordPressAvailable, f as fetchGraphQL } from '../chunks/wordpress_HYMlOqo-.mjs';
import { a as GET_POSTS } from '../chunks/posts_UTxFa5XW.mjs';
export { renderers } from '../renderers.mjs';

const SITE_URL = "https://rework.agency";
const SITE_TITLE = "Rework Agency - Blog";
const SITE_DESCRIPTION = "Conseils, tutoriels et actualites sur le developpement web, le e-commerce et le design.";
const mockPosts = [
  {
    id: "1",
    slug: "pourquoi-choisir-astro-2024",
    title: "Pourquoi choisir Astro en 2024 ?",
    excerpt: "Astro s'impose comme le framework de choix pour les sites orientes contenu.",
    date: "2024-01-15",
    featuredImage: void 0,
    categories: { nodes: [{ id: "1", name: "Developpement", slug: "developpement" }] },
    author: { node: { name: "Alexandre Martin", avatar: void 0 } }
  },
  {
    id: "2",
    slug: "wordpress-headless-guide-complet",
    title: "WordPress Headless : Le guide complet",
    excerpt: "Comment utiliser WordPress comme CMS headless avec un frontend moderne.",
    date: "2024-01-10",
    featuredImage: void 0,
    categories: { nodes: [{ id: "2", name: "WordPress", slug: "wordpress" }] },
    author: { node: { name: "Alexandre Martin", avatar: void 0 } }
  }
];
function escapeXml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "").trim();
}
const GET = async () => {
  let posts = [];
  try {
    const wpAvailable = await isWordPressAvailable();
    if (wpAvailable) {
      const data = await fetchGraphQL(GET_POSTS, { first: 20 });
      if (data.posts.nodes.length > 0) {
        posts = data.posts.nodes;
      }
    }
  } catch (error) {
    console.error("Error fetching posts for RSS:", error);
  }
  if (posts.length === 0) {
    posts = mockPosts;
  }
  const rssItems = posts.map((post) => {
    const pubDate = new Date(post.date).toUTCString();
    const description = stripHtml(post.excerpt || "");
    const category = post.categories?.nodes?.[0]?.name || "Blog";
    return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(description)}</description>
      <category>${escapeXml(category)}</category>
      ${post.author?.node?.name ? `<author>${escapeXml(post.author.node.name)}</author>` : ""}
    </item>`;
  }).join("");
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>fr-FR</language>
    <lastBuildDate>${(/* @__PURE__ */ new Date()).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/favicon.svg</url>
      <title>${escapeXml(SITE_TITLE)}</title>
      <link>${SITE_URL}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;
  return new Response(rss.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "max-age=3600"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
