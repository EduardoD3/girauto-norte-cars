import { X, Phone, MapPin, Calendar, Gauge, Fuel, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Vehicle } from "@/data/vehicles";
import { useState } from "react";

interface VehicleDetailProps {
  vehicle: Vehicle;
  onClose: () => void;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(price);

const formatMileage = (km: number) =>
  new Intl.NumberFormat("pt-BR").format(km) + " km";

const VehicleDetail = ({ vehicle, onClose }: VehicleDetailProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const whatsappUrl = `https://wa.me/${vehicle.advertiser.whatsapp}?text=Olá! Vi o anúncio do ${vehicle.brand} ${vehicle.model} ${vehicle.year} no Girauto e gostaria de mais informações.`;

  const specs = [
    { icon: Calendar, label: "Ano", value: String(vehicle.year) },
    { icon: Gauge, label: "Quilometragem", value: formatMileage(vehicle.mileage) },
    { icon: Fuel, label: "Combustível", value: vehicle.fuel },
    { icon: Settings, label: "Câmbio", value: vehicle.transmission },
    { icon: MapPin, label: "Localização", value: `${vehicle.city}, ${vehicle.state}` },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-brand-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-card-hover relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-brand-black/60 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-brand-black/80 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Gallery */}
        <div className="relative aspect-video bg-brand-black rounded-t-2xl overflow-hidden">
          <img
            src={vehicle.images[currentImage]}
            alt={vehicle.title}
            className="w-full h-full object-cover"
          />
          {vehicle.images.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImage((p) => (p > 0 ? p - 1 : vehicle.images.length - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-brand-black/70"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrentImage((p) => (p < vehicle.images.length - 1 ? p + 1 : 0))}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-black/50 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-brand-black/70"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {vehicle.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentImage ? "bg-white scale-125" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold text-brand-red uppercase tracking-wide font-body">
                {vehicle.brand}
              </span>
              <h2 className="font-display font-black text-2xl md:text-3xl text-foreground mt-1">
                {vehicle.model}
              </h2>
              <p className="text-muted-foreground font-body mt-1">{vehicle.title}</p>
            </div>
            <div className="bg-brand-red/5 border border-brand-red/20 rounded-2xl p-4 text-right">
              <div className="text-xs text-muted-foreground font-body">Preço</div>
              <div className="font-display font-black text-brand-red text-3xl">{formatPrice(vehicle.price)}</div>
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
            {specs.map((spec) => (
              <div key={spec.label} className="bg-card border border-brand-border rounded-xl p-3 text-center">
                <spec.icon size={18} className="mx-auto text-brand-red mb-1.5" />
                <div className="text-xs text-muted-foreground font-body">{spec.label}</div>
                <div className="font-semibold text-foreground text-sm font-body">{spec.value}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-display font-bold text-foreground text-lg mb-2">Descrição</h3>
            <p className="text-muted-foreground font-body leading-relaxed">{vehicle.description}</p>
          </div>

          {/* Advertiser */}
          <div className="bg-card border border-brand-border rounded-xl p-4 mb-6">
            <h3 className="font-display font-bold text-foreground text-sm mb-2">Anunciante</h3>
            <p className="font-body font-semibold text-foreground">{vehicle.advertiser.name}</p>
            <p className="text-muted-foreground text-sm font-body">{vehicle.advertiser.phone}</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 h-14 rounded-xl text-base transition-all duration-200 hover:scale-105 active:scale-95">
                💬 Chamar no WhatsApp
              </Button>
            </a>
            <a href={`tel:${vehicle.advertiser.phone}`} className="flex-1">
              <Button variant="outline" className="w-full border-2 border-brand-border hover:border-brand-red/30 text-foreground font-bold py-4 h-14 rounded-xl text-base transition-all duration-200 hover:scale-105 active:scale-95">
                <Phone size={18} className="mr-2" />
                Ligar Agora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
