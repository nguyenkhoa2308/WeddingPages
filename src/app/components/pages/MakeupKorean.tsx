import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { Heart, Eye, Palette } from "lucide-react";

interface MakeupItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  style: string;
  featured?: boolean;
}

const koreanMakeup: MakeupItem[] = [
  {
    id: 1,
    name: "K-Beauty Natural",
    category: "natural",
    image: "https://images.unsplash.com/photo-1593260853607-d0e0f639bdab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiZWF1dHklMjBtYWtldXB8ZW58MXx8fHwxNzU1MTY3NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Phong cách K-Beauty tự nhiên với làn da trong suốt",
    style: "Glass Skin",
    featured: true
  },
  {
    id: 2,
    name: "Asian Bridal Elegance",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1656562105231-7d34cce4f123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJyaWRlJTIwbWFrZXVwJTIwbmF0dXJhbHxlbnwxfHx8fDE3NTUxNjc1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Makeup cô dâu phong cách Hàn Quốc thanh lịch",
    style: "Korean Bridal"
  },
  {
    id: 3,
    name: "Dewy Skin Glow",
    category: "natural",
    image: "https://images.unsplash.com/photo-1630084775816-7abb7383ded5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXd5JTIwc2tpbiUyMG1ha2V1cHxlbnwxfHx8fDE3NTUxNjc1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Làn da ẩm mượt và rạng rỡ theo phong cách Hàn",
    style: "Dewy Natural",
    featured: true
  },
  {
    id: 4,
    name: "Korean Style Beauty",
    category: "trendy",
    image: "https://images.unsplash.com/photo-1635353692890-80a6b95add47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBzdHlsZSUyMGJlYXV0eXxlbnwxfHx8fDE3NTUxNjc1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Xu hướng makeup Hàn Quốc hot nhất hiện nay",
    style: "K-Trend"
  },
  {
    id: 5,
    name: "Soft Natural Look",
    category: "natural",
    image: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwbmF0dXJhbCUyMG1ha2V1cHxlbnwxfHx8fDE3NTUxNjc1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Makeup tự nhiên nhẹ nhàng theo tinh thần K-Beauty",
    style: "Soft Natural"
  },
  {
    id: 6,
    name: "Korean Fresh Look",
    category: "trendy",
    image: "https://images.unsplash.com/photo-1656562105231-7d34cce4f123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYnJpZGFsJTIwbWFrZXVwJTIwYXNpYW58ZW58MXx8fHwxNzU1MTY3NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Vẻ đẹp tươi trẻ và trong trẻo kiểu Hàn",
    style: "Fresh Korean"
  }
];

const categories = [
  { id: "all", name: "Tất cả", count: koreanMakeup.length },
  { id: "natural", name: "Tự nhiên", count: koreanMakeup.filter(item => item.category === "natural").length },
  { id: "bridal", name: "Cô dâu", count: koreanMakeup.filter(item => item.category === "bridal").length },
  { id: "trendy", name: "Xu hướng", count: koreanMakeup.filter(item => item.category === "trendy").length }
];

export function MakeupKorean() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeTab === "all" 
    ? koreanMakeup 
    : koreanMakeup.filter(item => item.category === activeTab);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1593260853607-d0e0f639bdab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiZWF1dHklMjBtYWtldXB8ZW58MXx8fHwxNzU1MTY3NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Korean Makeup"
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
            <Badge className="mb-6 bg-white/10 text-white border-white/20">KOREAN MAKEUP</Badge>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Vẻ Đẹp Hàn Quốc
            </h1>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-rose-200">
              K-BEAUTY STYLE
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">Xem Bộ Sưu Tập</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">Đặt Lịch Makeup</Button>
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
                    ? "bg-rose-500 text-white shadow-lg"
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

      {/* Makeup Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Korean Makeup Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Bộ sưu tập makeup Hàn Quốc với làn da trong suốt và vẻ đẹp tự nhiên</p>
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
                    <Badge className="bg-rose-500 text-white">Nổi bật</Badge>
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
                    <div className="mb-2 flex items-center">
                      <Palette className="w-4 h-4 mr-1" />
                      <span className="text-sm opacity-80">{item.style}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{item.description}</p>
                    <div className="flex items-center justify-center">
                      <Button size="sm" className="bg-rose-500 text-white hover:bg-rose-600">
                        <Palette className="w-4 h-4 mr-2" />
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
                  <p className="text-sm opacity-80 flex items-center">
                    <Palette className="w-3 h-3 mr-1" />
                    {item.style}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Đặt lịch makeup kiểu Hàn</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Trải nghiệm dịch vụ makeup chuyên nghiệp với phong cách K-Beauty. 
            Đội ngũ makeup artist sẽ giúp bạn có làn da trong suốt và vẻ đẹp tự nhiên như idol Hàn Quốc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-rose-500 text-white hover:bg-rose-600">
              Đặt lịch makeup ngay
            </Button>
            <Button size="lg" variant="outline" className="border-rose-500 text-rose-600 hover:bg-rose-50">
              Tư vấn K-Beauty
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}