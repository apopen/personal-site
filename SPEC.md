# Minimal Blog - Specification Document

## 1. Project Overview

**Project Name:** Minimal Blog  
**Type:** Static blog website  
**Core Functionality:** A premium, ultra-minimal blog with markdown-based content management, dark mode, and exceptional typography  
**Target Users:** Writers, developers, and creators who want a clean, distraction-free blogging platform

---

## 2. Design Philosophy

### Visual Principles
- **Ultra-minimal**: Every element must justify its existence
- **Generous whitespace**: Content breathes with ample margins and padding
- **Typography-first**: Type is the primary visual element
- **Calm visual rhythm**: Consistent spacing, no jarring elements
- **No borders, no ornamentation**: Pure content-focused design

### Color Palette

**Light Mode:**
- Background: `#FAFAFA` (warm off-white)
- Surface: `#FFFFFF` (pure white for cards)
- Text Primary: `#1A1A1A` (near-black)
- Text Secondary: `#6B6B6B` (muted gray)
- Accent: `#2563EB` (refined blue - subtle usage)
- Border/Divider: `#E5E5E5` (subtle)

**Dark Mode:**
- Background: `#0A0A0A` (near-black)
- Surface: `#141414` (elevated surface)
- Text Primary: `#FAFAFA` (near-white)
- Text Secondary: `#A3A3A3` (muted gray)
- Accent: `#60A5FA` (soft blue)
- Border/Divider: `#262626` (subtle)

### Typography

**Font Family:** 
- Headings: `"Instrument Serif", Georgia, serif` (elegant, editorial)
- Body: `"Satoshi", -apple-system, sans-serif` (clean, modern)
- Code: `"JetBrains Mono", monospace`

**Type Scale:**
- H1: 3rem (48px), font-weight: 400
- H2: 2rem (32px), font-weight: 400
- H3: 1.5rem (24px), font-weight: 500
- Body: 1.125rem (18px), line-height: 1.75
- Small: 0.875rem (14px)
- Caption: 0.75rem (12px)

### Spacing System
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Content max-width: 680px (optimal reading)
- Container max-width: 1100px

---

## 3. UI/UX Specification

### Layout Structure

**Global Layout:**
```
┌─────────────────────────────────────────┐
│  Navigation (sticky, backdrop blur)     │
├─────────────────────────────────────────┤
│                                         │
│           Main Content Area             │
│        (centered, max-width: 680)       │
│                                         │
├─────────────────────────────────────────┤
│              Footer                     │
└─────────────────────────────────────────┘
```

**Responsive Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Navigation
- Logo/Site title on left (links to home)
- Nav links on right: Home, Blog, About
- Theme toggle button (sun/moon icon)
- Minimal height: 64px
- Subtle backdrop blur on scroll

### Page Specifications

**Home Page:**
- Hero section with site title and brief description
- Recent posts section (3 latest posts)
- Clean, minimal introduction

**Blog Index:**
- Page title "Writing" centered
- List of posts with:
  - Title (linked)
  - Date (formatted: "January 15, 2026")
  - Excerpt (2-3 lines, truncated)
  - Subtle hover state (title color change)
- Chronological order (newest first)

**Blog Post:**
- Back link to blog
- Title (H1)
- Date and reading time
- Content (markdown rendered)
- Tags at bottom
- Previous/Next post navigation

**About Page:**
- Simple text content
- Optional profile image area
- Social links at bottom

### Component States

**Links:**
- Default: accent color
- Hover: underline animation (subtle)

**Buttons:**
- Theme toggle: icon-only, 40px touch target
- Subtle hover background on mobile

---

## 4. Technical Architecture

### Framework: Astro
- Static site generation (SSG)
- View Transitions for smooth navigation
- Image optimization built-in

### Key Dependencies
- `astro`: Core framework
- `@astrojs/mdx`: Markdown support
- `@astrojs/sitemap`: Sitemap generation
- `@astrojs/rss`: RSS feed
- `tailwindcss`: Utility styling (minimal usage)

### Content Management
- Posts stored in `/src/content/posts/*.md`
- Frontmatter schema:
  ```yaml
  title: string
  description: string
  pubDate: date
  updatedDate: date (optional)
  tags: string[]
  ```

### File Structure
```
/
├── src/
│   ├── components/
│   │   ├── BaseHead.astro
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── PostPreview.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── posts/
│   │       ├── hello-world.md
│   │       └── minimal-design.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── about.astro
│   │   └── rss.xml.ts
│   └── styles/
│       └── global.css
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### SEO Requirements
- Meta title and description
- OpenGraph tags (og:title, og:description, og:image)
- Twitter Card tags
- Canonical URLs
- Sitemap.xml
- RSS feed at /rss.xml

---

## 5. Acceptance Criteria

### Visual Checkpoints
- [ ] Navigation is minimal and unobtrusive
- [ ] Theme toggle works and persists
- [ ] Typography is elegant and readable
- [ ] Whitespace is generous throughout
- [ ] Dark mode is properly implemented
- [ ] Mobile layout is clean and usable

### Functional Checkpoints
- [ ] Blog posts render from markdown
- [ ] Blog index shows all posts sorted by date
- [ ] Individual post pages work with slugs
- [ ] RSS feed generates correctly
- [ ] Sitemap generates correctly
- [ ] Build completes without errors

### Content Workflow
- [ ] Adding new markdown post appears in blog
- [ ] Editing markdown updates the post
- [ ] Deleting markdown removes the post

---

## 6. Design Decisions Explanation

### Why Astro?
- Best-in-class markdown support
- Zero JS by default (fast, minimal)
- Static generation for optimal performance
- View Transitions for app-like feel

### Why This Typography?
- Instrument Serif: Editorial, elegant, distinctive
- Satoshi: Clean, modern, highly readable
- Large body text (18px): Better reading experience

### Why This Color Approach?
- Near-black/white instead of pure: Easier on eyes
- Single accent color: Focuses attention
- High contrast in dark mode: Accessibility

### Why These Spacing Choices?
- 680px content width: Optimal line length for readability
- Generous vertical rhythm: Reduces cognitive load
- Consistent spacing: Creates visual harmony
