---
title: "Astro Wellness: The First Project Built Start to Finish by My Agent Team"
description: "Turning my minimalist QR code generator Glif into a mobile app with Capacitor, and an honest look at what AI-assisted mobile packaging actually takes."
author: Domenico Tenace
date: "2026-10-27"
image:
  url: "/images/posts/Astro_Wellness_Project.webp"
  alt: "Astro Wellness: The First Project Built Start to Finish by My Agent Team"
---

   <img src="/images/posts/Astro_Wellness_Project.webp" alt="Astro Wellness: The First Project Built Start to Finish by My Agent Team" width="1536" height="672" class="post__image" fetchpriority="high" decoding="async">

   ## Overview
    
   Hey everyone
    
   A few days ago I wrote about the agent team I built for OpenCode: a web-developer primary agent and four subagents for UX/UI, code review, SEO and documentation. The obvious question was, does it actually hold up on a real project?
    
   Meet [**Astro Wellness**](https://github.com/DomeT99/astro-wellness), a modern, dark and energetic gym template built with Astro and Bulma. It's the first project the whole team took from empty folder to finished, and it's now listed among the official Astro templates: [astro-wellness on the Astro portal](https://portal.astro.build/themes/astro-wellness/). I'm still a bit surprised typing that.
    
   Let's dive in!
    
   ---
    
   ## What Is Astro Wellness?
    
   It's a template for a gym, studio or training brand, ready to adopt and customise. It ships with everything you need to go live:
    
   - Pages: home (hero, stats, services, testimonials), about, services with pricing plans, blog, contact and a custom 404
   - Dark and light mode through Bulma's themes, persisted in `localStorage`, following the OS preference on the first visit and applied before first paint
   - SPA style page transitions with Astro's `ClientRouter`, respecting `prefers-reduced-motion`
   - A Markdown blog on content collections with a typed schema and an auto generated RSS feed
   - SEO ready: per page title and description, canonical URLs, Open Graph, JSON-LD (`HealthClub` on the home page, `BlogPosting` on posts), sitemap and `robots.txt`
   - Strict TypeScript, typed props on every component, and Bulma imported module by module so nothing unused ships
   The look is a dark theme with an orange accent plus an adaptive light theme, and every design token lives in two clearly documented places, so re-theming the whole site is a quick job. It's MIT licensed, pnpm only, on Astro 7, with a live demo on Netlify.
    
   ---
    
   ## How the Team Worked on It
    
   Here's the part I wanted to test. If you missed the previous article, the rule in my setup is simple: nobody edits anything in the first pass. Every agent proposes first, I approve, and only then does it apply changes, with each write still behind an `ask` gate.
    
   **web-developer** led the build. It explored the project, proposed the structure (pages, layout, data files, components), and implemented it after my OK, then verified with the type check and the build. The strict TypeScript setup and the clean `src/data` folder for services, team, pricing and testimonials come from its rules about typed props and keeping pages free of complex logic.
    
   **ux-ui-expert** handled the design system: the dark and orange palette, the light theme flipping every token automatically, responsive behaviour at Bulma's breakpoints, and the details like focus states and reduced motion support. Its rule of using the framework's primitives before custom CSS is why the project styles stay small and prefixed.
    
   **seo-expert** audited the head, the structured data, the sitemap, the robots file and the social share image. It's also the reason the README tells you to set your real domain before deploying, since the agent flagged it as something only the template user can decide.
    
   **code-reviewer** went over the changes with its checklist and reported by severity, with concrete fixes I could approve one by one.
    
   **documentation-updater** kept the repo honest: README, CHANGELOG, CONTRIBUTING, SECURITY and AGENTS.md. Its rule of never documenting what it can't verify against the code is exactly what you want from docs that will be read by strangers.
    
   ---
    
   ## What Worked
    
   **The approval gate paid off.** On a template that other people will copy, I didn't want surprise edits. Proposals first meant I made the design and architecture calls, and the agents did the heavy lifting.
    
   **Specialists beat one big prompt.** Having the SEO and docs passes happen as separate reviews, by agents with their own skill and checklist, made the final result more complete than anything I'd have remembered to ask for at the end of a long conversation.
    
   **Consistency.** Same structure rules, same naming, same quality bar across the whole codebase, because the conventions live in the agent files and not in my head.
    
   **It's reusable.** The same team can now take on the next template without me rebuilding the workflow.
    
   ---
    
   ## What Was Harder
    
   I won't pretend it was effortless. The approval flow means a lot of reading and clicking, and for small tasks it's slower than just doing it. Delegation costs tokens and time. And the agents don't replace judgment: decisions like the visual direction, the tone of the sample content and which sections a gym site really needs were mine.
    
   The other lesson is that a template has a different bar than a personal site. People will fork it, so documentation, accessibility and clean defaults matter more than usual, and that's where having dedicated agents for those jobs helped the most.
    
   ---
    
   ## Try It, Fork It, Break It
    
   Astro Wellness is open source and free to use for your own gym, studio or training brand:
    
   ```bash
   pnpm install
   pnpm dev
   ```
    
   You'll need Node 22.22 or newer and pnpm 10+. Edit `src/data/site.ts` for your identity, swap the sample content, set your real domain in `astro.config.mjs`, and deploy the `dist/` folder anywhere static. The live demo is at astro-wellness.netlify.app, and issues and PRs are welcome.
    
   ---
    
   ## Final Thoughts
    
   Having a template accepted among the official Astro ones was a great moment, but the bigger win for me is the proof that the agent setup works on a real deliverable, not just on demos. One primary agent, four specialists, a lot of small approvals, and a project I'm proud to put my name on.
    
   If you try the template, or build your own agent team for OpenCode, tell me how it goes.
    
   Happy coding!
