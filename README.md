# Amara Atelier

A React + Vite homepage for an abaya boutique, matching the "quiet luxury"
cream-and-walnut mood board: serif headlines (Fraunces), a clean sans for
nav/labels (Inter), and a warm neutral palette.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  App.jsx                    top-level layout (Header + Hero + Featured)
  App.css                    all styling, tokens live at the top as CSS vars
  components/
    Header.jsx                logo, nav, search/cart icons
    Hero.jsx                  headline, copy, CTAs, illustrated drape panel
    FeaturedProducts.jsx      "This season's abayas" carousel row
    ProductCard.jsx           single product tile
  data/
    products.js                featured product list (id, name, meta, price)
```
