import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto flex items-center justify-center mt-8">
            <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-heading font-bold text-navy-900 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-600 mb-8">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan. 
          Silakan kembali ke halaman utama atau gunakan navigasi di bawah.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/" className="btn-primary">
            Kembali ke Beranda
          </Link>
          <Link to="/produk" className="btn-outline">
            Lihat Produk
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t pt-8">
          <p className="text-sm text-gray-500 mb-4">Atau kunjungi halaman lain:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/layanan" className="text-primary-600 hover:underline">
              Layanan
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/portofolio" className="text-primary-600 hover:underline">
              Portofolio
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/tentang" className="text-primary-600 hover:underline">
              Tentang Kami
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/kontak" className="text-primary-600 hover:underline">
              Kontak
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/faq" className="text-primary-600 hover:underline">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
