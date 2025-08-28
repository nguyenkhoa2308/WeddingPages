import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Camera, Heart, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "Tất cả", count: 24 },
    { id: "ceremony", name: "Lễ cưới", count: 8 },
    { id: "couple", name: "Cặp đôi", count: 10 },
    { id: "details", name: "Chi tiết", count: 6 }
  ];

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1667507036709-bbe9afef20c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBwb3J0Zm9saW8lMjBlbGVnYW50fGVufDF8fHx8MTc1NTE2MDU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "couple",
      title: "Khoảnh khắc lãng mạn",
      location: "Đà Lạt"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1660325848053-f067c31f22ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHdlZGRpbmclMjBkcmVzcyUyMGRldGFpbHN8ZW58MXx8fHwxNzU1MTYxNTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "details",
      title: "Chi tiết trang phục cô dâu",
      location: "Sài Gòn"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1546418608-3cf6027ffeac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwa2lzcyUyMHJvbWFudGljfGVufDF8fHx8MTc1NTE2MTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "couple",
      title: "Nụ hôn ngọt ngào",
      location: "Hội An"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1611619539625-5bbd6237684e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBjbG9zZSUyMHVwJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTUxNjE1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "details",
      title: "Nhẫn cưới tinh tế",
      location: "Hà Nội"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1562616293-1a11a7816903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYm91cXVldCUyMGZsb3dlcnMlMjB3aGl0ZSUyMHBpbmt8ZW58MXx8fHwxNzU1MTYxNTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "details",
      title: "Hoa cưới tươi thắm",
      location: "Vũng Tàu"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1612883650183-05b5e67246c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBvdXRkb29yJTIwcm9tYW50aWN8ZW58MXx8fHwxNzU1MTYxNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "ceremony",
      title: "Lễ cưới ngoài trời",
      location: "Phú Quốc"
    }
  ];

  const filteredImages = filter === "all" ? images : images.filter(img => img.category === filter);

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 rounded-full px-4 py-2 mb-4">
            <Camera className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-700">Thư viện ảnh</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Portfolio của chúng tôi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Khám phá những khoảnh khắc đẹp nhất mà chúng tôi đã ghi lại cho các cặp đôi. 
            Mỗi bức ảnh đều kể một câu chuyện tình yêu độc đáo.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-pink-100">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  filter === category.id
                    ? "bg-pink-500 text-white shadow-sm"
                    : "text-gray-600 hover:text-pink-500"
                }`}
              >
                {category.name}
                <span className={`ml-2 text-xs ${
                  filter === category.id ? "text-pink-100" : "text-gray-400"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <Eye className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
                
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.location}</p>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  {categories.find(cat => cat.id === image.category)?.name}
                </span>
              </div>

              {/* Love Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Heart className="w-4 h-4 text-pink-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8">
            Xem thêm ảnh
          </Button>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black">
          {selectedImage && (
            <>
              <div className="relative">
                {(() => {
                  const currentImage = images.find(img => img.id === selectedImage);
                  if (!currentImage) return null;
                  
                  return (
                    <>
                      <ImageWithFallback
                        src={currentImage.url}
                        alt={currentImage.title}
                        className="w-full max-h-[80vh] object-contain"
                      />
                      
                      {/* Close Button */}
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      
                      {/* Navigation */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                      
                      {/* Image Info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white p-6">
                        <h3 className="text-xl font-semibold mb-2">{currentImage.title}</h3>
                        <p className="text-gray-300">{currentImage.location}</p>
                      </div>
                    </>
                  );
                })()}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}