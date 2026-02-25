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
    <div className="bg-slate-950 border-b border-slate-800">
      <Container>
        <div className="flex items-center justify-between py-4">

          <Link href="/" className="text-2xl font-bold">
            TechStore
          </Link>

          <div className="flex gap-6 text-sm items-center">

            <Link href="/productos">
              💻 Productos
            </Link>

            <Link href="/carrito">
              🛒 Carrito {totalItems > 0 && `(${totalItems})`}
            </Link>

            {user ? (
              <>
                <span>
                  👋 {user.name}
                </span>

                <button
                  onClick={logout}
                  className="text-red-400 hover:text-red-300"
                >
                  Salir
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  👤 Login
                </Link>

                <Link href="/register">
                  📝 Registro
                </Link>
              </>
            )}

          </div>

        </div>
      </Container>
    </div>
  );
}