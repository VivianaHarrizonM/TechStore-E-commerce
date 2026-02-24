"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-emerald-500 hover:bg-emerald-600 text-black px-4 py-2 rounded-lg font-semibold transition"
    >
      Agregar al carrito
    </button>
  );
}