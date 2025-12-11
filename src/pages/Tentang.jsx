import CTA from '../components/CTA'

const Tentang = () => {
  const values = [
    {
      title: 'Kualitas',
      description: 'Komitmen pada standar kualitas tertinggi di setiap hasil produksi',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      title: 'Integritas',
      description: 'Transparansi dan kejujuran dalam setiap transaksi bisnis',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>'
    },
    {
      title: 'Inovasi',
      description: 'Terus berinovasi mengikuti perkembangan teknologi percetakan',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      title: 'Kepuasan Pelanggan',
      description: 'Mengutamakan kepuasan dan kepercayaan pelanggan',
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>'
    }
  ]

  const team = [
    {
      name: 'Budi Hartono',
      position: 'Founder & CEO',
      description: 'Berpengalaman 15 tahun di industri percetakan'
    },
    {
      name: 'Siti Rahmawati',
      position: 'Creative Director',
      description: 'Ahli desain grafis dengan portofolio internasional'
    },
    {
      name: 'Ahmad Fauzi',
      position: 'Production Manager',
      description: 'Spesialis dalam quality control dan manajemen produksi'
    },
    {
      name: 'Dewi Lestari',
      position: 'Customer Service Manager',
      description: 'Memastikan kepuasan pelanggan di setiap tahap'
    }
  ]

  return (
    <div>
      {/* Header */}
      <section className="py-16 text-white bg-gradient-to-br from-primary-700 to-primary-900">
        <div className="container px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl font-heading">
            Tentang Kami
          </h1>
          <p className="max-w-2xl text-xl text-primary-100">
            Mengenal lebih dekat perjalanan dan komitmen kami dalam industri percetakan
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-title">Perjalanan Kami</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Darma Cipta Media</strong> didirikan pada tahun 2013 dengan visi menjadi mitra terpercaya 
                  dalam solusi percetakan berkualitas tinggi di Indonesia. Berawal dari sebuah workshop kecil 
                  dengan 2 mesin cetak, kini kami telah berkembang menjadi salah satu percetakan terkemuka 
                  dengan fasilitas modern dan tim profesional.
                </p>
                <p>
                  Selama lebih dari 10 tahun, kami telah melayani ratusan klien dari berbagai industri, 
                  mulai dari UMKM hingga perusahaan multinasional. Kepercayaan mereka adalah aset terbesar 
                  yang terus mendorong kami untuk memberikan yang terbaik.
                </p>
                <p>
                  Kami berkomitmen untuk terus berinovasi dan mengadopsi teknologi terkini dalam industri 
                  percetakan, sambil tetap menjaga nilai-nilai kualitas, integritas, dan pelayanan prima 
                  yang menjadi fondasi perusahaan kami.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-gray-200 rounded-xl h-96">
              <svg className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-8 card">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-100">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="mb-4 text-2xl font-bold font-heading text-navy-900">Visi</h2>
              <p className="text-gray-700">
                Menjadi perusahaan percetakan terdepan di Indonesia yang dikenal dengan kualitas premium, 
                inovasi berkelanjutan, dan pelayanan terbaik yang memberikan nilai maksimal bagi setiap 
                klien kami.
              </p>
            </div>

            <div className="p-8 card">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-accent-100">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="mb-4 text-2xl font-bold font-heading text-navy-900">Misi</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-accent-600">•</span>
                  <span>Menyediakan produk percetakan berkualitas tinggi dengan harga kompetitif</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent-600">•</span>
                  <span>Memberikan pelayanan prima dan responsif kepada setiap pelanggan</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent-600">•</span>
                  <span>Terus berinovasi dan mengadopsi teknologi terkini</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent-600">•</span>
                  <span>Membangun kemitraan jangka panjang berbasis kepercayaan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title">Nilai-Nilai Kami</h2>
            <p className="section-subtitle">
              Prinsip yang menjadi pedoman dalam setiap tindakan kami
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100">
                  <div className="text-primary-600" dangerouslySetInnerHTML={{ __html: value.icon }} />
                </div>
                <h3 className="mb-3 text-xl font-bold font-heading text-navy-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title">Tim Profesional Kami</h2>
            <p className="section-subtitle">
              Berpengalaman dan berdedikasi untuk kesuksesan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="text-center card">
                <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4 rounded-full bg-primary-200">
                  <span className="text-4xl font-bold text-primary-700">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-bold font-heading text-navy-900">
                  {member.name}
                </h3>
                <p className="mb-3 font-semibold text-primary-600">
                  {member.position}
                </p>
                <p className="px-4 pb-4 text-sm text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title">Fasilitas & Teknologi</h2>
            <p className="section-subtitle">
              Peralatan modern untuk hasil maksimal
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center card">
              <svg className="w-16 h-16 mx-auto mb-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="mb-2 text-lg font-bold font-heading">Mesin Cetak Modern</h3>
              <p className="text-gray-600">Digital & offset printing teknologi terkini</p>
            </div>

            <div className="p-6 text-center card">
              <svg className="w-16 h-16 mx-auto mb-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <h3 className="mb-2 text-lg font-bold font-heading">Lab Quality Control</h3>
              <p className="text-gray-600">Pengecekan kualitas di setiap tahap</p>
            </div>

            <div className="p-6 text-center card">
              <svg className="w-16 h-16 mx-auto mb-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <h3 className="mb-2 text-lg font-bold font-heading">Studio Desain</h3>
              <p className="text-gray-600">Workstation profesional untuk desainer</p>
            </div>
          </div>
        </div>
      </section>

      <CTA 
        title="Mari Berkolaborasi"
        subtitle="Wujudkan proyek percetakan Anda bersama tim profesional kami"
      />
    </div>
  )
}

export default Tentang
