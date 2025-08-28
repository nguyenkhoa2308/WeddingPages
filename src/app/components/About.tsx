import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Heart, Camera, Award, Star, Users, Clock } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-700">Về chúng tôi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Câu chuyện của Eternal Moments
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Với tâm huyết và đam mê nghệ thuật, chúng tôi đã tạo nên những khoảnh khắc 
            đẹp nhất cho hàng ngàn cặp đôi trong suốt 8 năm qua.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif text-gray-800">
                Hành trình đam mê và tận tâm
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Eternal Moments ra đời từ niềm đam mê với nghệ thuật nhiếp ảnh cưới và mong muốn 
                lưu giữ những khoảnh khắc tuyệt đẹp nhất trong cuộc đời. Chúng tôi hiểu rằng 
                đám cưới không chỉ là một sự kiện, mà là khởi đầu của một câu chuyện tình yêu 
                trọn đời.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Với đội ngũ nhiếp ảnh gia tài năng và trang thiết bị hiện đại, chúng tôi 
                cam kết mang đến cho bạn những bức ảnh tinh tế, tự nhiên và đầy cảm xúc,
                đặc biệt chuyên về chụp ảnh cưới cho cô dâu Việt Nam với ánh sáng tự nhiên.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white border-pink-100">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-pink-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">2000+</div>
                  <div className="text-sm text-gray-600">Cặp đôi tin tưởng</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-pink-100">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-pink-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">8+</div>
                  <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-pink-100">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-pink-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">4.9/5</div>
                  <div className="text-sm text-gray-600">Đánh giá trung bình</div>
                </CardContent>
              </Card>

              <Card className="bg-white border-pink-100">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-pink-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Giải thưởng</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right - Images */}
          <div className="relative">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745750003557-b666d0ea0104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwYnJpZGUlMjB3ZWRkaW5nJTIwd2hpdGUlMjBkcmVzcyUyMGJyaWdodCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTMyNDIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cô dâu Việt Nam trong váy cưới trắng"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              
              {/* Floating card */}
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-lg border-pink-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Eternal Moments</div>
                      <div className="text-sm text-gray-600">Chụp ảnh cưới Việt Nam</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 right-8 w-16 h-16 bg-yellow-200 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-8">
            Sứ mệnh của chúng tôi
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-3">Tình yêu chân thật</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ghi lại những cảm xúc tự nhiên và chân thật nhất của cặp đôi 
                trong ngày trọng đại.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-pink-500" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-3">Nghệ thuật tinh tế</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mỗi bức ảnh đều được chăm chút kỹ lưỡng với góc nhìn nghệ thuật 
                và kỹ thuật chuyên nghiệp.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-pink-500" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-3">Kỷ niệm vĩnh cửu</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tạo ra những kỷ niệm đẹp có thể được lưu giữ và trân trọng 
                suốt cuộc đời.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}