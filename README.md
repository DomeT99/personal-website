# Domenico Tenace - Personal Website

Welcome to the repository for my personal website and blog! This project is built using [Astro](https://astro.build/) to ensure a fast, SEO-friendly, and modern web experience. It serves as my digital garden for sharing technical articles, documenting my projects, and showcasing my portfolio.

## 🚀 Built With

- **Framework:** [Astro](https://astro.build/) v5
- **Styling:** Pure CSS with custom design tokens (`src/styles/global.css`)
- **Content Management:** Astro Content Collections (Markdown/MDX based)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Deployment:** Ready for static hosting (Netlify/Vercel/GitHub Pages)

## 📁 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
/
├── public/                 # Static assets (images, fonts, etc.)
├── src/
│   ├── components/         # Reusable Astro/UI components
│   ├── content/            # Collections for posts and projects (Markdown files)
│   ├── layouts/            # Page layout templates
│   ├── pages/              # Astro routing (e.g., index.astro, posts/[...page].astro)
│   └── styles/             # Global CSS files
├── astro.config.mjs        # Astro configuration file
├── package.json            # Project dependencies and scrips
└── tsconfig.json           # TypeScript configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Installs dependencies                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally, before deploying     |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## ✍️ Content Management

The content on this site is managed using **Astro Content Collections**.

- **Blog Posts** are located in `src/content/posts/`
- **Projects** are located in `src/content/projects/`

To add a new post or project, simply create a new `.md` file in the respective directory and fill in the frontmatter.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
