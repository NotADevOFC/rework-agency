# CLAUDE.md — Rework Agency

## 🎯 Contexte du projet

Site vitrine pour **Rework Agency**, agence de développement web et e-commerce.

- **Objectif** : prospection et présentation de projets
- **Nombre de pages** : maximum 10
- **Design** : moderne, futuriste, dark mode — inspiré de https://huly.io/
- **Cible** : entreprises cherchant un partenaire pour leur présence web/e-commerce

---

## 🛠 Stack technique

### Frontend
| Technologie | Version | Usage |
|-------------|---------|-------|
| **Astro** | 5.x | Framework principal (SSG) |
| **Tailwind CSS** | 4.x | Styling utilitaire |
| **Headless UI** | 2.x | Composants interactifs accessibles |
| **TypeScript** | 5.x | Typage strict |

### Fonts
- **Inter** ou **Geist Sans** (variable font)
- Chargement optimisé via `@fontsource` ou Google Fonts avec `display=swap`

### Animations
- **CSS natif** pour les transitions simples (hover, focus)
- **View Transitions API** d'Astro pour les transitions de page
- **Intersection Observer** pour les animations au scroll (fade-in, slide-up)
- **GSAP** uniquement si animations complexes nécessaires (scroll-triggered avancé)

### Backend / CMS
| Technologie | Usage |
|-------------|-------|
| **WordPress** | CMS headless |
| **WPGraphQL** | API GraphQL |
| **ACF Pro** | Custom fields |
| **Contact Form 7** | Gestion du formulaire + REST API |

### Hébergement
| Service | Usage |
|---------|-------|
| **Vercel** ou **Cloudflare Pages** | Frontend Astro |
| **OVH** | WordPress (VPS ou mutualisé) |

---

## 📁 Structure du projet

```
rework-agency/
├── public/
│   ├── fonts/
│   ├── images/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/              # Composants réutilisables
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Badge.astro
│   │   │   ├── Input.astro
│   │   │   ├── Textarea.astro
│   │   │   ├── Container.astro
│   │   │   ├── SectionHeader.astro
│   │   │   ├── GradientBlob.astro
│   │   │   └── GridBackground.astro
│   │   ├── sections/        # Sections de page
│   │   │   ├── Hero.astro
│   │   │   ├── Services.astro
│   │   │   ├── FeaturedProjects.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── BlogPreview.astro
│   │   │   └── CTA.astro
│   │   ├── layout/          # Éléments de layout
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navigation.astro
│   │   │   └── MobileNav.tsx  # React pour interactivité
│   │   └── react/           # Composants React (interactifs)
│   │       └── ContactForm.tsx
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── projets/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── a-propos.astro
│   │   ├── contact.astro
│   │   ├── mentions-legales.astro
│   │   └── politique-confidentialite.astro
│   ├── lib/
│   │   ├── wordpress.ts     # Client GraphQL
│   │   ├── queries/         # Requêtes GraphQL
│   │   │   ├── projects.ts
│   │   │   ├── posts.ts
│   │   │   ├── testimonials.ts
│   │   │   └── services.ts
│   │   └── utils.ts         # Helpers (formatDate, slugify, etc.)
│   ├── types/
│   │   ├── wordpress.ts     # Types WP/GraphQL
│   │   └── index.ts
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .env.example
```

---

## 📄 Pages du site

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Hero + services + projets featured + témoignages + CTA |
| Services | `/services` | Détail des offres (dev web, e-commerce, etc.) |
| Projets | `/projets` | Liste des réalisations |
| Projet (single) | `/projets/[slug]` | Détail d'un projet |
| Blog | `/blog` | Liste des articles |
| Article (single) | `/blog/[slug]` | Détail d'un article |
| À propos | `/a-propos` | Présentation de l'agence, équipe |
| Contact | `/contact` | Formulaire + coordonnées |
| Mentions légales | `/mentions-legales` | Obligations légales |
| Politique de confidentialité | `/politique-confidentialite` | RGPD |

---

## 🎨 Design System

### Palette de couleurs (Dark mode uniquement)

```css
:root {
  /* Backgrounds */
  --bg-primary: #09090b;
  --bg-secondary: #18181b;
  --bg-tertiary: #27272a;
  --bg-glass: rgba(255, 255, 255, 0.03);
  
  /* Borders */
  --border-default: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.15);
  
  /* Text */
  --text-primary: #fafafa;
  --text-secondary: #d4d4d8;
  --text-muted: #71717a;
  
  /* Accent */
  --accent-primary: #8b5cf6;    /* Violet */
  --accent-secondary: #3b82f6;  /* Bleu */
  --accent-gradient: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
  
  /* States */
  --success: #22c55e;
  --error: #ef4444;
}
```

### Configuration Tailwind

```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#09090b',
          secondary: '#18181b',
          tertiary: '#27272a',
        },
        accent: {
          primary: '#8b5cf6',
          secondary: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
```

### Effets visuels signature

```css
/* Glassmorphism */
.glass {
  @apply bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl;
}

/* Card avec glow au hover */
.card-glow {
  @apply glass transition-all duration-300;
}
.card-glow:hover {
  @apply border-white/[0.15] shadow-[0_0_30px_rgba(139,92,246,0.15)];
}

/* Gradient text */
.gradient-text {
  @apply bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent;
}

/* Grid background (comme Huly) */
.grid-bg {
  background-image: 
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

### Typographie

| Élément | Taille | Poids | Classe Tailwind |
|---------|--------|-------|-----------------|
| H1 (Hero) | 4rem - 6rem | 700 | `text-6xl md:text-7xl lg:text-8xl font-bold` |
| H2 (Section) | 2.5rem - 3rem | 600 | `text-4xl md:text-5xl font-semibold` |
| H3 (Card) | 1.5rem | 600 | `text-2xl font-semibold` |
| Body | 1rem - 1.125rem | 400 | `text-base md:text-lg` |
| Small | 0.875rem | 400 | `text-sm text-muted` |

---

## 🧩 Composants UI

### Headless UI — Composants utilisés
- `Dialog` — Modales (galerie projet, confirmation)
- `Menu` — Dropdowns navigation
- `Transition` — Animations d'entrée/sortie
- `Disclosure` — FAQ accordéon (si nécessaire)

### Composants custom à créer

#### Button.astro
```astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  class?: string;
}

const { variant = 'primary', size = 'md', href, class: className } = Astro.props;

const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg';

const variants = {
  primary: 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:opacity-90 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]',
  secondary: 'glass text-white hover:border-white/20',
  ghost: 'text-text-secondary hover:text-white hover:bg-white/5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Element = href ? 'a' : 'button';
---

<Element
  href={href}
  class:list={[baseStyles, variants[variant], sizes[size], className]}
>
  <slot />
</Element>
```

#### Card.astro
```astro
---
interface Props {
  hover?: boolean;
  class?: string;
}

const { hover = true, class: className } = Astro.props;
---

<div class:list={[
  'glass p-6 rounded-2xl',
  hover && 'card-glow',
  className
]}>
  <slot />
</div>
```

---

## 🔌 Intégration WordPress

### Variables d'environnement

```env
# .env (production)
WP_GRAPHQL_URL=https://admin.rework-agency.com/graphql
WP_REST_URL=https://admin.rework-agency.com/wp-json
PUBLIC_WP_REST_URL=https://admin.rework-agency.com/wp-json

# .env.local (développement)
WP_GRAPHQL_URL=https://local.rework.com/graphql
WP_REST_URL=https://local.rework.com/wp-json
PUBLIC_WP_REST_URL=https://local.rework.com/wp-json
```

### Client GraphQL

```typescript
// src/lib/wordpress.ts
const WP_GRAPHQL_URL = import.meta.env.WP_GRAPHQL_URL;

interface GraphQLResponse<T> {
  data: T;
  errors?: Array<{ message: string }>;
}

export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const response = await fetch(WP_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`);
  }

  const json: GraphQLResponse<T> = await response.json();

  if (json.errors) {
    throw new Error(json.errors.map(e => e.message).join('\n'));
  }

  return json.data;
}
```

### Requêtes GraphQL

```typescript
// src/lib/queries/projects.ts
export const GET_PROJECTS = `
  query GetProjects($first: Int = 10) {
    projects(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        projectFields {
          client
          year
          technologies
          liveUrl
        }
      }
    }
  }
`;

export const GET_PROJECT_BY_SLUG = `
  query GetProject($slug: ID!) {
    project(id: $slug, idType: SLUG) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      projectFields {
        client
        year
        technologies
        liveUrl
        gallery {
          sourceUrl
          altText
        }
      }
    }
  }
`;
```

```typescript
// src/lib/queries/testimonials.ts
export const GET_TESTIMONIALS = `
  query GetTestimonials($first: Int = 6) {
    testimonials(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        title
        content
        testimonialFields {
          author
          role
          company
          avatar {
            sourceUrl
          }
        }
      }
    }
  }
`;
```

```typescript
// src/lib/queries/posts.ts
export const GET_POSTS = `
  query GetPosts($first: Int = 10) {
    posts(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;
```

### Types de contenu WordPress (CPT à créer)

| CPT | Slug | Champs ACF |
|-----|------|------------|
| **Projets** | `project` | client, year, technologies (repeater), liveUrl, gallery |
| **Témoignages** | `testimonial` | author, role, company, avatar |
| **Services** | `service` | icon, shortDescription, features (repeater) |

---

## 📬 Formulaire de contact

### Configuration Contact Form 7

Installer le plugin **Contact Form 7** + **CF7 REST API** sur WordPress.

### Composant React

```tsx
// src/components/react/ContactForm.tsx
import { useState } from 'react';
import { Transition } from '@headlessui/react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  honeypot: string; // Anti-spam
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    honeypot: '',
  });
  
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) return;
    
    setFormState({ status: 'loading', message: '' });

    try {
      const response = await fetch(
        `${import.meta.env.PUBLIC_WP_REST_URL}/contact-form-7/v1/contact-forms/{FORM_ID}/feedback`,
        {
          method: 'POST',
          body: new FormData(e.target as HTMLFormElement),
        }
      );

      const result = await response.json();

      if (result.status === 'mail_sent') {
        setFormState({
          status: 'success',
          message: 'Message envoyé ! Nous vous répondrons rapidement.',
        });
        setFormData({ name: '', email: '', company: '', message: '', honeypot: '' });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setFormState({
        status: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot - hidden */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      
      {/* Champs du formulaire */}
      {/* ... */}
      
      <button
        type="submit"
        disabled={formState.status === 'loading'}
        className="w-full btn-primary"
      >
        {formState.status === 'loading' ? 'Envoi...' : 'Envoyer le message'}
      </button>

      {/* Feedback */}
      <Transition
        show={formState.status === 'success' || formState.status === 'error'}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-1"
      >
        <p className={formState.status === 'success' ? 'text-success' : 'text-error'}>
          {formState.message}
        </p>
      </Transition>
    </form>
  );
}
```

Utilisation dans Astro :
```astro
---
import ContactForm from '@/components/react/ContactForm';
---

<ContactForm client:visible />
```

---

## 📝 Conventions de code

### Astro
- Privilégier les composants `.astro` pour tout ce qui est statique
- Utiliser React (`client:visible` ou `client:load`) uniquement pour l'interactivité
- Activer les View Transitions dans `astro.config.mjs`

### TypeScript
- `strict: true` dans `tsconfig.json`
- Typer toutes les réponses GraphQL
- Utiliser des interfaces (pas de `any`)

### Tailwind
- Classes utilitaires directement dans le markup
- `@apply` uniquement pour les patterns très répétitifs
- Créer des composants Astro plutôt que des classes CSS complexes

### Nommage
| Type | Convention | Exemple |
|------|------------|---------|
| Composants | PascalCase | `HeroSection.astro` |
| Fichiers utils | camelCase | `wordpress.ts` |
| CSS variables | kebab-case | `--bg-primary` |
| Routes | kebab-case | `a-propos.astro` |

### Git
- Commits conventionnels : `feat:`, `fix:`, `chore:`, `docs:`
- Branches : `feature/nom`, `fix/nom`

---

## ⚡ Performance

### Optimisation des images
- Utiliser `<Image />` d'Astro pour l'optimisation automatique
- Formats : WebP avec fallback JPEG
- Lazy loading par défaut
- Définir `width` et `height` pour éviter le CLS

```astro
---
import { Image } from 'astro:assets';
---

<Image
  src={project.featuredImage.sourceUrl}
  alt={project.featuredImage.altText}
  width={800}
  height={600}
  format="webp"
  loading="lazy"
/>
```

### Chargement des fonts
```astro
<!-- BaseLayout.astro -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link 
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
  rel="stylesheet"
/>
```

### Caching
- Configurer les headers de cache sur Vercel/Cloudflare
- ISR (Incremental Static Regeneration) pour le contenu WordPress si besoin

---

## 🔍 SEO

### Métadonnées de base

```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
}

const { 
  title, 
  description, 
  image = '/og-default.jpg',
  type = 'website' 
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href={canonicalURL} />
  
  <title>{title} | Rework Agency</title>
  <meta name="description" content={description} />
  
  <!-- Open Graph -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={new URL(image, Astro.site)} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={new URL(image, Astro.site)} />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
```

### Sitemap & Robots

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rework-agency.com',
  integrations: [sitemap()],
});
```

```txt
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://rework-agency.com/sitemap-index.xml
```

---

## ✅ Checklist avant déploiement

### Contenu
- [ ] Tous les textes finaux (pas de lorem ipsum)
- [ ] Images optimisées et compressées
- [ ] Liens fonctionnels
- [ ] Formulaire testé

### Technique
- [ ] Variables d'environnement configurées
- [ ] Build sans erreurs
- [ ] Pas de console.log en production

### SEO
- [ ] Métadonnées sur toutes les pages
- [ ] Open Graph images (1200x630px)
- [ ] Sitemap généré
- [ ] Robots.txt en place
- [ ] Favicon et web manifest

### Performance
- [ ] Lighthouse > 90 (toutes métriques)
- [ ] Core Web Vitals OK
- [ ] Images lazy-loaded

### Légal
- [ ] Mentions légales complètes
- [ ] Politique de confidentialité RGPD
- [ ] Bandeau cookies si nécessaire

### Accessibilité
- [ ] Navigation au clavier
- [ ] Contrastes suffisants
- [ ] Alt text sur les images
- [ ] Labels sur les champs de formulaire

---

## 🚫 À éviter

- **Dépendances lourdes** — pas de bibliothèques JS inutiles
- **Animations excessives** — rester subtil et performant
- **Texte dans les images** — mauvais pour le SEO et l'accessibilité
- **Requêtes GraphQL non typées** — toujours utiliser les interfaces
- **CSS global massif** — préférer les composants et Tailwind
- **Images non optimisées** — toujours utiliser `<Image />` d'Astro

---

## 💻 Environnement local

### Configuration MAMP

| Paramètre | Valeur |
|-----------|--------|
| **Domaine local** | `https://local.rework.com` |
| **SSL** | ✅ Activé |
| **Base de données** | `rw_wpwebpro` |
| **Version PHP** | 8.2.2 |
| **DB Host** | `localhost` |
| **DB User** | `root` |
| **DB Password** | `root` |

### Dossiers

| Élément | Chemin |
|---------|--------|
| **WordPress** | `/Applications/MAMP/htdocs/local.rework.com/` |
| **Projet Astro** | À définir (ex: `~/Projects/rework-agency/`) |

### Installation WordPress (automatisable par Claude Code)

```bash
# 1. Se placer dans le dossier MAMP
cd /Applications/MAMP/htdocs/local.rework.com

# 2. Télécharger WordPress
curl -O https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz
mv wordpress/* .
rm -rf wordpress latest.tar.gz

# 3. Installer WP-CLI (si pas déjà installé)
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp

# 4. Configurer WordPress
wp config create \
  --dbname=rw_wpwebpro \
  --dbuser=root \
  --dbpass=root \
  --dbhost=localhost \
  --locale=fr_FR

# 5. Installer WordPress
wp core install \
  --url="https://local.rework.com" \
  --title="Rework Agency" \
  --admin_user=admin \
  --admin_password=admin123 \
  --admin_email=dev@rework-agency.com

# 6. Installer les plugins requis
wp plugin install wp-graphql --activate
wp plugin install advanced-custom-fields --activate
wp plugin install contact-form-7 --activate
wp plugin install add-wpgraphql-seo --activate

# 7. Installer ACF Pro (si licence disponible)
# Télécharger manuellement depuis le compte ACF et :
# wp plugin install ./advanced-custom-fields-pro.zip --activate
```

### Variables d'environnement Astro (local)

```env
# .env.local
WP_GRAPHQL_URL=https://local.rework.com/graphql
WP_REST_URL=https://local.rework.com/wp-json
PUBLIC_WP_REST_URL=https://local.rework.com/wp-json
PUBLIC_SITE_URL=http://localhost:4321
```

### Commandes de développement

```bash
# Terminal 1 — MAMP doit être lancé via l'application

# Terminal 2 — Projet Astro
cd ~/Projects/rework-agency
npm run dev          # Démarre Astro sur localhost:4321
```

### Accès locaux

| Service | URL |
|---------|-----|
| **WordPress Admin** | `https://local.rework.com/wp-admin` |
| **WPGraphQL IDE** | `https://local.rework.com/wp-admin/admin.php?page=graphiql-ide` |
| **phpMyAdmin** | `http://localhost:8888/phpMyAdmin` |
| **Site Astro (dev)** | `http://localhost:4321` |

### Troubleshooting SSL local

Si erreurs SSL avec Astro → ajouter dans `astro.config.mjs` :

```javascript
// Pour le dev uniquement — accepter les certificats auto-signés
export default defineConfig({
  vite: {
    server: {
      proxy: {
        // Si nécessaire
      }
    }
  }
});
```

Ou dans les requêtes fetch WordPress :

```typescript
// src/lib/wordpress.ts — DEV ONLY
const agent = new (await import('https')).Agent({
  rejectUnauthorized: false // Ignorer SSL auto-signé en local
});
```

---

## 📚 Ressources

- [Documentation Astro](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Headless UI](https://headlessui.com)
- [WPGraphQL](https://www.wpgraphql.com/docs)
- [ACF to WPGraphQL](https://github.com/wp-graphql/wpgraphql-acf)
- [Contact Form 7 REST API](https://developer.wordpress.org/rest-api/)
