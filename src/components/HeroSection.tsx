import { ArrowRight, Radio, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCars from "@/assets/hero-cars.jpg";

interface HeroSectionProps {
  onSearch: () => void;
  onAdvertise: () => void;
}

const HeroSection = ({ onSearch, onAdvertise }: HeroSectionProps) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCars})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-brand-black/40" />
      {/* TV Channel Badge */}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in">

          {/* Live indicator */}
          <div className="flex items-center gap-2">
                          <Radio size={14} />

          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-white/20" />

          {/* Channel info */}
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-sm tracking-wide">
              Girauto TV
            </span>
            <span className="text-white/60 text-xs">

              Acompanhe nosso programa todos os dias no Canal 21.1
            </span>
          </div>
           
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up">
            Os melhores veículos{" "}
            <span className="text-brand-red">da região</span>{" "}
            em um só lugar
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-body animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Conectamos compradores e vendedores com as melhores ofertas de carros e motos de todo o Norte do Brasil.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              onClick={onSearch}
              size="lg"
              className="bg-brand-red hover:bg-brand-red-light text-primary-foreground font-bold px-8 py-4 h-14 rounded-xl shadow-red text-base transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <Search size={20} className="mr-2" />
              Ver Ofertas
            </Button>
            <Button
              onClick={onAdvertise}
              size="lg"
              variant="outline"
              className="border-2 border-white/60 text-white bg-white/10 hover:bg-white/20 hover:border-white font-bold px-8 py-4 h-14 rounded-xl text-base transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto backdrop-blur-sm"
            >
              Anunciar Agora
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

          {/* Stats */}
          {/* <div
            className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            {[
              { value: "500+", label: "Veículos" },
              { value: "12 anos", label: "No ar" },
              { value: "Norte BR", label: "Cobertura" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl py-3 px-2"
              >
                <div className="font-display text-xl md:text-2xl font-black text-white">{stat.value}</div>
                <div className="text-white/60 text-xs font-body mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
