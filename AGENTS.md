# AGENTS.md

Quick guide for future sessions of Codex and Claude Code on this repo.

## Project snapshot
- Personal site built with Jekyll.
- Branch policy: work on `main` (legacy branches removed).
- Deploy model: push to `origin/main` (GitHub Pages site repo).

## Runtime and tooling
- Use Bundler `2.5.4` (lockfile is pinned to it).
- Local serve command:
  - `bundle _2.5.4_ install`
  - `bundle _2.5.4_ exec jekyll serve --host 127.0.0.1 --port 4000`
- Ruby 4 compatibility gems in `Gemfile` are intentional: `logger`, `csv`, `base64`, `bigdecimal`.
  - Do not remove unless Ruby/Jekyll stack is intentionally changed.

## Active site surface
- Content pages:
  - `index.md`, `research.md`, `courses.md`, `cv.md`, `resources.md`, `contact.md`
- Layouts in use:
  - `_layouts/default.html`, `_layouts/home.html`, `_layouts/page.html`, `_layouts/research.html`, `_layouts/contact.html`
- Includes in use:
  - `_includes/head.html`, `_includes/header.html`, `_includes/footer.html`, `_includes/contact.html`
- Data:
  - `_data/settings.yml` (`menu`, `social`, `contacts`)

## Recent UI/theme contracts (important)
- Header/mobile behavior:
  - Mobile (`<768px`) header is intentionally centered (name, subtitle, nav, toggle).
  - Navigation wraps on mobile to avoid clipping.
  - Home image is centered when stacked (`<md`) and right-aligned on desktop (`>=md`).
  - Main files: `_includes/header.html`, `_layouts/home.html`, `assets/css/main.css`.
- Dark mode is implemented client-side (no plugin):
  - Root attribute contract: `html[data-theme="light" | "dark"]`.
  - Persistence key: `localStorage["rgriva-theme"]`.
  - Toggle button contract: `#theme-toggle` in `_includes/header.html`.
  - Script: `assets/js/theme-toggle.js` (updates theme, aria attrs, icon/label, persistence, and system-change behavior when no explicit user choice exists).
  - Early theme bootstrap to prevent flash lives in `_includes/head.html`.
- Color system:
  - Theme tokens live in `assets/css/main.css` under `:root` and `html[data-theme="dark"]`.
  - Keep dark palette conservative and preserve purple brand accents.
  - Border colors are normalized through `.border-top`/`.border-bottom` overrides.

## Guardrails
- Keep Google Analytics working:
  - ID is in `_config.yml` as `google_analytics`.
  - Script is rendered in `_includes/head.html`.
- Keep Google site verification file unless explicitly requested:
  - `googlec71560e67d5288f9.html`
- Preserve current public URLs unless user asks for URL changes.

## Repo hygiene
- Ignore/build artifacts are already configured in `.gitignore` (`_site`, `vendor`, `.bundle`, etc.).
- `QR_code.pdf` and `QR_code.png` are intentionally ignored.
- Before deleting files, check references with `rg`.

## Local env gotcha
- On this machine there are multiple Rubies; default `/usr/bin/ruby` may fail with Bundler 2.5.4.
- If needed, prefix commands with Homebrew Ruby:
  - `PATH="/opt/homebrew/opt/ruby/bin:$PATH" bundle _2.5.4_ ...`
