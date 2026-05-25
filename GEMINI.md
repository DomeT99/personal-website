# GEMINI.md — Personal Website & Blog

## Project Overview

This is a personal website and blog project built with **Astro (v5)**. It serves as a digital garden for technical articles, project documentation, and a professional portfolio.

- **Primary Framework:** [Astro](https://astro.build/)
- **Template:** [Milky-Way](https://github.com/ttomczak3/Milky-Way)
- **Deployment URL:** [https://domenicotenace.dev](https://domenicotenace.dev)
- **Key Features:** SEO-friendly, fast performance, content-driven architecture using Astro Content Collections.

## Directory Structure

- `src/components/`: Reusable Astro components.
- `src/content/`: Managed content collections (blog posts and projects).
  - `posts/`: Markdown files for blog articles.
  - `projects/`: Markdown files for showcased projects.
- `src/layouts/`: Page layouts (e.g., `Layout.astro`, `MarkdownPostsLayout.astro`).
- `src/pages/`: File-based routing for the website.
- `src/styles/`: Global CSS and styling definitions.
- `public/images/`: Static assets, including profile images and content-related graphics.

## Building and Running

The project uses standard Astro commands:

- **Development:** `pnpm run dev` (Starts a local development server at `http://localhost:4321`)
- **Build:** `pnpm run build` (Generates a production-ready static site in the `dist/` directory)
- **Preview:** `pnpm run preview` (Previews the local production build)

## Development Conventions

### Content Management

The project leverages Astro's **Content Collections** for structured content. The schema for these collections is defined in `src/content.config.ts`.

- **Posts:** Required frontmatter includes `title`, `author`, `date`. Optional `image`.
- **Projects:** Required frontmatter includes `title`, `description`, `image`. Optional `platform`, `stack`, `website`, `github`.

When adding new content, ensure the frontmatter strictly adheres to the defined schemas to pass type validation.

### Styling

- Styles are primarily managed via `src/styles/global.css`.
- Theme switching (light/dark mode) is implemented with a `ThemeIcon` component and persists via `localStorage`.
- CSS classes follow a simple naming convention (e.g., `.navbar`, `.navbar__title`).

### Components and Layouts

- Prefer splitting large components into smaller, reusable ones in `src/components/`.
- All pages should wrap their content in a layout from `src/layouts/` to ensure consistent structure and metadata.
