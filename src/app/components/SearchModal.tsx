import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  id: string;
  title: string;
  type: 'album' | 'makeup' | 'outfit' | 'concept';
  image: string;
  path: string;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<SearchItem[]>([]);

  // Mock data for wedding photography studio
  const searchData: SearchItem[] = [
    {
      id: "1",
      title: "Studio Portrait Session",
      type: "album",
      image: "https://images.unsplash.com/photo-1745750003557-b666d0ea0104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=400",
      path: "/albums/studio"
    },
    {
      id: "2",
      title: "Outdoor Garden Wedding",
      type: "album", 
      image: "https://images.unsplash.com/photo-1747240490908-ad7a02a58efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=400",
      path: "/albums/outdoor"
    },
    {
      id: "3",
      title: "Traditional Vietnamese Wedding",
      type: "album",
      image: "https://images.unsplash.com/photo-1693683964354-b635a7b77ee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=400",
      path: "/albums/traditional"
    },
    {
      id: "4",
      title: "Classic Makeup Style",
      type: "makeup",
      image: "https://images.unsplash.com/photo-1653873376993-a5ba3cda9e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=400",
      path: "/makeup/classic"
    },
    {
      id: "5",
      title: "Korean Beauty Makeup",
      type: "makeup",
      image: "https://images.unsplash.com/photo-1693702398207-3e2b8d42e77f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=400",
      path: "/makeup/korean"
    },
    {
      id: "6",
      title: "Modern Bride Makeup",
      type: "makeup",
      image: "https://images.unsplash.com/photo-1700580446340-1bd00129863d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=400",
      path: "/makeup/modern"
    },
    {
      id: "7",
      title: "Elegant Wedding Dress",
      type: "outfit",
      image: "https://images.unsplash.com/photo-1745541584814-5dd9310e8438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=400",
      path: "/outfits/wedding-dress"
    },
    {
      id: "8",
      title: "Mermaid Style Gown",
      type: "outfit",
      image: "https://images.unsplash.com/photo-1653614704415-a3f533f60da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=400",
      path: "/outfits/mermaid-dress"
    },
    {
      id: "9",
      title: "Groom's Classic Suit",
      type: "outfit",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=400",
      path: "/outfits/men-suit"
    },
    {
      id: "10",
      title: "Beach Wedding Concept",
      type: "concept",
      image: "https://images.unsplash.com/photo-1613638384133-e8f7a60065da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=400",
      path: "/concepts/beach"
    },
    {
      id: "11",
      title: "Garden Romance Concept",
      type: "concept",
      image: "https://images.unsplash.com/photo-1728210214504-3553ce23f3d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=400",
      path: "/concepts/garden"
    },
    {
      id: "12",
      title: "Vintage Style Concept",
      type: "concept",
      image: "https://images.unsplash.com/photo-1753434463003-3692c45cf649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300&h=400",
      path: "/concepts/vintage"
    }
  ];

  // Quick link categories
  const quickLinks = [
    { label: "Albums", path: "/albums/studio" },
    { label: "Makeup", path: "/makeup/classic" },
    { label: "Outfits", path: "/outfits/wedding-dress" },
    { label: "Concepts", path: "/concepts/beach" }
  ];

  // Filter results based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults([]);
    } else {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  }, [searchQuery]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Reset search when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setFilteredResults([]);
    }
  }, [isOpen]);

  // Get inspiration items (show first 6 items when no search)
  const inspirationItems = searchQuery.trim() === "" ? searchData.slice(0, 6) : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-4 left-4 right-4 md:top-8 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl z-50 max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-medium text-gray-900">Search our site</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-6 pb-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search albums, makeup, outfits, concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  autoFocus
                />
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 max-h-96 overflow-y-auto">
              {/* Search Results */}
              {searchQuery.trim() !== "" && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {filteredResults.length > 0 ? `Found ${filteredResults.length} results` : "No results found"}
                  </h3>
                  
                  {filteredResults.length > 0 && (
                    <div className="space-y-3">
                      {filteredResults.map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          onClick={onClose}
                          className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group"
                        >
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 truncate">{item.title}</h4>
                            <p className="text-sm text-gray-500 capitalize">{item.type}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Quick Links - Only show when no search query */}
              {searchQuery.trim() === "" && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Quick links</h3>
                  <div className="space-y-2">
                    {quickLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.path}
                        onClick={onClose}
                        className="block text-gray-600 hover:text-black transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Inspiration Section - Only show when no search query */}
              {searchQuery.trim() === "" && inspirationItems.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Need some inspiration?</h3>
                  <div className="space-y-4">
                    {inspirationItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        onClick={onClose}
                        className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-xl transition-colors group"
                      >
                        <div className="w-16 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{item.title}</h4>
                          {/* No price shown as requested */}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}