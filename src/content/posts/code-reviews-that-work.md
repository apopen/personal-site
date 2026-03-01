---
title: "Code Reviews That Actually Work"
description: "Stop treating code reviews as gatekeeping. Start using them as a collaboration tool."
pubDate: 2023-08-18
tags: ["code-reviews", "engineering-culture", "collaboration"]
---

Code reviews are one of the best tools for improving code quality and sharing knowledge. Most teams use them as a weapon instead.

## The Wrong Way

- Nitpicking formatting
- Holding up PRs for weeks
- Being a jerk about it
- Using reviews to show you're smarter
- Treating it as a gate instead of a conversation

## The Better Way

**Review quickly** - Nothing kills momentum like waiting days for a review. Same-day reviews keep things moving.

**Focus on what matters**

```php
// ❌ Don't comment on
$items = array_filter($items, fn($i) => $i->active);

// ✅ Do comment on
// This query doesn't use the index. Let's add a where clause.
$users = User::where('active', true)->get();
```

**Be kind** - You're reviewing code, not attacking the person. "We could..." works better than "You should..."

**Ask questions** - "What led you to this approach?" opens dialogue. "This is wrong" closes it.

**Approve with comments** - If it's not blocking, approve. Trust your team. They can fix minor things later.

**Learn from it** - You will learn things from reviews. So will others. That's the point.

## The Goal

Code reviews should make code better and people better. Not create friction. Not slow things down. Not make enemies.

Use them that way.
