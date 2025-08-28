import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function NewConcept() {
  const concepts = [
    {
      title: "Cinematic",
      description: "Film-inspired storytelling",
      image: "https://images.unsplash.com/photo-1667506057188-3dc8aba0b1d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb25jZXB0fGVufDF8fHx8MTc1NTE2MTk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Editorial",
      description: "Fashion-forward approach",
      image: "https://images.unsplash.com/photo-1748628728683-840f0960a1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHdlZGRpbmclMjBwaG90b2dyYXBoeSUyMGNyZWF0aXZlfGVufDF8fHx8MTc1NTE2MTk1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Contemporary",
      description: "Modern artistic vision",
      image: "https://images.unsplash.com/photo-1638763757006-94414ab2ccf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjB3ZWRkaW5nJTIwcG9ydHJhaXQlMjBzdHlsZXxlbnwxfHx8fDE3NTUxNjE5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Minimalist",
      description: "Clean & sophisticated",
      image: "https://images.unsplash.com/photo-1667507036709-bbe9afef20c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2VkZGluZyUyMHBob3RvZ3JhcGh5JTIwdHJlbmR5fGVufDF8fHx8MTc1NTE2MTk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="concept" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">New Concept</h2>
          <p className="text-gray-500 max-w-md mx-auto">Latest trends in wedding photography</p>
        </div>

        {/* Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={concept.image}
                  alt={concept.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-medium mb-1">{concept.title}</h3>
                  <p className="text-sm text-gray-200 mb-3">{concept.description}</p>
                  <button className="flex items-center text-sm group-hover:translate-x-1 transition-transform">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-50 p-12 rounded-lg">
          <h3 className="text-2xl font-light mb-4">Ready to explore new styles?</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Let's discuss which concept best fits your vision
          </p>
          <Button className="bg-black text-white hover:bg-gray-800">
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}