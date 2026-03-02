---
name: blog-post-writer
description: Assist with drafting and revising Markdown blog posts for the personal_site project, following existing frontmatter, structure, and tone. Use when the user wants to plan, outline, or write a new post or improve an existing one under src/content/posts.
---

# Blog Post Writer

## Purpose

This skill helps maintain a consistent structure, frontmatter, and voice across blog posts in this project (files under `src/content/posts/`).

Use it when:
- Drafting a new post idea from scratch
- Turning notes into a publishable article
- Revising or tightening an existing draft
- Adapting an article to match the style of this site

## Project Conventions

### Frontmatter

All posts use simple YAML frontmatter at the top of the file:

```markdown
---
title: "The Junior Developer Survival Guide"
description: "What I wish I knew when I started. And what I still remember."
pubDate: 2024-04-22
tags: ["career", "junior-developer", "growth", "advice"]
---
```

**Rules:**
- **`title`**: Short, concrete, in quotes. Prefer specific over clever.
- **`description`**: One clear sentence of what the post delivers, not clickbait.
- **`pubDate`**: `YYYY-MM-DD`.
- **`tags`**: Short, kebab-case-ish labels in a JSON-style array of strings.

When generating a new post:
1. Propose sensible `title`, `description`, and `tags` based on the topic.
2. Use the current or intended publication date for `pubDate`.
3. Keep frontmatter minimal; do not invent extra fields unless they already exist in this repo.

### Body Structure and Tone

From existing posts:
- Opening paragraphs are **direct and human**, often with a short story or relatable scenario.
- Posts are broken into **clear sections** with `##` headings.
- Headings are short phrases like `## The Blame Trap`, `## The Essentials`, `## The First Year`.
- Lists and bold phrases highlight the most important points.
- Examples (including ASCII boxes) are welcome when they clarify concepts.

**Tone:**
- Plain, conversational English.
- Assume a thoughtful professional reader; avoid jargon when a simpler phrase works.
- Prefer **short paragraphs** and **concrete advice** over theory.
- Occasional dry humor is okay; never snark at the reader.
- Humor when relevant to the content

## Writing Workflow

When the user asks for help with a blog post, follow this workflow.

### 1. Clarify the Goal

Summarize the post in 1–2 sentences:
- Who is it for? (e.g., junior devs, tech leads, infra engineers)
- What problem or question does it help with?
- What should the reader be able to do or think differently after reading?

If their prompt is vague, infer a reasonable target audience and outcome from context and state your assumption briefly.

### 2. Propose a Structure

Create a short outline with 3–6 sections using `##` headings, for example:
- Hook / context (no heading or an optional `## Why This Matters`)
- 2–4 core sections that deliver the advice or explanation
- Optional `## The Trap`, `## Starting Point`, `## What Good Looks Like`, or `## The Secret` style sections when appropriate

Guidelines:
- Each section should have a clear purpose (e.g., definition, principles, examples, pitfalls, checklist).
- Prefer section titles that mirror the existing style: punchy, a bit informal, and clear.

### 3. Draft the Post

When drafting:
- Start with 1–3 short paragraphs that **hook** the reader with a concrete situation or feeling.
- Use bold text for key ideas inside paragraphs, mirroring existing posts:
  - `**Ask questions** - ...`
  - `**No blame** - ...`
- Use lists where they make scanning easier, especially for:
  - Principles
  - Action items
  - Traps / misconceptions
- Include at least one practical example, snippet, or mini-framework if the topic benefits from it (e.g., a bullet-point checklist, or an ASCII box like existing posts).

Keep sentences concise. Avoid over-explaining obvious points; focus on insights the reader cannot easily infer.

### 4. Edit for Clarity and Tightness

After drafting, do an editing pass:
- Remove redundant sentences and filler phrases.
- Combine overly short fragments where it improves flow.
- Ensure each section answers a clear question (e.g., “What is this?”, “Why does it matter?”, “What should I do?”).
- Check that the post ends with a **clear takeaway or encouragement**, similar to existing posts:
  - A call to start small
  - A reminder that progress compounds
  - A reassurance that struggle is normal

If the user provides an existing draft, preserve their voice where possible but gently bring it closer to this style.

### 5. Produce Final Markdown

When the user is ready for a final version:
1. Output a complete Markdown file including:
   - Frontmatter block
   - A blank line
   - The full body content
2. Ensure headings, lists, and bold formatting render correctly.
3. Do not add backticks around the entire document unless explicitly asked; return it as Markdown content ready to save under `src/content/posts/`.

## Examples

### Example: From Topic to Post

**Input:**  
User: "I want a post about helping mid-level engineers become effective tech leads."

**Agent steps using this skill:**
1. Clarify goal: summarize audience (mid-level engineers) and outcome (understand what changes when you become a lead).
2. Propose outline, e.g.:
   - Paragraph hook about being promoted and feeling lost
   - `## What Changes (And What Doesn't)`
   - `## New Responsibilities`
   - `## Common Traps`
   - `## How to Grow Into It`
3. Draft body in the established tone, using short sections and bolded key ideas.
4. Suggest frontmatter:
   - `title`: "The Mid-Level to Tech Lead Jump"
   - `description`: "What actually changes when you become a tech lead, and how to survive the jump."
   - `tags`: ["career", "tech-lead", "growth", "leadership"]
5. Present the full Markdown document, ready to save.

### Example: Tightening an Existing Draft

When asked to "improve" a draft:
1. Keep the user’s structure unless it clearly conflicts with project style.
2. Shorten long paragraphs into 2–3 sentence chunks.
3. Add or adjust headings to make the flow scannable.
4. Turn buried insights into bolded phrases or lists.
5. Ensure the closing section leaves the reader with a concrete takeaway or next step.
6. Expand upon areas that where it makes sense
7. Add technical examples (markdown code --- markdown mermaid charts) to show examples when needed

