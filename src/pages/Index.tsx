import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VehicleGrid from "@/components/VehicleGrid";
import VehicleDetail from "@/components/VehicleDetail";
import AdvertiseSection from "@/components/AdvertiseSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import GiraudoAssistant from "@/components/GiraudoAssistant";
import UnderConstructionBanner from "@/components/UnderConstructionBanner";
import GirautoTV from "@/components/GirautoTV";
import GirautoShop from "@/components/shop/GirautoShop";
import { ShopProvider } from "@/components/shop/ShopContext";
import CartDrawer from "@/components/shop/CartDrawer";
import VehicleProductsPreview from "@/components/shop/VehicleProductsPreview";
import type { Vehicle } from "@/data/vehicles";

const Index = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ShopProvider>
      <div className="min-h-screen bg-background">
        <UnderConstructionBanner />

        <Header />
        <HeroSection
          onSearch={() => scrollTo("#veiculos")}
          onAdvertise={() => scrollTo("#anuncie")}
        />
        <VehicleProductsPreview />
        <VehicleGrid onSelectVehicle={setSelectedVehicle} />
        <GirautoTV />
        <GirautoShop />
        <AdvertiseSection />
        <AboutSection />
        <Footer />
        <GiraudoAssistant />
        <CartDrawer />

        {selectedVehicle && (
          <VehicleDetail
            vehicle={selectedVehicle}
            onClose={() => setSelectedVehicle(null)}
          />
        )}
      </div>
    </ShopProvider>
  );
};

export default Index;
