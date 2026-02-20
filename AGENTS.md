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
