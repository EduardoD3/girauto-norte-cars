import { useMemo, useState } from "react";
import { Search, ShieldCheck, Headphones, Award, BadgeCheck, Truck, Handshake, ArrowRight, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/shop/ProductCard";
import { products, productCategories, type Product } from "@/data/shopProducts";
import { useShop } from "@/components/shop/ShopContext";

type SortKey = "relevance" | "price-asc" | "price-desc" | "best-sellers" | "rating" | "recent";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "relevance", label: "Relevância" },
  { value: "price-asc", label: "Menor preço" },
  { value: "price-desc", label: "Maior preço" },
  { value: "best-sellers", label: "Mais vendidos" },
  { value: "rating", label: "Mais avaliados" },
  { value: "recent", label: "Mais recentes" },
];

const formatBRL = (n: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);

const trustItems = [
  { icon: ShieldCheck, title: "Compra Segura", desc: "Pagamento protegido e dados criptografados" },
  { icon: Headphones, title: "Atendimento Especializado", desc: "Equipe técnica para tirar dúvidas reais" },
  { icon: Award, title: "Selecionados pela Equipe", desc: "Curadoria por quem entende de carro" },
  { icon: BadgeCheck, title: "Garantia de Procedência", desc: "Produtos originais e nota fiscal" },
  { icon: Handshake, title: "Parceiros Oficiais", desc: "Marcas reconhecidas no automobilismo" },
  { icon: Truck, title: "Frete para Todo o Brasil", desc: "Envio rápido para todas as regiões" },
];

const GirautoShop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("Recomendados pela Girauto");
  const [sortBy, setSortBy] = useState<SortKey>("relevance");
  const [quickView, setQuickView] = useState<Product | null>(null);

  const { compare, toggleCompare, isInCompare, clearCompare, wishlist } = useShop();

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (
        category !== "Recomendados pela Girauto" &&
        category !== "Todas" &&
        p.category !== category
      )
        return false;
      if (category === "Recomendados pela Girauto" && !(p.teamPick || p.badge === "Recomendado"))
        return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "best-sellers":
          return b.sales - a.sales;
        case "rating":
          return b.rating - a.rating;
        case "recent":
          return new Date(b.releasedAt).getTime() - new Date(a.releasedAt).getTime();
        default:
          return 0;
      }
    });
    return list;
  }, [search, category, sortBy]);

  const teamPicks = products.filter((p) => p.teamPick).slice(0, 4);
  const bestSellers = [...products].sort((a, b) => b.sales - a.sales).slice(0, 4);
  const launches = [...products].sort((a, b) => +new Date(b.releasedAt) - +new Date(a.releasedAt)).slice(0, 4);

  const compareList = products.filter((p) => compare.has(p.id));

  return (
    <section id="loja" className="bg-background">
      {/* HERO */}
      <div className="relative overflow-hidden bg-brand-black border-b border-white/10">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-brand-red text-sm font-semibold uppercase tracking-widest font-body mb-4">
              <Award size={14} /> Loja Girauto
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white leading-tight mb-4">
              Equipamentos, acessórios e ferramentas escolhidos por quem{" "}
              <span className="text-brand-red">vive o automobilismo</span>.
            </h2>
            <p className="text-white/70 font-body text-base md:text-lg mb-8">
              Seleção especial de produtos recomendados pela equipe Girauto.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => document.getElementById("loja-catalogo")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-brand-red hover:bg-brand-red-light text-white font-bold rounded-xl shadow-red"
              >
                Explorar Produtos
                <ArrowRight size={18} className="ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("girauto-tv")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white rounded-xl"
              >
                Ver Girauto TV
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion strips */}
      <ConversionRow title="Escolha da Equipe Girauto" subtitle="Selecionados a dedo pelos nossos especialistas" items={teamPicks} onQuickView={setQuickView} />
      <ConversionRow title="Mais Vendidos" subtitle="O que está saindo mais" items={bestSellers} alt onQuickView={setQuickView} />
      <ConversionRow title="Lançamentos" subtitle="Acabaram de chegar" items={launches} onQuickView={setQuickView} />

      {/* Catalog */}
      <div id="loja-catalogo" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-brand-red text-sm font-semibold uppercase tracking-widest font-body mb-3">
              Catálogo Completo
            </span>
            <h3 className="font-display font-black text-3xl md:text-4xl text-foreground">
              Tudo para o seu <span className="text-brand-red">projeto</span>
            </h3>
          </div>

          {/* Toolbar */}
          <div className="bg-card border border-brand-border rounded-2xl p-4 mb-6 shadow-card flex flex-col lg:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Busca instantânea..."
                className="w-full bg-background border border-brand-border rounded-xl pl-10 pr-4 py-2.5 text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red/50"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="bg-background border border-brand-border rounded-xl px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-brand-red/40"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  Ordenar: {o.label}
                </option>
              ))}
            </select>
            <div className="flex items-center gap-2 text-xs font-body text-muted-foreground bg-background border border-brand-border rounded-xl px-3 py-2.5">
              <Heart size={14} className="text-brand-red" />
              {wishlist.size} favoritos
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-3 mb-8 -mx-4 px-4">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide font-body border transition-all ${
                  category === cat
                    ? "bg-brand-red text-white border-brand-red shadow-red"
                    : "bg-card text-muted-foreground border-brand-border hover:text-foreground hover:border-brand-red/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground font-body">
              Nenhum produto encontrado.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((p) => (
                <div key={p.id} className="relative">
                  <ProductCard product={p} onQuickView={setQuickView} />
                  <button
                    onClick={() => toggleCompare(p.id)}
                    className={`absolute top-3 right-12 text-[10px] font-bold uppercase tracking-wider rounded-md px-2 py-1 backdrop-blur-sm transition-all ${
                      isInCompare(p.id)
                        ? "bg-brand-red text-white"
                        : "bg-white/90 text-brand-black hover:bg-brand-black hover:text-white opacity-0 group-hover:opacity-100"
                    }`}
                    aria-label="Comparar"
                  >
                    {isInCompare(p.id) ? "Comparando" : "Comparar"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Trust section */}
      <div className="py-16 md:py-20 bg-card border-y border-brand-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-brand-red text-sm font-semibold uppercase tracking-widest font-body mb-3">
              Por que comprar na Girauto
            </span>
            <h3 className="font-display font-black text-3xl md:text-4xl text-foreground">
              Confiança em <span className="text-brand-red">cada detalhe</span>
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {trustItems.map((t) => (
              <div
                key={t.title}
                className="bg-background border border-brand-border rounded-2xl p-6 hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                  <t.icon size={22} />
                </div>
                <h4 className="font-display font-bold text-foreground text-base mb-1">{t.title}</h4>
                <p className="text-muted-foreground font-body text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compare bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-3xl bg-brand-black text-white rounded-2xl shadow-card-hover border border-white/10 p-4 animate-fade-in">
          <div className="flex items-center justify-between gap-3 mb-3">
            <div>
              <div className="font-display font-bold text-sm">Comparador ({compareList.length}/4)</div>
              <div className="text-white/50 text-xs font-body">Selecione até 4 produtos</div>
            </div>
            <button onClick={clearCompare} className="text-white/50 hover:text-white text-xs font-body">
              Limpar
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {compareList.map((p) => (
              <div key={p.id} className="bg-white/5 rounded-xl p-2 flex items-center gap-2">
                <img src={p.image} alt="" className="w-10 h-10 rounded-md object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold truncate">{p.name}</div>
                  <div className="text-[11px] text-brand-red font-bold">{formatBRL(p.price)}</div>
                </div>
                <button onClick={() => toggleCompare(p.id)} className="text-white/40 hover:text-white">
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick view */}
      {quickView && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setQuickView(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-3xl w-full overflow-hidden animate-scale-in grid md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={quickView.image} alt={quickView.name} className="w-full aspect-square object-cover" />
            <div className="p-6 flex flex-col">
              <button
                onClick={() => setQuickView(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center"
              >
                <X size={16} />
              </button>
              <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider mb-1">
                {quickView.category}
              </span>
              <h3 className="font-display font-black text-2xl text-foreground mb-3">{quickView.name}</h3>
              <p className="text-muted-foreground font-body text-sm mb-5">{quickView.shortDescription}</p>
              {quickView.oldPrice && (
                <div className="text-sm text-muted-foreground line-through font-body">
                  {formatBRL(quickView.oldPrice)}
                </div>
              )}
              <div className="font-display font-black text-brand-red text-3xl mb-4">
                {formatBRL(quickView.price)}
              </div>
              <Button className="bg-brand-red hover:bg-brand-red-light text-white rounded-xl font-bold mt-auto">
                Comprar Agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const ConversionRow = ({
  title,
  subtitle,
  items,
  alt = false,
  onQuickView,
}: {
  title: string;
  subtitle: string;
  items: Product[];
  alt?: boolean;
  onQuickView?: (p: Product) => void;
}) => (
  <div className={`py-12 md:py-16 ${alt ? "bg-card border-y border-brand-border" : "bg-background"}`}>
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between mb-6 flex-wrap gap-2">
        <div>
          <span className="block text-brand-red text-xs font-bold uppercase tracking-widest font-body mb-1">
            {subtitle}
          </span>
          <h3 className="font-display font-black text-2xl md:text-3xl text-foreground">
            {title}
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
        ))}
      </div>
    </div>
  </div>
);

export default GirautoShop;
