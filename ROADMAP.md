# Personal Engineering Site v1 — Project Roadmap

Status: Charter locked / evidence inventory initialized
Date: 2026-09-17
Repository: `devjozi/por`
Branch: `build/personal-engineering-site-v1-charter`

## 1. Product charter

### Purpose

Turn the existing POR repository into a public, own-name engineering flagship: a small, credible site where a reviewer can understand how Joseph Omoruwou works and inspect evidence of the engineering behind the claims.

This is a personal engineering surface. It is separate from ApplyTech and must not become a generic IT-services funnel, a second company site, or a decorative CV.

### Primary audience

1. **Technical hiring manager / senior engineer** — needs evidence of ownership, engineering judgment, implementation quality, testing, reliability and maintainability.
2. **Founder / technical operator** — needs to understand the practical problem, system mechanism and operational consequence without reading a long technical essay.
3. **Recruiter / professional reader** — needs a fast, credible signal and a clear path to inspect deeper evidence.

Secondary audiences can use the same evidence through lighter entry points; the underlying artifact remains the source of truth.

### Positioning

**Software + systems engineering, shown through working evidence.**

The site should communicate a technically serious, understated builder who works on practical software, automation, infrastructure and operational systems. Claims should be narrow enough to verify and strong enough to be useful.

The site should not lead with credentials, generic service lists, inflated capability statements or AI-generated-sounding language.

### Core product rule

> The artifact carries the claim.

Every substantive claim should point toward something inspectable: repository code, a live behavior, a test, a deployment receipt, a technical note, an architecture decision, or another independently checkable artifact.

## 2. Information architecture

### `/` — Home

Job: establish identity, engineering focus and proof path in seconds.

Required sections:
- identity / concise positioning
- selected proof-of-work
- engineering themes / capabilities backed by evidence
- current build direction or recent note
- direct paths to Work, Engineering and Contact

The homepage is a router into evidence, not a biography dump.

### `/work` — Work / Case studies

Job: show completed or materially advanced systems through a reviewer-friendly narrative.

Each entry follows:
`context → visible problem → working mechanism → proof → implementation → limits → next action`

### `/engineering` — Engineering evidence

Job: expose implementation-level proof: repositories, architecture notes, deployment/reliability work, debugging lessons, testing strategy and other technical artifacts.

This page is more technical than `/work`; it should make the path from polished presentation into source/evidence obvious.

### `/notes` — Builder notes

Job: publish short, concrete observations from real engineering work. Notes can feed the public content flywheel without turning the site into a generic blog.

### `/about` — About the engineer

Job: explain working style, engineering interests, current direction and selected background without recreating a full CV.

### `/contact` — Contact

Job: provide a simple, reliable path for hiring, technical collaboration and other legitimate professional contact.

## 3. Evidence model

Use the canonical FORGE evidence chain:

`verified source → public-safe derivative → public receipt → case study / technical note → application + LinkedIn reuse → qualified opportunity signal`

A draft, private artifact, planned publication, task description or agent completion message is not a public receipt.

Public and private material must remain traceable to the same real source while keeping sensitive FORGE execution context private.

## 4. Initial evidence/content inventory

Status vocabulary used here:
- **PUBLIC** — a public receipt is already independently checkable.
- **VERIFIED / PACKAGE** — source is verified and sanitized enough to shape, but the public-facing derivative is not yet the final receipt.
- **REVIEW** — potentially useful, but public framing or sanitization still needs deliberate review.
- **HOLD** — not strong enough or not sufficiently verified for v1 publication.

| Candidate | Public state | Site role | Notes / claim boundary |
|---|---|---|---|
| Tracking/deployment verification fix | **PUBLIC** | Work + Engineering | Show the concrete build-time verification lesson. Do not expand the claim into broader production/CAPI outcomes that are not separately verified. |
| Production web delivery + dependency/CI security control work | **VERIFIED / PACKAGE** | Engineering | Present the control flow and engineering judgment generically; avoid client/employer identifiers and any unsupported production outcome. |
| Operational lead → order control application | **VERIFIED / PACKAGE** | Work + Engineering | Use the narrow, locally runnable engineering evidence. Treat public receipt as pending until the chosen derivative is intentionally published. |
| Payment reconciliation / state-machine controls | **VERIFIED / PACKAGE** | Engineering / case-study candidate | Focus on explicit invariants, recovery boundaries and test evidence. Do not claim paid outcome, production integration or buyer validation. |
| FORGE operational control architecture | **REVIEW** | Engineering note candidate | Strong systems/governance story, but requires public sanitization and audience shaping before publication. |
| Demand-led acquisition / capability routing architecture | **REVIEW** | Notes / later case study | Keep as architecture evidence until stronger real-world economic outcome exists. |
| Revenue-leakage validation research | **HOLD** | Private source / future derivative | Useful internally, but current evidence strength is insufficient for a flagship engineering case study. |

### Evidence selection rule for v1

Start with evidence that is both technically inspectable and safe to publish. Prefer a smaller number of strong artifacts over a larger catalogue of shallow claims.

## 5. Content model

### Case study

Minimum fields:
- title
- one-sentence outcome
- problem/context
- mechanism / system flow
- selected implementation evidence
- verification / receipt
- constraints and limitations
- engineering decisions / trade-offs
- next iteration

### Engineering note

Minimum fields:
- observation or failure
- why it mattered
- technical mechanism
- evidence
- lesson / reusable principle

### Evidence card

Every selected item should expose, where applicable:
- artifact type
- current state
- source / repository
- public receipt
- what the evidence proves
- what it does **not** prove

## 6. Public/private boundary

### Public

- polished presentation
- concise technical explanation
- reproducible setup where applicable
- readable source links
- meaningful tests / validation evidence
- truthful claim boundaries
- selected architecture and trade-off reasoning

### Private FORGE state

- detailed teaching notes
- private exercises
- task IDs / internal handoffs
- internal decision history
- confidential employer/client context
- credentials and operational secrets

Rule: **publicly explain the work; privately teach the engineer.**

## 7. v1 experience principles

- Content and evidence must work without WebGL.
- Visual design should be restrained, technical and memorable rather than ornamental.
- Interaction earns its place by improving comprehension or navigation.
- Mobile is a first-class reading and review surface.
- A reviewer should reach real evidence in one or two clear steps from the homepage.
- The site should never create a polished façade that cannot be traced to the underlying implementation.
- Keep the architecture teachable: small local design system, understandable file structure, minimal dependencies.

## 8. Technical direction

Target implementation stack:

- Next.js + TypeScript + React
- static-first output compatible with GitHub Pages
- local CSS/design primitives rather than a large UI framework
- content files / MDX for structured case studies and notes
- GitHub Actions for validation and deployment
- optional Motion only where interaction earns its cost
- optional Three.js / React Three Fiber only after the public baseline is stable

Current repository reality: `devjozi/por` is already public, uses `main`, and has an existing GitHub Pages deployment workflow. The current homepage is a legacy static HTML surface with ApplyTech-oriented positioning, so the migration must deliberately separate the new personal engineering identity from the old landing-page content.

## 9. What v1 explicitly does not build

- a portfolio CMS or database
- authentication or user accounts
- a custom analytics platform
- an ApplyTech service funnel
- a generic blog/content treadmill
- client dashboards or confidential operational data
- WebGL/3D as a launch dependency
- a large component/UI framework solely for convenience
- invented metrics, testimonials or outcomes

## 10. Lights-on signals

The site is working when a real reviewer can:

1. understand the engineering identity quickly;
2. open a concrete work item;
3. move from presentation to real source/receipt evidence;
4. distinguish verified behavior from limitations;
5. find a straightforward professional contact path;
6. reuse the same evidence in an application or professional conversation without rebuilding the story.

The first release optimizes for **inspectability and usefulness**, not traffic volume.

## 11. Execution roadmap

### 01 — Charter + evidence inventory + information architecture
**Current gate.** Produce this file, lock the page model, classify the initial evidence set, and preserve the public/private boundary.

### 02 — Repository scaffold + engineering workflow
Convert the legacy repository into the maintainable Next.js/TypeScript foundation while keeping deployment reproducible.

### 03 — Homepage + local design system
Build the first public presentation surface from the locked positioning and IA. The MVP remains useful without any 3D layer.

### 04 — First public engineering evidence
Turn the selected verified artifacts into the first public case studies / engineering entries.

### 05 — GitHub Pages MVP deployment
Put the useful baseline online and verify the automated deployment path.

### 06 — Hardening
Accessibility, responsive QA, performance, metadata, validation and documented limitations.

### 07 — Signature interaction
Only after the baseline is public and stable: add one purposeful interactive layer where it improves the engineering experience.

### 08 — FORGE evidence flywheel integration
Ensure new verified evidence can feed the site, LinkedIn and application packets without re-preparation or duplicate evidence machinery.

## 12. Engineering learning checkpoint

This project is **learning-critical** because the important decisions include:

- information architecture as a mapping between reviewer intent and evidence;
- evidence modelling and claim boundaries;
- static-site architecture and deployment constraints;
- component/content separation;
- progressive enhancement without making WebGL a reliability dependency.

For the next implementation stages, the working mental model is:

> **The site is a proof index, not the proof itself.**
>
> The site owns presentation and navigation. The repository, live behavior, tests and receipts own truth. A good architecture lets a reviewer move from claim → explanation → artifact without crossing into a second, contradictory source of truth.

Before treating the engineering learning as complete, Jozi should be able to explain why that separation matters and what would break if the presentation layer became the authoritative source.

## 13. Provenance

This roadmap is grounded in the live Todoist build task and the current FORGE Evidence & Receipt Registry, Content & Brand System, Public Work Packaging / Build-Provenance Gate and Engineering Learning Gate.

The roadmap intentionally contains only public-safe planning information. Detailed evidence receipts, private FORGE execution context and internal learning notes remain in the canonical private records.
