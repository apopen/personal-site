# Minimal Blog

A premium, ultra-minimal blog built with Astro. Features elegant typography, dark mode, and a distraction-free reading experience.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Posts

Create a new markdown file in `src/content/posts/`:

```markdown
---
title: "Your Post Title"
description: "A brief description for the post preview."
pubDate: 2026-03-01
tags: ["tag1", "tag2"]
---

Your content here...
```

## Configuration

Edit `src/lib/config.ts` to customize:

- Site title and description
- Author information
- Social links

Update `astro.config.mjs` with your actual site URL for proper sitemap and RSS feed generation.

## Project Structure

```
src/
├── components/     # UI components
├── content/posts/  # Markdown blog posts
├── layouts/       # Page layouts
├── lib/           # Configuration
├── pages/         # Routes
└── styles/        # Global CSS
```

## Tech Stack

- Astro 5
- Tailwind CSS 4
- TypeScript
- View Transitions

## License

MIT
