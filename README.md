# Darma Cipta Media - Company Profile Website

Solusi percetakan profesional untuk kebutuhan bisnis dan personal Anda. Website company profile modern dengan React + Vite + Tailwind CSS.

## 🚀 Tech Stack

- **React 19** - UI Library
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS** - Utility-First CSS Framework
- **React Router** - Client-Side Routing
- **PostCSS & Autoprefixer** - CSS Processing

## 📋 Features

- ✅ Responsive Design (Mobile-First)
- ✅ Modern & Clean UI
- ✅ 8 Pages (Home, Produk, Layanan, Portofolio, Tentang, Kontak, FAQ, 404)
- ✅ Reusable Components
- ✅ Product Catalog with Filtering
- ✅ Contact Form with Validation
- ✅ FAQ Accordion
- ✅ Portfolio Gallery
- ✅ SEO Friendly
- ✅ Accessible (ARIA Labels)

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm atau yarn

### Steps

1. Clone repository
```bash
git clone <repository-url>
cd compro-codot
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open browser and visit `http://localhost:5173`

## 📦 Available Scripts

### Development
```bash
npm run dev
```
Menjalankan development server dengan hot-reload di `http://localhost:5173`

### Build
```bash
npm run build
```
Membuat production build yang dioptimasi di folder `dist/`

### Preview
```bash
npm run preview
```
Preview production build secara lokal

### Lint
```bash
npm run lint
```
Menjalankan ESLint untuk code quality check

### Format (Optional)
```bash
npm run format
```
Format kode menggunakan Prettier (jika diinstall)

## 📁 Project Structure

```
compro-codot/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ServiceList.jsx
│   │   ├── GalleryGrid.jsx
│   │   ├── Testimonial.jsx
│   │   ├── CTA.jsx
│   │   └── ContactForm.jsx
│   ├── data/              # Static data (JSON)
│   │   └── products.json
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Produk.jsx
│   │   ├── Layanan.jsx
│   │   ├── Portofolio.jsx
│   │   ├── Tentang.jsx
│   │   ├── Kontak.jsx
│   │   ├── FAQ.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # Entry point
│   ├── index.css          # Global styles + Tailwind
│   └── App.css            # App-specific styles
├── .gitignore
├── eslint.config.js
├── index.html             # HTML template
├── package.json
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md
```

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.js` untuk mengubah warna brand:

```javascript
colors: {
  primary: { ... },   // Biru (untuk CTA, links)
  accent: { ... },    // Kuning (untuk highlights)
  navy: { ... },      // Navy (untuk text & headers)
}
```

### Products Data
Edit `src/data/products.json` untuk menambah/mengubah produk:

```json
{
  "id": 1,
  "name": "Nama Produk",
  "category": "offset|digital|kalender|brosur|agenda|lainnya",
  "description": "Deskripsi produk",
  "specs": { ... },
  "priceRange": "Rp ...",
  "images": []
}
```

### Contact Information
Edit kontak di:
- `src/components/Footer.jsx`
- `src/pages/Kontak.jsx`

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

3. Follow the prompts

**Atau via Vercel Dashboard:**
1. Push code ke GitHub
2. Import repository di [vercel.com](https://vercel.com)
3. Vercel akan auto-detect Vite dan deploy

### Netlify

1. Build project
```bash
npm run build
```

2. Drag & drop folder `dist/` ke [Netlify Drop](https://app.netlify.com/drop)

**Atau via Netlify CLI:**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

1. Install gh-pages
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/compro-codot/',
  plugins: [react()],
})
```

4. Deploy
```bash
npm run deploy
```

## ✅ SEO Checklist

- [ ] Update `index.html` meta tags (title, description, keywords)
- [ ] Add Open Graph tags untuk social media
- [ ] Tambahkan favicon di `public/`
- [ ] Generate sitemap.xml
- [ ] Setup robots.txt
- [ ] Optimize images (compress & use WebP)
- [ ] Add alt text ke semua images
- [ ] Implement lazy loading untuk images
- [ ] Setup Google Analytics (optional)
- [ ] Submit sitemap ke Google Search Console

### Example Meta Tags

Edit `index.html`:
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Darma Cipta Media - Solusi offset & digital printing berkualitas tinggi. Melayani cetak kalender, brosur, buku agenda, dan lainnya." />
  <meta name="keywords" content="percetakan, offset printing, digital printing, kalender, brosur, jakarta" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Darma Cipta Media - Printing Profesional" />
  <meta property="og:description" content="Solusi percetakan berkualitas tinggi untuk bisnis Anda" />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:url" content="https://darmaciptamedia.com" />
  
  <title>Darma Cipta Media - Offset & Digital Printing</title>
</head>
```

## ♿ Accessibility Features

- Semantic HTML elements
- ARIA labels pada interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text pada images
- Sufficient color contrast
- Responsive font sizes

## 🐛 Troubleshooting

### Port sudah digunakan
```bash
# Ganti port di vite.config.js
export default defineConfig({
  server: { port: 3000 },
  plugins: [react()],
})
```

### Module not found errors
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Check for syntax errors
npm run lint
```

## 📞 Support

Untuk pertanyaan atau bantuan:
- Email: info@percetakancodot.com
- WhatsApp: +62 812-3456-7890

## 📄 License

MIT License - feel free to use for your projects!

---

**Built with ❤️ using React + Vite + Tailwind CSS**
