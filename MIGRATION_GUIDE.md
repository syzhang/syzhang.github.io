# Migration Guide: Hugo to Next.js + MDX

## What's New

This branch (`nextjs-mdx-migration`) contains a complete rewrite of your personal website using modern web technologies.

### Key Improvements

1. **Modern Tech Stack**
   - Next.js 14 with App Router (latest features)
   - MDX for blog posts (Markdown + React components)
   - Tailwind CSS for styling (utility-first, easy to customize)
   - TypeScript for type safety

2. **Updated Content Focus**
   - Reframed from "academic researcher" to "AI/ML engineer"
   - Highlights industry experience and startup work
   - Features your LLM/AI agent projects prominently
   - Publications still included but repositioned

3. **Better Blog Experience**
   - Write posts in MDX (enhanced Markdown)
   - Embed code with syntax highlighting
   - Can add interactive React components
   - SEO-optimized metadata

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Visit http://localhost:3000 to see your site!

### 3. Try the Blog

I've created two example blog posts in `content/blog/`:

- `production-llm-agents.mdx` - About your agentic AI work
- `aws-scaling-ai-services.mdx` - About scaling on AWS

These are **templates** you can customize with real details from your startup work.

## How to Write Blog Posts

### Creating a New Post

1. Create a file: `content/blog/your-slug.mdx`
2. Add frontmatter (metadata):

```mdx
---
title: "Your Post Title"
date: "2025-01-20"
description: "SEO description"
tags: ["AI", "AWS"]
---

Your content here...
```

### MDX Features You Can Use

**Regular Markdown:**
```mdx
## Heading

- List item
- Another item

**Bold** and *italic* text

[Links](https://example.com)
```

**Code Blocks with Syntax Highlighting:**
```mdx
```python
def example():
    return "Code blocks work!"
```
```

**Tables:**
```mdx
| Feature | Status |
|---------|--------|
| LLMs    | ✅     |
```

**React Components** (if needed later):
```mdx
import { CustomComponent } from '@/components/CustomComponent'

<CustomComponent prop="value" />
```

## Customizing Content

### Homepage (`src/app/page.tsx`)

Update:
- Your bio/about text
- Featured projects (add/remove)
- Links and contact info

### Blog Posts (`content/blog/*.mdx`)

The example posts are templates. You should:
- Replace generic details with real numbers/examples
- Add your specific learnings
- Include architecture diagrams (can use Mermaid or images)
- Keep what's useful, delete what's not

### Publications (`src/app/publications/page.tsx`)

Currently shows your major publications. To update:
- Edit the `publications` array
- Add/remove publications
- Update links

## Deployment

### Option 1: Automatic (Recommended)

1. Push to `nextjs-mdx-migration` branch
2. GitHub Actions will automatically build and deploy
3. Visit your site at `https://syzhang.github.io`

### Option 2: Manual

```bash
npm run deploy
```

This builds the site and creates static files in `out/`.

## Next Steps

### Before Deploying to Production

1. **Review Content**
   - Update homepage bio
   - Customize example blog posts with real details
   - Add any missing projects/publications

2. **Test Locally**
   ```bash
   npm run dev
   ```
   Check all pages work correctly

3. **Write Your First Real Post**
   - Pick a topic from your startup work
   - Use the templates as a guide
   - Aim for 800-1500 words
   - Include code examples or diagrams

4. **Optional: Custom Domain**
   - If you want `suyizhang.com` instead of GitHub Pages
   - Buy domain (~$10/year)
   - Update `next.config.mjs` with `basePath`

### Blog Post Ideas (Based on Your Resume)

1. ✅ **Building Production LLM Agents** (template provided)
2. ✅ **Scaling AI on AWS** (template provided)
3. **Multimodal RAG: PDF Processing at Scale**
   - Your 80% automation improvement
   - Technical challenges
   - Evaluation strategies

4. **From Academia to AI Startup: A Technical Perspective**
   - What surprised you
   - Skills that transferred
   - What you had to learn

5. **Real-time ML on Neuroimaging Data**
   - MindPortal work
   - Streaming data challenges
   - Model optimization for latency

6. **Brain-Computer Interfaces: From Research to Production**
   - Bridge your papers to engineering
   - What would it take to productionize?

## Customization Tips

### Changing Colors

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      'brand': '#your-color',
    },
  },
},
```

### Adding Images

1. Place in `public/images/`
2. Reference in MDX:
```mdx
![Alt text](/images/your-image.png)
```

### Adding More Pages

Create new files in `src/app/`:
```
src/app/projects/page.tsx  -> /projects
src/app/about/page.tsx     -> /about
```

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

### Port Already in Use

```bash
# Use different port
PORT=3001 npm run dev
```

### MDX Not Rendering

- Check frontmatter has `---` on both sides
- Ensure file ends with `.mdx`
- Check for syntax errors in frontmatter YAML

## Questions?

The templates are designed to showcase your skills without exposing proprietary code. Feel free to:
- Modify architecture diagrams to be more generic
- Use real metrics but remove company-specific details
- Focus on learnings and technical decisions rather than implementation

Good luck with your job search! These posts will significantly strengthen your profile.
