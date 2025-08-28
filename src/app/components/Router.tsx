import { useState } from "react";
import { Header } from "./Header";
import { Home } from "./pages/Home";
import { AlbumStudio } from "./pages/AlbumStudio";
import { AlbumOutdoor } from "./pages/AlbumOutdoor";
import { AlbumTraditional } from "./pages/AlbumTraditional";
import { OutfitWeddingDress } from "./pages/OutfitWeddingDress";
import { OutfitMermaidDress } from "./pages/OutfitMermaidDress";
import { OutfitMenSuit } from "./pages/OutfitMenSuit";
import { OutfitAccessories } from "./pages/OutfitAccessories";
import { MakeupClassic } from "./pages/MakeupClassic";
import { MakeupModern } from "./pages/MakeupModern";
import { MakeupKorean } from "./pages/MakeupKorean";
import { ConceptVintage } from "./pages/ConceptVintage";
import { ConceptMinimalist } from "./pages/ConceptMinimalist";
import { ConceptGarden } from "./pages/ConceptGarden";
import { ConceptBeach } from "./pages/ConceptBeach";
import { Contact } from "./Contact";

export type PageType = 
  | "home"
  | "album-studio" | "album-outdoor" | "album-traditional"
  | "outfit-wedding-dress" | "outfit-mermaid-dress" | "outfit-men-suit" | "outfit-accessories"
  | "makeup-classic" | "makeup-modern" | "makeup-korean"
  | "concept-vintage" | "concept-minimalist" | "concept-garden" | "concept-beach"
  | "contact";

export function Router() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "album-studio":
        return <AlbumStudio />;
      case "album-outdoor":
        return <AlbumOutdoor />;
      case "album-traditional":
        return <AlbumTraditional />;
      case "outfit-wedding-dress":
        return <OutfitWeddingDress />;
      case "outfit-mermaid-dress":
        return <OutfitMermaidDress />;
      case "outfit-men-suit":
        return <OutfitMenSuit />;
      case "outfit-accessories":
        return <OutfitAccessories />;
      case "makeup-classic":
        return <MakeupClassic />;
      case "makeup-modern":
        return <MakeupModern />;
      case "makeup-korean":
        return <MakeupKorean />;
      case "concept-vintage":
        return <ConceptVintage />;
      case "concept-minimalist":
        return <ConceptMinimalist />;
      case "concept-garden":
        return <ConceptGarden />;
      case "concept-beach":
        return <ConceptBeach />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
    </div>
  );
}