---
title: "The Performance Budget"
description: "How fast should your app be? Measure it."
pubDate: 2024-03-25
tags: ["performance", "web-performace", "optimization", "user-experience"]
---

Your app loads in 3 seconds.
Is that fast, slow, or fine for now?
Like most things in engineering, the answer is it depends.

Here is how to think about performance without hand waving.

## The Metrics That Matter

**Largest Contentful Paint (LCP)** - When main content loads. Should be under 2.5 seconds.

**First Input Delay (FID)** - How fast it responds to interaction. Under 100ms.

**Cumulative Layout Shift (CLS)** - Does the page jump around? Under 0.1.

## The Budget

Pick numbers. Hold the team to them. That's a performance budget.

```
┌─────────────────────────────────────────┐
│        Performance Budget Example       │
├─────────────────────────────────────────┤
│ • First Contentful Paint: < 1.5s       │
│ • Time to Interactive: < 3s            │
│ • Total page weight: < 1MB              │
│ • JavaScript: < 200KB                  │
│ • Images: Optimized, lazy-loaded      │
└─────────────────────────────────────────┘
```

## Measuring

- Lighthouse in Chrome DevTools
- WebPageTest for deep analysis
- Real user monitoring (RUM)
- Synthetic testing in CI/CD

## Optimizing

- Optimize images
- Code split and lazy load
- Minify and compress
- Cache aggressively
- Use CDN

## The Point

Performance is a feature. You need to care about it. Measure it. Budget for it.

Fast apps win. Slow apps lose users.
