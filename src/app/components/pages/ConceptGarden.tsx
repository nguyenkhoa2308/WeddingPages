import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function ConceptGarden() {
  return (
    <div className="pt-16">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1443811422292-ac2c48a2cbf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5JTIwbmF0dXJlJTIwZ2FyZGVufGVufDF8fHx8MTc1NTE2Mzk5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Garden Wedding Concept"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">GARDEN CONCEPT</Badge>
          <h1 className="text-5xl md:text-6xl font-light mb-6">Garden Concept</h1>
          <p className="text-xl font-light mb-8">Concept chụp ảnh vườn xanh với thiên nhiên tươi mát</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">Xem Bộ Sưu Tập</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">Đặt Lịch Chụp</Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Garden Wedding Concept</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Concept chụp ảnh cưới trong vườn với thiên nhiên xanh mát</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1443811422292-ac2c48a2cbf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5JTIwbmF0dXJlJTIwZ2FyZGVufGVufDF8fHx8MTc1NTE2Mzk5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={`Garden Concept ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white text-black hover:bg-gray-100">Xem Chi Tiết</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}