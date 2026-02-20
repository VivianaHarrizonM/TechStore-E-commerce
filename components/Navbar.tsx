"use client";

import Container from "./Container";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <div className="bg-slate-950 border-b border-slate-800">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold">
            TechStore
          </Link>

          <div className="flex gap-6 text-sm">
            <Link href="/productos">Productos</Link>
            <Link href="/carrito">Carrito ({cart.length})</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}