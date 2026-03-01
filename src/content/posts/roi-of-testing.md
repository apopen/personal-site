---
title: "The ROI of Testing"
description: "When to test. What to test. And when testing is a waste of time."
pubDate: 2023-08-30
tags: ["testing", "quality", "engineering", "roi"]
---

Tests cost money to write. They cost money to maintain. They make development slower.

So why do we do it?

## The Math

```
Without tests:
- Debug time: 5 hours/month
- Production incidents: 2/month, 4 hours each
- Rework from bugs: 20% of features

With tests:
- Writing tests: 20% more time upfront
- Debug time: 1 hour/month
- Production incidents: 0.2/month
- Rework: 5% of features
```

The math varies, but the pattern is consistent. Tests pay for themselves.

## What To Test

**High-value targets:**
- Core business logic
- User-facing functionality
- Payment/billing
- Security-related code
- Anything that's hard to debug

**Lower value:**
- Simple utility functions
- Trivial code
- Code that changes often (tests become drag)
- Implementation details

## When Testing Is Not Worth It

- Quick prototypes
- One-off scripts
- Experimental code
- UI that changes constantly
- When you're learning (just build)

## The Real Answer

Test where it matters. Don't test everywhere. Be pragmatic.

The goal is confidence, not 100% coverage. That doesn't exist and isn't worth pursuing.
