"use client";

import { use } from "react";
import { products } from "@/lib/data";
import { useCart } from "@/context/CartContext";


export default function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); 
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">
        {product.name}
      </h1>

      <p className="text-xl mb-4">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
