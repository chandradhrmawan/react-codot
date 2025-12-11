# Project Structure - DARMA CIPTA MEDIA

## Directory Structure

```
compro-codot/
│
├── public/                          # Static assets served directly
│   ├── logo.svg                    # Vite logo
│   └── [future assets]             # Favicon, images, etc.
│
├── src/                            # Source code
│   │
│   ├── assets/                     # Dynamic assets (imported in code)
│   │   └── react.svg              # React logo
│   │
│   ├── components/                 # Reusable UI components
│   │   ├── Navbar.jsx             # Navigation bar with routing
│   │   ├── Footer.jsx             # Footer with company info & links
│   │   ├── Hero.jsx               # Hero section for landing pages
│   │   ├── ProductCard.jsx        # Product display card
│   │   ├── ServiceList.jsx        # Service grid display
│   │   ├── GalleryGrid.jsx        # Image gallery with modal
│   │   ├── Testimonial.jsx        # Customer testimonial cards
│   │   ├── CTA.jsx                # Call-to-action section
│   │   └── ContactForm.jsx        # Contact form with validation
│   │
│   ├── data/                       # Static JSON data
│   │   └── products.json          # Product catalog (12 items)
│   │
│   ├── pages/                      # Page components
│   │   ├── Home.jsx               # Homepage with hero, products, services
│   │   ├── Produk.jsx             # Product catalog with filtering
│   │   ├── Layanan.jsx            # Services page with details
│   │   ├── Portofolio.jsx         # Portfolio gallery
│   │   ├── Tentang.jsx            # About us page
│   │   ├── Kontak.jsx             # Contact page with form
│   │   ├── FAQ.jsx                # FAQ with accordion
│   │   └── NotFound.jsx           # 404 error page
│   │
│   ├── App.css                     # App-specific styles
│   ├── App.jsx                     # Main app component with routing
│   ├── index.css                   # Global styles + Tailwind directives
│   └── main.jsx                    # Entry point (ReactDOM render)
│
├── .gitignore                      # Git ignore rules
├── eslint.config.js                # ESLint configuration
├── index.html                      # HTML template
├── package.json                    # Dependencies & scripts
├── package-lock.json               # Dependency lock file
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── vite.config.js                  # Vite build configuration
├── README.md                       # Project documentation
└── SYSTEMINSTRUCTION.md            # System instruction for AI

```

## File Descriptions

### Root Configuration Files

| File                 | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| `package.json`       | Project metadata, dependencies, and npm scripts |
| `vite.config.js`     | Vite build tool configuration                   |
| `tailwind.config.js` | Tailwind CSS customization (colors, fonts, etc) |
| `postcss.config.js`  | PostCSS plugins configuration                   |
| `eslint.config.js`   | Code linting rules                              |
| `index.html`         | HTML entry point with root div                  |

### Source Files (`src/`)

#### Entry Files

- `main.jsx` - Application entry point, renders App to DOM
- `App.jsx` - Main component with React Router setup
- `index.css` - Global styles, Tailwind directives, custom CSS classes

#### Components (`src/components/`)

All components are reusable and accept props for customization.

| Component     | Props                                   | Purpose                                  |
| ------------- | --------------------------------------- | ---------------------------------------- |
| `Navbar`      | -                                       | Sticky navigation with mobile menu       |
| `Footer`      | -                                       | Footer with links and contact info       |
| `Hero`        | title, subtitle, ctaText, ctaLink       | Hero section for pages                   |
| `ProductCard` | product                                 | Display product with image, specs, price |
| `ServiceList` | services                                | Grid of service cards                    |
| `GalleryGrid` | images                                  | Image gallery with lightbox              |
| `Testimonial` | testimonials                            | Customer review cards                    |
| `CTA`         | title, subtitle, buttonText, buttonLink | Call-to-action section                   |
| `ContactForm` | -                                       | Form with validation                     |

#### Pages (`src/pages/`)

| Page         | Route         | Description                                         |
| ------------ | ------------- | --------------------------------------------------- |
| `Home`       | `/`           | Landing page with hero, featured products, services |
| `Produk`     | `/produk`     | Product catalog with category filtering             |
| `Layanan`    | `/layanan`    | Detailed services with process workflow             |
| `Portofolio` | `/portofolio` | Portfolio gallery with category filter              |
| `Tentang`    | `/tentang`    | About us, vision, mission, team                     |
| `Kontak`     | `/kontak`     | Contact form, info, map, business hours             |
| `FAQ`        | `/faq`        | Accordion FAQ with categories                       |
| `NotFound`   | `*`           | 404 error page                                      |

#### Data (`src/data/`)

- `products.json` - Array of 12 products with specs and pricing

## Component Hierarchy

```
App
├── Navbar
├── Routes
│   ├── Home
│   │   ├── Hero
│   │   ├── ProductCard (x6)
│   │   ├── ServiceList
│   │   ├── Testimonial
│   │   └── CTA
│   ├── Produk
│   │   └── ProductCard (x12)
│   ├── Layanan
│   │   ├── ServiceList
│   │   └── CTA
│   ├── Portofolio
│   │   └── GalleryGrid
│   ├── Tentang
│   │   └── CTA
│   ├── Kontak
│   │   └── ContactForm
│   ├── FAQ
│   └── NotFound
└── Footer
```

## Routing Structure

```
/                    → Home.jsx
/produk             → Produk.jsx
/layanan            → Layanan.jsx
/portofolio         → Portofolio.jsx
/tentang            → Tentang.jsx
/kontak             → Kontak.jsx
/faq                → FAQ.jsx
/*                  → NotFound.jsx (catch-all)
```

## State Management

No external state management library is used. State is managed locally in components:

- `Navbar`: Mobile menu open/close state
- `Produk`: Selected category filter
- `Portofolio`: Selected category filter
- `FAQ`: Accordion open/close state
- `GalleryGrid`: Selected image for modal
- `ContactForm`: Form data and submission state

## Styling Approach

### Tailwind CSS Utility-First

- Mobile-first responsive design
- Custom color palette (primary, accent, navy)
- Custom font families (Inter, Poppins)
- Pre-defined component classes (.btn-primary, .card, etc)

### Custom CSS Classes (in `index.css`)

```css
.btn-primary
  →
  Primary
  button
  style
  .btn-secondary
  →
  Secondary
  button
  style
  .btn-outline
  →
  Outline
  button
  style
  .card
  →
  Card
  container
  .section-title
  →
  Section
  heading
  .section-subtitle
  →
  Section
  subheading;
```

## Build Output

When running `npm run build`, Vite generates:

```
dist/
├── index.html          # Processed HTML
├── assets/
│   ├── index-[hash].js   # Bundled JavaScript
│   └── index-[hash].css  # Bundled CSS
└── [other static assets]
```

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Edit components** in `src/`
3. **Hot reload** updates automatically
4. **Lint code**: `npm run lint`
5. **Build**: `npm run build`
6. **Preview build**: `npm run preview`
7. **Deploy**: Upload `dist/` folder

## Key Dependencies

### Production

- `react` (^19.2.0) - UI library
- `react-dom` (^19.2.0) - React DOM renderer
- `react-router-dom` (^6.21.0) - Routing

### Development

- `vite` (^7.2.4) - Build tool
- `tailwindcss` (^3.4.0) - CSS framework
- `postcss` & `autoprefixer` - CSS processing
- `eslint` + plugins - Code linting

## Performance Optimizations

- ✅ Code splitting by route (React.lazy potential)
- ✅ Minified CSS and JS in production
- ✅ Tree-shaking unused code
- ✅ Optimized asset loading
- ✅ Fast refresh in development

## SEO Considerations

- ✅ Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ Proper heading hierarchy (h1 → h6)
- ✅ Alt text on images
- ✅ Meta tags in `index.html`
- ✅ Clean URL structure

## Accessibility Features

- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Sufficient color contrast
- ✅ Responsive font sizes
- ✅ Screen reader friendly

---

**Last Updated**: December 2025
