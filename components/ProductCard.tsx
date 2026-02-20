"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300 flex flex-col border border-slate-100">
      <Link href={`/productos/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover rounded-2xl mb-6"
        />

        <h2 className="text-xl font-semibold mb-2">
          {product.name}
        </h2>

        <p className="text-slate-500 mb-6">
          ${product.price}
        </p>
      </Link>
    </div>
  );
}