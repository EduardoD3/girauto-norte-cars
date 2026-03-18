import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brands } from "@/data/vehicles";

export interface FilterState {
  type: "todos" | "carro" | "moto";
  brand: string;
  maxPrice: number;
  minYear: number;
}

interface VehicleFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  total: number;
}

const priceOptions = [
  { label: "Todos", value: 0 },
  { label: "Até R$ 50k", value: 50000 },
  { label: "Até R$ 100k", value: 100000 },
  { label: "Até R$ 200k", value: 200000 },
  { label: "Até R$ 300k", value: 300000 },
  { label: "Até R$ 500k", value: 500000 },
];

const yearOptions = [
  { label: "Qualquer ano", value: 2000 },
  { label: "2020 ou +", value: 2020 },
  { label: "2021 ou +", value: 2021 },
  { label: "2022 ou +", value: 2022 },
  { label: "2023 ou +", value: 2023 },
];

const VehicleFilters = ({ filters, onChange, total }: VehicleFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters =
    filters.type !== "todos" ||
    filters.brand !== "Todas" ||
    filters.maxPrice !== 0 ||
    filters.minYear !== 2000;

  const reset = () =>
    onChange({ type: "todos", brand: "Todas", maxPrice: 0, minYear: 2000 });

  return (
    <div className="mb-8">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div>
          <p className="text-muted-foreground font-body text-sm">
            <span className="font-semibold text-foreground font-display text-lg">{total}</span>{" "}
            veículos encontrados
          </p>
        </div>
        <div className="flex gap-2">
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={reset}
              className="text-brand-red border-brand-red/30 hover:bg-brand-red/5 rounded-xl gap-1.5"
            >
              <X size={14} />
              Limpar filtros
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="rounded-xl gap-1.5 border-brand-border"
          >
            <SlidersHorizontal size={14} />
            Filtros
            {hasActiveFilters && (
              <span className="bg-brand-red text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                !
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Type quick filter pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(["todos", "carro", "moto"] as const).map((t) => (
          <button
            key={t}
            onClick={() => onChange({ ...filters, type: t })}
            className={`px-4 py-2 rounded-full text-sm font-semibold font-body transition-all duration-200 ${
              filters.type === t
                ? "bg-brand-red text-primary-foreground shadow-red"
                : "bg-secondary text-foreground hover:bg-brand-red/10 hover:text-brand-red border border-brand-border"
            }`}
          >
            {t === "todos" ? "Todos" : t === "carro" ? "🚗 Carros" : "🏍️ Motos"}
          </button>
        ))}
      </div>

      {/* Expanded filters */}
      {showFilters && (
        <div className="bg-card border border-brand-border rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-5 shadow-card animate-fade-in">
          {/* Brand */}
          <div>
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block font-body">
              Marca
            </label>
            <select
              value={filters.brand}
              onChange={(e) => onChange({ ...filters, brand: e.target.value })}
              className="w-full bg-background border border-brand-border rounded-xl px-3 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-brand-red/30"
            >
              {brands.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block font-body">
              Preço máximo
            </label>
            <select
              value={filters.maxPrice}
              onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
              className="w-full bg-background border border-brand-border rounded-xl px-3 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-brand-red/30"
            >
              {priceOptions.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
            </select>
          </div>

          {/* Year */}
          <div>
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block font-body">
              Ano mínimo
            </label>
            <select
              value={filters.minYear}
              onChange={(e) => onChange({ ...filters, minYear: Number(e.target.value) })}
              className="w-full bg-background border border-brand-border rounded-xl px-3 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-brand-red/30"
            >
              {yearOptions.map((y) => <option key={y.value} value={y.value}>{y.label}</option>)}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleFilters;
