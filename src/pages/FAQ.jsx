import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      category: 'Umum',
      questions: [
        {
          question: 'Apa saja layanan yang ditawarkan Darma Cipta Media ?',
          answer: 'Kami menyediakan layanan offset printing, digital printing, cetak kalender, brosur, flyer, buku agenda, packaging, dan desain grafis. Kami juga melayani custom order sesuai kebutuhan Anda.'
        },
        {
          question: 'Apakah melayani order dalam jumlah kecil?',
          answer: 'Ya, kami melayani order mulai dari 1 eksemplar menggunakan digital printing. Untuk offset printing, minimal order adalah 500 eksemplar.'
        },
        {
          question: 'Berapa lama proses pengerjaan?',
          answer: 'Digital printing: 1-3 hari kerja. Offset printing: 5-7 hari kerja. Kalender dan agenda: 7-14 hari kerja. Waktu dapat bervariasi tergantung kompleksitas dan volume order.'
        }
      ]
    },
    {
      category: 'Harga & Pembayaran',
      questions: [
        {
          question: 'Bagaimana cara mendapatkan penawaran harga?',
          answer: 'Anda bisa menghubungi kami melalui WhatsApp, email, atau form kontak di website. Berikan detail spesifikasi produk yang diinginkan (ukuran, jumlah, material, finishing) dan kami akan memberikan quotation dalam 1x24 jam.'
        },
        {
          question: 'Apa saja metode pembayaran yang diterima?',
          answer: 'Kami menerima transfer bank (BCA, Mandiri, BRI), e-wallet (GoPay, OVO), dan tunai. Untuk order pertama kali, kami meminta DP 50%. Pelanggan repeat bisa nego terms.'
        },
        {
          question: 'Apakah ada diskon untuk order dalam jumlah besar?',
          answer: 'Ya, kami memberikan harga spesial untuk order volume besar. Hubungi sales kami untuk mendapatkan penawaran terbaik.'
        }
      ]
    },
    {
      category: 'Desain & File',
      questions: [
        {
          question: 'Apakah menyediakan jasa desain?',
          answer: 'Ya, kami memiliki tim desainer profesional yang siap membantu mewujudkan ide Anda. Layanan desain dikenakan biaya terpisah dan bisa konsultasi terlebih dahulu.'
        },
        {
          question: 'Format file apa yang diterima?',
          answer: 'Kami menerima file dalam format PDF, AI, CDR, PSD, dan INDD. Pastikan file sudah dalam mode CMYK dan resolusi minimal 300 dpi untuk hasil cetak optimal.'
        },
        {
          question: 'Bagaimana jika saya tidak punya file desain?',
          answer: 'Tidak masalah! Tim kami bisa membuatkan desain dari awal berdasarkan brief yang Anda berikan. Atau jika hanya punya gambar/referensi, kami bisa recreate desainnya.'
        }
      ]
    },
    {
      category: 'Produk & Material',
      questions: [
        {
          question: 'Apa perbedaan offset dan digital printing?',
          answer: 'Offset cocok untuk volume besar (500+ eksemplar) dengan harga per unit lebih murah dan kualitas konsisten. Digital printing cocok untuk order kecil, lebih cepat, dan bisa variable data printing.'
        },
        {
          question: 'Jenis kertas apa saja yang tersedia?',
          answer: 'Kami menyediakan art paper, art carton, ivory, HVS, duplex, linen, dan specialty paper lainnya. Gramatur mulai dari 80gsm hingga 400gsm. Konsultasikan dengan tim kami untuk rekomendasi.'
        },
        {
          question: 'Finishing apa saja yang bisa dipilih?',
          answer: 'Tersedia laminating glossy/doff, UV spot, emboss, deboss, foil, die cut, dan lain-lain. Finishing menambah nilai estetika dan durabilitas produk cetak Anda.'
        }
      ]
    },
    {
      category: 'Pengiriman',
      questions: [
        {
          question: 'Apakah ada layanan pengiriman?',
          answer: 'Ya, kami bekerja sama dengan berbagai ekspedisi (JNE, J&T, SiCepat, dll) untuk pengiriman ke seluruh Indonesia. Biaya pengiriman ditanggung pembeli.'
        },
        {
          question: 'Bagaimana packaging produk?',
          answer: 'Semua produk dikemas dengan bubble wrap dan kardus yang aman untuk memastikan produk sampai dalam kondisi sempurna. Untuk order besar, kami gunakan wooden crate.'
        },
        {
          question: 'Apakah bisa pickup sendiri?',
          answer: 'Tentu! Anda bisa mengambil sendiri di workshop kami. Silakan koordinasi terlebih dahulu untuk memastikan order sudah siap.'
        }
      ]
    }
  ]

  const toggleAccordion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {/* Header */}
      <section className="py-16 text-white bg-gradient-to-br from-primary-700 to-primary-900">
        <div className="container px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl font-heading">
            Frequently Asked Questions
          </h1>
          <p className="max-w-2xl text-xl text-primary-100">
            Temukan jawaban atas pertanyaan yang sering diajukan tentang layanan kami
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold font-heading text-navy-900">
                  <span className="w-2 h-8 mr-3 rounded bg-primary-600"></span>
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`
                    const isOpen = openIndex === index
                    
                    return (
                      <div key={questionIndex} className="overflow-hidden card">
                        <button
                          onClick={() => toggleAccordion(categoryIndex, questionIndex)}
                          className="flex items-center justify-between w-full p-6 text-left transition-colors hover:bg-gray-50"
                        >
                          <span className="pr-8 font-semibold text-navy-900">
                            {item.question}
                          </span>
                          <svg
                            className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="pt-4 border-t border-gray-200">
                              <p className="text-gray-700">{item.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="mb-4 text-3xl font-bold font-heading text-navy-900">
              Masih Ada Pertanyaan?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Jangan ragu untuk menghubungi kami. Tim kami siap membantu menjawab semua pertanyaan Anda.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="/kontak" className="btn-primary">
                Hubungi Kami
              </a>
              <a
                href="https://wa.me/+628567827236"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center section-title">Tips Sebelum Order</h2>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div className="p-6 bg-white border-l-4 rounded-lg border-primary-600">
                <h3 className="mb-2 text-lg font-bold">📐 Siapkan Spesifikasi Detail</h3>
                <p className="text-sm text-gray-600">
                  Tentukan ukuran, jumlah, jenis kertas, dan finishing yang diinginkan agar kami bisa memberikan penawaran akurat.
                </p>
              </div>
              <div className="p-6 bg-white border-l-4 rounded-lg border-accent-500">
                <h3 className="mb-2 text-lg font-bold">🎨 Persiapkan File Desain</h3>
                <p className="text-sm text-gray-600">
                  Jika sudah punya desain, pastikan file dalam format print-ready (CMYK, 300dpi, bleed 3mm).
                </p>
              </div>
              <div className="p-6 bg-white border-l-4 border-green-500 rounded-lg">
                <h3 className="mb-2 text-lg font-bold">💬 Konsultasi Dulu</h3>
                <p className="text-sm text-gray-600">
                  Tidak yakin pilihan material atau metode cetak? Konsultasikan gratis dengan tim kami.
                </p>
              </div>
              <div className="p-6 bg-white border-l-4 border-orange-500 rounded-lg">
                <h3 className="mb-2 text-lg font-bold">⏱️ Perhitungkan Waktu</h3>
                <p className="text-sm text-gray-600">
                  Untuk kebutuhan mendesak, informasikan deadline Anda dari awal agar kami bisa mengatur prioritas produksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
