# rgriva.github.io

Personal website built with Jekyll and hosted on GitHub Pages.

## Project structure

- Site config: `_config.yml`
- Navigation/social/contact data: `_data/settings.yml`
- Reusable templates: `_layouts/`, `_includes/`
- Main pages: `index.md`, `research.md`, `courses.md`, `cv.md`, `resources.md`, `contact.md`
- Static assets: `assets/`
- Static PDFs:
  - Research/CV docs in `assets/documents/`
  - Talks in `presentations/`
  - Publication files in `publications/`

## Common updates

- Update bio/home text: `index.md`
- Update research and publications text: `research.md`
- Update teaching links/text: `courses.md`
- Update CV download target: `cv.md` and `assets/documents/CV_Raul_Riva.pdf`
- Update resources list: `resources.md`
- Update menu/social/contact info: `_data/settings.yml`

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`.

## Deployment

The repository is `rgriva/rgriva.github.io`. Pushing to `main` publishes via GitHub Pages.

## Analytics

Google Analytics is configured in `_config.yml` (`google_analytics`) and loaded in `_includes/head.html`.
