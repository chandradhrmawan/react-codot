import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const { name, category, description, priceRange, images } = product

  console.log('ProductCard render:', product)

  const categoryLabels = {
    offset: 'Offset Printing',
    digital: 'Digital Printing',
    kalender: 'Kalender',
    brosur: 'Brosur',
    agenda: 'Buku Agenda',
    lainnya: 'Lainnya'
  }

  const categoryColors = {
    offset: 'bg-blue-100 text-blue-800',
    digital: 'bg-green-100 text-green-800',
    kalender: 'bg-purple-100 text-purple-800',
    brosur: 'bg-orange-100 text-orange-800',
    agenda: 'bg-pink-100 text-pink-800',
    lainnya: 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="card group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        {images && images[0] ? (
          <img
            src={images[0]}
            alt={`${name} product image`}
            className="object-cover transition-transform duration-300 w-15 h-15 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary-100 to-primary-200">
            <svg className="w-20 h-20 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[category] || categoryColors.lainnya}`}>
            {categoryLabels[category] || category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold font-heading text-navy-900">
          {name}
        </h3>
        <p className="mb-4 text-gray-600 line-clamp-3">
          {description}
        </p>
        
        {/* {priceRange && (
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">Mulai dari</span>
            <span className="text-lg font-bold text-primary-600">
              {priceRange}
            </span>
          </div>
        )} */}

        <Link
          to="/kontak"
          className="block w-full text-center btn-outline"
        >
          Minta Penawaran
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
