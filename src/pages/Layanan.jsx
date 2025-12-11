import ServiceList from '../components/ServiceList'
import CTA from '../components/CTA'

const Layanan = () => {
  const mainServices = [
    {
      title: 'Offset Printing',
      description: 'Teknologi cetak tradisional yang ideal untuk volume besar dengan kualitas konsisten dan biaya efisien.',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>',
      features: [
        'Minimal order 500 eksemplar',
        'Kualitas warna konsisten',
        'Cocok untuk buku, majalah, katalog',
        'Harga ekonomis untuk jumlah besar'
      ]
    },
    {
      title: 'Digital Printing',
      description: 'Solusi cetak modern untuk order kecil hingga menengah dengan hasil cepat dan fleksibel.',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
      features: [
        'Minimal order rendah (mulai 1 eksemplar)',
        'Proses cepat 1-3 hari',
        'Variable data printing tersedia',
        'Cocok untuk brosur, poster, flyer'
      ]
    },
    {
      title: 'Cetak Kalender',
      description: 'Spesialisasi pembuatan kalender custom untuk promosi perusahaan atau hadiah.',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
      features: [
        'Kalender dinding, meja, duduk',
        'Berbagai ukuran dan model',
        'Custom desain & logo perusahaan',
        'Kertas art paper/ivory premium'
      ]
    },
    {
      title: 'Cetak Brosur & Flyer',
      description: 'Media promosi efektif untuk marketing dan branding bisnis Anda.',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>',
      features: [
        '1 muka atau 2 muka (bolak-balik)',
        'Berbagai ukuran: A4, A5, A6',
        'Finishing glossy atau doff',
        'Lipat 2, lipat 3, atau custom'
      ]
    },
    {
      title: 'Buku Agenda & Notebook',
      description: 'Buku agenda custom dengan logo perusahaan untuk souvenir atau merchandise.',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
      features: [
        'Hard cover atau soft cover',
        'Custom logo & nama perusahaan',
        'Berbagai pilihan warna',
        'Include kalender & catatan'
      ]
    },
    {
      title: 'Desain Grafis',
      description: 'Layanan desain profesional untuk berbagai kebutuhan percetakan Anda.',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>',
      features: [
        'Logo & corporate identity',
        'Layout buku & majalah',
        'Desain packaging',
        'Revisi unlimited hingga approve'
      ]
    }
  ]

  const additionalServices = [
    {
      title: 'Konsultasi Gratis',
      description: 'Diskusi langsung dengan tim untuk menentukan solusi terbaik'
    },
    {
      title: 'Proof Digital',
      description: 'Preview hasil sebelum produksi untuk memastikan kesesuaian'
    },
    {
      title: 'Quality Control',
      description: 'Pengecekan kualitas ketat di setiap tahap produksi'
    },
    {
      title: 'Pengiriman',
      description: 'Pengiriman ke seluruh Indonesia dengan packing aman'
    }
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Layanan Kami
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Solusi percetakan lengkap dengan teknologi modern dan tim berpengalaman
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Layanan Utama</h2>
            <p className="section-subtitle">
              Berbagai pilihan layanan percetakan untuk berbagai kebutuhan
            </p>
          </div>

          <ServiceList services={mainServices} />
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Layanan Tambahan</h2>
            <p className="section-subtitle">
              Nilai tambah yang kami berikan untuk kepuasan pelanggan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Proses Kerja</h2>
            <p className="section-subtitle">
              Alur kerja yang mudah dan transparan
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Konsultasi', desc: 'Diskusi kebutuhan & konsep' },
                { step: '02', title: 'Penawaran', desc: 'Estimasi harga & timeline' },
                { step: '03', title: 'Produksi', desc: 'Proses cetak & quality control' },
                { step: '04', title: 'Pengiriman', desc: 'Pengiriman produk jadi' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block">
                      <svg className="w-full h-8 mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA 
        title="Siap Memulai Proyek Anda?"
        subtitle="Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik"
        buttonText="Konsultasi Sekarang"
      />
    </div>
  )
}

export default Layanan
