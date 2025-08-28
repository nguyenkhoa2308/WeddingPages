import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Outfits() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "Tất Cả", count: 120 },
    { id: "princess", name: "Váy Công Chúa", count: 45 },
    { id: "mermaid", name: "Váy Đuôi Cá", count: 38 },
    { id: "aline", name: "A-Line", count: 25 },
    { id: "sheath", name: "Sheath", count: 12 }
  ];

  const outfits = [
    {
      id: 1,
      name: "Royal Princess",
      category: "princess",
      price: "15,000,000",
      image: "https://images.unsplash.com/photo-1681714552617-fe3f4cf4be47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmluY2VzcyUyMHdlZGRpbmclMjBkcmVzcyUyMGJhbGxnb3dufGVufDF8fHx8MTc1NTE2MjAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true
    },
    {
      id: 2,
      name: "Elegant Mermaid",
      category: "mermaid",
      price: "18,000,000",
      image: "https://images.unsplash.com/photo-1508891957101-d10a38618180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJtYWlkJTIwd2VkZGluZyUyMGRyZXNzJTIwZmlzaHRhaWx8ZW58MXx8fHwxNzU1MTYyMDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      id: 3,
      name: "Classic A-Line",
      category: "aline",
      price: "12,000,000",
      image: "https://images.unsplash.com/photo-1591079027855-bafd5e245e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGluZSUyMHdlZGRpbmclMjBkcmVzcyUyMHNpbXBsZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzU1MTYyMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      id: 4,
      name: "Modern Sheath",
      category: "sheath",
      price: "10,000,000",
      image: "https://images.unsplash.com/photo-1568675399055-777103e1bbf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGVhdGglMjB3ZWRkaW5nJTIwZHJlc3MlMjBtb2Rlcm4lMjBtaW5pbWFsfGVufDF8fHx8MTc1NTE2MjAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      id: 5,
      name: "Vintage Romance",
      category: "princess",
      price: "16,000,000",
      image: "https://images.unsplash.com/photo-1681176092314-aff3e74a41bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwd2VkZGluZyUyMGRyZXNzJTIwY2xhc3NpY3xlbnwxfHx8fDE3NTUxNjIwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      id: 6,
      name: "Boho Dreams",
      category: "aline",
      price: "13,000,000",
      image: "https://images.unsplash.com/photo-1560612268-80be18b2ad9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hvJTIwd2VkZGluZyUyMGRyZXNzJTIwYm9oZW1pYW58ZW58MXx8fHwxNzU1MTYyMDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true
    }
  ];

  const filteredOutfits = activeFilter === "all" 
    ? outfits 
    : outfits.filter(outfit => outfit.category === activeFilter);

  return (
    <section id="outfits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Trang Phục</h2>
          <p className="text-gray-500 max-w-md mx-auto">Exclusive bridal dress collection</p>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {filter.name}
                <span className={`ml-2 text-xs ${
                  activeFilter === filter.id ? "text-gray-400" : "text-gray-400"
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Outfits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredOutfits.map((outfit) => (
            <div
              key={outfit.id}
              className="group relative overflow-hidden bg-white hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              {outfit.popular && (
                <Badge className="absolute top-4 left-4 z-10 bg-black text-white">
                  Popular
                </Badge>
              )}
              
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={outfit.image}
                  alt={outfit.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white text-black hover:bg-gray-100">
                    View Details
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-medium text-lg mb-1">{outfit.name}</h3>
                <p className="text-gray-500 text-sm mb-2">
                  {filters.find(f => f.id === outfit.category)?.name}
                </p>
                <div className="text-lg font-light">{outfit.price} VND</div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="px-8">
            Load More Dresses
          </Button>
        </div>
      </div>
    </section>
  );
}