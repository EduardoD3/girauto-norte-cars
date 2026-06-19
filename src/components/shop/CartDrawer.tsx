import { ShoppingCart, X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useShop } from "@/components/shop/ShopContext";
import { products } from "@/data/shopProducts";

const formatBRL = (n: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);

const WHATSAPP_NUMBER = "5591000000000";

const CartDrawer = () => {
  const {
    isCartOpen,
    closeCart,
    cart,
    cartCount,
    cartTotal,
    updateQty,
    removeFromCart,
    clearCart,
  } = useShop();

  const items = cart
    .map((c) => {
      const p = products.find((pr) => pr.id === c.id);
      return p ? { ...p, qty: c.qty } : null;
    })
    .filter(Boolean) as (typeof products[number] & { qty: number })[];

  const handleCheckout = () => {
    const lines = items
      .map((i) => `• ${i.qty}x ${i.name} — ${formatBRL(i.price * i.qty)}`)
      .join("%0A");
    const msg = `Olá Girauto! Quero finalizar meu pedido:%0A%0A${lines}%0A%0A*Total: ${formatBRL(
      cartTotal
    )}*`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={(o) => (o ? null : closeCart())}>
      <SheetContent className="w-full sm:max-w-md bg-card border-l border-brand-border p-0 flex flex-col">
        <SheetHeader className="px-6 py-5 border-b border-brand-border">
          <SheetTitle className="flex items-center gap-2 font-display text-foreground">
            <ShoppingCart size={18} className="text-brand-red" />
            Seu Carrinho
            <span className="text-xs font-body font-normal text-muted-foreground">
              ({cartCount} {cartCount === 1 ? "item" : "itens"})
            </span>
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <ShoppingCart size={26} className="text-muted-foreground" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-1">Carrinho vazio</h3>
            <p className="text-sm text-muted-foreground font-body mb-6">
              Adicione produtos da Loja Girauto para começar.
            </p>
            <Button
              onClick={() => {
                closeCart();
                document.getElementById("loja")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-brand-red hover:bg-brand-red-light text-white rounded-xl"
            >
              Ver produtos
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 pb-4 border-b border-brand-border last:border-0">
                  <img src={i.image} alt={i.name} className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-sm text-foreground line-clamp-2">
                      {i.name}
                    </h4>
                    <div className="text-brand-red font-display font-black text-sm mt-1">
                      {formatBRL(i.price)}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-background border border-brand-border rounded-lg">
                        <button
                          onClick={() => updateQty(i.id, i.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold font-body w-6 text-center">{i.qty}</span>
                        <button
                          onClick={() => updateQty(i.id, i.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(i.id)}
                        className="text-muted-foreground hover:text-brand-red"
                        aria-label="Remover"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-border p-6 space-y-4 bg-background">
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-muted-foreground">Total</span>
                <span className="font-display font-black text-2xl text-brand-red">
                  {formatBRL(cartTotal)}
                </span>
              </div>
              <Button
                onClick={handleCheckout}
                size="lg"
                className="w-full bg-brand-red hover:bg-brand-red-light text-white font-bold rounded-xl"
              >
                <MessageCircle size={18} className="mr-2" />
                Finalizar via WhatsApp
              </Button>
              <button
                onClick={clearCart}
                className="w-full text-xs text-muted-foreground hover:text-brand-red font-body"
              >
                Esvaziar carrinho
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
