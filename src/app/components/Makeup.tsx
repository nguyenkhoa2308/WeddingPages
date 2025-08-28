import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function Makeup() {
  const makeupStyles = [
    {
      name: "Natural Glow",
      image: "https://images.unsplash.com/photo-1634990107998-2c56c5afa573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbWFrZXVwJTIwbmF0dXJhbCUyMGVsZWdhbnR8ZW58MXx8fHwxNzU1MTYxOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true
    },
    {
      name: "Classic Elegance",
      image: "https://images.unsplash.com/photo-1592343516059-cf2712eb0dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBhcnRpc3QlMjB3ZWRkaW5nfGVufDF8fHx8MTc1NTE2MTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      name: "Glamorous",
      image: "https://images.unsplash.com/photo-1601912871048-58c39f668e7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdldHRpbmclMjByZWFkeSUyMG1ha2V1cHxlbnwxfHx8fDE3NTUxNjE5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    }
  ];

  const services = [
    {
      service: "Trial Makeup",
      price: "1,500,000",
      duration: "2 hours"
    },
    {
      service: "Wedding Day Makeup",
      price: "3,000,000",
      duration: "3 hours"
    },
    {
      service: "Makeup + Hair",
      price: "4,500,000",
      duration: "4 hours"
    },
    {
      service: "Full Bridal Package",
      price: "6,000,000",
      duration: "Full day"
    }
  ];

  return (
    <section id="makeup" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Makeup</h2>
          <p className="text-gray-500 max-w-md mx-auto">Professional bridal makeup services</p>
        </div>

        {/* Makeup Styles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {makeupStyles.map((style, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              {style.popular && (
                <Badge className="absolute top-4 left-4 z-10 bg-black text-white">
                  Popular
                </Badge>
              )}
              
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-medium">{style.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services & Pricing */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">{service.service}</h3>
                <div className="text-2xl font-light mb-2">{service.price}</div>
                <p className="text-gray-500 text-sm mb-4">{service.duration}</p>
                <Button size="sm" variant="outline" className="w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="bg-black text-white hover:bg-gray-800">
            Schedule Trial
          </Button>
        </div>
      </div>
    </section>
  );
}