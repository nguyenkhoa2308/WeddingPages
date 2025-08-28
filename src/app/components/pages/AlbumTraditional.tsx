import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { Heart, Eye, Crown } from "lucide-react";

interface AlbumItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  style: string;
  featured?: boolean;
}

const traditionalAlbum: AlbumItem[] = [
  {
    id: 1,
    name: "Vietnamese Heritage",
    category: "ao-dai",
    image: "https://images.unsplash.com/photo-1525272149490-82288cb110a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHZpZXRuYW1lc2UlMjB3ZWRkaW5nJTIwY291cGxlJTIwYW8lMjBkYWl8ZW58MXx8fHwxNzU1MTY3MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bộ ảnh cưới truyền thống với áo dài Việt Nam",
    style: "Áo dài cổ điển",
    featured: true
  },
  {
    id: 2,
    name: "Royal Red Ceremony",
    category: "ceremony",
    image: "https://images.unsplash.com/photo-1648386530481-c495eb536d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdlZGRpbmclMjB0cmFkaXRpb25hbCUyMHJlZCUyMGRyZXNzJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU1MTY3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Lễ cưới truyền thống với váy đỏ hoàng gia",
    style: "Váy cưới đỏ"
  },
  {
    id: 3,
    name: "Traditional Bridal",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1481360602767-8160440340ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwYnJpZGUlMjB0cmFkaXRpb25hbCUyMHdlZGRpbmclMjBkcmVzc3xlbnwxfHx8fDE3NTUxNjcxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Chụp ảnh cô dâu với trang phục truyền thống Việt Nam",
    style: "Áo dài cô dâu",
    featured: true
  },
  {
    id: 4,
    name: "Cultural Ceremony",
    category: "ceremony",
    image: "https://images.unsplash.com/photo-1720238281650-9adab07ea511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGFzaWFuJTIwd2VkZGluZyUyMGNlcmVtb255JTIwY291cGxlfGVufDF8fHx8MTc1NTE2NzE4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Nghi lễ cưới truyền thống với phong cách Á Đông",
    style: "Lễ phục cưới"
  },
  {
    id: 5,
    name: "Formal Traditional",
    category: "formal",
    image: "https://images.unsplash.com/photo-1578897173331-5a2a737c11ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwdHJhZGl0aW9uYWwlMjBjb3VwbGUlMjBmb3JtYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTUxNjcxODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Chụp ảnh portrait trang trọng với trang phục truyền thống",
    style: "Formal portrait"
  },
  {
    id: 6,
    name: "Classic Red Gown",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1648386530481-c495eb536d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGJyaWRlJTIwcmVkJTIwdHJhZGl0aW9uYWwlMjBnb3duJTIwd2VkZGluZ3xlbnwxfHx8fDE3NTUxNjcxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Váy cưới đỏ truyền thống với thiết kế tinh xảo",
    style: "Váy đỏ cổ điển"
  }
];

const categories = [
  { id: "all", name: "Tất cả", count: traditionalAlbum.length },
  { id: "ao-dai", name: "Áo dài", count: traditionalAlbum.filter(item => item.category === "ao-dai").length },
  { id: "ceremony", name: "Lễ cưới", count: traditionalAlbum.filter(item => item.category === "ceremony").length },
  { id: "bridal", name: "Cô dâu", count: traditionalAlbum.filter(item => item.category === "bridal").length },
  { id: "formal", name: "Trang trọng", count: traditionalAlbum.filter(item => item.category === "formal").length }
];

export function AlbumTraditional() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeTab === "all" 
    ? traditionalAlbum 
    : traditionalAlbum.filter(item => item.category === activeTab);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1525272149490-82288cb110a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHZpZXRuYW1lc2UlMjB3ZWRkaW5nJTIwY291cGxlJTIwYW8lMjBkYWl8ZW58MXx8fHwxNzU1MTY3MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Traditional Wedding Photography"
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
            <Badge className="mb-6 bg-white/10 text-white border-white/20">TRADITIONAL ALBUM</Badge>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Gìn Giữ Nét Đẹp Của
            </h1>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-red-200">
              VĂN HÓA TRUYỀN THỐNG
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
                    ? "bg-red-500 text-white shadow-lg"
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
            <h2 className="text-3xl font-light mb-4">Traditional Photography Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Bộ sưu tập ảnh cưới truyền thống gìn giữ nét đẹp văn hóa Việt Nam</p>
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
                    <Badge className="bg-red-500 text-white">Nổi bật</Badge>
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
                      <Crown className="w-4 h-4 mr-1" />
                      <span className="text-sm opacity-80">{item.style}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{item.description}</p>
                    <div className="flex items-center justify-center">
                      <Button size="sm" className="bg-red-500 text-white hover:bg-red-600">
                        <Crown className="w-4 h-4 mr-2" />
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
                    <Crown className="w-3 h-3 mr-1" />
                    {item.style}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Đặt lịch chụp ảnh truyền thống</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Gìn giữ và tôn vinh nét đẹp văn hóa truyền thống qua từng bức ảnh cưới. 
            Chúng tôi chuyên chụp ảnh cưới với trang phục áo dài và lễ phục truyền thống.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 text-white hover:bg-red-600">
              Đặt lịch chụp ngay
            </Button>
            <Button size="lg" variant="outline" className="border-red-500 text-red-600 hover:bg-red-50">
              Tư vấn trang phục
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}