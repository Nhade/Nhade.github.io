---
title: "Why OKLch for a dark theme"
description: "A quick note on choosing OKLch color space over HSL for building a warm dark color palette."
pubDate: "2026-04-09"
author: "Ray"
tags:
  - Design Systems
  - CSS
postType: "note"
summary: "OKLch gives you perceptually uniform colors — meaning 50% lightness actually looks like 50% to human eyes."
---

# Why OKLch for a dark theme

Quick note on a design decision: this site uses OKLch colors instead of HSL.

The key advantage is **perceptual uniformity**. In HSL, a blue at `hsl(240, 100%, 50%)` looks dramatically darker than a yellow at `hsl(60, 100%, 50%)` even though they share the same lightness value. OKLch fixes this — equal lightness values actually *look* equally light.

For a dark theme with warm tones, this matters a lot. The surface hierarchy (`base-100` at 14% → `base-200` at 18.5% → `base-300` at 23%) creates smooth, predictable steps that feel natural.

The `color-mix()` function pairs beautifully with OKLch for creating opacity and tint variations without leaving the perceptual color space.
