import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-2xl text-center">
        {/* 404 Illustration with Printing Theme */}
        <div className="mb-8">
          <div className="relative inline-block">
            <h1 className="mb-4 font-bold text-9xl text-primary-600">404</h1>
            <div className="absolute w-20 h-20 rounded-full -top-4 -right-4 bg-primary-100 animate-bounce">
              <svg className="w-20 h-20 p-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message with Printing Theme */}
        <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-navy-900">
          Halaman Tidak Tercetak!
        </h2>
        <p className="mb-2 text-lg text-gray-600">
          Ups! Sepertinya halaman yang Anda cari belum dicetak atau tidak ditemukan dalam arsip kami.
        </p>
        <p className="mb-8 text-gray-500">
          Jangan khawatir, kami punya banyak halaman lain yang siap melayani kebutuhan percetakan Anda.
        </p>

        {/* Main CTA */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center px-8 py-4 font-semibold text-white transition-all transform rounded-lg shadow-lg bg-primary-600 hover:bg-primary-700 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>

        {/* Quick Links Card */}
        <div className="p-8 bg-white shadow-lg rounded-xl">
          <h3 className="mb-4 text-lg font-bold font-heading text-navy-900">
            Atau Jelajahi Halaman Lainnya
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <Link 
              to="/produk" 
              className="p-4 transition-all border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 group"
            >
              <svg className="w-8 h-8 mx-auto mb-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-600">Produk</span>
            </Link>

            <Link 
              to="/layanan" 
              className="p-4 transition-all border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 group"
            >
              <svg className="w-8 h-8 mx-auto mb-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-600">Layanan</span>
            </Link>

            <Link 
              to="/portofolio" 
              className="p-4 transition-all border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 group"
            >
              <svg className="w-8 h-8 mx-auto mb-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-600">Portofolio</span>
            </Link>

            <Link 
              to="/tentang" 
              className="p-4 transition-all border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 group"
            >
              <svg className="w-8 h-8 mx-auto mb-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-600">Tentang</span>
            </Link>

            <Link 
              to="/kontak" 
              className="p-4 transition-all border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 group"
            >
              <svg className="w-8 h-8 mx-auto mb-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-600">Kontak</span>
            </Link>

            <Link 
              to="/faq" 
              className="p-4 transition-all border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 group"
            >
              <svg className="w-8 h-8 mx-auto mb-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-600">FAQ</span>
            </Link>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-200">
            <p className="mb-3 text-sm text-gray-500">Butuh bantuan segera?</p>
            <a 
              href="https://wa.me/+628567827236" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-green-600 hover:text-green-700"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
