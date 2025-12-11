const ServiceList = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="card p-6 hover:shadow-2xl transition-all duration-300">
          {/* Icon */}
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
            <div className="text-primary-600" dangerouslySetInnerHTML={{ __html: service.icon }} />
          </div>

          {/* Content */}
          <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {service.description}
          </p>

          {/* Features */}
          {service.features && service.features.length > 0 && (
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default ServiceList
