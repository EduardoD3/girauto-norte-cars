import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VehicleGrid from "@/components/VehicleGrid";
import VehicleDetail from "@/components/VehicleDetail";
import AdvertiseSection from "@/components/AdvertiseSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import UnderConstructionBanner from "@/components/UnderConstructionBanner";
import type { Vehicle } from "@/data/vehicles";

const Index = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <UnderConstructionBanner />

      <Header />
      <HeroSection
        onSearch={() => scrollTo("#veiculos")}
        onAdvertise={() => scrollTo("#anuncie")}
      />
      <VehicleGrid onSelectVehicle={setSelectedVehicle} />
      <AdvertiseSection />
      <AboutSection />
      <Footer />
      <WhatsAppButton />

      {selectedVehicle && (
        <VehicleDetail
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>
  );
};

export default Index;