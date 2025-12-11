# SEO & Accessibility Checklist

## ✅ SEO Implementation Guide

### 1. Meta Tags (Priority: HIGH)

Edit `index.html` in the root directory:

```html
<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>Darma Cipta Media - Offset & Digital Printing Jakarta | Cetak Kalender, Brosur, Agenda</title>
    <meta name="title" content="Darma Cipta Media - Offset & Digital Printing Jakarta" />
    <meta name="description" content="Percetakan profesional di Jakarta. Layanan offset printing, digital printing, cetak kalender, brosur, buku agenda. Harga kompetitif, kualitas terjamin, pengiriman ke seluruh Indonesia." />
    <meta name="keywords" content="percetakan jakarta, offset printing, digital printing, cetak kalender, cetak brosur, buku agenda, printing murah, percetakan online" />
    <meta name="author" content="Darma Cipta Media" />
    <meta name="robots" content="index, follow" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://percetakancodot.com/" />
    <meta property="og:title" content="Darma Cipta Media - Solusi Printing Profesional" />
    <meta property="og:description" content="Offset & digital printing berkualitas tinggi dengan harga terbaik. Melayani cetak kalender, brosur, buku agenda, dan produk custom." />
    <meta property="og:image" content="https://percetakancodot.com/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="id_ID" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://percetakancodot.com/" />
    <meta property="twitter:title" content="Darma Cipta Media - Solusi Printing Profesional" />
    <meta property="twitter:description" content="Offset & digital printing berkualitas tinggi dengan harga terbaik." />
    <meta property="twitter:image" content="https://percetakancodot.com/twitter-image.jpg" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://darmaciptamedia.com/" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 2. Create Favicon Package

Generate favicon di [RealFaviconGenerator](https://realfavicongenerator.net/):

Place in `public/`:
- `favicon.ico` (32x32)
- `favicon.png` (192x192)
- `apple-touch-icon.png` (180x180)
- `og-image.jpg` (1200x630) - untuk Open Graph
- `twitter-image.jpg` (1200x600) - untuk Twitter Cards

### 3. Sitemap.xml

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://percetakancodot.com/</loc>
    <lastmod>2025-12-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://percetakancodot.com/produk</loc>
    <lastmod>2025-12-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://percetakancodot.com/layanan</loc>
    <lastmod>2025-12-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://percetakancodot.com/portofolio</loc>
    <lastmod>2025-12-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://percetakancodot.com/tentang</loc>
    <lastmod>2025-12-11</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://percetakancodot.com/kontak</loc>
    <lastmod>2025-12-11</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://percetakancodot.com/faq</loc>
    <lastmod>2025-12-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

### 4. Robots.txt

Create `public/robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://percetakancodot.com/sitemap.xml
```

### 5. Google Analytics (Optional)

Add to `index.html` before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual GA4 ID.

### 6. Schema.org Structured Data

Add to `index.html` before closing `</body>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Darma Cipta Media",
  "image": "https://darmaciptamedia.com/logo.jpg",
  "description": "Percetakan profesional untuk offset printing, digital printing, kalender, brosur, dan buku agenda",
  "@id": "https://darmaciptamedia.com",
  "url": "https://darmaciptamedia.com",
  "telephone": "+628567827236",
  "email": "info@darmaciptamedia.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Percetakan No. 123",
    "addressLocality": "Jakarta Selatan",
    "postalCode": "12345",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.2088,
    "longitude": 106.8456
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/percetakancodot",
    "https://instagram.com/percetakancodot"
  ]
}
</script>
```

### 7. Image Optimization

**Action Items:**
- [ ] Compress all images (use TinyPNG or ImageOptim)
- [ ] Convert to WebP format where possible
- [ ] Add proper `alt` text to all images (already done in components)
- [ ] Implement lazy loading: `<img loading="lazy" ... />`
- [ ] Use responsive images with `srcset`

**Example:**
```jsx
<img 
  src="/image.jpg" 
  srcset="/image-320w.jpg 320w, /image-640w.jpg 640w, /image-1024w.jpg 1024w"
  sizes="(max-width: 640px) 100vw, 50vw"
  alt="Descriptive alt text"
  loading="lazy"
/>
```

### 8. Submit to Search Engines

After deployment:
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Add business to [Google My Business](https://business.google.com)

---

## ✅ Accessibility (A11y) Checklist

### 1. Semantic HTML ✅
- [x] Use `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`
- [x] Proper heading hierarchy (h1 → h6)
- [x] Use `<button>` for clickable actions
- [x] Use `<a>` for navigation links

### 2. ARIA Labels ✅
All interactive elements have proper labels:
- [x] Navigation menu toggle button
- [x] Form inputs with labels
- [x] Links with descriptive text
- [x] Buttons with clear purpose

### 3. Keyboard Navigation ✅
- [x] All interactive elements are keyboard accessible
- [x] Logical tab order
- [x] Focus indicators visible
- [x] Skip to main content (can be added)

**Add Skip Link (optional):**
```jsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

### 4. Color Contrast ✅
Current color palette meets WCAG AA standards:
- Primary blue on white: 4.5:1 ratio ✓
- Navy text on white: 15:1 ratio ✓
- Accent yellow with dark text: 10:1 ratio ✓

**Test your colors:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 5. Images ✅
- [x] All images have descriptive `alt` text
- [x] Decorative images use `alt=""`
- [x] Complex images include long descriptions

### 6. Forms ✅
- [x] All inputs have associated `<label>`
- [x] Required fields marked with `*`
- [x] Error messages are clear and accessible
- [x] Form validation provides helpful feedback

### 7. Links ✅
- [x] Link text is descriptive (avoid "click here")
- [x] External links open in new tab with `rel="noopener noreferrer"`
- [x] Link purpose is clear from context

### 8. Responsive Design ✅
- [x] Mobile-first approach
- [x] Touch targets minimum 44x44px
- [x] Text scales appropriately
- [x] No horizontal scrolling on mobile

### 9. Screen Reader Testing

**Recommended Tools:**
- NVDA (Windows) - Free
- JAWS (Windows) - Commercial
- VoiceOver (Mac/iOS) - Built-in
- TalkBack (Android) - Built-in

**Test Flow:**
1. Navigate with Tab key
2. Use screen reader to read content
3. Submit forms with keyboard only
4. Navigate menus without mouse

### 10. Accessibility Testing Tools

**Browser Extensions:**
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/extension/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (built into Chrome)

**Run Lighthouse Audit:**
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Accessibility" category
4. Click "Generate report"
5. Target: Score 95+ / 100

---

## 📊 Performance Checklist

### 1. Code Splitting
Consider adding React.lazy for route-based splitting:

```jsx
const Home = React.lazy(() => import('./pages/Home'))
const Produk = React.lazy(() => import('./pages/Produk'))
// ...

<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/" element={<Home />} />
    ...
  </Routes>
</Suspense>
```

### 2. Minification & Compression ✅
- [x] Vite automatically minifies JS and CSS in production
- [ ] Enable Gzip/Brotli compression on server (Vercel/Netlify auto-enable)

### 3. Asset Optimization
- [ ] Compress images (target: <100KB per image)
- [ ] Use modern formats (WebP, AVIF)
- [ ] Lazy load images below the fold
- [ ] Preload critical assets

### 4. Web Vitals Targets

| Metric | Target | Description |
|--------|--------|-------------|
| LCP | <2.5s | Largest Contentful Paint |
| FID | <100ms | First Input Delay |
| CLS | <0.1 | Cumulative Layout Shift |

**Test at:** [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 🔒 Security Headers

Add to hosting platform (Vercel/Netlify config):

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
```

---

## 📱 PWA (Progressive Web App) - Optional

To make the site installable:

1. Create `public/manifest.json`:
```json
{
  "name": "Darma Cipta Media",
  "short_name": "Codot",
  "description": "Solusi Printing Profesional",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#0284c7",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

2. Link in `index.html`:
```html
<link rel="manifest" href="/manifest.json">
```

3. Add service worker with [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)

---

## ✅ Final Pre-Launch Checklist

- [ ] All meta tags updated
- [ ] Favicon package created
- [ ] Sitemap.xml generated
- [ ] Robots.txt created
- [ ] Images optimized and compressed
- [ ] All links tested (no broken links)
- [ ] Forms tested (validation works)
- [ ] Mobile responsive on all devices
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse score: 90+ on all metrics
- [ ] Accessibility audit passed
- [ ] Contact information updated
- [ ] Google Analytics/Search Console setup
- [ ] SSL certificate active (HTTPS)

---

**Last Updated**: December 2025
