"use client";

import { products } from "@/lib/data";
import { useState } from "react";
import Link from "next/link";

export default function ProductCarousel() {

  const [index, setIndex] = useState(0);

  function next() {
    setIndex((prev) => (prev + 1) % products.length);
  }

  function prev() {
    setIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  }

  function getIndex(offset: number): number {
    return (index + offset + products.length) % products.length;
  }

  const left = products[getIndex(-1)];
  const center = products[index];
  const right = products[getIndex(1)];

  return (
    <div className="w-full flex justify-center items-center py-16">

      <div className="relative flex items-center justify-center gap-10">

        {/* flecha izquierda */}
        <button
          onClick={prev}
          className="
            absolute left-0
            -translate-x-full
            text-2xl
            bg-slate-900/80
            border border-slate-700
            w-14 h-14
            rounded-full
            hover:bg-emerald-500 hover:text-black
            transition-all duration-300
            shadow-lg
          "
        >
          ←
        </button>

        {/* producto izquierdo */}
        <Link href={`/productos/${left.id}`}>
          <div className="
            w-[280px] h-[280px]
            bg-slate-900
            rounded-xl
            flex items-center justify-center
            opacity-50
            scale-90
            hover:opacity-80
            transition
            cursor-pointer
          ">
            <img
              src={left.image}
              alt={left.name}
              className="max-h-[85%] object-contain"
            />
          </div>
        </Link>

        {/* producto central */}
        <Link href={`/productos/${center.id}`}>
          <div className="
            w-[520px] h-[520px]
            bg-slate-900
            rounded-2xl
            flex items-center justify-center
            shadow-2xl
            hover:scale-105
            transition
            cursor-pointer
            z-10
          ">
            <img
              src={center.image}
              alt={center.name}
              className="max-h-[90%] object-contain"
            />
          </div>
        </Link>

        {/* producto derecho */}
        <Link href={`/productos/${right.id}`}>
          <div className="
            w-[280px] h-[280px]
            bg-slate-900
            rounded-xl
            flex items-center justify-center
            opacity-50
            scale-90
            hover:opacity-80
            transition
            cursor-pointer
          ">
            <img
              src={right.image}
              alt={right.name}
              className="max-h-[85%] object-contain"
            />
          </div>
        </Link>

        {/* flecha derecha */}
        <button
          onClick={next}
          className="
            absolute right-0
            translate-x-full
            text-2xl
            bg-slate-900/80
            border border-slate-700
            w-14 h-14
            rounded-full
            hover:bg-emerald-500 hover:text-black
            transition-all duration-300
            shadow-lg
          "
        >
          →
        </button>

      </div>

    </div>
  );
}