import { useState } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, ChevronRight } from "lucide-react";

// Import figma assets
import shopImage from 'figma:asset/df3cbb016fb92a497393a58c92c4aa0bba0808f7.png';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
}

interface VerticalSplitShopProps {
  title: string;
  subtitle: string;
  products: Product[];
}

export function VerticalSplitShop({ title, subtitle, products }: VerticalSplitShopProps) {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] bg-gray-50 rounded-3xl overflow-hidden shadow-sm">
          
          {/* Left Side - Product Display */}
          <div className="relative bg-gray-100 flex items-center justify-center p-8 lg:p-12">
            {selectedProduct ? (
              <div className="text-center max-w-md animate-in fade-in slide-in-from-left-4 duration-500">
                {/* Selected Product Image */}
                <div className="relative mb-8">
                  <div className="w-72 h-72 mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
                    <ImageWithFallback
                      src={products.find(p => p.id === selectedProduct)?.image || ""}
                      alt={products.find(p => p.id === selectedProduct)?.name || ""}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Heart Icon */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-white transition-all duration-200 shadow-md">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium text-gray-900">
                    {products.find(p => p.id === selectedProduct)?.name}
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl font-medium text-gray-900">
                      {products.find(p => p.id === selectedProduct)?.price} VNĐ
                    </span>
                    {products.find(p => p.id === selectedProduct)?.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {products.find(p => p.id === selectedProduct)?.originalPrice} VNĐ
                      </span>
                    )}
                  </div>

                  <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg">
                    View Details
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ) : (
              /* Default Empty State */
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 bg-gray-200/60 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-lg font-medium">Select a product to view</p>
              </div>
            )}
          </div>

          {/* Right Side - Product List */}
          <div className="bg-white">
            <div className="h-full flex flex-col">
              
              {/* Products List */}
              <div className="flex-1 p-6">
                <div className="space-y-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-50 ${
                        selectedProduct === product.id 
                          ? 'bg-gray-50 ring-2 ring-gray-200' 
                          : ''
                      }`}
                      onClick={() => setSelectedProduct(product.id)}
                    >
                      <div className="flex items-center space-x-4">
                        {/* Product Thumbnail */}
                        <div className="relative flex-shrink-0">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                            <ImageWithFallback
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-gray-900 truncate mb-1">
                            {product.name}
                          </h5>
                          
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-lg font-medium text-gray-900">
                              {product.price} VNĐ
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-400 line-through">
                                {product.originalPrice} VNĐ
                              </span>
                            )}
                          </div>

                          <span className="text-xs text-gray-500 uppercase tracking-wider">
                            {product.category.replace('-', ' ')}
                          </span>
                        </div>

                        {/* Selection Indicator */}
                        <div className={`transition-all duration-200 ${
                          selectedProduct === product.id 
                            ? 'opacity-100' 
                            : 'opacity-0 group-hover:opacity-50'
                        }`}>
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedProduct === product.id
                              ? 'bg-black border-black'
                              : 'border-gray-300'
                          }`}>
                            {selectedProduct === product.id && (
                              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Summary */}
              <div className="p-6 bg-gray-50/50 border-t border-gray-100">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Total ({products.length} items)</span>
                    <span className="font-medium text-gray-900">
                      {products.reduce((total, product) => 
                        total + parseInt(product.price.replace(/\./g, '')), 0
                      ).toLocaleString()} VNĐ
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                    >
                      Save Look
                    </Button>
                    <Button 
                      className="bg-black text-white hover:bg-gray-800 rounded-lg font-medium"
                    >
                      Book Consult
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Cần tư vấn thêm về trang phục và phụ kiện?
          </p>
          <Button 
            size="lg"
            variant="outline" 
            className="border-black text-black hover:bg-black hover:text-white font-medium px-8 py-3 rounded-full"
          >
            Liên Hệ Stylist
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}