import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Eye, Heart } from "lucide-react";

export function Albums() {
  const albums = [
    {
      id: 1,
      title: "Modern Elegance",
      images: 45,
      cover: "https://images.unsplash.com/photo-1529066496421-d8fb2dca38a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYWxidW0lMjBwb3J0Zm9saW8lMjBtb2Rlcm58ZW58MXx8fHwxNzU1MTYxODk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "Timeless Romance",
      images: 62,
      cover: "https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb2xsZWN0aW9uJTIwYmVhdXRpZnVsfGVufDF8fHx8MTc1NTE2MTg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Garden Wedding",
      images: 38,
      cover: "https://images.unsplash.com/photo-1614935828891-8309d281d645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwb3V0ZG9vciUyMHdlZGRpbmd8ZW58MXx8fHwxNzU1MTYxOTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "Classic Ceremony",
      images: 54,
      cover: "https://images.unsplash.com/photo-1587147631274-606ce8e8b3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBlbGVnYW50JTIwcGhvdG98ZW58MXx8fHwxNzU1MTYxOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      title: "Intimate Moments",
      images: 29,
      cover: "https://images.unsplash.com/photo-1726609196460-f2f6c9a04859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcm9tYW50aWMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTUxNjE5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      title: "Wedding Details",
      images: 71,
      cover: "https://images.unsplash.com/photo-1684244276932-6ae853774c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGV0YWlscyUyMHJpbmdzJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NTUxNjE5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="albums" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Minimal Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Albums</h2>
          <p className="text-gray-500 max-w-md mx-auto">Recent wedding photography collections</p>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {albums.map((album) => (
            <div
              key={album.id}
              className="group relative overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="bg-white/90 hover:bg-white text-black p-3 rounded-full transition-all">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-white/90 hover:bg-white text-black p-3 rounded-full transition-all">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-medium text-lg mb-1">{album.title}</h3>
                <p className="text-gray-500 text-sm">{album.images} photos</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Button variant="outline" className="px-8">
            View All Albums
          </Button>
        </div>
      </div>
    </section>
  );
}