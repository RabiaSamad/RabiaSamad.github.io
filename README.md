# Rabia Samad Afridi — Portfolio

Personal portfolio website built with vanilla HTML, CSS, and JavaScript.
Live at: `https://yourusername.github.io`

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── README.md
├── css/
│   ├── reset.css           # CSS reset / normalise
│   ├── variables.css       # Design tokens (colors, spacing, fonts)
│   ├── base.css            # Global styles, shared components
│   ├── nav.css             # Navigation bar
│   ├── hero.css            # Hero / landing section
│   ├── sections.css        # Education & certifications
│   ├── projects.css        # Projects grid & cards
│   ├── experience.css      # Timeline / work experience
│   ├── skills.css          # Skills grid
│   ├── contact.css         # Contact section
│   └── responsive.css      # Media queries (768px, 480px)
├── js/
│   ├── nav.js              # Nav scroll effects, active links, mobile menu
│   └── animations.js       # Scroll-reveal (IntersectionObserver)
└── assets/                 # Images, favicon, CV PDF (add your own)
```

## Deploying to GitHub Pages

1. Create a repo named `yourusername.github.io`
2. Push all files to the `main` branch (keep `index.html` at the root)
3. Go to **Settings → Pages → Source: Deploy from branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io` within ~2 minutes

## Customisation Tips

- **Colors & fonts** — edit `css/variables.css` only; changes cascade everywhere
- **Add a project** — copy an `<article class="project-card">` block in `index.html`
- **Add a CV download button** — drop your PDF in `assets/` and update the hero CTA:
  ```html
  <a class="btn-secondary" href="assets/rabia-cv.pdf" download>Download CV</a>
  ```
- **Add a profile photo** — place image in `assets/` and add an `<img>` to `.hero-left`
- **Favicon** — add `favicon.ico` or `favicon.png` to root and link in `<head>`:
  ```html
  <link rel="icon" href="favicon.ico" />
  ```

## Tech Stack

- Pure HTML5, CSS3, JavaScript (ES6+) — no frameworks or build tools needed
- Google Fonts: DM Serif Display + DM Sans
- Animations: CSS transitions + IntersectionObserver API
