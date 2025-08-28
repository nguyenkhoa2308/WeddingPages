import { ImageWithFallback } from "./figma/ImageWithFallback";

export function EternalMomentsGrid() {
  return (
    <section className="relative py-16 lg:py-24 bg-white">
      {/* Section Header - Keep with container */}
      <div className="container mx-auto px-4 mb-12 lg:mb-16">
        <div className="text-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
                WEDDING PHOTOGRAPHY
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
              Eternal Moments
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Những khoảnh khắc vĩnh cửu được ghi lại qua từng bức ảnh cưới,
              <br className="hidden sm:block" />
              tạo nên câu chuyện tình yêu đẹp nhất của bạn
            </p>
          </div>
        </div>
      </div>

      {/* Full Width 4-Image Grid Layout with Gaps */}
      <div className="w-full px-4 lg:px-8">
        <div className="max-w-none">
          <div className="grid grid-cols-12 gap-4 lg:gap-6 h-[500px] lg:h-[600px] xl:h-[700px]">
            
            {/* Left Large Image - Studio Wedding */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
              <div className="relative group h-full overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1753674689688-b5273c321438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwd2VkZGluZyUyMGNvdXBsZSUyMHJvbWFudGljJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1NDg1MzcyfDA&ixlib=rb-4.1.0&q=80&w=800&h=1000"
                  alt="Studio Wedding Photography"
                  className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                />
                
                {/* Content Overlay with better z-index */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10">
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="space-y-4">
                      <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-white/90 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        STUDIO COLLECTION
                      </span>
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-tight">
                        Studio
                        <span className="block">Wedding</span>
                      </h3>
                      <p className="text-white/80 text-base lg:text-lg max-w-md leading-relaxed">
                        Không gian studio sang trọng với ánh sáng chuyên nghiệp
                      </p>
                      <div className="pt-2">
                        <button className="text-white hover:text-white/80 transition-colors font-medium uppercase tracking-wide text-sm border-b border-white/30 hover:border-white/60 pb-1">
                          XEM STUDIO ALBUM →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column - Two Small Images */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
              <div className="grid grid-rows-2 gap-4 lg:gap-6 h-full">
                
                {/* Top - Traditional Wedding */}
                <div className="relative group overflow-hidden bg-gradient-to-br from-rose-50 to-pink-100">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1688789675055-a39c53d4abd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwdHJhZGl0aW9uYWwlMjB3ZWRkaW5nJTIwYW8lMjBkYWl8ZW58MXx8fHwxNzU1NDg1MzgxfDA&ixlib=rb-4.1.0&q=80&w=600&h=400"
                    alt="Traditional Vietnamese Wedding"
                    className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
                  />
                  
                  {/* Center Text Overlay with improved readability */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                      <div className="bg-white/95 backdrop-blur-sm px-6 py-4 lg:px-8 lg:py-6 shadow-lg border border-white/20">
                        <h4 className="text-lg lg:text-xl xl:text-2xl font-light text-gray-900 tracking-wide mb-2">TRADITIONAL</h4>
                        <p className="text-sm text-gray-600 mb-3">Áo Dài Việt Nam</p>
                        <button className="text-xs text-gray-900 hover:text-gray-700 uppercase tracking-wider font-medium border-b border-gray-300 hover:border-gray-500 pb-1 transition-colors">
                          Khám phá →
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5" />
                </div>

                {/* Bottom - Outdoor Wedding */}
                <div className="relative group overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1649730241467-88571767adda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJyaWRlJTIwZ3Jvb20lMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzU1NDg1Mzc3fDA&ixlib=rb-4.1.0&q=80&w=600&h=400"
                    alt="Outdoor Wedding Photography"
                    className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
                  />
                  
                  {/* Center Text Overlay with improved readability */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                      <div className="bg-white/95 backdrop-blur-sm px-6 py-4 lg:px-8 lg:py-6 shadow-lg border border-white/20">
                        <h4 className="text-lg lg:text-xl xl:text-2xl font-light text-gray-900 tracking-wide mb-2">OUTDOOR</h4>
                        <p className="text-sm text-gray-600 mb-3">Natural Beauty</p>
                        <button className="text-xs text-gray-900 hover:text-gray-700 uppercase tracking-wider font-medium border-b border-gray-300 hover:border-gray-500 pb-1 transition-colors">
                          Khám phá →
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5" />
                </div>
              </div>
            </div>

            {/* Right Large Image - Concept Wedding */}
            <div className="col-span-12 md:col-span-12 lg:col-span-4 h-full">
              <div className="relative group h-full overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745750003907-ac368cd3b6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&h=1000"
                  alt="Concept Wedding Photography"
                  className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"
                />
                
                {/* NEW Badge - Top Right with proper z-index */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm border border-white/20">
                    <span className="text-xs font-medium text-gray-900 tracking-wider uppercase">HOT</span>
                  </div>
                </div>
                
                {/* Content Overlay with better z-index */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10">
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="space-y-4">
                      <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-white/90 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        CONCEPT COLLECTION
                      </span>
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-tight">
                        Concept
                        <span className="block">Photography</span>
                      </h3>
                      <p className="text-white/80 text-base lg:text-lg max-w-md leading-relaxed">
                        Ý tưởng sáng tạo độc đáo cho những bức ảnh cưới ấn tượng
                      </p>
                      <div className="pt-2">
                        <button className="text-white hover:text-white/80 transition-colors font-medium uppercase tracking-wide text-sm border-b border-white/30 hover:border-white/60 pb-1">
                          XEM CONCEPT MỚI →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom CTA Only */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mt-12 lg:mt-16">
          <button className="group inline-flex items-center space-x-3 text-gray-900 hover:text-gray-700 transition-colors bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-sm border border-gray-100 hover:border-gray-200 hover:shadow-md">
            <span className="text-lg font-light tracking-wide">Xem Tất Cả Portfolio</span>
            <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-500 transition-colors">
              <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Floating Elements for Visual Interest with proper z-index */}
      <div className="absolute top-32 left-10 w-2 h-2 bg-rose-300 rounded-full opacity-40 z-5" />
      <div className="absolute top-64 right-16 w-3 h-3 bg-blue-300 rounded-full opacity-30 z-5" />
      <div className="absolute bottom-48 left-20 w-2 h-2 bg-amber-300 rounded-full opacity-40 z-5" />
    </section>
  );
}