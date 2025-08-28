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

const classicMakeup: MakeupItem[] = [
  {
    id: 1,
    name: "Timeless Elegance",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1634990107998-2c56c5afa573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBjbGFzc2ljJTIwZWxlZ2FudCUyMHdlZGRpbmd8ZW58MXx8fHwxNzU1MTY3MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Makeup cổ điển thanh lịch với tông màu tự nhiên",
    style: "Classic Natural",
    featured: true
  },
  {
    id: 2,
    name: "Professional Artistry",
    category: "process",
    image: "https://images.unsplash.com/photo-1648671095175-70c9137088a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbWFrZXVwJTIwYXJ0aXN0JTIwYnJpZGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTUxNjcyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Quá trình trang điểm chuyên nghiệp bởi makeup artist",
    style: "Behind the Scenes"
  },
  {
    id: 3,
    name: "Classic Transformation",
    category: "process",
    image: "https://images.unsplash.com/photo-1648671095421-61976aabbd3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdldHRpbmclMjBtYWtldXAlMjBkb25lJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NTE2NzI3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Quá trình biến hóa với makeup cổ điển tinh tế",
    style: "Transformation",
    featured: true
  },
  {
    id: 4,
    name: "Natural Beauty",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1481068164146-e8beb686f4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYnJpZGFsJTIwbWFrZXVwJTIwbmF0dXJhbCUyMGVsZWdhbnR8ZW58MXx8fHwxNzU1MTY3Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Makeup tự nhiên tôn lên vẻ đẹp bẩm sinh",
    style: "Natural Glow"
  },
  {
    id: 5,
    name: "Artist at Work",
    category: "artist",
    image: "https://images.unsplash.com/photo-1626963159364-1e963dd74dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBicmlkYWwlMjBtYWtldXAlMjBhcnRpc3QlMjB3b3JrfGVufDF8fHx8MTc1NTE2NzI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Makeup artist chuyên nghiệp đang làm việc",
    style: "Professional"
  },
  {
    id: 6,
    name: "Elegant Perfection",
    category: "bridal",
    image: "https://images.unsplash.com/photo-1722340321190-1c7b7384e89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMG1ha2V1cCUyMGJyaWRlJTIwYmVhdXR5fGVufDF8fHx8MTc1NTE2NzI5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Makeup hoàn hảo cho cô dâu hiện đại",
    style: "Modern Classic"
  }
];

const categories = [
  { id: "all", name: "Tất cả", count: classicMakeup.length },
  { id: "bridal", name: "Cô dâu", count: classicMakeup.filter(item => item.category === "bridal").length },
  { id: "process", name: "Quá trình", count: classicMakeup.filter(item => item.category === "process").length },
  { id: "artist", name: "Artist", count: classicMakeup.filter(item => item.category === "artist").length }
];

export function MakeupClassic() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeTab === "all" 
    ? classicMakeup 
    : classicMakeup.filter(item => item.category === activeTab);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1634990107998-2c56c5afa573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBjbGFzc2ljJTIwZWxlZ2FudCUyMHdlZGRpbmd8ZW58MXx8fHwxNzU1MTY3MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Classic Bridal Makeup"
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
            <Badge className="mb-6 bg-white/10 text-white border-white/20">CLASSIC MAKEUP</Badge>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Vẻ Đẹp Vượt Thời Gian
            </h1>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-pink-200">
              CLASSIC MAKEUP
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
                    ? "bg-pink-500 text-white shadow-lg"
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
            <h2 className="text-3xl font-light mb-4">Classic Makeup Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Bộ sưu tập makeup cổ điển với phong cách thanh lịch và vượt thời gian</p>
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
                    <Badge className="bg-pink-500 text-white">Nổi bật</Badge>
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
                      <Button size="sm" className="bg-pink-500 text-white hover:bg-pink-600">
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
      <section className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Đặt lịch makeup cổ điển</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Trải nghiệm dịch vụ makeup chuyên nghiệp với phong cách cổ điển thanh lịch. 
            Đội ngũ makeup artist giàu kinh nghiệm sẽ giúp bạn có vẻ đẹp hoàn hảo nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-500 text-white hover:bg-pink-600">
              Đặt lịch makeup ngay
            </Button>
            <Button size="lg" variant="outline" className="border-pink-500 text-pink-600 hover:bg-pink-50">
              Tư vấn makeup
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}