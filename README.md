# RADWIMPS — Tribute Site

A single-page React + Vite site (7 routes) built with `react-router-dom`.
Originally made on StackBlitz, now extracted into a normal Vite project and deployed on GitHub Pages.

Live: https://ringonoel.github.io/

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/ (plus a 404.html copy for SPA deep links)
npm run preview    # preview the production build
```

## Structure

```
src/
  App.jsx               routes + scroll background colour switching
  components/           Navbar, Footer
  hook/                 useReveal (scroll-in animation), useScrollTop
  pages/                Home, Band, Members, Discography, Live, Films, Contact
  style.css             all styling
public/
  images/               member photos, album covers, film stills (local, ~1.4MB)
  icons.svg, favicon.svg, .nojekyll
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`:
build → upload `dist` → deploy to GitHub Pages.

Notes:
- `base` is `/` because the site is served from the account root (`<user>.github.io`).
- `npm run build` copies `index.html` to `404.html`, so refreshing a deep link
  such as `/members` still boots the SPA instead of a GitHub 404 page.
- `public/.nojekyll` stops GitHub from running Jekyll over the build output.
