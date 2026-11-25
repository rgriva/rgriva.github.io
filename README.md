# rgriva.github.io

Personal website built with Jekyll and hosted on GitHub Pages.

## Project structure

- Site config: `_config.yml`
- Navigation/social/contact data: `_data/settings.yml`
- Reusable templates: `_layouts/`, `_includes/`
- Main pages: `index.md`, `research.md`, `courses.md`, `cv.md`, `resources.md`, `contact.md`
- Static assets: `assets/`
- Content data: `_data/research.yml`, `_data/news.yml`, `_data/teaching.yml`, `_data/resources.yml`
- Static PDFs: research/CV docs in `assets/documents/`
- Talks and discussions: the separate `rgriva/presentations` repo (served at `/presentations/`)

## Common updates

- Update bio/home text and research tags: `index.md`
- Add or change papers: `_data/research.yml`
- Add news (home page): `_data/news.yml` (set `date`; newest shows first)
- Update teaching links: `_data/teaching.yml`
- Update CV download target: `cv.md` and `assets/documents/CV_Raul_Riva.pdf`
- Update resources list: `_data/resources.yml` (intro text in `resources.md`)
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
