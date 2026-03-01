---
title: "The Art of Estimation"
description: "Why estimates are always wrong and how to give useful ones anyway."
pubDate: 2023-11-08
tags: ["estimation", "planning", "project-management", "engineering"]
---

"How long will this take?" The hardest question in software.

## The Problem

You estimate 2 weeks. It takes 3. "You were wrong."

Here's the thing: estimates are guesses dressed up as promises. The unknown is too big.

## What Actually Works

**Break it down**

```
❌ "Refactor the payment system"
✅ "Extract payment logic to service class"
   - Identify all payment calls (2 hours)
   - Create service class (4 hours)
   - Update one caller (1 hour)
   - Test (2 hours)
   - Update remaining callers (4 hours)
   Total: 13 hours, plus 3 hours buffer = 2 days
```

Small tasks are easier to estimate. Aggregating precise estimates is more accurate than guessing at big chunks.

**Give ranges** - "3 to 5 days" is honest. "4 days" is a lie you tell yourself.

**Add buffer** - Multiply by 2. Sometimes more. Never less.

**Separate confidence** - "I'm confident this is 2 days" vs "No idea, could be 2 days or 2 weeks."

## What Doesn't Work

- Estimating in story points (just kicks the can down the road)
- Comparing to similar past projects (no two are the same)
- Getting upset when you're wrong (it's expected)

## The Cultural Fix

Make estimation honest. Accept uncertainty. Celebrate when estimates are wrong because it means you learned something.

Stop treating estimates as commitments. Treat them as guesses that get better over time.
