---
title: "I Open-Sourced My Web Developer Agent. AI Is Supercharging Open Source"
description: "Turning my minimalist QR code generator Glif into a mobile app with Capacitor, and an honest look at what AI-assisted mobile packaging actually takes."
author: Domenico Tenace
date: "2026-11-02"
image:
  url: "/images/posts/AI_Is_Supercharging.webp"
  alt: "I Open-Sourced My Web Developer Agent. AI Is Supercharging Open Source"
---

   <img src="/images/posts/AI_Is_Supercharging.webp" alt="I Open-Sourced My Web Developer Agent. AI Is Supercharging Open Source" width="1536" height="672" class="post__image" fetchpriority="high" decoding="async">

I finally did it: my web developer agent is public on GitHub. I named the repo `web-dev-agent`, and it lives at [github.com/Domenico-Tenace-Open-Labs/web-dev-agent](https://github.com/Domenico-Tenace-Open-Labs/web-dev-agent), for the first time since I started building it, people other than me can run it, break it, and tell me what it should do next.

Making that call felt less like a release and more like surrendering control, which is exactly why I made it. Every week I read about agents, benchmarks, and new harnesses, and almost all of it is built in the open now. Keeping mine closed would have meant hiding in exactly the place the ecosystem has decided things get better: public repositories, public issues, public pull requests.

Turns out I picked a decent moment for it. The data from the last twelve months shows something that would have sounded like science fiction in 2023: AI agents are now a structural force in how open source grows, not a nice-to-have at the edge of the dashboard. Here is what I shipped, and here is the evidence that the open source flywheel has a new engine.

## What I shipped, and where it sits

A "web developer agent" sounds either trivial or terrifying, and it's neither. Mine is an [OpenCode](https://opencode.ai) agent configuration: a primary agent, `web-developer`, that works like a senior frontend developer for Astro, Vue 3 (+ Nuxt), Vite and strict TypeScript, paired with six specialist subagents (code review, SEO, UI/UX, accessibility, documentation, security), nine skills, two slash commands and three rule sets. It scaffolds a project with `/scaffold-frontend-project` (pnpm only, strict TypeScript), injects clean-code, Astro and Bulma conventions into every session, and can audit the result before it ships.

The point isn't magic, it's leverage. The agent turns the tedious loop of *scaffold → implement → check → fix* into something a developer supervises instead of performs. You stay on the decisions: what to build, what's good enough, what ships. The agent does the walking, and because every write is approval-gated (`effect: ask`) and the workspace is sandboxed (`external_directory: deny`), "supervise" is the operating mode, not a suggestion.

I'm not entering an empty market. The most striking thing about open source in 2026 is that the agents themselves went open source. `opencode`, the model-agnostic agent from Anomaly, passed 200,000 stars by late 2026 and sits near the top of GitHub's fastest-growing *and* most-engaged project lists. OpenAI's Codex CLI and Google's Gemini CLI are open too, with six-figure star counts. Aider, Cline, OpenHands, the list goes on. A year and a half ago the category was a handful of tools, most of them closed. Today it's a category where the reference implementations are public, MIT- and Apache-licensed code that anyone can fork. Mine plugs into that same harness, it's an OpenCode configuration, MIT-licensed, and model-agnostic.

Publishing into that ecosystem is the whole point of this article.

## Open source is growing faster than ever (and AI is part of the why)

Start with the raw numbers, because they're the least controversial thing I'll say today. According to GitHub's Octoverse report published October 28, 2026, the twelve months ending September 2026 were the biggest in GitHub's history:

| Metric (12 months ending Sep 30) | 2024 | 2025 | 2026 |
|---|---|---|---|
| Pushes | 5.2B | 6.7B | **17.9B** (more than 2024 + 2025 combined) |
| Commits | 10.0B | 12.9B | **34.3B** |
| Merged pull requests | 402M | 538M | **1.3B** (~3.5M/day) |
| Actions jobs | 8.0B | 14.0B | **45.4B** |

Open source holds up its end of that growth: contributions to public repositories reached **2.5 billion in 2026, more than double 2025's 1.12 billion**. The developer base keeps expanding too: **225 million+ developers** on GitHub today, 36 million of them joining in 2025 alone, more than one new developer every second. March 2025 also set a record: 255,000 first-time contributors in a single month.

AI isn't the whole story behind those numbers, but it's woven into them. GitHub reports that about 80% of new developers start using Copilot within their first week, and more than a million public repositories now use an LLM SDK, up 178% year over year (both Octoverse 2025). The barrier to *contributing code* has never been lower: the first draft is cheap now, and the bottleneck has moved to review, which is exactly where a human should be.

## Agents have become the new contributors

The step change in 2026 is that agents stopped being assistants and started being *contributors*, with a GitHub identity, a branch, and a pull request.

- **More than 40% of pull requests on GitHub now start from an agent's first draft** (September 2026), up from 17% in March. That's **110 million agent-started PRs in September alone**, roughly six times March's volume. GitHub notes its detection is a floor, not a ceiling.
- Pull requests started by agents change multiple files more often (87% vs 79%) and, by September, merged within two weeks at a higher rate than the non-agent baseline (90% vs 86%).
- GitHub's Copilot coding agent alone contributes **~1.2 million pull requests per month** (GitHub, Oct 15, 2025), and paid Copilot subscribers grew 75% year over year to 4.7 million by January 2026.
- Independent academic work agrees. The AIDev dataset measured **~930,000 agent-authored PRs across ~116,000 repositories** between December 2024 and July 2025, spanning Codex, Devin, Copilot, Cursor, and Claude Code (arXiv:2606.28235).

There's also a striking correlation in this year's report: among repositories created in 2026, the average repo **with an agent configuration file logged eight times as many commits** as the average new repo without one. Correlation, not causation, but when a nearly-free text file (an `AGENTS.md` that tells the agent how your project works) coincides with an 8x difference in activity, it's worth treating seriously.

The language data tells the same story from another angle. The three fastest-growing language communities, Rust (+162% year over year), TypeScript (+134%), Python (+118%), are the ones with the highest share of AI-involved merged PRs (40 to 44%). The languages where agents show up the most are the ones where the communities are growing the fastest.

This is the ecosystem I just published into. An open-source agent is no longer a hobby artifact; it's infrastructure that other people's repositories read, run, and learn from.

## The open source economy is finally getting some help

For years, the open source conversation has been about a mismatch: more consumers than contributors, and a shrinking pool of volunteer maintainers. The numbers are grim. Tidelift's 2024 survey found **60% of maintainers are unpaid**, and roughly **60% have quit or seriously considered quitting**. The maintainer base is aging, maintainers aged 46 to 65 have doubled since 2021, while contributors under 26 dropped from 25% to 10% of the total (via GitHub, Aug 2025, citing Tidelift 2024).

AI can't fix funding by itself, but 2026 is the first year the economy around open source has real money moving into it:

- **Sovereign Tech Fund** (Germany): €61.6M commissioned across 2022 to 2026 for critical OSS, funding curl, OpenSSH, the OpenSSF Scorecard, and most recently €1.285M for KDE in May 2026.
- **GitHub Secure Open Source Fund**: $1.25M across 125 projects at launch (November 2024), with partner commitments since.
- **GitHub Sponsors**: $60M+ paid out cumulatively (November 2024 figures).
- **EU Sovereign Tech Fund pilot**: launched in 2026.

Fewer young hands, more code, and new institutional money: the gap between supply and demand of maintainer time is exactly where agents plug in. They won't review as well as a senior maintainer, but they can triage issues, update dependencies (developers merged 30M+ Dependabot PRs in 2026, about double 2025's pace, Octoverse 2026), fix boilerplate, and keep the repository alive while the human does the parts that need judgment. Published under MIT, an agent like mine is a tool any maintainer can run at zero license cost, installation is a single `cp -r` into your OpenCode config directory. That's the argument for this repo, and it's the argument for open-sourcing agents generally.

## The honest counterweight

I'd be lying if I told you the story is only upward momentum. The last couple of years produced some sobering findings.

- **METR's randomized controlled trial** (July 2025): 16 experienced OSS maintainers working on 246 real issues in mature repositories were **19% slower with AI tools, while believing they were 20% faster**. Perception and reality are diverging at the exact moment everyone is making tooling decisions.
- **Stack Overflow's 2025 survey**: 84% of developers use or plan to use AI tools, yet **46% distrust the accuracy** of the output and only 3% say they highly trust it. The top frustration: results that are "almost right."
- **Security**: broken access control overtook injection as the most common CodeQL alert, **151,000+ repositories, +172% year over year** (Octoverse 2025), and GitHub itself ties part of that surge to AI-generated scaffolds that skip critical authorization checks.
- **Maintainers remain skeptical of AI contributions**: 64% of maintainers said they'd be less likely to accept a contribution if they knew it was AI-generated (Tidelift 2024).

This is why the Octoverse line "review is how developers shape what comes back" isn't marketing, it's the actual operating model. Agents generate volume; humans curate quality. Speed without review is how you get slop in, security holes in, and maintainers out.

I built my agent with that tension in mind. Its job isn't to maximize lines generated, it's to reduce the *review load per merged change*: conventions enforced while writing mean fewer style nits in review, and a specialist subagent for each domain, accessibility, SEO, security, UI/UX, code review, means whole categories of problems get caught before a human ever looks at the diff. If the agent makes my reviews shorter, it's working.

## What this means for you

Whether you're a maintainer, a contributor, or someone about to be both, here's a concrete do-list:

1. **Add an agent configuration file to your repo.** An `AGENTS.md` that documents structure, conventions, and commands is nearly free, and it's the file that coincides with the 8x commit difference in this year's data. It also helps every human who joins later.
2. **Treat agent-authored PRs as review-first work.** They merge fast (90% within two weeks); you're the gate. Run CI, require tests, and wire up Dependabot and a security scanner (94% of the top 50 projects use OpenSSF Scorecard, Octoverse 2025).
3. **Automate the maintenance backlog, not the architecture.** Agents are genuinely good at triage, dependency updates, and boilerplate, the exact work that burns maintainers out. Keep humans on design decisions and interface contracts.
4. **If you build agents, ship them open.** Public agents get public benchmarks, public bug reports, and public improvements, and every README and config file doubles as training signal for the next generation.
5. **Measure your own loop.** METR showed that beliefs about AI speed are unreliable. Track review time and revert rates; keep what helps, drop what doesn't.

## The flywheel

Here's the loop I'm betting on: open source gives AI agents their training data, their benchmark suites, and their adoption channels. The agents, in turn, give open source more contributors, more merged PRs, and more velocity. Each open-sourced agent adds a gear to that machine.

`web-dev-agent` is mine. It's at [github.com/Domenico-Tenace-Open-Labs/web-dev-agent](https://github.com/Domenico-Tenace-Open-Labs/web-dev-agent), clone it, drop it into `~/.config/opencode`, and try it on a real project. Open an issue when it does something dumb (it will), and fork it if you want to make it yours. And whether or not you touch my repo: if you've been building something useful with an agent, consider doing what I finally did. Build it in the open, and let the ecosystem do the rest.

## Sources

- [GitHub: Octoverse 2026, Commits, pushes reach new highs in 2026 as developers build with agents (Oct 28, 2026)](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/)
- [GitHub: Octoverse 2025, A new developer joins GitHub every second (Oct 28, 2025)](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)
- [GitHub: Copilot, Faster, smarter, and built for how you work now (Oct 15, 2025)](https://github.blog/ai-and-ml/github-copilot/copilot-faster-smarter-and-built-for-how-you-work-now)
- [GitHub: Who will maintain the future? (Aug 20, 2025)](https://github.blog/open-source/maintainers/who-will-maintain-the-future-rethinking-open-source-leadership-for-a-new-generation)
- [GitHub: Announcing GitHub Secure Open Source Fund (Nov 19, 2024)](https://github.blog/news-insights/company-news/announcing-github-secure-open-source-fund/)
- [Stack Overflow Developer Survey 2025, AI](https://survey.stackoverflow.co/2025/ai)
- [METR: Early 2025 AI experiences of experienced open-source developers (arXiv:2507.09089)](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study)
- [AIDev: Measuring ecosystem-level risk in AI-native software (arXiv:2606.28235)](https://arxiv.org/abs/2606.28235)
- [Tidelift: State of the Open Source Maintainer 2024 (via SD Times, Sep 17, 2024)](https://sdtimes.com/open-source/the-state-of-open-source-maintainers/)
- [Sovereign Tech Agency, public reports (2022 to 2026)](https://www.sovereign.tech/)
- [KDE: Sovereign Tech Fund invests in KDE (May 13, 2026)](https://kde.org/announcements/sovereign-tech-fund-invests-kde)
- [GitHub Open Source programs (Sponsors + Secure Open Source Fund)](https://github.com/open-source)
- [opencode, open-source AI coding agent (anomalyco/opencode)](https://github.com/anomalyco/opencode)
- [GitHub Changelog: Copilot coding agent is now generally available (Sep 25, 2025)](https://github.blog/changelog/2025-09-25-copilot-coding-agent-is-now-generally-available/)
- [Microsoft FY26 Q2 earnings: GitHub Copilot 4.7M paid subscribers (via TechCrunch, Jan 29, 2026)](https://techcrunch.com/2026/01/29/satya-nadella-insists-people-are-using-microsofts-copilot-ai-a-lot)
