import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Minus, Heart } from "lucide-react";

interface ProductItem {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  options: {
    sizes?: string[];
    colors?: string[];
  };
}

interface ShopThisLookProps {
  title?: string;
  subtitle?: string;
  mainImage: string;
  products: ProductItem[];
  bundleDiscount?: number;
}

export function ShopThisLook({ 
  title = "Complete Your Wedding Look",
  subtitle = "Everything you need for your perfect day",
  mainImage,
  products,
  bundleDiscount = 15
}: ShopThisLookProps) {
  const [selectedProducts, setSelectedProducts] = useState<{[key: number]: {size?: string, color?: string, quantity: number}}>(
    products.reduce((acc, product) => ({
      ...acc,
      [product.id]: { quantity: 1 }
    }), {})
  );

  const [quantities, setQuantities] = useState<{[key: number]: number}>(
    products.reduce((acc, product) => ({
      ...acc,
      [product.id]: 1
    }), {})
  );

  const calculateTotal = () => {
    const subtotal = products.reduce((total, product) => {
      const quantity = quantities[product.id] || 1;
      const price = parseFloat(product.price.replace(/[.,]/g, ''));
      return total + (price * quantity);
    }, 0);
    
    const discount = subtotal * (bundleDiscount / 100);
    return {
      subtotal,
      discount,
      total: subtotal - discount
    };
  };

  const updateQuantity = (productId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change)
    }));
  };

  const { subtotal, discount, total } = calculateTotal();

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Product list */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-pink-100 text-pink-700 border-pink-200">
                SHOP THIS LOOK
              </Badge>
              <h2 className="text-4xl font-light mb-2">{title}</h2>
              <p className="text-gray-600">{subtitle}</p>
            </div>

            <div className="space-y-6">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium mb-1">{product.name}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg font-medium">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Options */}
                    <div className="flex items-center space-x-3">
                      {product.options.sizes && (
                        <Select>
                          <SelectTrigger className="w-20 h-8 text-xs">
                            <SelectValue placeholder="Size" />
                          </SelectTrigger>
                          <SelectContent>
                            {product.options.sizes.map(size => (
                              <SelectItem key={size} value={size}>{size}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}

                      {product.options.colors && (
                        <Select>
                          <SelectTrigger className="w-20 h-8 text-xs">
                            <SelectValue placeholder="Color" />
                          </SelectTrigger>
                          <SelectContent>
                            {product.options.colors.map(color => (
                              <SelectItem key={color} value={color}>{color}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}

                      {/* Quantity */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {quantities[product.id] || 1}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Heart Icon */}
                  <Button size="sm" variant="ghost" className="p-2 text-gray-400 hover:text-red-500">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Total and Checkout */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>{subtotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>Bundle Discount ({bundleDiscount}%):</span>
                  <span>-{discount.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between text-lg font-medium border-t border-gray-100 pt-2">
                  <span>Total:</span>
                  <span>{total.toLocaleString('vi-VN')}đ</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-black text-white hover:bg-gray-800" size="lg">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Miễn phí tư vấn và thử trang phục
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Main image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={mainImage}
                alt="Complete Wedding Look"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay badges */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-white/90 text-black">
                  Tiết kiệm {bundleDiscount}%
                </Badge>
              </div>
              
              {/* Interactive spots */}
              <div className="absolute top-1/3 right-1/4">
                <div className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Plus className="w-3 h-3" />
                </div>
              </div>
              
              <div className="absolute bottom-1/3 left-1/4">
                <div className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Plus className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}