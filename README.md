# Strida One – Responsive Product Landing Page

Minor Project 02 · Web Development (Unlox) · Week 02

A responsive landing page for **Strida One**, a fictional GPS running smartwatch. Strida is an invented brand made for this assignment; all names, reviews and prices are placeholders.

## Live demo
Add your GitHub Pages link here after deploying (see "Deploy" below).

## Sections
1. **Navigation bar** – logo, links, and a hamburger menu on mobile
2. **Hero** – title, description, product image (inline SVG), "Buy now" and "Learn more" buttons
3. **Features** – 5 feature cards in a CSS Grid
4. **Benefits** – how the product helps runners, laid out with Flexbox
5. **Testimonials** – 3 customer reviews
6. **Pricing and call to action** – 3 plans plus a final CTA banner
7. **Footer** – contact details, social links, copyright

## Concepts used
| Focus area | Where it is used |
|---|---|
| **CSS3** | Gradients, transitions, pseudo-elements, custom properties, media queries (`styles.css`) |
| **Flexbox** | Navbar, hero buttons, benefits section, review authors, footer socials |
| **CSS Grid** | Hero two-column layout, features grid (`.features-grid`), reviews, pricing, footer |
| **Responsive design** | Mobile-first; layouts change at `sm` (640px), `md` (768px) and `lg` (1024px) |
| **Tailwind CSS** | Loaded via CDN; custom colours and fonts set in `tailwind.config` |

## Project structure
```
strida-landing/
├── index.html     # page structure and Tailwind classes
├── styles.css     # custom CSS3 that complements Tailwind
├── script.js      # mobile menu toggle and footer year
└── README.md
```

## Run locally
No build step needed. Open `index.html` in a browser. An internet connection is required to load Tailwind (CDN) and Google Fonts.

## Deploy (GitHub Pages)
1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under "Branch", choose `main` and `/ (root)`, then save.

## Design choices
- **Palette:** mist `#EEF3F8`, ink `#0F1B2D`, coral `#FF5A4E`, teal `#0E8A85`.
- **Fonts:** Bricolage Grotesque for headings, Figtree for body text.
- **Accessibility:** visible keyboard focus, semantic HTML, `aria-label`s on icons and menu, reduced-motion support.

## What I learned
Write a few lines in your own words about what you learned (for example: how Grid differs from Flexbox, how Tailwind's responsive prefixes work, anything that was hard).

## Author
Devyani – GIT College Belgaum
