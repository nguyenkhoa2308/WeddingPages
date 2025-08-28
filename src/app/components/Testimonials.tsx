import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote, Heart } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Minh Anh & Hoàng Long",
      location: "Hà Nội",
      rating: 5,
      comment: "Eternal Moments đã tạo ra những bức ảnh tuyệt vời nhất cho ngày cưới của chúng tôi. Từ lúc tư vấn đến giao ảnh, đội ngũ luôn nhiệt tình và chuyên nghiệp. Chúng tôi đặc biệt yêu thích phong cách chụp tự nhiên và cảm xúc của họ.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "Tháng 12, 2024"
    },
    {
      id: 2,
      name: "Thu Hương & Đức Minh",
      location: "TP. Hồ Chí Minh",
      rating: 5,
      comment: "Chúng tôi rất hài lòng với chất lượng ảnh và dịch vụ của studio. Nhiếp ảnh gia rất kinh nghiệm, biết cách tạo ra những khoảnh khắc đẹp tự nhiên. Album ảnh cuối cùng vượt xa mong đợi của chúng tôi!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      date: "Tháng 11, 2024"
    },
    {
      id: 3,
      name: "Thanh Mai & Quang Huy",
      location: "Đà Nẵng",
      rating: 5,
      comment: "Từ khâu chuẩn bị đến ngày chụp, mọi thứ đều được sắp xếp chu đáo. Đội ngũ rất thân thiện và hiểu được style mà chúng tôi muốn. Những bức ảnh họ chụp thật sự như những tác phẩm nghệ thuật.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "Tháng 10, 2024"
    },
    {
      id: 4,
      name: "Lan Anh & Việt Hoàng",
      location: "Hải Phòng",
      rating: 5,
      comment: "Chúng tôi đã chọn đúng! Eternal Moments không chỉ chụp ảnh mà còn tạo ra những kỷ niệm đẹp. Họ làm việc rất nhanh nhẹn, không làm phiền khách mời nhưng vẫn ghi lại được tất cả những khoảnh khắc quan trọng.",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      date: "Tháng 9, 2024"
    },
    {
      id: 5,
      name: "Phương Thảo & Tuấn Anh",
      location: "Cần Thơ",
      rating: 5,
      comment: "Dịch vụ tuyệt vời từ A đến Z! Makeup artist rất khéo tay, nhiếp ảnh gia có tài, và quan trọng nhất là họ hiểu được tâm lý của cô dâu chú rể. Ảnh cưới của chúng tôi đẹp hơn cả mong đợi.",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
      date: "Tháng 8, 2024"
    },
    {
      id: 6,
      name: "Ngọc Lan & Minh Đức",
      location: "Hà Nội",
      rating: 5,
      comment: "Cảm ơn Eternal Moments đã cho chúng tôi những bức ảnh cưới trong mơ! Giá cả hợp lý, chất lượng tuyệt vời, và đặc biệt là sự tận tâm của cả đội ngũ. Chúng tôi sẽ giới thiệu cho bạn bè!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "Tháng 7, 2024"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-4">
            <Heart className="size-4" />
            <span>Khách hàng nói gì</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-800 mb-4">
            Những câu chuyện{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              hạnh phúc
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hơn 500 cặp đôi đã tin tưởng chọn chúng tôi để lưu giữ khoảnh khắc đẹp nhất. 
            Hãy nghe những chia sẻ chân thành từ họ.
          </p>
        </div>

        {/* Rating summary */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl text-gray-800">4.9/5</div>
              <div className="text-sm text-gray-600">từ 500+ đánh giá</div>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="size-8 text-pink-300" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <Avatar className="size-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-pink-100 text-pink-600">
                      {testimonial.name.split(' ')[0][0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-gray-800 mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-xs text-gray-400">{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white/50 rounded-2xl p-8 border border-pink-100">
            <h3 className="text-2xl text-gray-800 mb-4">
              Bạn muốn chia sẻ câu chuyện của mình?
            </h3>
            <p className="text-gray-600 mb-6">
              Hãy để chúng tôi tạo ra những khoảnh khắc đáng nhớ cho ngày cưới của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-lg transition-all">
                Đặt lịch tư vấn
              </button>
              <button className="border border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-lg transition-all">
                Xem thêm đánh giá
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}