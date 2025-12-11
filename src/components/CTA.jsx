import { Link } from 'react-router-dom'

const CTA = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            {title || "Siap Wujudkan Proyek Cetak Anda?"}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {subtitle || "Konsultasikan kebutuhan percetakan Anda dengan tim profesional kami"}
          </p>
          <Link
            to={buttonLink || "/kontak"}
            className="btn-secondary inline-block"
          >
            {buttonText || "Hubungi Kami Sekarang"}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
