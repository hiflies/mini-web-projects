# Honeybee Cakes

A fictional artisanal bakery website built with React. Features a multi-page single-page application showcasing handmade cakes and pastries from a bakery based in Malmö, Sweden.

## Pages

- **Home** — Hero section, brand story, and customer reviews
- **Products** — Cupcakes and wedding cakes with prices (SEK)
- **About** — Bakery background and values
- **Contact** — Contact form, studio address, and opening hours

## Tech Stack

- React 19
- Tailwind CSS
- Create React App

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

Outputs a production build to the `build/` folder with the public path set to `/honeybee-cakes`.

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   └── Button.jsx
└── pages/
    ├── Home.jsx
    ├── Products.jsx
    ├── About.jsx
    └── Contact.jsx
```

Navigation between pages is handled via React state (`useState`) in `App.js` — no router library is used.
