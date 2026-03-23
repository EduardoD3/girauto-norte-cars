import { Hammer, Wrench } from "lucide-react";

const UnderConstructionBanner = () => {
  return (
    <div className="fixed top-4 left-1/2 z-[9999] -translate-x-1/2 animate-in fade-in slide-in-from-top-3 duration-500">
      <div className="relative flex items-center gap-3 rounded-full border border-yellow-400/40 bg-yellow-500/10 px-5 py-3 shadow-2xl backdrop-blur-md">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-black shadow-md">
          <Hammer className="h-5 w-5" />
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-yellow-400">
            Site em construção
          </span>
          <span className="text-xs text-white/80">
            Estamos finalizando os últimos detalhes.
          </span>
        </div>

        <Wrench className="h-4 w-4 text-yellow-300" />

        <div className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1 rotate-45 border-b border-r border-yellow-400/40 bg-yellow-500/10 backdrop-blur-md" />
      </div>
    </div>
  );
};

export default UnderConstructionBanner;