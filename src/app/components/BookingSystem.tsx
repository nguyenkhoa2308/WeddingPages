import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar } from "./ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Calendar as CalendarIcon, Clock, MapPin, Users, Camera, Star, CheckCircle, ArrowRight } from "lucide-react";

export function BookingSystem() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const packages = [
    {
      id: "basic",
      name: "Gói Essential",
      price: "12.900.000",
      duration: "6 giờ",
      photos: "400+",
      features: ["Chụp ảnh lễ cưới", "400+ ảnh chỉnh sửa", "Album 20x30cm", "USB lưu trữ"],
      popular: false
    },
    {
      id: "premium",
      name: "Gói Premium",
      price: "19.900.000",
      duration: "8 giờ", 
      photos: "600+",
      features: ["Chụp ảnh lễ + tiệc cưới", "600+ ảnh chỉnh sửa", "Album 30x40cm", "Video highlight", "Makeup artist"],
      popular: true
    },
    {
      id: "luxury",
      name: "Gói Luxury",
      price: "29.900.000",
      duration: "12 giờ",
      photos: "1000+",
      features: ["Chụp ảnh toàn bộ sự kiện", "1000+ ảnh chỉnh sửa", "Album cao cấp", "Video phim cưới", "Flycam", "Livestream"],
      popular: false
    }
  ];

  const timeSlots = [
    { time: "08:00", available: true, price: "0" },
    { time: "10:00", available: true, price: "+500k" },
    { time: "14:00", available: false, price: "+1M" },
    { time: "16:00", available: true, price: "+1.5M" },
    { time: "18:00", available: true, price: "+2M" }
  ];

  const locations = [
    { id: "hcm", name: "TP. Hồ Chí Minh", venues: 25 },
    { id: "hanoi", name: "Hà Nội", venues: 18 },
    { id: "danang", name: "Đà Nẵng", venues: 12 },
    { id: "cantho", name: "Cần Thơ", venues: 8 }
  ];

  const addOns = [
    { id: "makeup", name: "Makeup Artist", price: "2.000.000", popular: true },
    { id: "hair", name: "Hair Stylist", price: "1.500.000", popular: false },
    { id: "flowers", name: "Hoa cưới setup", price: "3.000.000", popular: true },
    { id: "transport", name: "Xe trang trí", price: "2.500.000", popular: false }
  ];

  const steps = [
    { id: 1, name: "Chọn gói", icon: Camera },
    { id: 2, name: "Chọn ngày", icon: CalendarIcon },
    { id: 3, name: "Chọn thời gian", icon: Clock },
    { id: 4, name: "Xác nhận", icon: CheckCircle }
  ];

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-gray-200 text-gray-700 bg-white mb-4">
            <CalendarIcon className="size-3 mr-2" />
            Đặt lịch chụp ảnh
          </Badge>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Đặt lịch{" "}
            <span className="relative">
              <span className="text-gray-900">thông minh</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gray-200 -z-10"></div>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hệ thống đặt lịch tự động với AI, giúp bạn chọn thời gian và gói dịch vụ tối ưu nhất.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center gap-3 ${index !== steps.length - 1 ? 'flex-1' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isCompleted 
                        ? 'bg-green-100 text-green-600' 
                        : isActive 
                        ? 'bg-gray-900 text-white' 
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="size-5" />
                      ) : (
                        <IconComponent className="size-5" />
                      )}
                    </div>
                    <span className={`hidden sm:block ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                      {step.name}
                    </span>
                  </div>
                  {index !== steps.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-4 ${
                      isCompleted ? 'bg-green-200' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={`step${currentStep}`} className="space-y-8">
            {/* Step 1: Package Selection */}
            <TabsContent value="step1" className="space-y-6">
              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Camera className="size-5" />
                    Chọn gói dịch vụ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                      <Card 
                        key={pkg.id}
                        className={`cursor-pointer transition-all border-2 ${
                          selectedPackage === pkg.id 
                            ? 'border-gray-900 shadow-lg' 
                            : 'border-gray-100 hover:border-gray-200'
                        } ${pkg.popular ? 'ring-2 ring-blue-100' : ''}`}
                        onClick={() => setSelectedPackage(pkg.id)}
                      >
                        {pkg.popular && (
                          <div className="bg-blue-600 text-white text-center py-2 text-sm">
                            🌟 Phổ biến nhất
                          </div>
                        )}
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-xl text-gray-900 mb-2">{pkg.name}</h3>
                              <div className="text-2xl text-gray-900">{pkg.price}đ</div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-100">
                              <div className="text-center">
                                <Clock className="size-4 text-gray-600 mx-auto mb-1" />
                                <div className="text-sm text-gray-900">{pkg.duration}</div>
                              </div>
                              <div className="text-center">
                                <Camera className="size-4 text-gray-600 mx-auto mb-1" />
                                <div className="text-sm text-gray-900">{pkg.photos}</div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              {pkg.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <CheckCircle className="size-4 text-green-500" />
                                  <span className="text-sm text-gray-600">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="flex justify-end mt-8">
                    <Button 
                      onClick={() => setCurrentStep(2)}
                      disabled={!selectedPackage}
                      className="bg-gray-900 hover:bg-gray-800 text-white"
                    >
                      Tiếp theo
                      <ArrowRight className="size-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Step 2: Date Selection */}
            <TabsContent value="step2" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <CalendarIcon className="size-5" />
                      Chọn ngày chụp
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border border-gray-200"
                      disabled={(date) => date < new Date()}
                    />
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <MapPin className="size-5" />
                      Chọn khu vực
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {locations.map((location) => (
                      <div 
                        key={location.id}
                        className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:border-gray-200 cursor-pointer"
                      >
                        <div>
                          <h4 className="text-gray-900">{location.name}</h4>
                          <p className="text-sm text-gray-600">{location.venues} địa điểm có sẵn</p>
                        </div>
                        <ArrowRight className="size-4 text-gray-400" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  className="border-gray-300 text-gray-700"
                >
                  Quay lại
                </Button>
                <Button 
                  onClick={() => setCurrentStep(3)}
                  disabled={!selectedDate}
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                >
                  Tiếp theo
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* Step 3: Time Selection */}
            <TabsContent value="step3" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <Clock className="size-5" />
                      Chọn khung giờ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {timeSlots.map((slot) => (
                        <div
                          key={slot.time}
                          className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
                            !slot.available 
                              ? 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-50'
                              : selectedTime === slot.time
                              ? 'border-gray-900 bg-gray-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => slot.available && setSelectedTime(slot.time)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-lg text-gray-900">{slot.time}</div>
                            {!slot.available && (
                              <Badge variant="outline" className="text-red-600 border-red-200">
                                Đã đặt
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">{slot.price}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <Star className="size-5" />
                      Dịch vụ bổ sung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {addOns.map((addon) => (
                        <div key={addon.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                          <div className="flex items-center gap-3">
                            <input 
                              type="checkbox" 
                              className="rounded border-gray-300"
                            />
                            <div>
                              <h4 className="text-gray-900">{addon.name}</h4>
                              {addon.popular && (
                                <Badge variant="outline" className="text-xs mt-1">Phổ biến</Badge>
                              )}
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">+{addon.price}đ</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  variant="outline"
                  onClick={() => setCurrentStep(2)}
                  className="border-gray-300 text-gray-700"
                >
                  Quay lại
                </Button>
                <Button 
                  onClick={() => setCurrentStep(4)}
                  disabled={!selectedTime}
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                >
                  Tiếp theo
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* Step 4: Confirmation */}
            <TabsContent value="step4" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Thông tin liên hệ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="bride">Tên cô dâu</Label>
                        <Input id="bride" placeholder="Nhập tên cô dâu" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="groom">Tên chú rể</Label>
                        <Input id="groom" placeholder="Nhập tên chú rể" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại</Label>
                      <Input id="phone" type="tel" placeholder="0912 345 678" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Tóm tắt đặt lịch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gói dịch vụ:</span>
                        <span className="text-gray-900">Gói Premium</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ngày chụp:</span>
                        <span className="text-gray-900">25/01/2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Thời gian:</span>
                        <span className="text-gray-900">10:00 - 18:00</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-gray-900">Tổng cộng:</span>
                        <span className="text-xl text-gray-900">20.400.000đ</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  variant="outline"
                  onClick={() => setCurrentStep(3)}
                  className="border-gray-300 text-gray-700"
                >
                  Quay lại
                </Button>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
                  Xác nhận đặt lịch
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}