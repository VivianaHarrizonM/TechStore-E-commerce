"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/lib/types";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void; // ✅ agregar
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (cart.length === 0) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function addToCart(product: Product) {

    setCart((prev) => {

      const exists = prev.find(
        (p) => p.id === product.id
      );

      if (exists) {
        return prev.map((p) =>
          p.id === product.id
            ? {
                ...p,
                quantity: p.quantity + 1,
              }
            : p
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];

    });

  }

  function decreaseQuantity(id: number) {

    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id
            ? {
                ...p,
                quantity: p.quantity - 1,
              }
            : p
        )
        .filter((p) => p.quantity > 0)
    );

  }

  function removeFromCart(id: number) {

    setCart((prev) =>
      prev.filter((p) => p.id !== id)
    );

  }

  function clearCart() {

    setCart([]);

    localStorage.removeItem("cart");

  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart, // ✅ exportar
      }}
    >
      {children}
    </CartContext.Provider>
  );

}

export function useCart() {

  const context = useContext(CartContext);

  if (!context)
    throw new Error(
      "useCart fuera de provider"
    );

  return context;

}