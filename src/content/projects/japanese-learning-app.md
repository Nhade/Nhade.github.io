---
title: "栞 (Shiori)"
slug: "japanese-learning-app"
status: "active"
description: "An AI-powered Japanese learning system built around real-world reading and adaptive tutoring."
longDescription: "栞 (Shiori) combines real-world Japanese content with hybrid AI evaluation to provide meaningful feedback — not just correctness scores. It ingests NHK news articles, evaluates grammar through both deterministic NLP and LLM reasoning, and adapts to each learner's proficiency and weak points."
techStack:
  - Vue 3
  - Tailwind CSS
  - TypeScript
  - Pinia
  - Python
  - Flask
  - SQLite
startDate: "2025-08-27"
repoUrl: "https://github.com/Nhade/japanese-output-frontend-tailwind"
order: 2
milestones:
  - date: "2025-08-27"
    label: "Initial project kickoff"
  - date: "2025-12-10"
    label: "Hybrid grammar evaluation (rule-based + LLM)"
  - date: "2025-12-14"
    label: "NHK news reading with TTS"
  - date: "2025-12-27"
    label: "Multi-language support (EN/JA/ZH-TW)"
  - date: "2026-01-01"
    label: "Personalized learner profiles & analytics"
---

I've been learning Japanese for about a year and a half, originally just to read a novel I loved in its original language. Anki carried me through roughly 4,000 vocabulary words and I hit N2 reading without too much trouble — but my writing stayed stuck. That's the gap this project is about: meaningful practice with real Japanese content and the kind of feedback that no static flashcard app can give.

The focus areas:
- **Real-world reading** — NHK news articles with automatic furigana and sentence segmentation
- **Hybrid evaluation** — deterministic NLP (particle, conjugation, POS checks) combined with LLM-based semantic evaluation for nuanced feedback
- **Adaptive AI tutor** — chat partner that adjusts to the learner's JLPT level and common error patterns
- **Agentic daily review** — a three-stage AI pipeline (Observer → Tutor → Editor) that generates personalized study summaries
