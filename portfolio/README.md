# Ibrahim Tareq — Portfolio

A single-page, dependency-free portfolio site (plain HTML/CSS/JS) that mirrors my
résumé and links every project on my GitHub.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Page markup and section layout |
| `styles.css` | All styling, dark/light themes, responsive rules |
| `data.js` | **Single source of truth** — projects, skills, experience |
| `script.js` | Rendering + interactions (filters, typing, reveal, counters) |
| `resume.pdf` | Downloadable résumé (wired to the "Résumé" button) |

To update content, edit **`data.js`** — no HTML changes needed. Refresh `resume.pdf`
whenever the LaTeX résumé is recompiled.

## Preview locally

Open `index.html` directly, or serve it (recommended, so relative paths work):

```bash
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages (free, gets you a live URL)

**Option A — dedicated user site (nicest URL: `ibrahimtareq952001.github.io`)**

1. Create a new public repo named exactly `Ibrahimtareq952001.github.io`.
2. Copy the contents of this `portfolio/` folder into the repo root.
3. Push. GitHub Pages serves it automatically within a minute.

**Option B — project site under this repo**

1. Push this folder to the `Resume` repo.
2. Repo → Settings → Pages → Source: `main` branch, `/portfolio` folder → Save.
3. Live at `https://ibrahimtareq952001.github.io/Resume/portfolio/`.

Other one-click hosts (drag the `portfolio` folder in): **Netlify**, **Vercel**,
**Cloudflare Pages**.
