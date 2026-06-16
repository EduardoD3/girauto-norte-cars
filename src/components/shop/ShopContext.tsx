import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface ShopState {
  wishlist: Set<string>;
  cart: string[];
  compare: Set<string>;
  toggleWishlist: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  addToCart: (id: string) => void;
  toggleCompare: (id: string) => void;
  isInCompare: (id: string) => boolean;
  clearCompare: () => void;
}

const ShopContext = createContext<ShopState | null>(null);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<string[]>([]);
  const [compare, setCompare] = useState<Set<string>>(new Set());

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

  const addToCart = useCallback((id: string) => {
    setCart((prev) => [...prev, id]);
  }, []);

  return (
    <ShopContext.Provider
      value={{
        wishlist,
        cart,
        compare,
        toggleWishlist,
        isWishlisted: (id) => wishlist.has(id),
        addToCart,
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
