# AGENTS.md — Personal Website & Blog

## Project Overview

Personal website + blog. Static site, **Astro 7** (`package.json` → `astro@7.3.8`, not v5), [Milky-Way](https://github.com/ttomczak3/Milky-Way) template. Content-driven via Astro Content Collections; deployed at https://domenicotenace.dev.

## Commands

- `pnpm run dev` — dev server at `http://localhost:4321` (alias: `pnpm start`)
- `pnpm run build` — static build to `dist/`
- `pnpm run preview` — serve local production build

**pnpm only** (lockfile committed; npm/yarn rejected). No test/lint/typecheck scripts — `pnpm run build` only verification gate: validates content-collection schemas, fails on invalid frontmatter.

## Content Collections

Schema: `src/content.config.ts` (Astro content-layer `glob` loader over `.md`/`.mdx`; files prefixed `_` are ignored).

- **posts** (`src/content/posts/`) — required `title`, `author`, `date` (quoted string, e.g. `"2026-08-12"`); optional `description`, `image`.
- **projects** (`src/content/projects/`) — required `title`, `description`, `image`; optional `platform`, `stack`, `website`, `github`.

**Gotcha:** `image` is object `{ url, alt }`, NOT path string — `url` = site-root path like `/images/posts/foo.webp`.

## Images

- Post/project images = **WebP** in `public/images/posts/` and `public/images/projects/`; frontmatter `image.url` points at them.
- `scripts/convert-to-webp.sh` converts image files to `.webp` (`cwebp` or `ffmpeg`, quality default 85). Run inside target directory; script itself gitignored.

## Routing & Layouts

- `src/pages/`: `index.astro`, `404.astro`, `projects.astro`, `rss.xml.ts`, dynamic `blog/[...slug].astro`, `blog/[...page].astro` (archive pagination), `projects/[...slug].astro`.
- `src/layouts/`: `Layout.astro` (base), `MarkdownPostsLayout.astro`, `MarkdownProjectsLayout.astro`. Pages wrap content in layout for consistent metadata.

## Deployment & SEO

- No platform/CI config in-repo (no netlify.toml, vercel.json, workflows). `site: https://domenicotenace.dev` in `astro.config.mjs` drives sitemap (`@astrojs/sitemap`).
- Security headers/CSP + caching set in `public/_headers` (static-host convention, e.g. Netlify/Cloudflare Pages). `/images/*` and `/*.webp` cached immutable.

## Notes

- `AGENTS.original.md` = gitignored pre-compression backup — do not edit.
