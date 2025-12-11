import { useState } from 'react'
import GalleryGrid from '../components/GalleryGrid'

const Portofolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'kalender', label: 'Kalender' },
    { id: 'brosur', label: 'Brosur' },
    { id: 'buku', label: 'Buku & Majalah' },
    { id: 'agenda', label: 'Agenda' },
    { id: 'packaging', label: 'Packaging' }
  ]

  // Sample portfolio images
  const portfolioImages = [
    { id: 1, url: '', alt: 'Calendar design project', title: 'Kalender Perusahaan 2024', category: 'kalender' },
    { id: 2, url: '', alt: 'Brochure design', title: 'Brosur Promosi PT ABC', category: 'brosur' },
    { id: 3, url: '', alt: 'Magazine layout', title: 'Majalah Bulanan XYZ', category: 'buku' },
    { id: 4, url: '', alt: 'Agenda notebook', title: 'Buku Agenda Corporate', category: 'agenda' },
    { id: 5, url: '', alt: 'Product packaging', title: 'Kemasan Produk Premium', category: 'packaging' },
    { id: 6, url: '', alt: 'Company profile book', title: 'Company Profile Book', category: 'buku' },
    { id: 7, url: '', alt: 'Wall calendar', title: 'Kalender Dinding 2024', category: 'kalender' },
    { id: 8, url: '', alt: 'Flyer design', title: 'Flyer Event Marketing', category: 'brosur' },
    { id: 9, url: '', alt: 'Custom agenda', title: 'Agenda Custom Logo', category: 'agenda' },
    { id: 10, url: '', alt: 'Box packaging', title: 'Box Packaging Design', category: 'packaging' },
    { id: 11, url: '', alt: 'Catalog design', title: 'Katalog Produk 2024', category: 'buku' },
    { id: 12, url: '', alt: 'Promotional brochure', title: 'Brosur Lipat 3', category: 'brosur' }
  ]

  const filteredImages = selectedCategory === 'all'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === selectedCategory)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Portofolio Kami
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Lihat hasil karya dan proyek-proyek yang telah kami kerjakan dengan berbagai klien
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">300+</div>
              <div className="text-gray-600">Klien Puas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Award & Sertifikasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-8 sticky top-16 md:top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 mb-8">
            Menampilkan {filteredImages.length} proyek
          </p>
          <GalleryGrid images={filteredImages} />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Klien Kami</h2>
            <p className="section-subtitle">
              Dipercaya oleh berbagai perusahaan dan institusi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow">
                <span className="text-gray-400 font-semibold">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ingin Proyek Anda Menjadi Bagian dari Portofolio Kami?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Mari berdiskusi tentang ide dan kebutuhan percetakan Anda
          </p>
          <a href="/kontak" className="btn-secondary">
            Mulai Proyek Anda
          </a>
        </div>
      </section>
    </div>
  )
}

export default Portofolio
