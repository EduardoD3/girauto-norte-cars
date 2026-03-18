import { useState, useMemo } from "react";
import VehicleCard from "@/components/VehicleCard";
import VehicleFilters, { FilterState } from "@/components/VehicleFilters";
import type { Vehicle } from "@/data/vehicles";
import { vehicles } from "@/data/vehicles";

interface VehicleGridProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
}

const VehicleGrid = ({ onSelectVehicle }: VehicleGridProps) => {
  const [filters, setFilters] = useState<FilterState>({
    type: "todos",
    brand: "Todas",
    maxPrice: 0,
    minYear: 2000,
  });

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      if (filters.type !== "todos" && v.type !== filters.type) return false;
      if (filters.brand !== "Todas" && v.brand !== filters.brand) return false;
      if (filters.maxPrice > 0 && v.price > filters.maxPrice) return false;
      if (v.year < filters.minYear) return false;
      return true;
    });
  }, [filters]);

  return (
    <section id="veiculos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-brand-red text-sm font-semibold uppercase tracking-widest font-body mb-3">
            Nosso Catálogo
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-foreground">
            Veículos em <span className="text-brand-red">Destaque</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto">
            Explore nossa seleção de carros e motos verificados, com as melhores condições da região Norte.
          </p>
        </div>

        <VehicleFilters filters={filters} onChange={setFilters} total={filtered.length} />

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-body text-lg">Nenhum veículo encontrado com esses filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} onClick={onSelectVehicle} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleGrid;
