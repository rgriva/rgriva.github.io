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
  - `_layouts/default.html` (wraps every page), `home.html`, `research.html`, `teaching.html` (courses.md), `cv.html`, `resources.html`, `contact.html`, `page.html` (generic)
- Includes in use:
  - `head.html`, `header.html` (path bar + nav + toggle, then `hero.html`), `hero.html`, `epigraph.html`, `curve.html`, `toc-item.html`, `contact.html`, `social.html`, `icon.html`, `footer.html`
- Data (content lives here; pages are generated from it):
  - `_data/settings.yml` (`menu`, `social`, `contacts`)
  - `_data/research.yml` (working papers and publications, in display order)
  - `_data/news.yml` (home "News"; sorted newest first by `date`, the date of the commit that recorded each change)
  - `_data/teaching.yml` (course groups; `course` ids are distinct courses)
  - `_data/resources.yml` (resource sections; `blurb`/`note` accept Markdown)

## UI/theme contracts (important)
- Design ("Shell"): shared with rgriva.github.io/presentations (graph-paper header, mono path bar `~/rgriva/<cwd>`, big tight headings, table-of-contents lists with dotted leaders). Keep the two visually in sync.
- No Bootstrap, Font Awesome or Google Fonts: type is Arial with Arimo fallback (`assets/fonts/`), icons are inline SVG (`_includes/icon.html`).
- Page front matter drives the hero: `heading`, `prompt`, `cwd`, `lede`, `tags`, `epigraph {text, author, source, url}`, `portrait` (home), `curve: true` (research; draggable yield curve, `assets/js/curve.js`).
- Mobile first: base CSS is for phones; `min-width` queries at 40rem and 48rem add columns. Below 48rem the nav is a sideways-scrolling row (current page centered by `assets/js/site.js`).
- The Presentations archive is intentionally NOT linked from the nav.
- Favicon: `assets/favicon.svg` (same as /presentations), PNG fallbacks `assets/favicon-32.png`, `assets/apple-touch-icon.png`, and root `favicon.ico`.
- Dark mode is implemented client-side (no plugin):
  - Root attribute contract: `html[data-theme="light" | "dark"]`.
  - Persistence key: `localStorage["rgriva-theme"]` (shared with /presentations).
  - Toggle button contract: `#theme-toggle` / `[data-theme-toggle]` in `_includes/header.html`.
  - Script: `assets/js/theme-toggle.js` (updates theme, aria attrs, label, persistence, and follows the system setting when no explicit user choice exists).
  - Early theme bootstrap to prevent flash lives in `_includes/head.html`.
- Color system:
  - Theme tokens live in `assets/css/main.css` under `:root` and `html[data-theme="dark"]`.
  - Keep dark palette conservative and preserve purple brand accents.

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
- With Homebrew Ruby 4.0.x, `bundle _2.5.4_` itself can fail (Bundler 4.1 vs 2.5.4 mismatch). Building straight from the vendored gems works:
  - `GEM_HOME="$PWD/vendor/bundle/ruby/4.0.0" GEM_PATH="$PWD/vendor/bundle/ruby/4.0.0" /opt/homebrew/opt/ruby/bin/ruby -e "gem 'jekyll'; load Gem.bin_path('jekyll','jekyll')" -- build`
