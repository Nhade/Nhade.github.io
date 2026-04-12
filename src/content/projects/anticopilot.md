---
title: "AntiCopilot"
slug: "anticopilot"
status: "active"
description: "A highly personalized IDE-integrated learning experience powered by LangGraph, designed to help developers learn by doing — not by copying."
longDescription: "AntiCopilot flips the script on AI code assistants. Instead of writing code for you, it guides you through the learning process with personalized feedback, struggle signal detection, and concept-level spaced repetition — all integrated directly into VS Code."
techStack:
  - LangGraph
  - TypeScript
  - React
  - VS Code Extension API
  - Python
startDate: "2026-02-21"
repoUrl: "https://github.com/Nhade/anticopilot-frontend"
order: 1
milestones:
  - date: "2026-02-21"
    label: "VS Code extension first PoC"
  - date: "2026-03-07"
    label: "Struggle signal & webview v1"
  - date: "2026-03-10"
    label: "Code highlight & webview provider (PoC end)"
  - date: "2026-03-15"
    label: "LangGraph agent prototype"
  - date: "2026-03-29"
    label: "Frontend subproject started"
  - date: "2026-04-03"
    label: "Unified API & roadmap integration"
  - date: "2026-04-06"
    label: "FSRS review loop & practice UI"
  - date: "2026-04-07"
    label: "Review and roadmap tracking integration"
---

AntiCopilot is a team project built by four classmates from the same lab, originally started as a project design course assignment — though in practice it runs more like a side project. My role covers the entire UI/UX layer: a dedicated frontend and a VS Code extension that surfaces learning signals at the right moment. A teammate handles the agentic learning roadmap generation on the backend.

Key ideas we're exploring:
- **Struggle signal capture** — detecting when a learner is stuck and offering targeted guidance instead of solutions
- **Concept-level SRS** — spaced repetition at the programming concept level, not just flashcard memorization
- **IDE-native learning** — meeting learners where they code, not in a separate app
