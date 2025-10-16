# Suyi Zhang - Personal Website

Modern personal website built with Next.js 14, MDX, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX (Markdown + React components)
- **Deployment**: GitHub Pages
- **Language**: TypeScript

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm run export
```

The static site will be generated in the `out` directory.

## Writing Blog Posts

Blog posts are written in MDX format and stored in `content/blog/`.

### Create a New Post

1. Create a new file: `content/blog/your-post-slug.mdx`
2. Add frontmatter metadata:

```mdx
---
title: "Your Post Title"
date: "2025-01-20"
description: "Brief description for SEO and preview"
tags: ["tag1", "tag2"]
---

Your content here with **markdown** formatting and React components!
```

### MDX Features

- Full Markdown support (headers, lists, code blocks, etc.)
- Syntax highlighting for code
- React components (if needed)
- GitHub Flavored Markdown (tables, task lists, etc.)

## Project Structure

```
├── src/
│   └── app/              # Next.js app router
│       ├── layout.tsx    # Root layout with navigation
│       ├── page.tsx      # Homepage
│       ├── blog/         # Blog pages
│       │   ├── page.tsx           # Blog index
│       │   └── [slug]/page.tsx    # Individual posts
│       └── publications/
│           └── page.tsx  # Publications page
├── content/
│   └── blog/             # MDX blog posts
├── public/               # Static assets
└── package.json
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `nextjs-mdx-migration` branch.

To deploy manually:

```bash
npm run deploy
```

## Migrating from Hugo

This is a migration from the old Hugo Academic theme. Key improvements:

- Modern, clean design focused on industry experience
- Fast, type-safe development with TypeScript
- Better blog workflow with MDX
- Easier customization without theme constraints

## License

© 2025 Suyi Zhang
