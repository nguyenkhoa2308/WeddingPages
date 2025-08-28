import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Contact</h2>
          <p className="text-gray-500 max-w-md mx-auto">Get in touch with our team</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-6">Thông Tin Liên Hệ</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Địa chỉ</h4>
                    <p className="text-gray-600">123 Nguyễn Huệ, Q1, TP.HCM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Điện thoại</h4>
                    <p className="text-gray-600">+84 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">hello@weddingstudio.vn</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Clock className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Giờ làm việc</h4>
                    <p className="text-gray-600">T2-T7: 9:00 - 18:00</p>
                    <p className="text-gray-600">CN: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-medium mb-6">Gửi Tin Nhắn</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Họ tên</label>
                    <Input placeholder="Nhập họ tên của bạn" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Số điện thoại</label>
                    <Input placeholder="Nhập số điện thoại" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="Nhập email của bạn" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Dịch vụ quan tâm</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white">
                    <option>Chọn dịch vụ</option>
                    <option>Chụp ảnh cưới</option>
                    <option>Trang điểm</option>
                    <option>Thuê váy cưới</option>
                    <option>Combo trọn gói</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tin nhắn</label>
                  <Textarea 
                    placeholder="Chia sẻ chi tiết về yêu cầu của bạn..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Gửi Tin Nhắn
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}