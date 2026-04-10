---
title: "First Post"
description: "Getting started with Astro, Tailwind CSS, and DaisyUI"
pubDate: "2026-04-10"
author: "Ray"
tags:
  - Astro
  - Tailwind CSS
  - Design Systems
---

# Getting Started with Astro

Welcome to my dev blog! This is the first post, where I'll walk through setting up an Astro blog with Tailwind CSS v4, DaisyUI, and the Typography plugin.

## Why Astro?

Astro is a modern static site builder that ships zero JavaScript by default. It lets you write components in your favorite framework (React, Vue, Svelte) but renders them to plain HTML at build time.

Key benefits:

- **Islands architecture** — hydrate only the components that need interactivity
- **Content collections** — type-safe frontmatter with Zod schemas
- **Built-in Markdown** — with Shiki syntax highlighting out of the box

## Setting Up the Project

```bash
npm create astro@latest my-blog
cd my-blog
npm install tailwindcss @tailwindcss/vite @tailwindcss/typography daisyui
```

## Configuring Tailwind v4

With Tailwind CSS v4, configuration moves into CSS files instead of `tailwind.config.js`:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
@plugin "daisyui" {
  themes: light --default, dim --prefersdark;
}
```

## A Content Collection Schema

Define your blog schema in `src/content.config.ts` to get type-safe frontmatter:

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog };
```

## Rendering a Post

The dynamic route at `src/pages/blog/[...slug].astro` fetches and renders each post:

```astro
---
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---

<article class="prose lg:prose-xl mx-auto">
  <Content />
</article>
```

## Wrapping Up

That's the core setup. From here you can add more posts as Markdown files in `src/content/blog/` and they'll automatically appear in the list.
