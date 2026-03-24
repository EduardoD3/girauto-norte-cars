import {
  ArrowRight,
  Search,
  Car,
  Bike,
  BadgeDollarSign,
  Megaphone,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCars from "@/assets/hero-cars.jpg";

interface HeroSectionProps {
  onSearch: () => void;
  onAdvertise: () => void;
}

const advertiseCards = [
  {
    icon: Car,
    title: "Anuncie seu carro",
    text: "Publique seu veículo e alcance compradores da região.",
  },
  {
    icon: Bike,
    title: "Venda sua moto",
    text: "Destaque sua moto com mais visibilidade no portal.",
  },
  {
    icon: BadgeDollarSign,
    title: "Mais chances de vender",
    text: "Seu anúncio em evidência para gerar mais interesse.",
  },
  {
    icon: Megaphone,
    title: "Divulgue com facilidade",
    text: "Anuncie de forma simples, rápida e profissional.",
  },
];

const youtubeVideos = [
  {
    id: "8HRJTORF2cA",
    title: "Conhecendo a Tesla e o Cybertruck",
  },

];

const HeroSection = ({ onSearch, onAdvertise }: HeroSectionProps) => {
  return (
    <>
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

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in">
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up">
              Anuncie em todas as plataformas{" "}
              em um só lugar
            </h1>

            <p
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-body animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
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

            {/* Mini carousel CTA */}
            <div
              className="mt-10 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: "0.45s" }}
            >
              <div className="relative">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-black/40 to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-black/40 to-transparent" />

                <div className="flex gap-4 w-max animate-[marquee_24s_linear_infinite] hover:[animation-play-state:paused]">
                  {[...advertiseCards, ...advertiseCards].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={`${item.title}-${index}`}
                        onClick={onAdvertise}
                        className="group min-w-[240px] max-w-[240px] rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md px-4 py-4 text-left shadow-lg transition-all duration-300 hover:bg-white/15 hover:border-brand-red/50 hover:-translate-y-1"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/20 text-brand-red border border-brand-red/30 shrink-0">
                            <Icon size={18} />
                          </div>

                          <div className="min-w-0">
                            <h3 className="text-sm font-bold text-white leading-tight mb-1">
                              {item.title}
                            </h3>
                            <p className="text-xs text-white/65 leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-brand-red text-xs font-semibold">
                          Anunciar veículo
                          <ArrowRight
                            size={14}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* YouTube Section */}
      <section className="bg-brand-black py-20 px-4">
        <div className="container mx-center">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 mb-4">
              <PlayCircle size={16} />
              Canal no YouTube
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Assista aos vídeos do canal
            </h2>

            <p className="text-white/70 text-base md:text-lg">
              Confira conteúdos exclusivos, avaliações, visitas e novidades do universo automotivo no nosso canal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.07]"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-4 line-clamp-2">
                    {video.title}
                  </h3>

                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-brand-red hover:bg-brand-red-light text-white font-bold rounded-xl h-12">
                      Assistir no YouTube
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="https://youtu.be/8HRJTORF2cA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-red-500/50 font-bold px-8 py-4 h-14 rounded-xl"
              >
                Ir para o canal
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;