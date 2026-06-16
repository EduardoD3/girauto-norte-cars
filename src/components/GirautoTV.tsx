import { useMemo, useState } from "react";
import { Play, Search, Eye, Calendar, X, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tvVideos, videoCategories, type TvVideo } from "@/data/tvVideos";
import { getProductsByIds } from "@/data/shopProducts";
import ProductCard from "@/components/shop/ProductCard";
import { useToast } from "@/hooks/use-toast";

type SortBy = "recent" | "views";

const formatViews = (n: number) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(".0", "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(".0", "") + "K";
  return String(n);
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });

const GirautoTV = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("Todas");
  const [sortBy, setSortBy] = useState<SortBy>("recent");
  const [active, setActive] = useState<TvVideo | null>(null);
  const { toast } = useToast();

  const filtered = useMemo(() => {
    let list = tvVideos.filter((v) => {
      if (category !== "Todas" && v.category !== category) return false;
      if (search && !v.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
    list = [...list].sort((a, b) =>
      sortBy === "views"
        ? b.views - a.views
        : new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
    return list;
  }, [search, category, sortBy]);

  const share = async (video: TvVideo) => {
    const url = video.tiktokUrl;
    if (navigator.share) {
      try {
        await navigator.share({ title: video.title, url });
        return;
      } catch {
        /* user canceled */
      }
    }
    await navigator.clipboard.writeText(url);
    toast({ title: "Link copiado!", description: "Compartilhe onde quiser." });
  };

  const related = active ? getProductsByIds(active.relatedProductIds) : [];

  return (
    <section id="girauto-tv" className="py-16 md:py-24 bg-brand-black relative overflow-hidden">
      {/* glow */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-brand-red/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-brand-red text-sm font-semibold uppercase tracking-widest font-body mb-3">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            Girauto TV
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            Conteúdo automotivo <span className="text-brand-red">de verdade</span>
          </h2>
          <p className="mt-4 text-white/60 font-body max-w-2xl mx-auto">
            Projetos reais, testes, modificações, dicas e conteúdo automotivo diário pela equipe Girauto.
          </p>
        </div>

        {/* Toolbar */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8 flex flex-col lg:flex-row gap-3 backdrop-blur-sm">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar vídeo..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder:text-white/30 text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red/50 transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto -mx-1 px-1 lg:overflow-visible">
            {(["recent", "views"] as SortBy[]).map((s) => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-semibold font-body border transition-all ${
                  sortBy === s
                    ? "bg-brand-red text-white border-brand-red"
                    : "bg-white/5 text-white/60 border-white/10 hover:text-white"
                }`}
              >
                {s === "recent" ? "Mais Recentes" : "Mais Vistos"}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 -mx-4 px-4 scrollbar-thin">
          {["Todas", ...videoCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide font-body border transition-all ${
                category === cat
                  ? "bg-brand-red text-white border-brand-red shadow-red"
                  : "bg-white/5 text-white/60 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-white/50 font-body">
            Nenhum vídeo encontrado.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((v) => (
              <article
                key={v.id}
                onClick={() => setActive(v)}
                className="group cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-red/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-red animate-fade-in"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-brand-red/95 backdrop-blur-sm flex items-center justify-center shadow-red transform transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-red">
                      <Play size={22} className="text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  <Badge className="absolute top-3 left-3 bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                    {v.category}
                  </Badge>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-xs font-body bg-black/50 backdrop-blur-sm rounded-md px-2 py-1">
                    <Eye size={12} />
                    {formatViews(v.views)}
                  </div>

                  {/* Watch button on hover */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1 bg-white text-brand-black text-xs font-bold px-3 py-1.5 rounded-md">
                      Assistir
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-display font-bold text-white text-base leading-snug line-clamp-2 mb-2 group-hover:text-brand-red transition-colors">
                    {v.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/40 text-xs font-body">
                    <Calendar size={12} />
                    {formatDate(v.publishedAt)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-start sm:items-center justify-center p-0 sm:p-6 animate-fade-in overflow-y-auto"
          onClick={() => setActive(null)}
        >
          <div
            className="relative bg-brand-black border border-white/10 rounded-none sm:rounded-2xl w-full max-w-4xl my-0 sm:my-8 overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-brand-red text-white flex items-center justify-center transition-colors"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>

            {/* Video */}
            <div className="relative aspect-video bg-black">
              <iframe
                src={active.embedUrl}
                title={active.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              {/* Fallback overlay if embed blocked */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <img
                  src={active.thumbnail}
                  alt=""
                  className="w-full h-full object-cover opacity-0"
                  aria-hidden
                />
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge className="bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                  {active.category}
                </Badge>
                <span className="text-white/40 text-xs font-body flex items-center gap-1">
                  <Eye size={12} /> {formatViews(active.views)} visualizações
                </span>
                <span className="text-white/30 text-xs font-body">•</span>
                <span className="text-white/40 text-xs font-body">{formatDate(active.publishedAt)}</span>
              </div>

              <h3 className="font-display font-black text-white text-xl sm:text-2xl mb-3">
                {active.title}
              </h3>
              <p className="text-white/60 font-body text-sm leading-relaxed mb-5">
                {active.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <Button
                  onClick={() => share(active)}
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 hover:text-white rounded-xl"
                >
                  <Share2 size={16} className="mr-2" />
                  Compartilhar
                </Button>
                <Button
                  asChild
                  className="bg-brand-red hover:bg-brand-red-light text-white rounded-xl shadow-red"
                >
                  <a href={active.tiktokUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Seguir no TikTok
                  </a>
                </Button>
              </div>

              {related.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-body">
                      Produtos Utilizados Neste Projeto
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {related.map((p) => (
                      <ProductCard key={p.id} product={p} compact />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GirautoTV;
