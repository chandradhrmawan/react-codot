import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ServiceList from '../components/ServiceList'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import productsData from '../data/products.json'
import testimonialsData from '../data/testimonials.json'
import servicesData from '../data/services.json'

const Home = () => {
  // Get featured products (first 6)
  const featuredProducts = productsData.slice(0, 6)

  return (
    <div>
      <Hero
        title="Solusi Percetakan Profesional untuk Bisnis Anda"
        subtitle="Offset & Digital Printing berkualitas tinggi dengan harga terbaik"
        ctaText="Minta Penawaran"
        ctaLink="/kontak"
      />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title">Mengapa Memilih Kami?</h2>
            <p className="section-subtitle">
              Kepercayaan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold font-heading">Kualitas Terjamin</h3>
              <p className="text-gray-600">Menggunakan material dan teknologi terbaik</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold font-heading">Tepat Waktu</h3>
              <p className="text-gray-600">Garansi pengerjaan sesuai deadline</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold font-heading">Harga Bersaing</h3>
              <p className="text-gray-600">Dapatkan harga terbaik dengan kualitas premium</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold font-heading">Tim Profesional</h3>
              <p className="text-gray-600">Berpengalaman lebih dari 10 tahun</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title">Produk Unggulan</h2>
            <p className="section-subtitle">
              Berbagai pilihan produk percetakan berkualitas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title">Layanan Kami</h2>
            <p className="section-subtitle">
              Solusi lengkap untuk kebutuhan percetakan Anda
            </p>
          </div>

          <ServiceList services={servicesData} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title">Testimoni Pelanggan</h2>
            <p className="section-subtitle">
              Apa kata mereka yang telah mempercayai kami
            </p>
          </div>

          <Testimonial testimonials={testimonialsData} />
        </div>
      </section>

      <CTA />
    </div>
  )
}

export default Home
