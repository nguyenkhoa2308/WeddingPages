import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import reference image
import expertReference from 'figma:asset/9bde16fa2eb4198a8bdb107015e761fa1c588656.png';

export function ExpertTeamSection() {
  const [activeTab, setActiveTab] = useState('makeup');

  const tabs = [
    { id: 'makeup', label: 'Trang điểm' },
    { id: 'photography', label: 'Nhiếp ảnh' },
    { id: 'styling', label: 'Styling' }
  ];

  const experts = {
    makeup: [
      {
        name: "Đình Thị Huyền",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&h=400",
        quote: "Vẻ đẹp chất son, kẻ viền mắt, có đầu sẻ là phần biểu hiện hoàn hảo của cô dâu."
      },
      {
        name: "Nguyễn Thu Thảo", 
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&h=400",
        quote: "Trang điểm không phải là để che chở, mà là để tôn lên những đặc điểm đẹp nhất của cô dâu."
      },
      {
        name: "Nguyễn Thị Hiền",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&h=400", 
        quote: "Sự tự tin không đến từ trang điểm, nhưng trang điểm giúp cô dâu tự tin hơn."
      },
      {
        name: "Mỹ Duyên",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&h=400",
        quote: "Trang điểm là nghệ thuật thần tầm với đẹp từ nhận của cô dâu."
      }
    ],
    photography: [
      {
        name: "Lê Minh Đức",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&h=400",
        quote: "Mỗi khoảnh khắc đều là một câu chuyện, và tôi ở đây để kể những câu chuyện đó."
      },
      {
        name: "Trần Văn Khang",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&h=400",
        quote: "Nhiếp ảnh cưới không chỉ là chụp ảnh, mà là ghi lại cảm xúc của tình yêu."
      },
      {
        name: "Ngô Thành Nam",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&h=400",
        quote: "Ánh sáng và góc nhìn có thể biến một khoảnh khắc thành kỷ niệm vĩnh cửu."
      },
      {
        name: "Hoàng Minh Tâm",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&h=400",
        quote: "Đằng sau mỗi bức ảnh đẹp là sự hiểu biết về cặp đôi và câu chuyện của họ."
      }
    ],
    styling: [
      {
        name: "Phạm Lan Anh",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&h=400",
        quote: "Phong cách không phải là những gì bạn mặc, mà là cách bạn mặc nó."
      },
      {
        name: "Vũ Thu Hương",
        image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&h=400",
        quote: "Một chiếc váy cưới đẹp có thể thay đổi hoàn toàn cảm giác của cô dâu."
      },
      {
        name: "Lý Thanh Hà",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&h=400",
        quote: "Styling là nghệ thuật kết hợp giữa thời trang và cá tính của từng cô dâu."
      },
      {
        name: "Đặng Thùy Linh",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400&h=400",
        quote: "Mỗi cô dâu đều có vẻ đẹp riêng, nhiệm vụ của tôi là tôn lên vẻ đẹp đó."
      }
    ]
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
              <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 block mb-2">Kết nối</span>
              CÙNG CHUYÊN GIA
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Đội ngũ chuyên gia nhiều năm kinh nghiệm, luôn đồng hành cùng bạn tạo nên những khoảnh khắc hoàn hảo
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 border border-white/20 shadow-sm">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm tracking-wide ${
                    activeTab === tab.id
                      ? 'bg-amber-400 text-gray-900 shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Expert Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {experts[activeTab as keyof typeof experts].map((expert, index) => (
            <div
              key={expert.name}
              className="group text-center"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <ImageWithFallback
                      src={expert.image}
                      alt={`${expert.name} - Wedding Expert`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-6 w-3 h-3 bg-amber-300 rounded-full opacity-60" />
                <div className="absolute bottom-8 left-4 w-2 h-2 bg-orange-400 rounded-full opacity-40" />
              </div>

              {/* Expert Info */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-light text-gray-900 group-hover:text-gray-700 transition-colors">
                  {expert.name}
                </h3>
                
                <blockquote className="text-sm lg:text-base text-gray-600 leading-relaxed italic px-2">
                  "{expert.quote}"
                </blockquote>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-3xl transition-all duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="space-y-6">
            <p className="text-gray-600 font-light">
              Sẵn sàng tạo nên những khoảnh khắc đáng nhớ cùng đội ngũ chuyên gia?
            </p>
            <button className="group inline-flex items-center space-x-3 bg-white hover:bg-gray-50 text-gray-900 font-medium px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-white/20">
              <span>Tư vấn với chuyên gia</span>
              <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-32 left-10 w-3 h-3 bg-amber-300 rounded-full opacity-30 animate-pulse" />
        <div className="absolute top-48 right-16 w-2 h-2 bg-orange-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-amber-200 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
}