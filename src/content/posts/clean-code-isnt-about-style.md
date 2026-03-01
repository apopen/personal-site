---
title: "Clean Code Isn't About Style"
description: "Formatting rules miss the point. Here's what clean code actually means."
pubDate: 2023-07-22
tags: ["clean-code", "programming", "best-practices"]
---

Tabs versus spaces. Line length limits. Import ordering. Developers argue about these constantly.

Here's the thing: none of this matters.

## What Clean Code Actually Means

**Readability** - Can someone else understand this code in five minutes? Can you understand it in six months?

**Maintainability** - When requirements change, how hard is it to adapt? Can you make changes without introducing bugs?

**Testability** - Can you verify this code works? Can you do it without setting up the entire world?

**Intent** - Does the code say what it does? Or do you need comments to explain the obvious?

## What Doesn't Matter

- Where you put your braces
- Whether you use single or double quotes
- How you order your imports
- Line length (within reason)
- Commenting every single line

## A Practical Example

```php
// This is clean
function calculateTotal(array $items): float
{
    return array_sum(
        array_map(fn($item) => $item->price * $item->quantity, $items)
    );
}

// This is "correct" but painful
function calculate_total(array $items): float {
    $total = 0.0;
    foreach ($items as $item) {
        $total = $total + ($item->getPrice() * $item->getQuantity());
    }
    return $total;
}
```

Same logic. First version is clearer. That's what matters.

## The Real Rule

Write code for the next person who has to read it. Usually that's you. Treat future you with kindness.

Everything else is decoration.
