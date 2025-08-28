"use client";

import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CollectionsSection() {
  return (
    
    <section className="relative h-screen w-full mt-8 lg:mt-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 mt-10">Collections</h1>
      {/* Full Screen Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        
        {/* Left Collection - Grace Collection */}
        <div className="relative group overflow-hidden">
          <div className="h-full relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://mimosawedding.vn/wp-content/uploads/2025/06/concept-tu-nhien-lang-man-16.jpg"
                alt="Grace Collection"
                className="w-full h-full object-cover object-center transition-transform duration-[3s] ease-out group-hover:scale-110"
              />
              {/* Subtle overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16">
              <div className="space-y-6 text-white max-w-md">
                {/* Category Tag */}
                <div className="inline-block">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    SCULPTURAL LINES
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-wide">
                  Grace Collection
                </h2>

                {/* CTA Button */}
                <div className="pt-2">
                  <Button 
                    className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-3 rounded-sm transition-all duration-300 hover:shadow-lg group/btn text-sm tracking-wide uppercase"
                  >
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Collection - Handbag Collection */}
        <div className="relative group overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="h-full relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                 src="https://mimosawedding.vn/wp-content/uploads/2025/06/concept-tu-nhien-lang-man-16.jpg"
                alt="Handbag Collection"
                className="w-full h-full object-cover object-center transition-transform duration-[3s] ease-out group-hover:scale-110"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-white/10" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16">
              <div className="space-y-6 text-gray-900 max-w-md">
                {/* Category Tag */}
                <div className="inline-block">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-gray-800">
                    NEW FASHION
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-wide">
                  Handbag Collection
                </h2>

                {/* CTA Button */}
                <div className="pt-2">
                  <Button 
                    className="bg-gray-900 text-white hover:bg-gray-800 font-medium px-8 py-3 rounded-sm transition-all duration-300 hover:shadow-lg group/btn text-sm tracking-wide uppercase"
                  >
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional detail image overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute top-1/4 right-8 w-48 h-64 lg:w-56 lg:h-72">
                <ImageWithFallback
                  src="https://mimosawedding.vn/wp-content/uploads/2025/06/concept-tu-nhien-lang-man-16.jpg"
                  alt="Handbag Detail"
                  className="w-full h-full object-cover rounded-lg shadow-2xl transform translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Brand Element */}
     

      {/* Bottom Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          <div className="w-2 h-2 bg-white/70 rounded-full" />
          <div className="w-8 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
