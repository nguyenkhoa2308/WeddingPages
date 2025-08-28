import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Check } from "lucide-react";

export function Packages() {
  const packages = [
    {
      name: "Essential",
      price: "8,000,000",
      duration: "4 hours",
      features: [
        "200+ edited photos",
        "Online gallery",
        "1 photographer",
        "Basic retouching"
      ]
    },
    {
      name: "Premium",
      price: "15,000,000",
      duration: "8 hours",
      popular: true,
      features: [
        "500+ edited photos",
        "Online + print gallery",
        "2 photographers",
        "Professional retouching",
        "Same-day preview"
      ]
    },
    {
      name: "Luxury",
      price: "25,000,000",
      duration: "Full day",
      features: [
        "800+ edited photos",
        "Premium albums",
        "3 photographers",
        "Cinematic editing",
        "Same-day preview",
        "Drone photography"
      ]
    }
  ];

  return (
    <section id="packages" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Packages</h2>
          <p className="text-gray-500 max-w-md mx-auto">Choose the perfect package for your special day</p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-lg transition-all duration-300 ${
                pkg.popular ? "ring-2 ring-black scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 text-sm rounded-full">
                  Most Popular
                </div>
              )}
              
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-medium mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-light">{pkg.price}</span>
                  <span className="text-gray-500 ml-1">VND</span>
                </div>
                <p className="text-gray-500 mb-6">{pkg.duration}</p>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-left">
                      <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? "bg-black text-white hover:bg-gray-800" 
                      : "bg-white text-black border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  Select Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}