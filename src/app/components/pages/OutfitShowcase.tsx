import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { Heart, Eye } from "lucide-react";

interface OutfitItem {
  id: number;
  name: string;
  category: string;
  image: string;
  designer: string;
  description: string;
  featured?: boolean;
}

const outfitData: OutfitItem[] = [
  {
    id: 1,
    name: "Princessa Royal",
    category: "princess",
    image: "https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGRyZXNzJTIwcHJpbmNlc3MlMjBiYWxsZ293bnxlbnwxfHx8fDE3NTUxNjUzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    designer: "Cali Bridal",
    description: "Váy cưới công chúa với chất liệu satin cao cấp và thêu ren tinh tế",
    featured: true
  },
  {
    id: 2,
    name: "Mermaid Elegance",
    category: "mermaid",
    image: "https://images.unsplash.com/photo-1606879918203-3a92a8177cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJtYWlkJTIwd2VkZGluZyUyMGRyZXNzJTIwZml0dGVkJTIwZ293bnxlbnwxfHx8fDE3NTUxNjUzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    designer: "Cali Bridal",
    description: "Váy đuôi cá ôm sát tôn dáng với chi tiết ren và sequin lấp lánh"
  },
  {
    id: 3,
    name: "Vintage Romance",
    category: "princess",
    image: "https://images.unsplash.com/photo-1508181238439-4c822474ac4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbGFjZSUyMHdlZGRpbmclMjBkcmVzc3xlbnwxfHx8fDE3NTUxNjUzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    designer: "Cali Bridal",
    description: "Thiết kế vintage với ren Pháp cổ điển và đường cắt thanh lịch"
  },
  {
    id: 4,
    name: "Modern Minimalist",
    category: "mermaid",
    image: "https://images.unsplash.com/photo-1568675399055-777103e1bbf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWRkaW5nJTIwZHJlc3MlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc1NTE2NTM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    designer: "Cali Bridal",
    description: "Phong cách tối giản hiện đại với đường nét sạch sẽ và thanh lịch"
  },
  {
    id: 5,
    name: "Classic Royal",
    category: "princess",
    image: "https://images.unsplash.com/photo-1703812572795-2e2c87db6c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGJhbGwlMjBnb3duJTIwZHJlc3N8ZW58MXx8fHwxNzU1MTY1Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    designer: "Cali Bridal",
    description: "Váy bồng công chúa cổ điển với chất liệu tulle nhiều lớp",
    featured: true
  },
  {
    id: 6,
    name: "Studio Elite",
    category: "mermaid",
    image: "https://images.unsplash.com/photo-1643223424664-f27ae3ea2c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGRyZXNzJTIwc3R1ZGlvfGVufDF8fHx8MTc1NTE2NTM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    designer: "Cali Bridal",
    description: "Thiết kế cao cấp với chi tiết đính kết thủ công tinh xảo"
  },
  {
    id: 7,
    name: "Romantic Flow",
    category: "princess",
    image: "https://images.unsplash.com/photo-1488600779855-8151a2b2e4eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93aW5nJTIwd2VkZGluZyUyMGRyZXNzJTIwcm9tYW50aWN8ZW58MXx8fHwxNzU1MTY1MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    designer: "Cali Bridal",
    description: "Thiết kế lãng mạn với chất liệu chiffon bay bổng"
  },
  {
    id: 8,
    name: "Gentleman's Choice",
    category: "suit",
    image: "https://images.unsplash.com/photo-1604946388121-031fb0dc4def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9vbSUyMHN1aXQlMjB3ZWRkaW5nJTIwZm9ybWFsfGVufDF8fHx8MTc1NTE2NTM3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    designer: "Cali Bridal",
    description: "Vest nam thanh lịch với chất liệu wool cao cấp"
  },
  {
    id: 9,
    name: "Bridal Accessories Set",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1722252799731-48a8403ede61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYWNjZXNzb3JpZXMlMjBqZXdlbHJ5JTIwdmVpbHxlbnwxfHx8fDE3NTUxNjUzODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    designer: "Cali Bridal",
    description: "Bộ phụ kiện cưới hoàn chỉnh bao gồm voan, trang sức và giày"
  }
];

const categories = [
  { id: "all", name: "Tất cả", count: outfitData.length },
  { id: "princess", name: "Váy công chúa", count: outfitData.filter(item => item.category === "princess").length },
  { id: "mermaid", name: "Váy đuôi cá", count: outfitData.filter(item => item.category === "mermaid").length },
  { id: "suit", name: "Trang phục Vest", count: outfitData.filter(item => item.category === "suit").length },
  { id: "accessories", name: "Phụ kiện", count: outfitData.filter(item => item.category === "accessories").length }
];

export function OutfitShowcase() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredOutfits = activeTab === "all" 
    ? outfitData 
    : outfitData.filter(item => item.category === activeTab);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGRyZXNzJTIwcHJpbmNlc3MlMjBiYWxsZ293bnxlbnwxfHx8fDE3NTUxNjUzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Wedding Outfits"
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
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Say Đắm Câu Chuyện Tình Yêu Trong
            </h1>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-amber-200">
              NHỮNG MẪU VÁY CƯỚI ĐẸP
            </h2>
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

      {/* Outfits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredOutfits.map((outfit, index) => (
              <motion.div
                key={outfit.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredItem(outfit.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Featured Badge */}
                {outfit.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-amber-500 text-white">Nổi bật</Badge>
                  </div>
                )}

                {/* Image Container */}
                <div className="aspect-[3/5] overflow-hidden">
                  <ImageWithFallback
                    src={outfit.image}
                    alt={outfit.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay with Actions */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                  hoveredItem === outfit.id ? "opacity-100" : "opacity-0"
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
                    <div className="mb-2">
                      <span className="text-sm opacity-80">{outfit.designer}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{outfit.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{outfit.description}</p>
                    <div className="flex items-center justify-center">
                      <Button size="sm" className="bg-amber-500 text-white hover:bg-amber-600">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Basic Info (Always Visible) */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transition-opacity duration-300 ${
                  hoveredItem === outfit.id ? "opacity-0" : "opacity-100"
                }`}>
                  <h3 className="text-lg font-medium mb-1">{outfit.name}</h3>
                  <p className="text-sm opacity-80">{outfit.designer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Xem thêm mẫu thiết kế
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Đặt lịch thử trang phục</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Hãy đến studio để trải nghiệm trực tiếp những mẫu trang phục tuyệt đẹp này. 
            Đội ngũ stylist chuyên nghiệp sẽ tư vấn giúp bạn chọn được bộ trang phục hoàn hảo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600">
              Đặt lịch thử trang phục
            </Button>
            <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
              Tư vấn qua điện thoại
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}