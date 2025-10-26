import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  { url: 'https://i.postimg.cc/WzGPHcv7/Whats-App-Image-2025-10-25-at-14-55-07-5d5d610f.jpg', alt: 'Slide 1' },
  { url: 'https://i.postimg.cc/YSmN0jDC/image.png', alt: 'Slide 2' },
  { url: 'https://i.postimg.cc/d0Bs8jf3/image.png', alt: 'Slide 3' },
  { url: 'https://i.postimg.cc/x1rJTgHQ/image.png', alt: 'Slide 4' },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = IMAGES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="relative w-full max-w-full overflow-hidden shadow-lg group">

        {/* Slides of page */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {IMAGES.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-fill"
              />
            </div>
          ))}
        </div>

        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full 
          hover:bg-black/70 transition duration-300 focus:outline-none group-hover:opacity-100 opacity-0 sm:opacity-100"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full 
          hover:bg-black/70 transition duration-300 focus:outline-none group-hover:opacity-100 opacity-0 sm:opacity-100"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
          {IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
