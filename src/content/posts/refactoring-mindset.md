---
title: "The Refactoring Mindset"
description: "How to improve code without breaking everything."
pubDate: 2023-05-20
tags: ["refactoring", "clean-code", "engineering"]
---

Refactoring is like surgery. Do it wrong and you cause damage. Do it right and the patient lives longer.

## The Rules

**One change at a time** - Don't refactor and add features simultaneously. If something breaks, you won't know why.

**Tests first** - Before touching code, have tests that verify behavior. If you break something, you'll know.

**Small steps** - Rename a variable. Extract a method. Move a function. Each small change is verifiable.

## When To Refactor

- Before adding new features that would be harder later
- When code is hard to understand
- When tests are hard to write
- When you've learned a better way

## When Not To Refactor

- Just because "it could be better"
- Right before a deadline
- Code that works and nobody touches
- Every file in the codebase "just because"

## The Approach

```
1. Identify the code to change
2. Write tests that pass with current behavior
3. Make the change
4. Verify tests still pass
5. Commit
6. Repeat
```

## The Honest Truth

Most refactoring attempts fail because they're too ambitious. You want to rewrite everything. You get overwhelmed. You stop.

Pick one thing. Fix it. Move on.

Consistency over intensity. That's how you improve a codebase.
