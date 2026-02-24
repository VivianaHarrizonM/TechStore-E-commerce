"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();
  const subtotal = cart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

const shipping = subtotal > 2000 ? 0 : 150;

const total = subtotal + shipping;



  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Carrito</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4 flex justify-between items-center"
        >
          <div>
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-slate-400">
              ${item.price} x {item.quantity}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-black font-bold transition"
            >
              -
            </button>

            <span className="text-lg font-semibold w-6 text-center">
              {item.quantity}
            </span>

            <button
              onClick={() => addToCart(item)}
              className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-black font-bold transition"
            >
              +
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
            >
              🗑
            </button>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
      <div className="mt-6 border-t pt-6 space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>

        {subtotal < 2000 ? (
          <p className="text-sm text-amber-500">
            Agrega ${2000 - subtotal} más para obtener envío gratis 🚚
          </p>
        ) : (
          <p className="text-sm text-emerald-500 font-semibold">
            ✅ ¡Felicidades! Tienes envío gratis 🚚
          </p>
        )}

        <div className="flex justify-between">
          <span>Envío</span>
          <span>${shipping}</span>
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    )}
    </div>
  );
}