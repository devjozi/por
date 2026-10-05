# POR — Personal Engineering Site

Personal engineering portfolio for Joseph Omoruwou.

The site is a presentation layer for verified engineering evidence. Repositories, implementation receipts, tests, and live behavior remain the underlying proof.

## Stack

- Next.js + React + TypeScript
- App Router
- Static export for GitHub Pages
- Local CSS/design system
- Content files for case studies and engineering notes
- GitHub Actions for validation and deployment

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000.

Run the engineering checks:

```bash
npm run lint
npm run typecheck
npm run build
```

The static production build is written to `out/`.

## GitHub Pages

The production workflow validates the application, builds the static export, and deploys `out/` to GitHub Pages from `main`.

Because POR is a GitHub Pages project site, the workflow supplies `NEXT_PUBLIC_BASE_PATH=/por` during the production build. Local development uses the root path.

## Project structure

```text
app/                  Routes and page composition
components/           Reusable UI mechanisms
content/              Public-safe case-study and note source material
public/               Static assets added as the project grows
.github/workflows/    CI and deployment automation
next.config.ts        Next.js build/runtime configuration
tsconfig.json         TypeScript project configuration
eslint.config.mjs     Lint configuration
package.json           Dependencies and engineering scripts
```

## Versioning

- `VERSION` is the canonical project version marker.
- Optional Git tags use `vX.Y.Z`.
