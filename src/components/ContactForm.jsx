import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Mohon lengkapi semua field yang wajib diisi'
      })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Format email tidak valid'
      })
      setIsSubmitting(false)
      return
    }

    try {
      // Example POST handler stub
      // In production, replace with actual API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      setStatus({
        type: 'success',
        message: 'Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Terjadi kesalahan. Silakan coba lagi atau hubungi kami melalui WhatsApp.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl p-8 mx-auto card">
      <h2 className="mb-6 text-2xl font-bold font-heading text-navy-900">
        Kirim Pesan
      </h2>

      {status.message && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            status.type === 'success'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Nama Anda"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
            No. Telepon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="+628567827236"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
            Subjek
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Subjek pesan"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
          Pesan <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 transition border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Tulis pesan Anda di sini..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
      </button>

      <p className="mt-4 text-sm text-center text-gray-500">
        Atau hubungi kami langsung melalui{' '}
        <a
          href="https://wa.me/628567827236"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:underline"
        >
          WhatsApp
        </a>
      </p>
    </form>
  )
}

export default ContactForm
