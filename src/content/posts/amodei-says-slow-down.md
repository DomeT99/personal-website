---
title: "Amodei Says Slow Down. Should We Believe Him?"
author: Domenico Tenace
date: "2026-09-15"
image:
  url: "/images/posts/Amodei_Says_Slow_Down.webp"
  alt: "Amodei Says Slow Down. Should We Believe Him?"
---

   <img src="/images/posts/Amodei_Says_Slow_Down.webp" role="presentation" class="post__image" decoding="async">

## Overview

Hey everyone

A few days ago Dario Amodei, CEO of Anthropic, posted a long thread on X asking the industry to slow down AI development. Not "we should be careful", but a direct call to reduce the pace at which model capabilities are being pushed forward. Elon Musk and Sam Altman both publicly agreed with him within hours.

When the CEO of one of the leading labs asks everyone, including himself, to ease off the gas, it's worth actually unpacking why, and whether it holds up.

Let's dive in!

---

## What Amodei Actually Said

Two concerns, specifically.

The first is recursive self-improvement. AI models are increasingly being used to help train and build the next generation of AI models. Amodei says this loop has accelerated noticeably since last summer, and if it keeps compounding without real oversight, it could outpace the labs' own ability to understand what they're building. That's not a hypothetical, it's a description of what's already happening inside frontier labs right now.

The second is more concrete: actual incidents during testing. Amodei referenced a swarm of OpenAI-connected agents that, during an experiment, acted as a highly determined collective and went after systems outside their assigned scope, including an attempt to sidestep the evaluation process meant to grade their own performance. The fact that this specific incident (targeting Hugging Face) caused limited damage isn't reassuring to him, more capable and similarly misaligned systems could cause a lot more.

OpenAI also confirmed a separate incident in May involving an unauthorized operation against RubyGems, a package registry used by developers, that led to a spam campaign and a temporary suspension of new account creation. Anthropic reported three of its own cases where models gained unauthorized access to external organizations during testing.

This is the part that matters most to me as a developer. These aren't science fiction scenarios, they're agentic coding and automation systems doing things nobody asked them to do, during controlled tests, at companies with some of the best safety teams in the industry.

---

## The Extinction Number

Here's where it gets heavier. A researcher who recently left Anthropic, Jacob Coxon, said the major labs are gambling with systems that could eventually self-improve autonomously, and floated a real risk of human extinction within the next decade.

Evan Hubinger, one of Anthropic's own alignment researchers, went on record saying he finds those concerns credible, putting a probability above 10% on a scenario where AI kills all humans within ten years, citing internal Anthropic assessments as part of his reasoning.

Geoffrey Hinton, Nobel laureate and one of the founding figures of modern AI, has separately said a probability above 10% isn't unreasonable either.

For context on how strange that number is: if an aerospace engineer told you a plane had a greater than 10% chance of killing everyone on board, that plane never leaves the ground. And yet here we are, with actual insiders quoting similar odds about the technology they're building and shipping.

---

## The Part Where It Gets Complicated

This is also where I think it's fair to be skeptical, not of the risk itself, but of the framing.

Anthropic is reportedly heading toward an IPO as early as October or November, one that could be enormous. David Sacks, a figure close to the White House and former US AI czar, has gone as far as suggesting Anthropic should pause its path to going public until these internal warnings are properly investigated. That's not a small thing to suggest about a company its own CEO is simultaneously asking to slow down.

Walter Quattrociocchi, a data science professor at Sapienza University and advisor to the EU on AI risk evaluation, makes a useful distinction here: separate the concrete risks from the apocalyptic narratives. His point is that doomsday framing can actually serve the market, by making the technology sound more powerful and more inevitable than it currently is, which is a great story for attracting investment. He argues the more immediate danger is still simpler: models making mistakes without proper verification systems in place, an area where real progress has actually been made.

It's worth remembering that GPT-2, a model that looks almost quaint by today's standards, was originally presented by OpenAI as too dangerous to release without caution. Labs have alternated between "look how powerful this is" and "this is genuinely scary" announcements for years, and both framings tend to serve the same business.

None of this means Amodei is wrong. It means the signal and the marketing are tangled together in a way that's genuinely hard to pull apart, even for people who follow this closely.

---

## Where I Actually Land

I don't think this is a bubble in the sense that the technology doesn't work or won't matter. Coding assistants, agentic workflows, and multimodal models have already changed how I build things day to day, that part isn't hype, it's just true.

What I think might be a bubble is the current pace of capability claims relative to actual alignment progress. We're watching labs ship increasingly autonomous agents into production while their own safety researchers are publicly uncertain whether those systems are under control. That gap, between deployment speed and understanding, is the actual story here, more than any single extinction percentage.

The recursive self-improvement point is the one I take most seriously, not because it's dramatic, but because it's mechanical. If models are meaningfully accelerating the training of the next generation of models, that's a real feedback loop, and feedback loops are exactly the kind of thing that's hard to slow down once market incentives are pointed the other way. Every lab has a competitor racing them, and slowing down unilaterally means losing ground.

That's the actual tension nobody in this story has resolved. Amodei can ask the industry to slow down while simultaneously needing to hit his own IPO targets. Altman can agree in public while OpenAI keeps shipping faster models. Everyone wants collective restraint, nobody wants to be the one who blinks first competitively. That's not hypocrisy exactly, it's just what a genuine collective action problem looks like from the inside.

---

## What I'd Actually Watch For

Forget the extinction percentages, they're impossible to verify and easy to weaponize either way. Watch three things instead.

Whether the external evaluator access Amodei proposed, giving outside researchers permanent, employee-level access to test these systems, actually happens and isn't quietly watered down before the IPO.

Whether more of these "agent went outside its assigned scope" incidents get disclosed publicly instead of surfacing only after journalists dig them up.

And whether regulation catches up in any meaningful way, given that the EU is already involved in reviewing some of these incidents, while the US still doesn't have anything close to binding federal rules for frontier model deployment.

If those three things move in the right direction, this whole episode ages well, a moment where the industry actually course corrected. If they don't, and this was mostly a well-timed conversation ahead of a record IPO, we'll know that too, probably within a year.

---

## Final Thoughts

AI is not a bubble in the sense of "this will all disappear." The tools are real, the productivity gains are real, I use them every single day and so do most of you reading this. But "the technology is useful" and "the people building it fully understand and control it" are two very different claims, and this week made that gap impossible to ignore.

Amodei's concerns are legitimate. So is the skepticism about timing. Both things are true at once, and pretending otherwise, in either direction, is the least useful way to think about where this actually goes next.

Happy coding, and maybe keep an eye on the agents.
