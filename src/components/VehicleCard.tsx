import { MapPin, Fuel, Calendar, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Vehicle } from "@/data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
  onClick: (vehicle: Vehicle) => void;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(price);

const formatMileage = (km: number) =>
  new Intl.NumberFormat("pt-BR").format(km) + " km";

const VehicleCard = ({ vehicle, onClick }: VehicleCardProps) => {
  return (
    <div
      className="group bg-card border border-brand-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01] cursor-pointer flex flex-col"
      onClick={() => onClick(vehicle)}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={vehicle.image}
          alt={vehicle.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <Badge className="absolute top-3 left-3 bg-brand-red text-primary-foreground font-semibold text-xs px-2.5 py-1 rounded-lg">
          {vehicle.type === "carro" ? "🚗 Carro" : "🏍️ Moto"}
        </Badge>

        {vehicle.year >= 2022 && (
          <Badge className="absolute top-3 right-3 bg-brand-black/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-lg border border-white/20">
            Destaque
          </Badge>
        )}

        {/* Carimbo de imagem ilustrativa */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="rotate-[-18deg] rounded-lg border-2 border-white/70 bg-black/35 px-4 py-2 backdrop-blur-[2px] shadow-lg">
            <span className="text-white/90 text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase">
              Imagem Ilustrativa
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Brand + Model */}
        <div className="mb-1">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-wide font-body">
            {vehicle.brand}
          </span>
          <h3 className="font-display font-bold text-foreground text-lg leading-tight mt-0.5 group-hover:text-brand-red transition-colors duration-200">
            {vehicle.model}
          </h3>
        </div>

        {/* Specs row */}
        <div className="flex flex-wrap gap-3 my-3">
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-body">
            <Calendar size={13} className="text-brand-red" />
            {vehicle.year}
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-body">
            <Gauge size={13} className="text-brand-red" />
            {formatMileage(vehicle.mileage)}
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-body">
            <Fuel size={13} className="text-brand-red" />
            {vehicle.fuel}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-body mb-4">
          <MapPin size={13} className="text-brand-red" />
          {vehicle.city}, {vehicle.state}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-brand-border">
          <div>
            <div className="text-xs text-muted-foreground font-body">Preço</div>
            <div className="font-display font-black text-brand-red text-xl">
              {formatPrice(vehicle.price)}
            </div>
          </div>
          <Button
            size="sm"
            className="bg-brand-red hover:bg-brand-red-light text-primary-foreground font-semibold rounded-xl px-4 py-2.5 h-auto text-sm transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              onClick(vehicle);
            }}
          >
            Ver Detalhes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;