"use client";

import Link from "next/link";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {

  const { addToCart } = useCart(); 

  return (
    <div className="bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-slate-800">
      
      <Link href={`/productos/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover rounded-xl mb-6"
        />

        <h2 className="text-xl font-semibold mb-2 text-white">
          {product.name}
        </h2>

        <p className="text-slate-400 text-lg font-medium mb-4">
          ${product.price}
        </p>
      </Link>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-white text-black rounded-xl py-2 font-medium hover:bg-slate-200 transition"
      >
        Agregar al carrito
      </button>

    </div>
  );
}