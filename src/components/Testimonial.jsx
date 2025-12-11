import { useState, useEffect } from "react";

const Testimonial = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play carousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Ganti setiap 5 detik

      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Get visible testimonials (3 for desktop, 2 for tablet, 1 for mobile)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div
      className="relative mx-auto max-w-7xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 gap-6 transition-all duration-500 md:grid-cols-2 lg:grid-cols-3">
        {visibleTestimonials.map((testimonial, idx) => (
          <div
            key={`${currentIndex}-${idx}`}
            className="p-6 transition-shadow duration-300 card hover:shadow-xl animate-fadeIn"
          >
            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonial.rating ? "text-accent-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-gray-700 mb-4 italic min-h-[80px]">
              "{testimonial.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 mr-3 rounded-full bg-primary-200">
                <span className="text-lg font-bold text-primary-700">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-navy-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 z-10 p-3 transition-all duration-300 -translate-x-4 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 md:-translate-x-12 hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label="Previous testimonials"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 z-10 p-3 transition-all duration-300 translate-x-4 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 md:translate-x-12 hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label="Next testimonials"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator with Progress */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary-600 w-8"
                : "bg-gray-300 hover:bg-primary-400 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && !isHovered && (
              <div className="h-full rounded-full bg-primary-700 animate-progress" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
