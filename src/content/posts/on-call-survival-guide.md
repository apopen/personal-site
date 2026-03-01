---
title: "The On-Call Survival Guide"
description: "How to set up on-call rotations that don't destroy your team."
pubDate: 2024-08-25
tags: ["on-call", "devops", "engineering-culture", "infrastructure"]
---

On-call is necessary. Team Members getting burned out from on-call is not.

## The Problems

- Too many alerts
- Unclear escalation paths
- No time to fix root causes
- Middle of the night pages for non-issues
- No support from management

## Fix It

**Alert wisely** - If it doesn't need immediate action, it's not an alert. It's a log.

```
Alert Criteria:
- Requires human action NOW
- User-facing impact
- Data loss risk
- Security breach

Not An Alert:
- High but stable CPU
- Slow but working
- Known issues
```

**Build escalation** - L1, L2, L3. Know who to wake up when.

**Fix during the day** - If someone gets paged, the response should be: fix now, schedule cleanup for tomorrow.

**Limit exposure** - No more than one week on-call per quarter. Rotate fairly. Compensate appropriately.

**Review regularly** - What alerts fired? Were they valid? Can we reduce noise?

## Supporting Your Team

- Allow recovery time after rough nights
- Don't punish people for pages
- Budget time for reliability work between on-call periods
- Celebrate when things go well

## The Bottom Line

On-call shouldn't be torture. It should be sustainable. If your rotation isn't, fix it.

Smart systems fail gracefully. Good teams support each other. Both matter.
