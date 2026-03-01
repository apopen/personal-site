---
title: "Handling Production Incidents"
description: "How to stay calm when everything is on fire."
pubDate: 2024-02-05
tags: ["incidents", "on-call", "devops", "emergency-response"]
---

It is 2 a.m.
Your pager goes off.
Something is broken in production and users are understandably annoyed.

Here is how to handle it without losing your mind or your weekend.

## The First 5 Minutes

**Acknowledge** - Let people know you're looking at it. Don't let the alert rot.

**Assess** - What's broken? How bad is it? Is it getting worse?

**Communicate** - Update the status page. Tell stakeholders. Silence feeds anxiety.

## The Fix

**Focus on mitigation first** - Can you stop the bleeding before you fix the wound? Roll back. Turn off the feature. Whatever stops the bleeding.

**Understand before changing** - Don't just change things randomly. You need to understand what's happening.

**One change at a time** - If you make three changes and it breaks, you won't know which one caused it.

**Document as you go** - Write down what you try. What works. What doesn't. This helps later.

## After It's Fixed

**Communicate** - Tell everyone it's resolved. Explain what happened if you can.

**Review** - What went well? What didn't? How can you prevent this?

**Fix the root cause** - The fix you did at 2am was a band-aid. Now fix it properly.

**Automate** - If it can happen again, automate the detection and response.

## The Mindset

Incidents will happen. It's not about preventing them entirely. It's about handling them well.

Stay calm. Be systematic. Communicate clearly.
