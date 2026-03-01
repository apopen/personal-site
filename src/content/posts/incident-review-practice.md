---
title: "The Incident Review Practice"
description: "Learn from failures without blame."
pubDate: 2023-08-05
tags: ["incidents", "post-mortem", "learning", "engineering-culture"]
---

Something broke, everyone panicked a little, someone typed a heroic fix in production, and the graphs went back to normal.
Now what?

If you do not learn from incidents, they will repeat.
Usually at 2 a.m. on a Sunday.

## The Blame Trap

When things go wrong, teams play the blame game. It's human nature. It's also useless.

Blaming creates fear. Fear hides problems. Hidden problems become bigger problems.

## The Better Way: Incident Reviews

After any significant incident, gather the facts:

1. What happened?
2. Why did it happen?
3. What was the impact?
4. How did we detect it?
5. How did we fix it?
6. What can we learn?
7. What should we do differently?

## The Key Principles

**No blame** - Focus on systems, not people. Ask "how did the system let this happen?" not "who did this?"

**Be systematic** - Use a template. Be consistent. Make it a habit.

**Take action** - Reviews are useless if nothing changes. Assign owners. Track progress.

**Share widely** - Other teams can learn from your mistakes. Share the learnings.

## What Good Looks Like

```
┌─────────────────────────────────────────┐
│      Incident Review Example            │
├─────────────────────────────────────────┤
│ Summary: Database connection pool      │
│ exhausted, caused API timeouts         │
│                                      │
│ Root cause: Missing connection limit  │
│                                      │
│ Action items:                         │
│ - Add connection limits (Owner: Jane) │
│ - Add monitoring for pool usage        │
│ - Test failover scenarios             │
└─────────────────────────────────────────┘
```

## The Culture

Good teams learn from failure.
Great teams make it safe and even a little boring to report failure.

Build that culture deliberately.
It compounds over time and quietly saves you from the really scary incidents you never see.
