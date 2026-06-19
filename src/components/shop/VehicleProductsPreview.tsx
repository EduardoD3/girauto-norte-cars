import { ShoppingCart, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/shopProducts";
import { useShop } from "@/components/shop/ShopContext";
import { useToast } from "@/hooks/use-toast";

const formatBRL = (n: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);

const VehicleProductsPreview = () => {
  const { addToCart } = useShop();
  const { toast } = useToast();

  const featured = products
    .filter((p) => p.teamPick || p.bestSeller)
    .slice(0, 6);

  return (
    <section
      aria-label="Produtos recomendados"
      className="bg-gradient-to-b from-background to-card/30 border-y border-brand-border/60"
    >
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-end justify-between gap-4 mb-5 flex-wrap">
          <div>
            <span className="inline-flex items-center gap-2 text-brand-red text-xs font-bold uppercase tracking-widest font-body mb-1.5">
              <Sparkles size={13} />
              Equipamentos selecionados
            </span>
            <h3 className="font-display font-black text-xl md:text-2xl text-foreground">
              Prepare seu próximo carro com a <span className="text-brand-red">Loja Girauto</span>
            </h3>
          </div>
          <button
            onClick={() => document.getElementById("loja")?.scrollIntoView({ behavior: "smooth" })}
            className="text-xs font-bold text-muted-foreground hover:text-brand-red font-body uppercase tracking-wider flex items-center gap-1"
          >
            Ver loja completa <ArrowRight size={12} />
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 snap-x snap-mandatory">
          {featured.map((p) => (
            <article
              key={p.id}
              className="snap-start shrink-0 w-[180px] sm:w-[200px] bg-card border border-brand-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
            >
              <div className="relative aspect-square bg-muted overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {p.badge && (
                  <span className="absolute top-2 left-2 bg-brand-black/90 text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-3 flex-1 flex flex-col">
                <h4 className="font-display font-bold text-foreground text-xs leading-tight line-clamp-2 mb-2 min-h-[2rem]">
                  {p.name}
                </h4>
                {p.oldPrice && (
                  <div className="text-[10px] text-muted-foreground line-through font-body leading-none">
                    {formatBRL(p.oldPrice)}
                  </div>
                )}
                <div className="font-display font-black text-brand-red text-base leading-tight mb-2">
                  {formatBRL(p.price)}
                </div>
                <Button
                  size="sm"
                  onClick={() => {
                    addToCart(p.id);
                    toast({ title: "Adicionado ao carrinho", description: p.name });
                  }}
                  className="mt-auto w-full h-8 bg-brand-red hover:bg-brand-red-light text-white rounded-lg text-xs font-semibold"
                >
                  <ShoppingCart size={12} className="mr-1" />
                  Comprar
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleProductsPreview;
