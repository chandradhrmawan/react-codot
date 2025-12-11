import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'

const Produk = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'offset', label: 'Offset Printing' },
    { id: 'digital', label: 'Digital Printing' },
    { id: 'kalender', label: 'Kalender' },
    { id: 'brosur', label: 'Brosur' },
    { id: 'agenda', label: 'Buku Agenda' },
    { id: 'lainnya', label: 'Lainnya' }
  ]

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Produk Kami
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Temukan berbagai produk percetakan berkualitas tinggi untuk kebutuhan bisnis dan personal Anda
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 sticky top-16 md:top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-gray-600 mb-8">
                Menampilkan {filteredProducts.length} produk
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Tidak ada produk ditemukan
              </h3>
              <p className="text-gray-500">
                Coba pilih kategori lain
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-4">
              Tidak Menemukan yang Anda Cari?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Kami juga menerima pesanan custom sesuai dengan kebutuhan Anda. 
              Hubungi tim kami untuk konsultasi gratis.
            </p>
            <a href="/kontak" className="btn-primary">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Produk
