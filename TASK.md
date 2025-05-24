# TASK.md

_Updated: 2024-07-29_

## Phase 0: Setup & Foundation

- [ ] Initialize Astro project (`minimal` template).
- [x] Add Astro integrations: React, Tailwind, TypeScript.
- [x] Configure `tailwind.config.cjs` (dark mode, colors, fonts from `DESIGN_SPEC.md`).
- [x] Setup base `src/layouts/Layout.astro` (fonts, base styles, dark class on `<html>`).
- [ ] Initialize Git repository.

## Phase 1: Data Preparation

- [ ] Parse resume (`RESUME.md` / PDF) for Experience & Project details.
- [x] Define `ExperienceItem` and `ProjectItem` TypeScript interfaces in `src/types.ts`.
- [x] Create and populate `src/content/data.ts` with structured Experience and Project data.

## Phase 2: Core Component Implementation

- [x] Refine `Layout.astro` with max-width container.
- [x] Create `src/components/Nav.tsx` React component (links, basic styling).
- [x] Create `src/components/Hero.astro` component (Name, Summary).
- [x] Create optional `src/components/Section.astro` wrapper component.

## Phase 3: Content Section Implementation

- [x] Create `src/components/ExperienceTimeline.astro` (fetch data, map items, basic structure, styling).
- [x] Create `src/components/ProjectShowcase.astro` (fetch data, map items, handle logos, basic structure, styling).
- [x] Create `src/components/Contact.astro` (basic info, styling).

## Phase 4: Assembly & Styling Refinement

- [x] Assemble all components in `src/pages/index.astro`.
- [x] Rigorously apply Tailwind classes based on `DESIGN_SPEC.md` across all components.
- [x] Verify spacing, typography, and layout consistency.

## Phase 5: Responsiveness & Interactivity

- [ ] Implement responsive design using Tailwind breakpoints.
- [ ] Implement responsive navigation (hamburger menu if needed).
- [ ] Enable CSS smooth scrolling.
- [ ] Add subtle hover transitions.
- [ ] (Optional) Add subtle scroll-based fade-in animations.

## Phase 6: Final Pass (QA & Optimization)

- [ ] Perform Accessibility checks (Lighthouse, Axe).
- [ ] Test across major browsers (Chrome, Firefox, Safari).
- [ ] Optimize images/logos.
- [ ] Final code review against `DESIGN_SPEC.md` and `PLANNING.md`.

## Phase 7: Build & Deployment

- [ ] Run `npm run build`.
- [ ] Deploy to static host (Vercel/Netlify).

---

## Discovered During Work

_(Add any new TODOs or issues identified during development here)_
