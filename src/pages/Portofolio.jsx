import { useState } from "react";
import GalleryGrid from "../components/GalleryGrid";

const Portofolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Semua" },
    { id: "kalender", label: "Kalender" },
    { id: "brosur", label: "Brosur" },
    { id: "buku", label: "Buku & Majalah" },
    { id: "agenda", label: "Agenda" },
    { id: "packaging", label: "Packaging" },
  ];

  // Sample portfolio images
  const portfolioImages = [
    {
      id: 1,
      url: "/products/calendar.jpg",
      alt: "Calendar design project",
      title: "Kalender Perusahaan 2024",
      category: "kalender",
    },
    {
      id: 2,
      url: "/products/digital.jpg",
      alt: "Brochure design",
      title: "Brosur Promosi PT ABC",
      category: "brosur",
    },
    {
      id: 3,
      url: "/products/buku-pajak.jpg",
      alt: "Magazine layout",
      title: "Majalah Bulanan XYZ",
      category: "buku",
    },
    {
      id: 4,
      url: "/products/brosur-lipat.png",
      alt: "Agenda notebook",
      title: "Buku Agenda Corporate",
      category: "agenda",
    },
    {
      id: 5,
      url: "",
      alt: "Product packaging",
      title: "Kemasan Produk Premium",
      category: "packaging",
    },
    {
      id: 6,
      url: "",
      alt: "Company profile book",
      title: "Company Profile Book",
      category: "buku",
    },
    {
      id: 7,
      url: "",
      alt: "Wall calendar",
      title: "Kalender Dinding 2024",
      category: "kalender",
    },
    {
      id: 8,
      url: "",
      alt: "Flyer design",
      title: "Flyer Event Marketing",
      category: "brosur",
    },
    {
      id: 9,
      url: "",
      alt: "Custom agenda",
      title: "Agenda Custom Logo",
      category: "agenda",
    },
    {
      id: 10,
      url: "",
      alt: "Box packaging",
      title: "Box Packaging Design",
      category: "packaging",
    },
    {
      id: 11,
      url: "",
      alt: "Catalog design",
      title: "Katalog Produk 2024",
      category: "buku",
    },
    {
      id: 12,
      url: "",
      alt: "Promotional brochure",
      title: "Brosur Lipat 3",
      category: "brosur",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === selectedCategory);

  return (
    <div>
      {/* Header */}
      <section className="py-16 text-white bg-gradient-to-br from-primary-700 to-primary-900">
        <div className="container px-4 mx-auto">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl font-heading">
            Portofolio Kami
          </h1>
          <p className="max-w-2xl text-xl text-primary-100">
            Lihat hasil karya dan proyek-proyek yang telah kami kerjakan dengan
            berbagai klien
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold text-primary-600">
                500+
              </div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-primary-600">
                300+
              </div>
              <div className="text-gray-600">Klien Puas</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-primary-600">
                10+
              </div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-primary-600">
                50+
              </div>
              <div className="text-gray-600">Award & Sertifikasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky z-40 py-8 shadow-md bg-gray-50 top-16 md:top-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <p className="mb-8 text-gray-600">
            Menampilkan {filteredImages.length} proyek
          </p>
          <GalleryGrid images={filteredImages} />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title">Klien Kami</h2>
            <p className="section-subtitle">
              Dipercaya oleh berbagai perusahaan dan institusi
            </p>
          </div>

          <div className="grid items-center grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {[
              "/partners/permasyarakatan.jpg",
              "partners/djp.jpg",
              "partners/pmi.jpeg",
              "partners/bc.png",
              "partners/pupr.png",
              "partners/telkom.png",
            ].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center h-24 p-6 transition-shadow bg-gray-100 rounded-lg hover:shadow-md"
              >
                <span className="font-semibold text-gray-400">
                  <img src={i} alt="Client Logo" className="max-h-12" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl font-heading">
            Ingin Proyek Anda Menjadi Bagian dari Portofolio Kami?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-primary-100">
            Mari berdiskusi tentang ide dan kebutuhan percetakan Anda
          </p>
          <a href="/kontak" className="btn-secondary">
            Mulai Proyek Anda
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portofolio;
