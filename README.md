<div align="center">

# ✦ &nbsp; Kyaw Ko Ko Tun — Portfolio &nbsp; ✦

### A premium, minimalist portfolio with an *old-soul* editorial aesthetic.

_Warm paper canvas · espresso ink · Cormorant Garamond display type · ultra-fine grids · flawless micro-interactions._

<br/>

`React 19` &nbsp;·&nbsp; `Vite` &nbsp;·&nbsp; `Tailwind CSS` &nbsp;·&nbsp; `Zero UI dependencies`

<br/>

[**Live Demo**](https://www.facebook.com/letstechclub) &nbsp;•&nbsp; [**Report an Issue**](https://github.com/BradyTun/My-Portfolio-ReactJS/issues) &nbsp;•&nbsp; [**Fork & Make it Yours**](#-make-it-yours)

</div>

---

## ✦ Philosophy

This isn't a generic template. It's built on a single idea: **restraint is the signal of sophistication.**

- **Premium minimalism** — every element breathes. Negative space is a feature, not an absence.
- **Editorial typography** — a striking serif (`Cormorant Garamond`) paired with precision sans (`Inter`) and technical mono (`JetBrains Mono`).
- **Warm, not sterile** — no pure whites, no pure blacks. The canvas is coffee-tinted; the ink is espresso.
- **Subtle creative edge** — a scroll-progress bar, a live timezone clock, an animated full-screen menu, a pausing marquee, and grid-row hover reveals.

---

## ✦ Tech Stack

| Layer | Choice |
| :--- | :--- |
| **Framework** | React 19 |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS (custom design tokens) |
| **Fonts** | Cormorant Garamond · Inter · JetBrains Mono |
| **Animation** | Pure CSS keyframes + IntersectionObserver |
| **Dependencies** | None beyond React — no UI kit, no animation library |

---

## ✦ Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/BradyTun/My-Portfolio-ReactJS.git
cd My-Portfolio-ReactJS

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Build for production
npm run build
```

The dev server runs at **http://localhost:5173** (or the next free port).

---

## ✦ Project Structure

```
src/
├── App.jsx              # Page composition — section order lives here
├── main.jsx            # React entry point
├── index.css           # Design tokens, fonts, textures, marquee + animations
│
├── hooks/
│   └── useReveal.js    # Scroll-triggered fade-up via IntersectionObserver
│
└── components/
    ├── Nav.jsx         # Floating nav · scroll progress · live clock · overlay menu
    ├── Hero.jsx        # Oversized serif name + descriptor
    ├── Marquee.jsx     # Infinite scrolling keyword band
    ├── Section.jsx     # Shared section shell + editorial heading
    ├── Work.jsx        # Projects as an interactive editorial index
    ├── About.jsx       # Bio, capabilities, and personal disciplines
    ├── Experience.jsx  # Career & leadership timeline
    └── Contact.jsx     # Giant CTA, socials, and footer
```

---

## ✦ Make It Yours

All content lives in plain data arrays at the top of each component — **no hunting through JSX required.**

| What to change | Where |
| :--- | :--- |
| **Your name & tagline** | [`src/components/Hero.jsx`](src/components/Hero.jsx) |
| **Projects** | `PROJECTS` array in [`src/components/Work.jsx`](src/components/Work.jsx) |
| **Bio & skills** | `CAPABILITIES` / `DISCIPLINES` in [`src/components/About.jsx`](src/components/About.jsx) |
| **Work history** | `ROLES` array in [`src/components/Experience.jsx`](src/components/Experience.jsx) |
| **Email & socials** | `SOCIALS` / `EMAIL` in [`src/components/Contact.jsx`](src/components/Contact.jsx) |
| **Nav links & clock** | `NAV_LINKS` / timezone in [`src/components/Nav.jsx`](src/components/Nav.jsx) |

### Theme it

Every color, font, and spacing value is a token in [`tailwind.config.js`](tailwind.config.js):

```js
colors: {
  canvas: '#F7F5F0',   // warm off-white background
  ink:    '#1A1814',   // espresso text
  accent: '#C4A882',   // muted warm gold
}
```

Swap these three values and the entire palette re-harmonizes.

### Add a highlighted project

Mark any project as `featured: true` in the `PROJECTS` array to give it the
accent-tinted treatment with a pulsing "Launching Soon" status badge.

---

## ✦ Accessibility & Performance

- Respects `prefers-reduced-motion` — all animations collapse gracefully.
- Semantic landmarks, `aria-label`s, and keyboard-focusable interactions.
- No runtime UI dependencies → tiny bundle, fast first paint.
- Fonts preconnected; layout is fully fluid via `clamp()`.

---

## ✦ License

Released under the **MIT License** — free to use, fork, and adapt.
If you build something with it, a credit link back is appreciated but not required.

See [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with intent by [Kyaw Ko Ko Tun](https://github.com/BradyTun)**

[GitHub](https://github.com/BradyTun/) · [LinkedIn](https://www.linkedin.com/in/kyawkokotun/) · [Facebook](https://www.facebook.com/kyawkokotun888/)

<sub>If this gave you a head start, consider leaving a ⭐</sub>

</div>
