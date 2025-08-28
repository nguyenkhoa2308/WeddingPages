import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion"; 
import { Heart, Eye, MapPin } from "lucide-react";

interface AlbumItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  location: string;
  featured?: boolean;
}

const outdoorAlbum: AlbumItem[] = [
  {
    id: 1,
    name: "Nature's Embrace",
    category: "nature",
    image: "https://images.unsplash.com/photo-1625415002553-f23e2d1c05a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5JTIwY291cGxlJTIwbmF0dXJlfGVufDF8fHx8MTc1NTE2NzA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bộ ảnh cưới lãng mạn giữa thiên nhiên hoang sơ",
    location: "Vườn quốc gia",
    featured: true
  },
  {
    id: 2,
    name: "Garden Romance",
    category: "garden",
    image: "https://images.unsplash.com/photo-1743968421393-ad7fa013df0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwZ2FyZGVuJTIwcm9tYW50aWMlMjBvdXRkb29yfGVufDF8fHx8MTc1NTE2NzA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Chụp ảnh trong vườn hoa với không khí thơ mộng",
    location: "Công viên hoa"
  },
  {
    id: 3,
    name: "Ocean Dreams",
    category: "beach",
    image: "https://images.unsplash.com/photo-1669816834455-427acd3b1ca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHdlZGRpbmclMjBwaG90b2dyYXBoeSUyMGJyaWRlJTIwZHJlc3MlMjBvY2VhbnxlbnwxfHx8fDE3NTUxNjcwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bộ ảnh cưới bên bờ biển với làn gió mặn mà",
    location: "Bãi biển Đà Nẵng",
    featured: true
  },
  {
    id: 4,
    name: "Mountain Love",
    category: "mountain",
    image: "https://images.unsplash.com/photo-1655096818134-2f19e2d0bb60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHdlZGRpbmclMjBwaG90b2dyYXBoeSUyMGNvdXBsZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTUxNjcwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Chụp ảnh cưới trên núi với khung cảnh hùng vĩ",
    location: "Đỉnh núi Fansipan"
  },
  {
    id: 5,
    name: "Forest Whispers",
    category: "nature",
    image: "https://images.unsplash.com/photo-1575397282682-019521195f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB3ZWRkaW5nJTIwY291cGxlJTIwYXV0dW1uJTIwcm9tYW50aWN8ZW58MXx8fHwxNzU1MTY3MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bộ ảnh mùa thu lãng mạn trong rừng cây",
    location: "Rừng Ba Vì"
  },
  {
    id: 6,
    name: "Golden Fields",
    category: "field",
    image: "https://images.unsplash.com/photo-1475714622877-641e013c6096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWVsZCUyMHdlZGRpbmclMjBwaG90b2dyYXBoeSUyMGdvbGRlbiUyMGhvdXIlMjBjb3VwbGV8ZW58MXx8fHwxNzU1MTY3MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Chụp ảnh golden hour giữa cánh đồng lúa",
    location: "Cánh đồng Mười"
  }
];

const categories = [
  { id: "all", name: "Tất cả", count: outdoorAlbum.length },
  { id: "nature", name: "Thiên nhiên", count: outdoorAlbum.filter(item => item.category === "nature").length },
  { id: "beach", name: "Biển", count: outdoorAlbum.filter(item => item.category === "beach").length },
  { id: "garden", name: "Vườn", count: outdoorAlbum.filter(item => item.category === "garden").length },
  { id: "mountain", name: "Núi", count: outdoorAlbum.filter(item => item.category === "mountain").length },
  { id: "field", name: "Cánh đồng", count: outdoorAlbum.filter(item => item.category === "field").length }
];

export function AlbumOutdoor() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeTab === "all" 
    ? outdoorAlbum 
    : outdoorAlbum.filter(item => item.category === activeTab);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1625415002553-f23e2d1c05a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5JTIwY291cGxlJTIwbmF0dXJlfGVufDF8fHx8MTc1NTE2NzA2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Outdoor Wedding Photography"
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
            <Badge className="mb-6 bg-white/10 text-white border-white/20">OUTDOOR ALBUM</Badge>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Tình Yêu Giữa Vòng Tay
            </h1>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-green-200">
              THIÊN NHIÊN HOANG SƠ
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
                    ? "bg-green-500 text-white shadow-lg"
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
            <h2 className="text-3xl font-light mb-4">Outdoor Photography Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Bộ sưu tập ảnh cưới ngoại cảnh với khung cảnh thiên nhiên tuyệt đẹp</p>
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
                    <Badge className="bg-green-500 text-white">Nổi bật</Badge>
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
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm opacity-80">{item.location}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{item.description}</p>
                    <div className="flex items-center justify-center">
                      <Button size="sm" className="bg-green-500 text-white hover:bg-green-600">
                        <MapPin className="w-4 h-4 mr-2" />
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
                    <MapPin className="w-3 h-3 mr-1" />
                    {item.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Đặt lịch chụp ảnh ngoại cảnh</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Khám phá những địa điểm tuyệt đẹp cùng đội ngũ photographer chuyên nghiệp. 
            Chúng tôi sẽ đưa bạn đến những khung cảnh đẹp nhất để có những bức ảnh cưới hoàn hảo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
              Đặt lịch chụp ngay
            </Button>
            <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
              Xem địa điểm
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}