```markdown
# Aaron Krishna — Software Development Portfolio (Starter)

This is a simple static portfolio starter (HTML/CSS/JS). Use it as the base for Aaron Krishna's developer site.

Files included:
- index.html — single page layout
- styles.css — responsive styling (dark/minimal theme)
- script.js — renders projects.json and handles theme toggle
- projects.json — where to add your projects
- resume.pdf — place your resume at the root (see below)
- .github/workflows/pages.yml — GitHub Actions workflow to deploy to GitHub Pages

Preview locally:
- Option A (quick): open `index.html` in your browser.
- Option B (recommended local server):
  - Python: `python -m http.server 8000`
  - Node: `npx http-server -c-1`
  - Then open http://localhost:8000

Editing projects:
- Edit projects.json to add or update projects. The site reads this file on load and renders the cards.

Resume:
- Place your resume at the repo root named `resume.pdf` so the Resume link works. You can rename the uploaded file ("Aaron Krishna - CV-1.pdf") to `resume.pdf` before committing.

Deploy:
- The repository contains a GitHub Actions workflow that automatically deploys the site to GitHub Pages when changes are pushed/merged to `main`.
- No build step is required — the workflow packages the repo root and deploys it.

Next steps / ideas:
- Replace placeholder links (GitHub, LinkedIn, email).
- Add project thumbnails and tags; filter by tech.
- Add analytics (Plausible / Simple Analytics) and structured JSON-LD for SEO.
- Convert to a React/Vite starter if you want dynamic routing or blog support.
```