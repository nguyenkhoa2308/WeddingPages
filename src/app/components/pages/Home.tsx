import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  ArrowRight,
  Camera,
  Users,
  Award,
  Clock,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  MessageSquareQuote,
  CalendarCheck,
  ImageIcon,
  PackageCheck,
} from "lucide-react";
import { useState, useEffect } from "react";
import { CollectionsSection } from "../CollectionsSection";
import { EternalMomentsGrid } from "../EternalMomentsGrid";
import { ExpertTeamSection } from "../ExpertTeamSection";

// --- Dữ liệu mẫu cho các section mới ---

// Quy trình làm việc
const processSteps = [
  {
    icon: <MessageSquareQuote className="w-8 h-8 text-stone-700" />,
    title: "Bước 1: Tư Vấn & Lên Ý Tưởng",
    description:
      "Chúng tôi lắng nghe câu chuyện của bạn và cùng bạn xây dựng concept chụp ảnh độc đáo, phù hợp nhất.",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-stone-700" />,
    title: "Bước 2: Ký Hợp Đồng & Chọn Ngày",
    description:
      "Sau khi thống nhất, chúng ta sẽ ký hợp đồng và lựa chọn ngày chụp ảnh cưới lý tưởng.",
  },
  {
    icon: <ImageIcon className="w-8 h-8 text-stone-700" />,
    title: "Bước 3: Thực Hiện Buổi Chụp",
    description:
      "Ekip chuyên nghiệp sẽ cùng bạn tạo nên những khoảnh khắc tự nhiên và cảm xúc nhất trong ngày trọng đại.",
  },
  {
    icon: <PackageCheck className="w-8 h-8 text-stone-700" />,
    title: "Bước 4: Hậu Kỳ & Bàn Giao",
    description:
      "Những bức ảnh đẹp nhất sẽ được chỉnh sửa tỉ mỉ và bàn giao sản phẩm hoàn chỉnh đúng hẹn.",
  },
];

// Đánh giá của khách hàng
const testimonials = [
  {
    quote:
      "Ekip rất chuyên nghiệp và có tâm! Mình rất hài lòng với bộ ảnh cưới, mỗi khoảnh khắc đều được bắt lại rất tự nhiên và đầy cảm xúc. Cảm ơn studio rất nhiều!",
    name: "Minh & Anh",
    location: "Hà Nội",
  },
  {
    quote:
      "Dịch vụ tuyệt vời từ khâu tư vấn đến lúc nhận sản phẩm. Các bạn nhiếp ảnh gia rất vui tính, giúp chúng mình không bị ngại trước ống kính. Ảnh siêu đẹp!",
    name: "Hoàng & Linh",
    location: "TP. Hồ Chí Minh",
  },
  {
    quote:
      "Mình đã giới thiệu Mimosa Wedding cho rất nhiều bạn bè. Chất lượng ảnh vượt xa mong đợi, concept độc đáo và không bị rập khuôn. Highly recommended!",
    name: "Khánh & Vy",
    location: "Đà Nẵng",
  },
];

// Hero slideshow images - using high-quality Unsplash images
const heroImage1 =
  "https://mimosawedding.vn/wp-content/uploads/2024/07/concept-xe-hoa-9.jpg";
const heroImage2 =
  "https://mimosawedding.vn/wp-content/uploads/2024/05/chup-anh-cuoi-biet-thu-hoa-hong-1.jpg";
const heroImage3 =
  "https://mimosawedding.vn/wp-content/uploads/2025/02/album-biet-thu-studio-vu-huyen-88.jpg";

export function Home() {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slideshow images
  const heroImages = [
    {
      src: heroImage1,
      alt: "Khoảnh khắc vĩnh cửu - Vietnamese wedding couple in elegant white dress",
      title: "Khoảnh Khắc Vĩnh Cửu",
      subtitle: "Ghi lại những cảm xúc chân thật của ngày trọng đại",
    },
    {
      src: heroImage2,
      alt: "Vẻ đẹp tự nhiên - Asian bride in traditional white wedding attire",
      title: "Vẻ Đẹp Tự Nhiên",
      subtitle: "Tôn vinh nét đẹp tinh khôi và thanh lịch",
    },
    {
      src: heroImage3,
      alt: "Nghệ thuật nhiếp ảnh - Professional wedding photography styling",
      title: "Nghệ Thuật Nhiếp Ảnh",
      subtitle: "Chuyên nghiệp với phong cách hiện đại",
    },
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  // Reusable Section Header Component
  const SectionHeader = ({ subtitle, title, description }) => (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <p className="text-base text-orange-500 font-semibold tracking-wider mb-2">
        {subtitle}
      </p>
      <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
        {title}
      </h2>
      <p className="text-lg text-gray-600 font-light">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-stone-800">
      {/* Hero Slideshow Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        aria-label="Wedding photography hero slideshow"
      >
        {/* Slideshow Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Content Overlay - Improved */}
        <div className="relative z-10 text-left text-white max-w-6xl px-8 w-full">
          <div className="max-w-xl">
            <div className="mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="text-sm md:text-base font-medium tracking-wider uppercase opacity-90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                ✨ {heroImages[currentSlide].subtitle}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-12">
              <span className="block animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                {heroImages[currentSlide].title}
              </span>
              <span className="block font-serif italic text-4xl md:text-6xl mt-3 text-white/80 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
                Wedding Photography
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold text-base px-10 py-6 rounded-full group shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Xem Portfolio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black font-semibold px-10 py-6 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Đặt Lịch Tư Vấn
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 z-20 border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 z-20 border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-white w-10 h-3"
                  : "bg-white/50 hover:bg-white/75 w-3 h-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Video Play Button */}
        <div className="absolute bottom-8 right-8 z-20">
          <button
            className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 border border-white/20 hover:scale-110"
            aria-label="Play introduction video"
          >
            <Play className="w-8 h-8 ml-1" />
          </button>
        </div>
      </section>

      {/* Collections Section */}
      <CollectionsSection />

      {/* Eternal Moments Grid */}
      <EternalMomentsGrid />
      {/* 
      <div className="pt-168 xl:pt-128"></div>
      <div className="pt-168 xl:pt-128"></div> */}

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="DỊCH VỤ TẬN TÂM"
            title="Tại sao chọn Mimosa Wedding?"
            description="Chúng tôi cam kết mang đến trải nghiệm chụp ảnh cưới đẳng cấp với sự chuyên nghiệp, sáng tạo và chất lượng hàng đầu."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8 text-orange-500" />,
                title: "Thiết bị chuyên nghiệp",
                description:
                  "Hệ thống máy ảnh, ống kính và ánh sáng hiện đại, đảm bảo chất lượng hình ảnh sắc nét và nghệ thuật.",
              },
              {
                icon: <Users className="w-8 h-8 text-orange-500" />,
                title: "Đội ngũ giàu kinh nghiệm",
                description:
                  "Nhiếp ảnh gia và ekip có kinh nghiệm dày dặn, luôn sáng tạo và nắm bắt những khoảnh khắc đẹp nhất.",
              },
              {
                icon: <Award className="w-8 h-8 text-orange-500" />,
                title: "Chất lượng được công nhận",
                description:
                  "Tự hào được hàng ngàn cặp đôi tin tưởng và nhận được nhiều giải thưởng nhiếp ảnh danh giá.",
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-500" />,
                title: "Hỗ trợ tận tình 24/7",
                description:
                  "Luôn sẵn sàng lắng nghe, tư vấn và hỗ trợ khách hàng trong suốt quá trình chuẩn bị ngày cưới.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-stone-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Image Stacks - Asian White Wedding Dresses */}
      <section
        className="py-24 md:py-32 bg-white overflow-hidden"
        aria-label="Asian wedding dress collection showcase"
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="BST VÁY CƯỚI"
            title="Vẻ Đẹp Tinh Khôi"
            description="Khám phá bộ sưu tập váy cưới trắng được thiết kế tinh xảo, tôn vinh nét đẹp thanh lịch và duyên dáng của cô dâu châu Á."
          />
        </div>
        <div className="relative">
          <div className="flex animate-scroll-left mb-8 gap-6">
            {[...Array(2)]
              .flatMap(() => [
                "https://images.unsplash.com/photo-1653873376993-a5ba3cda9e1a?q=80&w=400",
                "https://images.unsplash.com/photo-1700580446340-1bd00129863d?q=80&w=400",
                "https://images.unsplash.com/photo-1653614704415-a3f533f60da8?q=80&w=400",
                "https://images.unsplash.com/photo-1693683964354-b635a7b77ee2?q=80&w=400",
                "https://images.unsplash.com/photo-1597653335582-11a7a22a0e69?q=80&w=400",
              ])
              .map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-72 h-96 group"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Asian Bride Collection 1 - ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
          </div>
          <div className="flex animate-scroll-right gap-6">
            {[...Array(2)]
              .flatMap(() => [
                "https://images.unsplash.com/photo-1595391513297-7a5b3a8f6f58?q=80&w=400",
                "https://images.unsplash.com/photo-1591604466107-1802b54ba469?q=80&w=400",
                "https://images.unsplash.com/photo-1616548774225-4654e7d6a5a4?q=80&w=400",
                "https://images.unsplash.com/photo-1583272421590-b1745771765a?q=80&w=400",
                "https://images.unsplash.com/photo-1542838132-350bf66b72a4?q=80&w=400",
              ])
              .map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-72 h-96 group"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Asian Bride Collection 2 - ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Our Process --- */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="QUY TRÌNH LÀM VIỆC"
            title="Đơn Giản & Minh Bạch"
            description="Chúng tôi xây dựng quy trình 4 bước chuyên nghiệp để đảm bảo mọi khâu được chuẩn bị chu đáo, mang lại sự an tâm tuyệt đối cho bạn."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl text-center shadow-sm"
              >
                <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Photography Showcase Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="PORTFOLIO"
            title="Những Album Nổi Bật"
            description="Mỗi bộ ảnh là một câu chuyện tình yêu độc đáo. Cùng chiêm ngưỡng những khoảnh khắc mà chúng tôi đã có cơ hội ghi lại."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                src: "https://images.unsplash.com/photo-1753674692103-b8be181839da?w=600&h=800",
                alt: "Vietnamese wedding couple",
                subtitle: "Concept nhẹ nhàng sang trọng",
                title: "Tình Yêu Màu Nắng",
              },
              {
                src: "https://images.unsplash.com/photo-1653873376993-a5ba3cda9e1a?w=600&h=800",
                alt: "Asian bride wedding dress",
                subtitle: "Concept tự nhiên lãng mạn",
                title: "Tình Ca Bên Hồ",
              },
              {
                src: "https://images.unsplash.com/photo-1559936253-002c8860a307?w=600&h=800",
                alt: "Wedding rings ceremony",
                subtitle: "Concept Hàn Quốc lãng mạn",
                title: "Thanh Xuân Bên Em",
              },
              {
                src: "https://images.unsplash.com/photo-1700580446340-1bd00129863d?w=600&h=800",
                alt: "Wedding couple outdoor",
                subtitle: "Concept tự nhiên Hàn Quốc",
                title: "Nắng Ấm Bên Nhau",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-orange-500 font-semibold">
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl font-medium text-gray-900 mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-stone-800 text-white hover:bg-stone-900 font-semibold text-base px-10 py-6 rounded-full group shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Xem Tất Cả Album
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <ExpertTeamSection />

      {/* --- NEW SECTION: Testimonials --- */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="KHÁCH HÀNG NÓI GÌ"
            title="Những Lời Yêu Thương"
            description="Niềm hạnh phúc của khách hàng là động lực lớn nhất của chúng tôi. Hãy xem họ nói gì về trải nghiệm của mình."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="flex-grow">
                  <Star className="text-yellow-400 fill-current w-5 h-5 inline-block" />
                  <Star className="text-yellow-400 fill-current w-5 h-5 inline-block" />
                  <Star className="text-yellow-400 fill-current w-5 h-5 inline-block" />
                  <Star className="text-yellow-400 fill-current w-5 h-5 inline-block" />
                  <Star className="text-yellow-400 fill-current w-5 h-5 inline-block" />
                  <p className="text-gray-600 italic mt-4 mb-6 font-light">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Final CTA --- */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="rounded-3xl bg-cover bg-center p-12 md:p-24 text-center text-white flex flex-col items-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage1})`,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Sẵn Sàng Ghi Lại Câu Chuyện Của Bạn?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-10 font-light text-white/90">
              Hãy để chúng tôi đồng hành cùng bạn trong ngày trọng đại nhất.
              Liên hệ ngay để nhận tư vấn chi tiết và những ưu đãi đặc biệt dành
              riêng cho bạn.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold text-base px-10 py-6 rounded-full group shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Liên Hệ Ngay
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
