import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { Heart, Eye, Camera } from "lucide-react";

interface AlbumItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
}

const studioAlbum: AlbumItem[] = [
  {
    id: 1,
    name: "Elegant Romance",
    category: "portrait",
    image: "https://images.unsplash.com/photo-1638763757006-94414ab2ccf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50JTIwY291cGxlfGVufDF8fHx8MTc1NTE2Njk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bộ ảnh studio với ánh sáng tự nhiên và tạo dáng chuyên nghiệp",
    featured: true
  },
  {
    id: 2,
    name: "Classic Portrait",
    category: "portrait",
    image: "https://images.unsplash.com/photo-1613256253718-77ab794998ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWRkaW5nJTIwcG9ydHJhaXQlMjBzdHVkaW8lMjBsaWdodGluZ3xlbnwxfHx8fDE3NTUxNjY5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Phong cách chụp ảnh cổ điển với kỹ thuật ánh sáng studio"
  },
  {
    id: 3,
    name: "Bridal Elegance",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHN0dWRpbyUyMHBvcnRyYWl0JTIwZWxlZ2FudCUyMHdlZGRpbmclMjBkcmVzc3xlbnwxfHx8fDE3NTUxNjY5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Chụp ảnh cô dâu đơn với váy cưới trong studio",
    featured: true
  },
  {
    id: 4,
    name: "Romantic Session",
    category: "couple",
    image: "https://images.unsplash.com/photo-1625355430384-ade6a8cb09d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwc3R1ZGlvJTIwcm9tYW50aWMlMjBwb3NlfGVufDF8fHx8MTc1NTE2Njk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bộ ảnh đôi lãng mạn với tạo dáng tự nhiên trong studio"
  },
  {
    id: 5,
    name: "Professional Shoot",
    category: "portrait",
    image: "https://images.unsplash.com/photo-1693429791869-b78ea686eed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBzdHVkaW8lMjBzZXNzaW9uJTIwYnJpZGUlMjBncm9vbXxlbnwxfHx8fDE3NTUxNjcwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Session chụp ảnh chuyên nghiệp với thiết bị studio cao cấp"
  },
  {
    id: 6,
    name: "Timeless Beauty",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBwb3J0cmFpdCUyMHN0dWRpbyUyMGNsYXNzaWMlMjBlbGVnYW50fGVufDF8fHx8MTc1NTE2Njk5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Chụp ảnh cô dâu với phong cách vượt thời gian và thanh lịch"
  }
];

const categories = [
  { id: "all", name: "Tất cả", count: studioAlbum.length },
  { id: "portrait", name: "Portrait", count: studioAlbum.filter(item => item.category === "portrait").length },
  { id: "bridal", name: "Cô dâu đơn", count: studioAlbum.filter(item => item.category === "bridal").length },
  { id: "couple", name: "Couple", count: studioAlbum.filter(item => item.category === "couple").length }
];

export function AlbumStudio() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeTab === "all" 
    ? studioAlbum 
    : studioAlbum.filter(item => item.category === activeTab);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1638763757006-94414ab2ccf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50JTIwY291cGxlfGVufDF8fHx8MTc1NTE2Njk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Studio Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/10 text-white border-white/20">STUDIO ALBUM</Badge>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Sắc Thái Vẻ Đẹp Trong
            </h1>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-amber-200">
              KHÔNG GIAN STUDIO
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">Xem Bộ Sưu Tập</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">Đặt Lịch Chụp</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <span className="ml-2 text-sm opacity-80">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Album Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Studio Photography Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Bộ sưu tập ảnh cưới studio với ánh sáng chuyên nghiệp và không gian sang trọng</p>
          </div>
          
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-amber-500 text-white">Nổi bật</Badge>
                  </div>
                )}

                {/* Image Container */}
                <div className="aspect-[3/5] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay with Actions */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                        <Eye className="w-4 h-4 mr-2" />
                        Xem chi tiết
                      </Button>
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{item.description}</p>
                    <div className="flex items-center justify-center">
                      <Button size="sm" className="bg-amber-500 text-white hover:bg-amber-600">
                        <Camera className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Basic Info (Always Visible) */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transition-opacity duration-300 ${
                  hoveredItem === item.id ? "opacity-0" : "opacity-100"
                }`}>
                  <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                  <p className="text-sm opacity-80">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Đặt lịch chụp ảnh studio</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Trải nghiệm chụp ảnh cưới chuyên nghiệp trong studio với ánh sáng hoàn hảo và 
            thiết bị hiện đại nhất. Đội ngũ photographer sẽ giúp bạn có những bức ảnh đẹp nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600">
              Đặt lịch chụp ngay
            </Button>
            <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
              Xem bảng giá
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}