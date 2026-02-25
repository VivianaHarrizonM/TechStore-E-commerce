"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const { user } = useAuth();
  const router = useRouter();

  const subtotal = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal > 2000 ? 0 : 150;

  const total = subtotal + shipping;

  function handleCheckout() {

    if (!user) {
      router.push("/login");
      return;
    }

    clearCart();

    alert("Compra realizada ✅");

    router.push("/");
  }

  if (cart.length === 0)
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">

        <h1 className="text-3xl font-bold mb-4">
          🛒 Tu carrito está vacío
        </h1>

        <p className="text-slate-400">
          Agrega productos para comenzar
        </p>

      </div>
    );

  return (

    <div className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        🛒 Carrito
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* productos */}
        <div className="md:col-span-2 space-y-4">

          {cart.map((item) => (

            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex gap-4 items-center"
            >

              {/* imagen */}
              <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* info */}
              <div className="flex-1">

                <p className="font-semibold">
                  {item.name}
                </p>

                <p className="text-slate-400 text-sm">
                  ${item.price} c/u
                </p>

                <p className="text-emerald-400 font-semibold text-sm">
                  $
                  {item.price *
                    item.quantity}
                </p>

              </div>

              {/* controles */}
              <div className="flex items-center gap-2">

                <button
                  onClick={() =>
                    decreaseQuantity(
                      item.id
                    )
                  }
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700"
                >
                  −
                </button>

                <span className="w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    addToCart(item)
                  }
                  className="w-8 h-8 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-black font-bold"
                >
                  +
                </button>

                <button
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                  className="ml-3 text-red-500 hover:text-red-400"
                >
                  🗑
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* resumen */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-fit space-y-4">

          <h2 className="text-xl font-semibold">
            Resumen
          </h2>

          <div className="flex justify-between text-slate-400">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between text-slate-400">
            <span>Envío</span>
            <span>
              {shipping === 0
                ? "Gratis"
                : `$${shipping}`}
            </span>
          </div>

          {shipping > 0 && (
            <p className="text-sm text-amber-400">
              Agrega $
              {2000 - subtotal} más
              para envío gratis 🚚
            </p>
          )}

          <div className="border-t border-slate-700 pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>
              ${total}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-3 rounded-xl transition"
          >
            Finalizar compra
          </button>

        </div>

      </div>

    </div>

  );
}