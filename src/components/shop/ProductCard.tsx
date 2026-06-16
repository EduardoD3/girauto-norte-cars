import { useState } from "react";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/shopProducts";
import { useToast } from "@/hooks/use-toast";
import { useShop } from "@/components/shop/ShopContext";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
  onQuickView?: (p: Product) => void;
}

const formatBRL = (n: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);

const badgeColor: Record<string, string> = {
  "Mais Vendido": "bg-brand-red text-white",
  Novo: "bg-emerald-600 text-white",
  "Escolha da Equipe": "bg-brand-black text-white border border-white/20",
  Recomendado: "bg-amber-500 text-black",
  Oferta: "bg-red-600 text-white",
};

const ProductCard = ({ product, compact = false, onQuickView }: ProductCardProps) => {
  const [hover, setHover] = useState(false);
  const { toast } = useToast();
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const wishlisted = isWishlisted(product.id);
  const installments = Math.ceil(product.price / 10);
  const installmentValue = product.price / 10;

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group bg-card border border-brand-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={hover && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {product.badge && (
          <Badge
            className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
              badgeColor[product.badge] ?? "bg-brand-red text-white"
            }`}
          >
            {product.badge}
          </Badge>
        )}

        {product.oldPrice && (
          <Badge className="absolute top-3 right-3 bg-brand-black text-white text-[10px] font-bold rounded-md">
            -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </Badge>
        )}

        {/* Hover actions */}
        {!compact && (
          <div className="absolute right-3 bottom-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product.id);
                toast({
                  title: wishlisted ? "Removido dos favoritos" : "Adicionado aos favoritos",
                });
              }}
              aria-label="Favoritar"
              className={`w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all ${
                wishlisted ? "bg-brand-red text-white" : "bg-white/95 text-brand-black hover:bg-brand-red hover:text-white"
              }`}
            >
              <Heart size={16} fill={wishlisted ? "currentColor" : "none"} />
            </button>
            {onQuickView && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onQuickView(product);
                }}
                aria-label="Visualização rápida"
                className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm text-brand-black hover:bg-brand-red hover:text-white flex items-center justify-center transition-all"
              >
                <Eye size={16} />
              </button>
            )}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider font-body mb-1">
          {product.category}
        </span>
        <h3 className={`font-display font-bold text-foreground leading-tight mb-2 line-clamp-2 ${compact ? "text-sm" : "text-base"}`}>
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={12}
                className={i <= Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-body">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>

        <div className="mt-auto">
          {product.oldPrice && (
            <div className="text-xs text-muted-foreground line-through font-body">
              {formatBRL(product.oldPrice)}
            </div>
          )}
          <div className={`font-display font-black text-brand-red ${compact ? "text-lg" : "text-xl"}`}>
            {formatBRL(product.price)}
          </div>
          <div className="text-[11px] text-muted-foreground font-body mb-3">
            ou {installments}x de {formatBRL(installmentValue)}
          </div>

          <Button
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product.id);
              toast({ title: "Adicionado ao carrinho", description: product.name });
            }}
            className="w-full bg-brand-red hover:bg-brand-red-light text-white font-semibold rounded-xl"
          >
            <ShoppingCart size={14} className="mr-1.5" />
            {compact ? "Comprar" : "Adicionar ao Carrinho"}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
