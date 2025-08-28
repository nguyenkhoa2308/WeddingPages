import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "10 Lời Khuyên Lên Kế Hoạch Cưới",
      excerpt: "Hướng dẫn chi tiết từ A-Z",
      image: "https://images.unsplash.com/photo-1596352536485-85b79a7ea8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGxhbm5pbmclMjB0aXBzJTIwYmxvZ3xlbnwxfHx8fDE3NTUxNjIxODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Planning",
      date: "15 Thg 8",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Trang Trí Cưới Xu Hướng 2024",
      excerpt: "Những ý tưởng trang trí hot nhất",
      image: "https://images.unsplash.com/photo-1684244160135-7fb3adfdd23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMGlkZWFzfGVufDF8fHx8MTc1NTE2MjE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Decoration",
      date: "12 Thg 8",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Xu Hướng Chụp Ảnh Cưới Mới",
      excerpt: "Phong cách chụp ảnh đang hot",
      image: "https://images.unsplash.com/photo-1667507036709-bbe9afef20c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjB0cmVuZHMlMjBtYWdhemluZXxlbnwxfHx8fDE3NTUxNjIxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Photography",
      date: "10 Thg 8",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Váy Cưới Trendy 2024",
      excerpt: "Những mẫu váy cưới được yêu thích nhất",
      image: "https://images.unsplash.com/photo-1579983845624-60e6746a2c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBmYXNoaW9uJTIwdHJlbmRzfGVufDF8fHx8MTc1NTE2MjIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Fashion",
      date: "8 Thg 8",
      readTime: "6 min"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Blog</h2>
          <p className="text-gray-500 max-w-md mx-auto">Latest wedding trends and tips</p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
              <ImageWithFallback
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <Badge className="mb-4 bg-gray-100 text-gray-700">
                {posts[0].category}
              </Badge>
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                {posts[0].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                {posts[0].date}
                <Clock className="w-4 h-4 ml-4 mr-2" />
                {posts[0].readTime}
              </div>
              <Button className="bg-black text-white hover:bg-gray-800">
                Đọc Tiếp <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.slice(1).map((post) => (
            <div
              key={post.id}
              className="group bg-white overflow-hidden hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <Badge className="mb-3 bg-gray-100 text-gray-700 text-xs">
                  {post.category}
                </Badge>
                <h3 className="font-medium text-lg mb-2 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="px-8">
            Xem Thêm Bài Viết
          </Button>
        </div>
      </div>
    </section>
  );
}