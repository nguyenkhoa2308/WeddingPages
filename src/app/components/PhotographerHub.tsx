import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, MapPin, Calendar, Camera, Heart, Award, User, Filter, Eye, MessageCircle } from "lucide-react";

export function PhotographerHub() {
  const [selectedPhotographer, setSelectedPhotographer] = useState<string | null>(null);
  const [filterStyle, setFilterStyle] = useState("all");
  const [filterLocation, setFilterLocation] = useState("all");

  const photographers = [
    {
      id: "minh-duc",
      name: "Minh Đức",
      title: "Lead Photographer",
      location: "TP. Hồ Chí Minh",
      experience: "8 năm",
      specialties: ["Classic", "Vintage", "Romance"],
      rating: 4.9,
      reviews: 247,
      price: "+0đ",
      avatar: "https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTUxMTY1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Chuyên gia chụp ảnh cưới với phong cách cổ điển và lãng mạn. Đã thực hiện hơn 300 đám cưới.",
      portfolio: [
        "https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?w=300",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300",
        "https://images.unsplash.com/photo-1594736797933-d0fd25e6fef4?w=300"
      ],
      achievements: ["Photographer of the Year 2023", "Top 10 Wedding Photographers Vietnam"],
      available: true,
      premium: true
    },
    {
      id: "thu-ha",
      name: "Thu Hà", 
      title: "Senior Photographer",
      location: "Hà Nội",
      experience: "6 năm",
      specialties: ["Modern", "Artistic", "Natural"],
      rating: 4.8,
      reviews: 189,
      price: "+1.500.000đ",
      avatar: "https://images.unsplash.com/photo-1617970276665-82eb95d8b9e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwaG90b2dyYXBoZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU1MTYxMDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Nghệ sỹ nhiếp ảnh trẻ với tài năng đặc biệt trong việc chụp ảnh tự nhiên và hiện đại.",
      portfolio: [
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300",
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=300"
      ],
      achievements: ["Young Talent Award 2024", "Best Natural Photography"],
      available: true,
      premium: false
    },
    {
      id: "quang-anh",
      name: "Quang Anh",
      title: "Creative Director",
      location: "Đà Nẵng",
      experience: "10 năm",
      specialties: ["Cinematic", "Dramatic", "Luxury"],
      rating: 5.0,
      reviews: 156,
      price: "+3.000.000đ",
      avatar: "https://images.unsplash.com/photo-1644418792211-5df0394a1fd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBob3RvZ3JhcGhlciUyMG1hbGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU1MTYxMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Đạo diễn sáng tạo với phong cách cinematic độc đáo, chuyên tạo ra những bộ ảnh như phim Hollywood.",
      portfolio: [
        "https://images.unsplash.com/photo-1525258320431-a0142edaacaa?w=300",
        "https://images.unsplash.com/photo-1537907690979-a9a793afbc1d?w=300",
        "https://images.unsplash.com/photo-1545239705-1564e58b8b5f?w=300"
      ],
      achievements: ["International Wedding Photography Award", "Master of Cinematic Style"],
      available: false,
      premium: true
    },
    {
      id: "lan-phuong",
      name: "Lan Phương",
      title: "Lifestyle Photographer", 
      location: "Cần Thơ",
      experience: "4 năm",
      specialties: ["Lifestyle", "Candid", "Outdoor"],
      rating: 4.7,
      reviews: 98,
      price: "+800.000đ",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      bio: "Chuyên gia chụp ảnh lifestyle với khả năng ghi lại những khoảnh khắc tự nhiên nhất.",
      portfolio: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300"
      ],
      achievements: ["Best Outdoor Photography 2023"],
      available: true,
      premium: false
    }
  ];

  const styles = [
    { id: "all", name: "Tất cả", count: photographers.length },
    { id: "classic", name: "Classic", count: 1 },
    { id: "modern", name: "Modern", count: 1 },
    { id: "cinematic", name: "Cinematic", count: 1 },
    { id: "lifestyle", name: "Lifestyle", count: 1 }
  ];

  const locations = [
    { id: "all", name: "Tất cả địa điểm" },
    { id: "hcm", name: "TP. Hồ Chí Minh" },
    { id: "hanoi", name: "Hà Nội" },
    { id: "danang", name: "Đà Nẵng" },
    { id: "cantho", name: "Cần Thơ" }
  ];

  const filteredPhotographers = photographers.filter(photographer => {
    const styleMatch = filterStyle === "all" || photographer.specialties.some(s => 
      s.toLowerCase().includes(filterStyle.toLowerCase())
    );
    const locationMatch = filterLocation === "all" || 
      photographer.location.toLowerCase().includes(filterLocation.toLowerCase());
    
    return styleMatch && locationMatch;
  });

  return (
    <section id="photographers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-gray-200 text-gray-700 bg-gray-50 mb-4">
            <User className="size-3 mr-2" />
            Đội ngũ nhiếp ảnh gia
          </Badge>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Chọn{" "}
            <span className="relative">
              <span className="text-gray-900">nhiếp ảnh gia</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gray-200 -z-10"></div>
            </span>{" "}
            yêu thích
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mỗi nhiếp ảnh gia có phong cách riêng biệt. Hãy chọn người phù hợp nhất với vision của bạn.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setFilterStyle(style.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    filterStyle === style.id
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Filter className="size-3" />
                  <span>{style.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {style.count}
                  </Badge>
                </button>
              ))}
            </div>

            <Select value={filterLocation} onValueChange={setFilterLocation}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Chọn địa điểm" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.id} value={location.id}>
                    {location.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Photographers Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredPhotographers.map((photographer) => (
            <Card 
              key={photographer.id}
              className={`cursor-pointer transition-all border-2 hover:shadow-xl ${
                selectedPhotographer === photographer.id 
                  ? 'border-gray-900 shadow-lg' 
                  : 'border-gray-100 hover:border-gray-200'
              } ${!photographer.available ? 'opacity-75' : ''}`}
              onClick={() => photographer.available && setSelectedPhotographer(photographer.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={photographer.avatar} alt={photographer.name} />
                        <AvatarFallback>{photographer.name[0]}</AvatarFallback>
                      </Avatar>
                      {photographer.premium && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Award className="size-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">{photographer.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{photographer.title}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="size-3" />
                          <span>{photographer.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="size-3" />
                          <span>{photographer.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="size-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-900">{photographer.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">({photographer.reviews} đánh giá)</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Bio */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {photographer.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {photographer.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* Portfolio Preview */}
                <div className="grid grid-cols-3 gap-2">
                  {photographer.portfolio.slice(0, 3).map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={image}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Eye className="size-4 mr-1" />
                      Portfolio
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <MessageCircle className="size-4 mr-1" />
                      Chat
                    </Button>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-900">{photographer.price}</div>
                    {!photographer.available && (
                      <Badge variant="outline" className="text-red-600 border-red-200 mt-1">
                        Không có sẵn
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Photographer Details */}
        {selectedPhotographer && (
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <CheckCircle className="size-5 text-green-600" />
                Nhiếp ảnh gia đã chọn
              </CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const photographer = photographers.find(p => p.id === selectedPhotographer);
                if (!photographer) return null;

                return (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={photographer.avatar} alt={photographer.name} />
                        <AvatarFallback>{photographer.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-gray-900">{photographer.name}</h4>
                        <p className="text-sm text-gray-600">{photographer.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Phụ phí</div>
                        <div className="text-lg text-gray-900">{photographer.price}</div>
                      </div>
                      <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                        Xác nhận chọn
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}