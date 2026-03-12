---
title: "Rebuilding domenicotenace.dev: How Pure Astro and CSS Reminded Me That Simple Is Better"
author: Domenico Tenace
date: "2026-03-12"
image:
  url: "/images/posts/Pure_CSS.webp"
  alt: "How Pure Astro and CSS Reminded Me That Simple Is Better"
---

   <img src="/images/posts/Pure_CSS.webp" role="presentation" class="post__image" decoding="async">

## Overview

Hey everyone

I recently did something that felt almost rebellious in today's web development landscape: I completely refactored my personal website using **only Astro and vanilla CSS**. No React, no Vue, no Tailwind, no animation libraries, no component frameworks. Just HTML, CSS, and a bit of JavaScript where absolutely necessary.

And you know what? It was the most refreshing development experience I've had in years.

Let's start!

---

## The Decision: Back to Basics

The turning point came when I was helping a friend debug their website. They'd built it with pure HTML and CSS, no build step, no dependencies. When they made a change, they just refreshed the browser. No waiting for compilation, no hot module replacement issues, no dependency conflicts.

It was _fast_. Not just the website itself, but the entire development experience.

That's when I decided: my personal website doesn't need all this complexity. It's time to simplify.

## Why Astro?

I chose Astro for one simple reason: it lets you write components and modern syntax while outputting pure static HTML. No JavaScript runtime, no virtual DOM, no hydration overhead. Just good old HTML, CSS, and minimal JS where needed.

Astro's philosophy aligned perfectly with what I wanted:

- **Zero JavaScript by default**: Pages are pure HTML unless you explicitly opt-in
- **Component-based**: I can still organize my code cleanly without shipping React
- **Fast builds**: Seriously fast, we're talking seconds
- **No lock-in**: If I want to switch frameworks later, I can easily migrate

The best part? Astro doesn't force you into any particular way of doing things. Want to use vanilla CSS? Great. Want to sprinkle in some JavaScript? Cool. Want to stay 100% static? Perfect.

---

## The Refactoring Process

The migration was surprisingly straightforward. Here's what I did:

### Step 1: Stripped Everything Down

First, I removed all the dependencies. Every single one. The `package.json` went from 40+ dependencies to just Astro itself. It felt liberating, like decluttering a messy room.

### Step 2: Rebuilt the Structure

I created a simple Astro project structure:

```plaintext
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── ProjectCard.astro
├── layouts/
│   └── BaseLayout.astro
└── pages/
    ├── index.astro
    ├── blog/
    └── projects/
```

Clean, minimal, easy to understand.

### Step 3: Pure CSS, No Frameworks

This is where it got interesting. Instead of reaching for Tailwind, I wrote vanilla CSS. And honestly? It was _fun_.

I created a simple `global.css` file for handle all CSS.

No build tools, no purging, no configuration. Just CSS that works.

### Step 4: Animations in Pure CSS

Here's where I had the most fun. Instead of importing animation libraries, I wrote CSS animations from scratch:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}
```

Simple, performant, and I have complete control over every detail.

### Step 5: JavaScript Only Where Needed

I added minimal JavaScript for interactive features:

- Theme toggle (dark/light mode)
- Mobile menu toggle
- Smooth scroll behavior

Total JavaScript: less than 100 lines. No frameworks, no bundlers, just plain vanilla JS.

---

## What I Rediscovered

This process taught me (or reminded me) of several important lessons:

### CSS Is Actually Powerful

Modern CSS is _incredibly_ powerful. Grid, flexbox, custom properties, container queries, scroll-driven animations, we have everything we need to build beautiful, responsive websites without frameworks.

I'd forgotten that. Years of using Bulma, Tailwind, ecc made me think I needed utility classes for everything, but honestly? Writing semantic CSS felt more natural and resulted in cleaner markup.

### Less Is Genuinely More

The final bundle size? **Tiny**. We're talking kilobytes, not megabytes. The Lighthouse score? 100 across the board. The build time? Under 3 seconds.

None of this would be possible with my previous stack. All that complexity was weighing the site down, literally and metaphorically.

### Development Can Be Simple

There's something deeply satisfying about opening a file, changing some CSS, refreshing the browser, and seeing the change instantly. No build process, no hot module replacement quirks, no "hmm, why isn't this updating?"

The tight feedback loop made development _enjoyable_ again.

### You Don't Need a Framework for Everything

This is the big one. I'd internalized the idea that "professional" websites require modern frameworks. But that's not true. Frameworks solve specific problems, and if you don't have those problems, you don't need the framework.

My personal website doesn't need client-side routing, state management, or component reactivity. It's content, presented nicely. HTML and CSS do that perfectly well on their own.

---

## The Results

Let me share some concrete improvements:

**Performance:**

- Initial load time: 0.3s (down from 1.8s)
- Total bundle size: 45KB (down from 380KB)
- Lighthouse score: 100 across all metrics
- Time to Interactive: instant

**Developer Experience:**

- Build time: 2.4s (down from 28s)
- Hot reload: instant
- Dependency updates: basically none
- Mental overhead: significantly reduced

**Maintenance:**

- Breaking changes: none (it's just HTML/CSS)
- Security vulnerabilities: none (no dependencies to patch)
- Complexity: minimal

---

## What About the Trade-offs?

Let's be honest, there are some trade-offs:

**No Component Reactivity:**
Astro components are static by default. If I need interactivity, I have to add it manually. But for a content site, this is rarely an issue.

**Less Tooling:**
No automatic CSS optimization, no tree-shaking, no hot module replacement for styles. But honestly? I don't miss it. The simplicity makes up for the lack of bells and whistles.

**Manual Responsive Design:**
Without Tailwind's responsive utilities, I write media queries by hand. It takes slightly longer, but the CSS is more maintainable and semantic.

**More CSS to Write:**
No utility classes means writing more CSS. But the total amount of CSS is actually _less_ than my Tailwind config generated, and it's more readable.

These trade-offs are worth it for me. Your mileage may vary.

---

## Who Should Consider This Approach?

Pure Astro and CSS isn't for everyone, but it's perfect if:

**You're building content sites:**
Blogs, portfolios, documentation, marketing pages, anything that's primarily content benefits from this approach.

**You value simplicity:**
If you're tired of complex build processes and dependency management, going minimal is refreshing.

**You want to learn the fundamentals:**
Writing vanilla CSS makes you a better developer. You understand what your tools are doing under the hood.

**Performance matters:**
If you need the absolute fastest site possible, less code wins every time.

**You don't need heavy interactivity:**
If your site is mostly static content with occasional interactive elements, you don't need a full framework.

---

## When You Still Need Frameworks

To be clear, I'm not saying frameworks are bad. They're excellent tools for the right jobs:

**Complex web apps:**
If you're building a dashboard, SaaS platform, or interactive application, React/Vue/etc. make total sense.

**Teams with existing expertise:**
If your team knows React and you're building something quickly, use React. Don't reinvent the wheel.

**Lots of client-side state:**
When you need to manage complex client-side state, frameworks provide the structure to do it well.

**Rapid prototyping:**
Component libraries and frameworks can speed up initial development significantly.

The key is choosing the right tool for the job, not defaulting to the most popular stack.

---

## The Bigger Picture

This refactoring taught me something important about modern web development: we've collectively become a bit obsessed with complexity.

We reach for frameworks by default, even when they're overkill. We add dependencies without thinking. We over-engineer simple problems because that's what "professional" developers do.

But sometimes, the best solution is the simplest one.

HTML and CSS have been around for decades because they're _good_. They're stable, they're fast, they're simple. Modern CSS is powerful enough to build beautiful interfaces without frameworks.

Astro lets us use modern development practices (components, TypeScript, etc.) while outputting pure, simple code. It's the best of both worlds.

---

## My Challenge to You

If you're reading this and thinking "hmm, maybe I've over-engineered my site too," I challenge you:

Try building something with pure HTML and CSS. No frameworks, no libraries, just the fundamentals. See how it feels.

You might be surprised at how freeing it is.

And if you need a static site generator, give Astro a shot. It's genuinely excellent at letting you write simple code that performs beautifully.

---

## Conclusion

Rebuilding domenicotenace.dev with pure Astro and CSS reminded me why I fell in love with web development in the first place: the joy of creating something that works, that's fast, that's simple.

We don't always need the latest framework or the trendiest library. Sometimes, the best code is the code we don't write.

If you take one thing from this article, let it be this: question your stack. Ask yourself if you really need all those dependencies. Challenge the assumption that complexity equals professionalism.

Often, the simplest solution is the best one.

Happy coding!
