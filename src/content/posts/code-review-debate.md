---
title: "The Code Review Debate"
description: "When to require reviews and when to skip them."
pubDate: 2023-09-28
tags: ["code-reviews", "process", "engineering-culture"]
---

Code reviews are great. Too many code reviews are worse than none.

## When Reviews Work

- Knowledge sharing across the team
- Catching bugs before production
- Maintaining code quality standards
- Mentoring junior developers

## When Reviews Break

- Blocking urgent fixes
- Slowing down small changes
- Creating bottlenecks
- Turning into nitpicking contests

## The Better Approach

**Tier by risk:**

```
Low Risk (review after merge):
- Documentation
- Minor fixes
- Single-file changes
- Experiments

High Risk (review before merge):
- New services
- Payment/billing logic
- Security changes
- Breaking changes
```

**Timebox reviews** - 24 hours max. If nobody reviews in a day, merge anyway.

**Size matters** - Small PRs get fast reviews. Large PRs rot. Keep them under 400 lines.

**Trust your team** - Not every change needs sign-off. Trust people to use judgment.

## The Real Answer

Reviews are a tool. Use them when they help. Skip them when they don't.

The goal is better code, not more process.
