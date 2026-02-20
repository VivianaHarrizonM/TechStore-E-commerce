"use client";

import { useCart } from "@/context/CartContext";

export default function CarritoPage() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <div className="p-6">Carrito vacío</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Carrito</h1>

      {cart.map((item) => (
        <div key={item.id} className="mb-3 border-b pb-2">
          {item.name} x {item.quantity}
        </div>
      ))}
    </div>
  );
}
