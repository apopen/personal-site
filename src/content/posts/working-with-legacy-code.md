---
title: "Working With Legacy Code"
description: "How to improve old codebases without losing your mind."
pubDate: 2023-12-28
tags: ["legacy-code", "engineering", "maintenance"]
---

You inherit a codebase. It's messy. Tests don't exist. The person who wrote it left years ago.

This is most software engineering. Here's how to handle it.

## The Mindset

**Don't rewrite** - Starting from scratch is a trap. You'll make new mistakes. You'll lose domain knowledge. You'll take forever.

**Improve incrementally** - Every change is an opportunity. Leave code better than you found it.

**Understand first** - Before changing anything, understand what it does. Why it was written that way. What breaks if you touch it.

## The Strategy

**Characterize** - Run the code. See what it does. Write tests that capture current behavior.

**Identify boundaries** - What's the blast radius of changes? What breaks if you touch this?

**Work in safe zones** - New code, new services. It's easier to build good patterns than fix old ones.

**Sprinkle patterns** - Can't refactor everything? Add good patterns where you can. Consistency helps.

## What Works

- Tests that verify behavior
- Small, focused changes
- Good documentation
- Clear naming
- Removing dead code

## What Doesn't Work

- Big bang rewrites
- Changing everything at once
- Assuming the original developer was stupid
- Taking shortcuts

## The Truth

All code becomes legacy eventually. Yours too. The goal isn't perfect code. It's code that works, that you can change, that others can understand.

Ship. Learn. Improve. Repeat.
