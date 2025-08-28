import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Slider } from "./ui/slider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingBag, Palette, Ruler, Star, Heart, Eye, Zap, Filter, ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";

export function OutfitCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("bride");
  const [selectedOutfit, setSelectedOutfit] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("M");
  const [viewMode, setViewMode] = useState("grid");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "bride", name: "Cô dâu", icon: "👰", count: 45 },
    { id: "groom", name: "Chú rể", icon: "🤵", count: 28 },
    { id: "bridesmaid", name: "Phù dâu", icon: "👯", count: 32 },
    { id: "accessories", name: "Phụ kiện", icon: "💍", count: 67 }
  ];

  const outfits = [
    {
      id: "wedding-dress-1",
      name: "Váy cưới Aurora",
      category: "bride",
      brand: "Vera Wang",
      price: "25.000.000",
      originalPrice: "35.000.000",
      rating: 4.9,
      reviews: 156,
      description: "Váy cưới trắng tinh khôi với thiết kế hiện đại, tôn lên vẻ đẹp tự nhiên của cô dâu.",
      images: [
        "https://images.unsplash.com/photo-1561286804-b862db74fa37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdlZGRpbmclMjBkcmVzcyUyMGVsZWdhbnR8ZW58MXx8fHwxNzU1MTEzOTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1721176394537-7a80cd0dac62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHdlZGRpbmclMjBkcmVzcyUyMG1vZGVybnxlbnwxfHx8fDE3NTUxNjExMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      colors: [
        { name: "white", label: "Trắng tinh", hex: "#FFFFFF" },
        { name: "ivory", label: "Ngà", hex: "#FFF8E7" },
        { name: "cream", label: "Kem", hex: "#F5F5DC" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      features: ["Chất liệu lụa cao cấp", "Thêu tay thủ công", "Có thể điều chỉnh", "Bao gồm voan"],
      style: "Modern",
      material: "Silk",
      popular: true,
      new: true
    },
    {
      id: "wedding-dress-2", 
      name: "Váy cưới Bella",
      category: "bride",
      brand: "Pronovias",
      price: "18.000.000",
      originalPrice: "25.000.000",
      rating: 4.8,
      reviews: 89,
      description: "Váy cưới vintage với chi tiết ren tinh tế, hoàn hảo cho phong cách cổ điển.",
      images: [
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600",
        "https://images.unsplash.com/photo-1525258320431-a0142edaacaa?w=600"
      ],
      colors: [
        { name: "white", label: "Trắng tinh", hex: "#FFFFFF" },
        { name: "champagne", label: "Champagne", hex: "#F7E7CE" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      features: ["Ren Pháp cao cấp", "Cúp ngực có đệm", "Đuôi váy dài 3m", "Kèm găng tay"],
      style: "Vintage",
      material: "Lace",
      popular: false,
      new: false
    },
    {
      id: "groom-suit-1",
      name: "Suit Royal Black",
      category: "groom",
      brand: "Hugo Boss",
      price: "15.000.000",
      originalPrice: "20.000.000",
      rating: 4.9,
      reviews: 203,
      description: "Bộ suit đen thanh lịch, cắt may hoàn hảo theo phong cách hiện đại.",
      images: [
        "https://images.unsplash.com/photo-1582897291228-f7676bfcd52c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9vbSUyMHN1aXQlMjBibGFjayUyMGVsZWdhbnR8ZW58MXx8fHwxNzU1MTYxMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      colors: [
        { name: "black", label: "Đen", hex: "#000000" },
        { name: "navy", label: "Xanh navy", hex: "#1F2937" },
        { name: "charcoal", label: "Xám than", hex: "#374151" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      features: ["Vải wool Ý", "Cắt may slim fit", "Kèm cà vạt", "Có thể điều chỉnh"],
      style: "Modern",
      material: "Wool",
      popular: true,
      new: false
    }
  ];

  const filteredOutfits = outfits.filter(outfit => outfit.category === selectedCategory);

  const CustomizationPanel = ({ outfit }: { outfit: any }) => (
    <div className="space-y-6">
      {/* Color Selection */}
      <div>
        <h4 className="text-gray-900 mb-3 flex items-center gap-2">
          <Palette className="size-4" />
          Chọn màu sắc
        </h4>
        <div className="flex gap-3">
          {outfit.colors.map((color: any) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                selectedColor === color.name ? 'border-gray-900 scale-110' : 'border-gray-300'
              }`}
              style={{ backgroundColor: color.hex }}
            >
              {selectedColor === color.name && (
                <Check className="size-4 text-gray-900 absolute inset-0 m-auto" />
              )}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                {color.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <h4 className="text-gray-900 mb-3 flex items-center gap-2">
          <Ruler className="size-4" />
          Chọn size
        </h4>
        <div className="flex flex-wrap gap-2">
          {outfit.sizes.map((size: string) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 border rounded-lg transition-all ${
                selectedSize === size
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h4 className="text-gray-900 mb-3">Đặc điểm nổi bật</h4>
        <div className="space-y-2">
          {outfit.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="size-4 text-green-500" />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="outfits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-gray-200 text-gray-700 bg-white mb-4">
            <ShoppingBag className="size-3 mr-2" />
            Thư viện trang phục
          </Badge>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Bộ sưu tập{" "}
            <span className="relative">
              <span className="text-gray-900">trang phục</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gray-200 -z-10"></div>
            </span>{" "}
            cao cấp
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khám phá bộ sưu tập trang phục cưới với hàng ngàn mẫu thiết kế từ các thương hiệu hàng đầu thế giới.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-white border border-gray-200">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex flex-col gap-1 py-3 data-[state=active]:bg-gray-900 data-[state=active]:text-white"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-xs">{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mt-8 mb-8">
            <div className="flex gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Thương hiệu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="vera-wang">Vera Wang</SelectItem>
                  <SelectItem value="pronovias">Pronovias</SelectItem>
                  <SelectItem value="hugo-boss">Hugo Boss</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Phong cách" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="vintage">Vintage</SelectItem>
                  <SelectItem value="classic">Classic</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Giá" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="under-20">Dưới 20M</SelectItem>
                  <SelectItem value="20-30">20M - 30M</SelectItem>
                  <SelectItem value="over-30">Trên 30M</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                Grid
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                List
              </Button>
            </div>
          </div>

          {/* Outfit Grid */}
          <TabsContent value={selectedCategory} className="space-y-8">
            <div className={`grid gap-8 ${
              viewMode === "grid" 
                ? "lg:grid-cols-2 xl:grid-cols-3" 
                : "lg:grid-cols-1"
            }`}>
              {filteredOutfits.map((outfit) => (
                <Card 
                  key={outfit.id}
                  className="overflow-hidden border-gray-200 bg-white hover:shadow-lg transition-all group"
                >
                  <div className="relative">
                    {/* Image */}
                    <div className={`${viewMode === "grid" ? "aspect-[3/4]" : "aspect-[4/3] lg:aspect-[2/1]"} overflow-hidden`}>
                      <ImageWithFallback
                        src={outfit.images[0]}
                        alt={outfit.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {outfit.new && (
                        <Badge className="bg-blue-600 text-white">NEW</Badge>
                      )}
                      {outfit.popular && (
                        <Badge className="bg-yellow-500 text-white">
                          <Star className="size-3 mr-1" />
                          Phổ biến
                        </Badge>
                      )}
                    </div>

                    {/* Quick actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Heart className="size-4" />
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                            <Eye className="size-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>{outfit.name}</DialogTitle>
                          </DialogHeader>
                          <div className="grid lg:grid-cols-2 gap-8">
                            {/* Image Gallery */}
                            <div className="space-y-4">
                              <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                                <ImageWithFallback
                                  src={outfit.images[currentImageIndex]}
                                  alt={outfit.name}
                                  className="w-full h-full object-cover"
                                />
                                {outfit.images.length > 1 && (
                                  <>
                                    <Button
                                      size="icon"
                                      variant="secondary"
                                      className="absolute left-2 top-1/2 transform -translate-y-1/2"
                                      onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                                    >
                                      <ChevronLeft className="size-4" />
                                    </Button>
                                    <Button
                                      size="icon"
                                      variant="secondary"
                                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                      onClick={() => setCurrentImageIndex(Math.min(outfit.images.length - 1, currentImageIndex + 1))}
                                    >
                                      <ChevronRight className="size-4" />
                                    </Button>
                                  </>
                                )}
                              </div>
                              
                              {outfit.images.length > 1 && (
                                <div className="flex gap-2">
                                  {outfit.images.map((image, index) => (
                                    <button
                                      key={index}
                                      onClick={() => setCurrentImageIndex(index)}
                                      className={`w-16 h-20 rounded border-2 overflow-hidden ${
                                        currentImageIndex === index ? 'border-gray-900' : 'border-gray-200'
                                      }`}
                                    >
                                      <ImageWithFallback
                                        src={image}
                                        alt={`${outfit.name} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Customization */}
                            <div className="space-y-6">
                              <div>
                                <h3 className="text-2xl text-gray-900 mb-2">{outfit.name}</h3>
                                <p className="text-gray-600 mb-4">{outfit.description}</p>
                                <div className="flex items-center gap-4 mb-4">
                                  <div className="flex items-center gap-1">
                                    <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-sm">{outfit.rating}</span>
                                    <span className="text-sm text-gray-500">({outfit.reviews} đánh giá)</span>
                                  </div>
                                  <Badge variant="outline">{outfit.brand}</Badge>
                                </div>
                                <div className="flex items-center gap-2 mb-6">
                                  <span className="text-2xl text-gray-900">{outfit.price}đ</span>
                                  <span className="text-lg text-gray-400 line-through">{outfit.originalPrice}đ</span>
                                  <Badge className="bg-green-100 text-green-700">
                                    Tiết kiệm {Math.round((1 - parseInt(outfit.price.replace(/\./g, '')) / parseInt(outfit.originalPrice.replace(/\./g, ''))) * 100)}%
                                  </Badge>
                                </div>
                              </div>

                              <CustomizationPanel outfit={outfit} />

                              <div className="flex gap-3 pt-6 border-t border-gray-100">
                                <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white">
                                  Thêm vào đặt lịch
                                </Button>
                                <Button variant="outline" className="border-gray-300 text-gray-700">
                                  <Heart className="size-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg text-gray-900 mb-1">{outfit.name}</h3>
                          <p className="text-sm text-gray-600">{outfit.brand}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="size-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm">{outfit.rating}</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 line-clamp-2">{outfit.description}</p>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg text-gray-900">{outfit.price}đ</span>
                          <span className="text-sm text-gray-400 line-through ml-2">{outfit.originalPrice}đ</span>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">{outfit.style}</Badge>
                          <Badge variant="outline" className="text-xs">{outfit.material}</Badge>
                        </div>
                      </div>

                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                        <Zap className="size-4 mr-2" />
                        Xem chi tiết
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to action */}
        <Card className="border-gray-200 bg-white mt-16">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl text-gray-900 mb-4">Không tìm thấy trang phục ưng ý?</h3>
            <p className="text-gray-600 mb-6">
              Chúng tôi có thể thiết kế riêng hoặc tìm kiếm theo yêu cầu đặc biệt của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Thiết kế riêng
                <ArrowRight className="size-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700">
                Yêu cầu tìm kiếm
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}