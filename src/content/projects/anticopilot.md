---
title: "AntiCopilot"
slug: "anticopilot"
status: "active"
description: "A highly personalized IDE-integrated learning experience powered by LangGraph, designed to help developers learn by doing — not by copying."
longDescription: "AntiCopilot flips the script on AI code assistants. Instead of writing code for you, it guides you through the learning process with personalized feedback, struggle signal detection, and concept-level spaced repetition, all integrated directly into VS Code. Built with one teammate: I wrote the web dashboard, the VS Code extension, the phone companion, the struggle-signal sidecar, and the backend REST layer and FSRS review loop; my teammate wrote the LangGraph agent, the content-generation pipeline, and the learner memory."
techStack:
  - LangGraph
  - TypeScript
  - React
  - VS Code Extension API
  - Python
startDate: "2026-02-21"
repoUrl: "https://github.com/Nhade/anticopilot-frontend"
demoUrl: "https://anticopilot.nhade.com"
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
  - date: "2026-05-24"
    label: "Backend REST layer ported onto the content-generation backend"
  - date: "2026-05-25"
    label: "Frontend and extension re-wired to the new backend; practice and learn views"
  - date: "2026-06-01"
    label: "FSRS review loop, per-user scoping, and skill-path status API merged"
  - date: "2026-06-05"
    label: "Shadow-mode struggle logger in the extension; standalone struggle sidecar service"
  - date: "2026-06-09"
    label: "Expo phone companion for live struggle sessions"
  - date: "2026-06-10"
    label: "Memory-aware hint and code-correction routes"
  - date: "2026-06-11"
    label: "Dashboard live on Cloudflare Pages; public hub at anticopilot.nhade.com"
  - date: "2026-06-13"
    label: "Extension: I'm-stuck hint flow, solution submit, sidebar redesign"
---

AntiCopilot is a team project I built with one teammate (a classmate helped with the evaluation shown on the project hub), originally started as a project design course assignment, though in practice it ran more like a side project. I built the web dashboard, the VS Code extension, the phone companion, the standalone struggle-signal sidecar, and the backend's REST layer and FSRS review loop. My teammate built the LangGraph agent, the content-generation pipeline, and the learner-memory store.

Key ideas:
- **Struggle signal capture** — detecting when a learner is stuck and offering targeted guidance instead of solutions
- **Concept-level SRS** — spaced repetition at the programming concept level, not just flashcard memorization
- **IDE-native learning** — meeting learners where they code, not in a separate app
