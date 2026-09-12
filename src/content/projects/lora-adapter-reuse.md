---
title: "LoRA Adapter Reuse"
slug: "lora-adapter-reuse"
status: "active"
description: "Summer 2026 research internship at the Institute of Information Science, Academia Sinica, continued part-time: once a LoRA adapter is trained, how much of it can be reused, on another model or merged with other adapters?"
longDescription: "Research line started as a summer 2026 internship at the Institute of Information Science, Academia Sinica (July to August) and continued as part-time research assistant work. The question is whether a trained LoRA adapter can be reused: moved to a different base model without data or retraining, or merged with other single-task adapters on the same host model. Everything runs on small open models against multiple-choice benchmarks, with controls and significance tests on every claim."
techStack:
  - PyTorch
  - PEFT / LoRA
  - lm-evaluation-harness
  - Llama 3.2 3B
  - Gemma 2 2B
startDate: "2026-07-07"
order: 0
milestones:
  - date: "2026-07-07"
    label: "Data-free cross-model LoRA transfer: Cross-LoRA reproduction, LoRA-X"
  - date: "2026-07-22"
    label: "Merging single-task adapters: raw vs. aligned space, TIES, DARE, scale and norm"
  - date: "2026-08-11"
    label: "Base/instruct portability 2×2 and a merge-vs-multitask control"
  - date: "2026-08-28"
    label: "MergeBench reproduction with LoRA specialists: plan and code"
---

This started as a summer 2026 research internship at the Institute of Information Science, Academia Sinica (July to August), in a two-student team under a lab researcher, and continues as part-time research assistant work. The line has one question: once you have trained a LoRA adapter, how much of it can you reuse?

It splits into two halves.

- **Cross-model transfer.** Reproduce two published methods that move an adapter to a different model without training data, then work out why both return no accuracy change. This half is closed. Raising the retained update energy from under 1% to about 75% did not move accuracy, and what did cross over was the source model's answer pattern rather than its capability.
- **Multi-adapter merging.** Merge several single-task adapters into one host model and measure what survives: which merge operator, which representation, whether the merged adapter ports between a base model and its instruct-tuned version, and whether merging beats training one adapter on the mixed data. The current step reproduces the MergeBench design with LoRA specialists in place of full fine-tunes.

The method is the part I care most about: every comparison is pinned to the same realized update norm, random-direction and negated adapters run as controls next to every real arm, and each headline number is re-derived from the raw run metrics before it goes into a report. Results from the merging half stay unpublished until the lab decides what it submits.
