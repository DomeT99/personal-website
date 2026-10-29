---
title: "One Dev, Four Specialists: My Agent Team for OpenCode"
description: "Turning my minimalist QR code generator Glif into a mobile app with Capacitor, and an honest look at what AI-assisted mobile packaging actually takes."
author: Domenico Tenace
date: "2026-10-22"
image:
  url: "/images/posts/Web_Dev_Agent.webp"
  alt: "One Dev, Four Specialists: My Agent Team for OpenCode"
---

   <img src="/images/posts/Web_Dev_Agent.webp" alt="One Dev, Four Specialists: My Agent Team for OpenCode" width="1536" height="672" class="post__image" fetchpriority="high" decoding="async">

   ## Overview
   
   Hey everyone
   
   For a long time my OpenCode workflow was one agent, one giant conversation, and me asking it to code, then review, then fix the SEO, then update the docs. It works, but the context gets messy, and the agent that just wrote the code is the worst one to judge it.
   
   So I rebuilt the setup as a small team: one primary agent that builds, and four subagents it delegates to. Each one has its own role, its own boundaries and its own dedicated skill. Every agent is a single markdown file, so the whole thing is easy to read, tweak and version.
   
   Let's dive in!
   
   ---
   
   ## The Team
   
   **web-developer** is the primary agent, a senior web dev for Astro, Vue, TypeScript, Vite, Bulma and Tailwind. It's the one I talk to, and it owns the implementation.
   
   Then four subagents, all launched by the web-developer:
   
   **ux-ui-expert** designs and reviews UI, UX and graphics, always respecting the project's design system.
   
   **code-reviewer** reviews changes, a feature or the whole codebase, and reports issues by severity.
   
   **seo-expert** audits on-page, technical and content SEO.
   
   **documentation-updater** keeps README, changelog and guides in sync with the code.
   
   The flow is natural: I describe a feature, the web-developer proposes a plan, builds it after my OK, then calls the right specialists before we call it done.
   
   ---
   
   ## The Golden Rule: Propose First, Apply After Approval
   
   This is the heart of the setup, and it's the same in every agent. Nobody edits files in the first pass. They present a concrete proposal (files to change, what changes, why) and wait for my explicit approval. Then, when they do apply something, every single write is gated by an `ask` permission, so I confirm it again.
   
   The relay matters too. When a subagent proposes fixes, the web-developer passes the proposal to me instead of applying it on its own. Two checkpoints, no silent changes, and if something unexpected shows up mid-application, the instruction is to stop and report instead of improvising.
   
   ---
   
   ## Anatomy of an Agent File
   
   OpenCode has primary agents (the ones you talk to, switched with Tab) and subagents (specialists called by a primary agent, or by you with an @ mention). Agents live in `.opencode/agents/` and the file name becomes the agent name. Here's the frontmatter of my code-reviewer, trimmed:
   
   ```markdown
   ---
   description: Expert code reviewer for the current project, proposes fixes and applies them only after approval.
   mode: subagent
   color: "#f59e0b"
   permissions:
     # load and follow the dedicated skill
     - action: skill
       resource: code-review
       effect: allow
     # approval gate: every write asks for confirmation
     - action: edit
       resource: "*"
       effect: ask
     # web access for docs and known issues
     - action: webfetch
       resource: "*"
       effect: allow
     # connected MCP servers, when necessary
     - action: "*_*"
       resource: "*"
       effect: allow
     # sandbox: nothing outside the workspace
     - action: external_directory
       resource: "*"
       effect: deny
   ---
   ```
   
   Two details I like. First, the sandbox rule goes last on purpose: for `external_directory` the last matching rule wins, so that deny overrides every allow above it, including the MCP one. Agents can't read or write outside the current project, not even through the terminal. Second, web access and MCP servers are always allowed, but the prompt tells the agent not to overuse them and to try project knowledge first.
   
   Below the frontmatter comes the prompt: role, process, operating boundaries and the report format.
   
   ---
   
   ## One Dedicated Skill Per Subagent
   
   Each subagent has a global skill it must load first, before doing anything else:
   
   - code-reviewer loads **code-review**
   - seo-expert loads **seo-audit**
   - ux-ui-expert loads **web-design**
   - documentation-updater loads **update-documentation**
   
   The split is simple. The agent file says who the agent is and what it's allowed to do. The skill holds the actual checklist and workflow, loaded on demand so it doesn't clutter the context when it isn't needed. For example, the documentation-updater follows a fixed path: establish repository context, understand the change, inspect the implementation, search for documentation drift, plan, edit, validate, review the diff.
   
   Because the skills are global, I can reuse them across every project and improve them in one place.
   
   ---
   
   ## How the Delegation Works
   
   The web-developer prompt has a dedicated section for each specialist, saying exactly when to call it: code reviews, SEO audits and pre-ship checks, UI work and responsive fixes, documentation and changelog updates. It's explicit about what the specialist will bring back, too.
   
   The reports are structured and that's what makes them useful:
   
   **code-reviewer** returns findings ordered from critical to info, each with `path:line`, why it matters and a concrete fix. It also notes what is good, because a review that is only a list of problems isn't balanced.
   
   **seo-expert** returns findings by severity grouped as on-page, technical and content, with before and after snippets, a separate list of quick wins, and the items that need input from me.
   
   **ux-ui-expert** returns design proposals ranked by impact, the files to edit, asset recommendations and anything it can't decide without brand facts.
   
   **documentation-updater** returns a plan first: files to modify, files to add, files to leave alone and why. It only documents what it can verify against the implementation.
   
   And one rule I really like, shared by all of them: if a fact only I know (brand info, copy, a release version), flag it and ask, never invent it.
   
   ---
   
   ## Why This Beats a Single Agent
   
   **Fresh eyes.** The agent that wrote the code isn't the one reviewing it. That alone catches more than any "now review what you just wrote" prompt.
   
   **Cleaner context.** Each subagent works in its own child session, so the review reasoning doesn't pollute the building conversation.
   
   **Predictable behavior.** Same approval gate, same sandbox, same reporting style, across the whole team.
   
   **The routine is built in.** Review, SEO, design and docs checks are part of the setup, not something I have to remember at the end of every task.
   
   ---
   
   ## The Downsides
   
   It's not free magic. More agents means more tokens and more waiting, so for a one line fix it's overkill and I simply stay in the web-developer. The approval flow adds clicks, and with two checkpoints it can feel heavy on small tasks, though I prefer that to surprise edits. Subagent descriptions need care too, because similar descriptions make the primary agent pick the wrong one. And a review only helps if you actually read it.
   
   ---
   
   ## Final Thoughts
   
   Splitting one do-everything agent into a team looked like a small change, but it changed how I work. I stopped micromanaging prompts at the end of every task, and I got a setup where nothing touches my code without a proposal and a yes from me.
   
   If you use OpenCode, start small: one primary agent plus one reviewer with the approval gate. Once you see the difference, you'll want the rest of the team.
   
   Happy coding!
