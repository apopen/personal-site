---
title: "Debugging: A Systematic Approach"
description: "Stop guessing. Start systematically finding bugs."
pubDate: 2024-03-18
tags: ["debugging", "engineering", "problem-solving"]
---

It doesn't work. You don't know why. Where do you start?

## The Wrong Approach

- Change random things
- Hope it magically fixes
- Spend hours without progress
- Blame the compiler

## The Right Approach

**1. Reproduce consistently**

If you can't reproduce it, you can't fix it. Find the exact steps that cause the bug.

**2. Simplify the case**

Remove variables. Isolate the problem. Can you make it fail with less code?

**3. Check the obvious**

- Typos
- Cached data
- Wrong environment
- Missing config
- Recent changes

**4. Read the error**

The stack trace tells you where. The message tells you what. Read it. Carefully.

**5. Rubber duck it**

Explain the problem out loud. To a duck. Or a colleague. The act of explaining often reveals the issue.

**6. Binary search**

Divide the problem in half. Is it in the first half or second? Narrow down until you find it.

## Tools

- Debuggers: Step through code
- Logs: What happened before the error
- Tests: Can you reproduce with a test?
- Git bisect: When did it break?

## The Mindset

Debugging is a skill. The best debuggers are systematic. They don't guess. They narrow down.

Stay calm. Be patient. Follow the evidence.
