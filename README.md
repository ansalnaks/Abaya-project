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

## Swapping in real photography

Two places currently use generated placeholders instead of photos:

- **Hero image** (`Hero.jsx`): an inline SVG illustration stands in for the
  hero photo. Replace the `<svg className="drape-art">` block with an
  `<img src="/images/hero.jpg" alt="..." />` and drop the file in `public/images/`.
- **Product cards** (`ProductCard.jsx`): each entry in `data/products.js` has
  a `swatch` (two hex colors used for a gradient placeholder). Add an
  `image: '/images/haya-classic.jpg'` field to a product and the card will
  render that photo instead.

## Design tokens

Defined at the top of `src/App.css`:

| Token | Value | Used for |
|---|---|---|
| `--cream` | `#f8f3e8` | page background |
| `--ink` | `#241a10` | headings, primary text |
| `--ink-soft` | `#4a3c2c` | body copy |
| `--walnut` | `#5b3d28` | primary button |
| `--clay-gold` | `#a9825a` | eyebrow labels, meta text |
| `--hairline` | `#e3d5ba` | borders, dividers |

## Next steps

This ships the homepage only, per the current brief. Natural next pages:
a shop/listing grid (`/abayas`), a product detail page, and a cart — happy
to build any of those next.
