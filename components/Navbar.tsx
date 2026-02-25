"use client";

import Container from "./Container";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {

  const { cart } = useCart();
  const { user, logout } = useAuth();

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">

      <Container>

        <div className="flex items-center justify-between h-16">

          {/* logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:text-emerald-400 transition"
          >
            ⚡ TechStore
          </Link>


          {/* menu */}
          <nav className="flex items-center gap-6 text-sm">

            <Link
              href="/productos"
              className="text-slate-300 hover:text-white transition"
            >
            💻 Productos
            </Link>


            {/* carrito */}
            <Link
              href="/carrito"
              className="relative text-slate-300 hover:text-white transition"
            >
              🛒 Carrito

              {totalItems > 0 && (
                <span className="
                  absolute
                  -top-2
                  -right-4
                  bg-emerald-500
                  text-black
                  text-xs
                  font-bold
                  px-2
                  py-0.5
                  rounded-full
                ">
                  {totalItems}
                </span>
              )}

            </Link>


            {/* usuario */}
            {user ? (
              <div className="flex items-center gap-3">

                <span className="text-emerald-400 font-medium">
                  👋 {user.name}
                </span>

                <button
                  onClick={logout}
                  className="
                    px-3 py-1
                    rounded-lg
                    bg-slate-800
                    hover:bg-red-600
                    transition
                  "
                >
                  💨 Salir
                </button>

              </div>
            ) : (

              <Link
                href="/login"
                className="
                  px-4 py-2
                  rounded-lg
                  bg-emerald-500
                  hover:bg-emerald-600
                  text-black
                  font-semibold
                  transition
                "
              >
                Iniciar sesión
              </Link>

            )}

          </nav>

        </div>

      </Container>

    </header>
  );
}