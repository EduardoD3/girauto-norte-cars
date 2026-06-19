import { createContext, useContext, useState, useCallback, ReactNode, useMemo } from "react";
import { products } from "@/data/shopProducts";

export interface CartItem {
  id: string;
  qty: number;
}

interface ShopState {
  wishlist: Set<string>;
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  compare: Set<string>;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  toggleCompare: (id: string) => void;
  isInCompare: (id: string) => boolean;
  clearCompare: () => void;
}

const ShopContext = createContext<ShopState | null>(null);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<CartItem[]>([]);
  const [compare, setCompare] = useState<Set<string>>(new Set());
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const toggleCompare = useCallback((id: string) => {
    setCompare((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else if (next.size < 4) next.add(id);
      return next;
    });
  }, []);

  const addToCart = useCallback((id: string, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === id);
      if (found) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { id, qty }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    setCart((prev) =>
      qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );
  }, []);

  const { cartCount, cartTotal } = useMemo(() => {
    let count = 0;
    let total = 0;
    for (const item of cart) {
      const p = products.find((pr) => pr.id === item.id);
      if (!p) continue;
      count += item.qty;
      total += p.price * item.qty;
    }
    return { cartCount: count, cartTotal: total };
  }, [cart]);

  return (
    <ShopContext.Provider
      value={{
        wishlist,
        cart,
        cartCount,
        cartTotal,
        compare,
        isCartOpen,
        openCart: () => setCartOpen(true),
        closeCart: () => setCartOpen(false),
        toggleWishlist,
        isWishlisted: (id) => wishlist.has(id),
        addToCart,
        removeFromCart,
        updateQty,
        clearCart: () => setCart([]),
        toggleCompare,
        isInCompare: (id) => compare.has(id),
        clearCompare: () => setCompare(new Set()),
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
};
