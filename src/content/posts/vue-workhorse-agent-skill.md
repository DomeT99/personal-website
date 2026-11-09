---
title: "Vue.js Is My Workhorse. Now It's an Agent Skill."
description: "After years of shipping with Vue, from 1.0 to Vapor Mode, I turned my experience into a skill that now lives in the Spellbook of Skill collection and my web-dev-agent."
author: Domenico Tenace
date: "2026-11-10"
image:
  url: "/images/posts/Vue_Workhorse.webp"
  alt: "Vue.js Is My Workhorse. Now It's an Agent Skill."
---

   <img src="/images/posts/Vue_Workhorse.webp" alt="Vue.js Is My Workhorse. Now It's an Agent Skill." width="1536" height="672" class="post__image" fetchpriority="high" decoding="async">

## Overview

I've been using Vue.js since the early days, long enough that "Evangelion" sounds like a release date, not an anime. I've published material about it, shipped updates, built projects, and lived through every major release: 1.0, 2.0, the long 2.x tail, the 3.0 rewrite, and now the Vapor Mode era. Vue is my workhorse. It still is.

So when I started building my open-source AI agent setup, I did the practical thing: I wrote down everything I know about Vue so the agent doesn't have to learn it the hard way. That document became the `vue-expert` skill, and it now lives in two places, the [Spellbook of Skill](https://github.com/Domenico-Tenace-Open-Labs/spellbook-of-skill) collection and the [web-dev-agent](https://github.com/Domenico-Tenace-Open-Labs/web-dev-agent) repository.

In this article: what the skill contains, how a decade of releases shaped it, and how you can adopt it (or write your own).

Let's dive in!

---

## What Is vue-expert?

`vue-expert` is a loadable agent skill, a `SKILL.md` plus reference files, that encodes Vue 3 / Nuxt conventions: Composition API with `<script setup>`, typed props/emits, composables, Pinia stores, and Vite build config.

It ships with everything you need to keep an agent (or a human) honest:

- **Loads on demand**, triggers only when a project actually uses Vue 3 (`.vue` SFCs, `nuxt.config.*`, Pinia stores), so it never adds noise to non-Vue sessions
- **A six-step workflow**, analyze, design, implement, validate, optimize, test. Validation means `vue-tsc --noEmit` plus a DevTools check; tests are Vue Test Utils + Vitest
- **Per-topic references**, composition API, components, state management, Nuxt, TypeScript, mobile/hybrid (Quasar, Capacitor, PWA), build tooling
- **Hard constraints**, an explicit MUST DO / MUST NOT list: Composition API not Options API, `<script setup>`, typed props, Pinia not Vuex, no prop mutation, no `watch` when `computed` suffices
- **MIT-licensed** and derived from Jeffallan's `vue-expert` skill (MIT), then heavily adapted for the stack I actually ship.

You can read the whole thing directly in the [web-dev-agent repository](https://github.com/Domenico-Tenace-Open-Labs/web-dev-agent/blob/main/skills/vue-expert/SKILL.md) or as a human-friendly guide in Spellbook of Skill.

---

## How a Decade of Vue Became One File

Working rule: a skill is only worth its bytes if it encodes judgment you can't get from the official docs, the kind you earn by shipping.

**The early years.** Vue 1.0 "Evangelion" (October 2015) introduced me to two-way binding, components, and templates that just worked. Vue 2.0 "Ghost in the Shell" (September 2016) brought the virtual DOM, Vuex and Vue Router, a balance of power and simplicity that made Vue my default for years.

**The 2.x long tail.** Maintenance work taught me what actually breaks: mixin spaghetti, Vuex stores that grow without design, silent prop mutation. Every one of those scars is now a line in the MUST NOT list.

**The 3.0 rewrite.** "One Piece" (September 18, 2020) replaced `Object.defineProperty` with Proxy-based reactivity, introduced the Composition API, and made TypeScript first-class. `<script setup>` went stable in 3.2 (August 2021), and Pinia became the recommended state layer. I migrated real projects through that, and the migration pain is exactly why the skill targets the modern API surface and steers agents away from the legacy one.

**From projects to patterns.** The rulebook didn't come from reading docs, it came from code I keep writing: my [Easy Kit Component](https://domenicotenace.dev/projects/dome-open-labs/) Vue 3 kit, the App Repo Nuxt app, Glif and the rest of the Open Labs line-up. The skill is the diff between the patterns that held up and the ones I stopped using.

**The packaging.** I shaped it into the skill format: lean `SKILL.md`, reference table, quick example, output templates. One file, two homes, agent config and public docs.

---

## What Worked

- **Constraints become style.** The MUST NOT list does the heavy lifting, agents don't reach for Options API, Vuex or `watch` where `computed` suffices without being told each time. The rule is set once, and every session inherits it.
- **On-demand loading keeps sessions lean.** The description-frontmatter trigger means the skill loads in Vue projects and stays silent elsewhere. Small context, sharper output.
- **A concrete starting point.** The quick example (a typed `<script setup>` component) gives the agent a shape to copy instead of an abstract rule to interpret.
- **One source, two audiences.** The same skill file serves the agent (web-dev-agent) and human readers (Spellbook of Skill). Writing it once forced me to keep it clean enough for both.
- **MIT plus attribution.** The derivation from Jeffallan's skill is credited in the file, a small but important habit for an ecosystem built on remixing.

---

## What Was Harder

- **Version whiplash.** The skill targets Vue 3 + Nuxt. When someone hands me a legacy Vue 2 codebase, the skill correctly stays quiet, and the judgment call is still mine. Some experience genuinely doesn't compress into a bullet list.
- **Keeping it current.** Vue moves fast, 3.5 shipped in 2024, and 3.6 is in RC as of late 2026 with Vapor Mode and the alien-signals reactivity rework. Skills rot. This one needs a review pass with every minor release.
- **Taste doesn't serialize.** The skill captures conventions, not judgment: when to split a component, when a composable is over-engineering, when to reach for a store. That part of "years of Vue" stays in my head, the file just makes the defaults correct.

---

## Try It, Fork It, Break It

The fastest way to see the skill in action is to install the agent config and open it in a Vue 3 project:

```bash
git clone https://github.com/Domenico-Tenace-Open-Labs/web-dev-agent.git
cp -r web-dev-agent/. ~/.config/opencode/
```

Requirements: a recent [OpenCode](https://opencode.ai) install; a Vue 3 (or Nuxt) project to see the skill load naturally.

1. Read the skill first: `web-dev-agent/skills/vue-expert/SKILL.md`.
2. Install the config as above, then restart OpenCode.
3. Open a Vue 3 project and watch the skill pick itself.
4. Find a gap? Open an issue or a PR on [web-dev-agent](https://github.com/Domenico-Tenace-Open-Labs/web-dev-agent), or add a guide to [Spellbook of Skill](https://github.com/Domenico-Tenace-Open-Labs/spellbook-of-skill).

The live Spellbook of Skill docs are at [spellbook-of-skill.netlify.app](https://spellbook-of-skill.netlify.app/).

---

## Final Thoughts

A decade in, Vue is still the first tool I reach for, not because it's trend-proof, but because it keeps reinventing itself without betraying its core: approachable templates, sane defaults, and a reactivity model that rewards you for thinking in state instead of DOM.

Writing the `vue-expert` skill was the natural next step of a habit I've had since day one: writing down what I learn until it becomes a tool. The skill is that writing, packaged. If you've been shipping with one stack for years, write your own, the format is deliberately simple, and the ecosystem is open for it.

Star or fork the repo if it helps you, and consider contributing your own expertise to Spellbook of Skill. Happy coding!
