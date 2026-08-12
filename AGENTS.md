# AGENTS.md — Personal Website & Blog

## Project Overview

Personal website + blog, built with **Astro (v5)**. Digital garden for technical articles, project docs, professional portfolio.

- **Primary Framework:** [Astro](https://astro.build/)
- **Template:** [Milky-Way](https://github.com/ttomczak3/Milky-Way)
- **Deployment URL:** [https://domenicotenace.dev](https://domenicotenace.dev)
- **Key Features:** SEO-friendly, fast, content-driven via Astro Content Collections.

## Directory Structure

- `src/components/`: Reusable Astro components.
- `src/content/`: Managed content collections (blog posts and projects).
  - `posts/`: Markdown files for blog articles.
  - `projects/`: Markdown files for showcased projects.
- `src/layouts/`: Page layouts (e.g., `Layout.astro`, `MarkdownPostsLayout.astro`).
- `src/pages/`: File-based routing.
- `src/styles/`: Global CSS and styling definitions.
- `public/images/`: Static assets, incl. profile images and content graphics.

## Building and Running

Standard Astro commands:

- **Development:** `pnpm run dev` (Starts local dev server at `http://localhost:4321`)
- **Build:** `pnpm run build` (Generates production static site in `dist/`)
- **Preview:** `pnpm run preview` (Previews local production build)

## Development Conventions

### Content Management

Uses Astro **Content Collections**. Schema defined in `src/content.config.ts`.

- **Posts:** Required frontmatter `title`, `author`, `date`. Optional `image`.
- **Projects:** Required frontmatter `title`, `description`, `image`. Optional `platform`, `stack`, `website`, `github`.

Ensure frontmatter adheres to schemas to pass type validation.

### Styling

- Styles primarily via `src/styles/global.css`.
- Theme switching (light/dark) via `ThemeIcon` component, persists through `localStorage`.
- CSS classes use simple naming (e.g., `.navbar`, `.navbar__title`).

### Components and Layouts

- Split large components into smaller, reusable ones in `src/components/`.
- All pages wrap content in a layout from `src/layouts/` for consistent structure and metadata.
