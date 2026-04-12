---
title: "Building Ray's Lab"
description: "A dev log on designing and building this blog — from editorial dark theme to content architecture."
pubDate: "2026-04-11"
author: "Ray"
tags:
  - Astro
  - Design Systems
  - Meta
postType: "log"
project: "dev-blog"
summary: "How I built a warm editorial blog with Astro, Tailwind v4, and a deliberately small component set."
---

# Building Ray's Lab

This is the first build log for this site itself. The goal was to create a space that feels more like a curated lab notebook than a generic dev blog template.

## Design decisions

The warm dark theme uses OKLch colors for perceptually uniform shading. Every surface in the hierarchy — from `base-100` (page background) to `base-300` (code wells) — is intentionally close in tone, creating depth without harsh contrast.

Typography pairs Newsreader (a serif with real personality) for display text with Manrope for body copy. The serif gives the site an authored, editorial quality.

## Content architecture

I wanted the blog to support different *kinds* of writing:

- **Essays** — polished, long-form pieces
- **Logs** — dev progress updates like this one
- **Notes** — quick observations and thoughts

This maps to a `postType` field in the content schema, with filtering on the writing page.

## What's next

- Add gallery support for project screenshots
- Build out the project page with milestone timelines
- Write more build logs as the site evolves
