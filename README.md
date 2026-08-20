<div align="center">

# Kyaw Ko Ko Tun — Portfolio

### A quiet, product-led portfolio for a full-stack engineer, founder, and community builder.

Warm editorial canvas · flat art-directed project panels · strong reading hierarchy · restrained motion

`React 19` · `Vite 8` · `Tailwind CSS 3` · `Lucide React`

[Live site](https://kyawkokotun.com) · [GitHub](https://github.com/BradyTun/) · [LinkedIn](https://www.linkedin.com/in/kyawkokotun/)

</div>

## Design direction

The portfolio is built as a “quiet product ledger”: the interface gets out of the way and lets the work, roles, and thinking carry the page.

- Warm bone, near-black, and one lacquer-vermilion signature color
- Newsreader for editorial emphasis; Instrument Sans for everything functional
- Two full case studies followed by four accessible project dossiers
- Static operating-range index instead of continuous decorative motion
- Chronological experience and capability ledgers with generous reading space
- Flat, project-specific artwork made from type, line, color, and real logos
- Resource-aware opening sequence with a one-second branded reveal
- Fine-pointer custom cursor, concise project labels, and progressive scroll reveals
- No parallax or scroll hijacking; reduced-motion users get a static opening transition and no cursor/reveal motion

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm run preview
```

## Content model

All facts rendered by the React portfolio live in [`src/data/portfolio.js`](src/data/portfolio.js). This includes:

- Profile, availability, location, proof points, and social links
- Six projects with summary, challenge, contribution, outcome, stack, status, and links
- Six additional-work categories
- Six experience entries
- Operating range, capabilities, working principles, and personal interests

Keeping the data separate from presentation makes future visual changes safer and prevents content loss.

## Project structure

```text
src/
├── App.jsx
├── index.css
├── data/
│   └── portfolio.js
└── components/
    ├── Nav.jsx
    ├── Loader.jsx
    ├── MotionLayer.jsx
    ├── Hero.jsx
    ├── Work.jsx
    ├── Marquee.jsx      # Static operating-range index
    ├── Experience.jsx
    ├── About.jsx
    ├── Contact.jsx
    └── Section.jsx
```

The downloadable résumé is stored in `cv/`. Optimized project marks are in `src/assets/optimized/`.

## Accessibility and performance

- Semantic landmarks, headings, lists, definitions, and button states
- Skip link, visible focus states, keyboard-operable project dossiers, and focus-trapped mobile navigation
- Reduced-motion support
- Responsive layouts that remain stacked until content has enough room
- Lazy-loaded project and organization logos with explicit dimensions
- SEO, Open Graph, Twitter card, and Person JSON-LD metadata

## License

Released under the [MIT License](LICENSE).
