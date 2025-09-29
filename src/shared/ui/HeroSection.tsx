'use client';

import { useState } from 'react';
import Image from 'next/image';

const heroSlides = [
  {
    id: 1,
    title: "Are you ready to",
    highlight: "lead the way",
    subtitle: "Luxury meets ultimate sitting comfort",
    image: "/images/stylish.jpg",
    bgColor: "from-orange-300 via-yellow-200 to-orange-100"
  },
  {
    id: 2,
    title: "Discover modern",
    highlight: "furniture style",
    subtitle: "Transform your space with premium designs",
    image: "/images/black.jpg",
    bgColor: "from-blue-300 via-purple-200 to-pink-100"
  },
  {
    id: 3,
    title: "Experience the",
    highlight: "perfect comfort",
    subtitle: "Quality craftsmanship meets contemporary design",
    image: "/images/red.jpg",
    bgColor: "from-green-300 via-teal-200 to-blue-100"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className={`relative min-h-[500px] md:min-h-[600px] bg-gradient-to-br ${currentSlideData.bgColor} overflow-hidden rounded-2xl mx-4 md:mx-8 my-8`}>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex items-center justify-between h-full px-6 md:px-12 py-8 md:py-12">
        <div className="flex-1 max-w-lg">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            {currentSlideData.title}
            <br />
            <span className="text-gray-800">{currentSlideData.highlight}</span>
          </h1>
          
          <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
            {currentSlideData.subtitle}
          </p>

          <button className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Discover
            <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src={currentSlideData.image}
              alt="Featured product"
              fill
              className="object-cover rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500"
              priority
            />

            <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="w-12 h-12 bg-orange-400 rounded-lg"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="w-12 h-12 bg-blue-400 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gray-800 scale-125'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}