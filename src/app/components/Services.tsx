import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Heart, Crown, Sparkles, Camera, Video, Image, Gift } from "lucide-react";

export function Services() {
  const packages = [
    {
      id: "basic",
      name: "Gói Cơ Bản",
      price: "8.000.000",
      originalPrice: "10.000.000",
      duration: "4 giờ",
      icon: Camera,
      popular: false,
      description: "Hoàn hảo cho lễ cưới đơn giản và ấm cúng",
      features: [
        "Chụp ảnh lễ cưới (4 giờ)",
        "200+ ảnh đã chỉnh sửa",
        "Album ảnh 20x25cm (30 trang)",
        "USB chứa toàn bộ ảnh gốc",
        "1 nhiếp ảnh gia chính",
        "Tư vấn concept và trang phục",
        "Giao ảnh trong 2 tuần"
      ],
      color: "border-gray-200"
    },
    {
      id: "standard",
      name: "Gói Tiêu Chuẩn", 
      price: "15.000.000",
      originalPrice: "18.000.000",
      duration: "6 giờ",
      icon: Heart,
      popular: true,
      description: "Lựa chọn phổ biến nhất cho đám cưới hoàn hảo",
      features: [
        "Chụp ảnh lễ + tiệc cưới (6 giờ)",
        "400+ ảnh đã chỉnh sửa",
        "Album ảnh 25x30cm cao cấp (50 trang)",
        "USB + Google Drive backup",
        "2 nhiếp ảnh gia chính",
        "Video highlight 3-5 phút",
        "Makeup touch-up miễn phí",
        "Trang trí backdrop cơ bản",
        "Giao ảnh trong 10 ngày"
      ],
      color: "border-pink-300 ring-2 ring-pink-100"
    },
    {
      id: "premium",
      name: "Gói Cao Cấp",
      price: "25.000.000", 
      originalPrice: "30.000.000",
      duration: "8 giờ",
      icon: Crown,
      popular: false,
      description: "Trải nghiệm sang trọng với dịch vụ toàn diện",
      features: [
        "Chụp ảnh toàn bộ sự kiện (8 giờ)",
        "600+ ảnh đã chỉnh sửa",
        "Album ảnh 30x40cm luxury (80 trang)",
        "Video phim cưới 10-15 phút",
        "3 nhiếp ảnh gia + 1 quay phim",
        "Flycam (nếu điều kiện cho phép)",
        "Makeup artist toàn thời gian",
        "Trang trí backdrop cao cấp",
        "Photo booth với props",
        "Live streaming",
        "Giao ảnh trong 7 ngày"
      ],
      color: "border-yellow-300"
    }
  ];

  const additionalServices = [
    {
      name: "Chụp ảnh cưới ngoại cảnh",
      price: "Từ 5.000.000",
      icon: Image,
      description: "Bộ ảnh cưới tại các địa điểm đẹp"
    },
    {
      name: "Quay phim cưới cinematic",
      price: "Từ 8.000.000", 
      icon: Video,
      description: "Video phim cưới phong cách điện ảnh"
    },
    {
      name: "Album ảnh handmade",
      price: "Từ 2.000.000",
      icon: Gift,
      description: "Album làm thủ công với chất liệu cao cấp"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-700">Gói dịch vụ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Chọn gói dịch vụ phù hợp
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Chúng tôi cung cấp nhiều gói dịch vụ linh hoạt, từ cơ bản đến cao cấp, 
            phù hợp với mọi nhu cầu và ngân sách của bạn.
          </p>
        </div>

        {/* Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <Card key={pkg.id} className={`relative hover:shadow-xl transition-shadow ${pkg.color}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-pink-500 text-white">
                      <Crown className="w-3 h-3 mr-1" />
                      Phổ biến nhất
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                    
                    {/* Pricing */}
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-gray-800">{pkg.price}</span>
                      <span className="text-gray-600">đ</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="line-through">{pkg.originalPrice}đ</span>
                      <span className="ml-2 text-pink-500">Tiết kiệm {((parseInt(pkg.originalPrice.replace(/\./g, '')) - parseInt(pkg.price.replace(/\./g, ''))) / 1000).toFixed(0)}K</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      Thời gian: {pkg.duration}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-pink-500 hover:bg-pink-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Chọn gói này
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">
              Dịch vụ bổ sung
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Các dịch vụ thêm để hoàn thiện trải nghiệm đám cưới của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-pink-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-pink-500" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <div className="text-lg font-semibold text-pink-500">{service.price}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Cần tư vấn để chọn gói phù hợp?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Đội ngũ chuyên viên của chúng tôi sẵn sàng tư vấn miễn phí để bạn có được 
            gói dịch vụ phù hợp nhất với nhu cầu và ngân sách.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8">
              Tư vấn miễn phí
            </Button>
            <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">
              Gọi ngay: 0123 456 789
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}