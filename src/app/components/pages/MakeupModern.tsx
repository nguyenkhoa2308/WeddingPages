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

const modernMakeup: MakeupItem[] = [
  {
    id: 1,
    name: "Bold & Dramatic",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1733910087506-f634f8a806de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYWtldXAlMjBib2xkJTIwZHJhbWF0aWN8ZW58MXx8fHwxNzU1MTY3NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Makeup hiện đại với màu sắc táo bạo và cá tính mạnh mẽ",
    style: "Bold Contemporary",
    featured: true
  },
  {
    id: 2,
    name: "Contemporary Elegance",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1626963159364-1e963dd74dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBicmlkYWwlMjBtYWtldXB8ZW58MXx8fHwxNzU1MTY3NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Phong cách hiện đại kết hợp với sự thanh lịch",
    style: "Modern Elegance"
  },
  {
    id: 3,
    name: "Artistic Expression",
    category: "artistic",
    image: "https://images.unsplash.com/photo-1606418578216-86cf764af1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMG1ha2V1cCUyMGZhc2hpb258ZW58MXx8fHwxNzU1MTY3NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Makeup nghệ thuật với phong cách hiện đại độc đáo",
    style: "Artistic Modern",
    featured: true
  },
  {
    id: 4,
    name: "Modern Beauty",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1625477476024-8435a4b9e8fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWF1dHklMjBtYWtldXB8ZW58MXx8fHwxNzU1MTY3NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Vẻ đẹp hiện đại với kỹ thuật trang điểm tiên tiến",
    style: "Modern Classic"
  },
  {
    id: 5,
    name: "Professional Artistry",
    category: "process",
    image: "https://images.unsplash.com/photo-1600637070413-0798fafbb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWtldXAlMjBhcnRpc3R8ZW58MXx8fHwxNzU1MTY3NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Quá trình tạo nên những tác phẩm makeup hiện đại",
    style: "Professional"
  },
  {
    id: 6,
    name: "Edgy & Unique",
    category: "artistic",
    image: "https://images.unsplash.com/photo-1576348076752-6085814e5a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGd5JTIwbWFrZXVwJTIwc3R5bGV8ZW58MXx8fHwxNzU1MTY3NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Phong cách makeup táo bạo và độc đáo",
    style: "Edgy Modern"
  }
];

const categories = [
  { id: "all", name: "Tất cả", count: modernMakeup.length },
  { id: "bridal", name: "Cô dâu", count: modernMakeup.filter(item => item.category === "bridal").length },
  { id: "artistic", name: "Nghệ thuật", count: modernMakeup.filter(item => item.category === "artistic").length },
  { id: "process", name: "Quá trình", count: modernMakeup.filter(item => item.category === "process").length }
];

export function MakeupModern() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeTab === "all" 
    ? modernMakeup 
    : modernMakeup.filter(item => item.category === activeTab);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1733910087506-f634f8a806de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYWtldXAlMjBib2xkJTIwZHJhbWF0aWN8ZW58MXx8fHwxNzU1MTY3NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern Makeup"
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
            <Badge className="mb-6 bg-white/10 text-white border-white/20">MODERN MAKEUP</Badge>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Phong Cách Hiện Đại
            </h1>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-purple-200">
              MODERN MAKEUP
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
                    ? "bg-purple-500 text-white shadow-lg"
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
            <h2 className="text-3xl font-light mb-4">Modern Makeup Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Bộ sưu tập makeup hiện đại với màu sắc táo bạo và phong cách cá tính</p>
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
                    <Badge className="bg-purple-500 text-white">Nổi bật</Badge>
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
                      <Button size="sm" className="bg-purple-500 text-white hover:bg-purple-600">
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
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Đặt lịch makeup hiện đại</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Trải nghiệm dịch vụ makeup chuyên nghiệp với phong cách hiện đại và táo bạo. 
            Đội ngũ makeup artist sẽ giúp bạn có vẻ đẹp cá tính và ấn tượng nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-500 text-white hover:bg-purple-600">
              Đặt lịch makeup ngay
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50">
              Tư vấn makeup
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}