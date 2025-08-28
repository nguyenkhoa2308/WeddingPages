import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Camera } from "lucide-react";

export function Footer() {
  const services = [
    "Chụp ảnh cưới trọn gói",
    "Chụp ảnh engagement",
    "Chụp ảnh gia đình",
    "Album ảnh cưới",
    "Video cưới cinematic",
    "Livestream tiệc cưới"
  ];

  const quickLinks = [
    { name: "Về chúng tôi", href: "#about" },
    { name: "Dịch vụ", href: "#services" },
    { name: "Thư viện", href: "#gallery" },
    { name: "Đánh giá", href: "#testimonials" },
    { name: "Liên hệ", href: "#contact" },
    { name: "Blog", href: "#" }
  ];

  const locations = [
    "TP. Hồ Chí Minh",
    "Hà Nội", 
    "Đà Nẵng",
    "Cần Thơ",
    "Hải Phòng",
    "Nha Trang"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="size-8 text-pink-500 fill-pink-500" />
              <div>
                <h3 className="text-xl text-white">Eternal Moments</h3>
                <p className="text-xs text-gray-400">Wedding Photography Studio</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Chuyên chụp ảnh cưới với hơn 5 năm kinh nghiệm. 
              Chúng tôi tạo ra những khoảnh khắc đẹp vĩnh cửu cho ngày trọng đại của bạn.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-pink-500" />
                <span className="text-sm">+84 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-pink-500" />
                <span className="text-sm">hello@weddingstudio.vn</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-pink-500" />
                <span className="text-sm">123 Nguyễn Huệ, Q1, TP.HCM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-6">Dịch vụ</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg mb-6">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Social */}
          <div>
            <h4 className="text-lg mb-6">Khu vực phục vụ</h4>
            <ul className="space-y-3 mb-8">
              {locations.map((location, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {location}
                </li>
              ))}
            </ul>

            <div>
              <h5 className="text-sm mb-4">Theo dõi chúng tôi</h5>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="size-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="size-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Youtube className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>© 2024 Eternal Moments. All rights reserved.</span>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Camera className="size-4" />
              <span>Made with ❤️ for couples in love</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-20 right-8 hidden lg:block">
        <div className="bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition-colors cursor-pointer">
          <Phone className="size-6" />
        </div>
      </div>
    </footer>
  );
}