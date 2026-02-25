import ProductCarousel from "@/components/ProductCarousel";

export default function HomePage() {
  return (
    <main className="
      min-h-[calc(100vh-80px)]
      flex flex-col
      items-center
      justify-center
      text-center
      px-4
      gap-8
    ">

      {/* Hero */}
      <section className="max-w-2xl space-y-3">
        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Potencia tu setup ⚡
        </h1>

        <p className="text-slate-400 text-base md:text-lg">
          Equipamiento premium para desarrolladores y creadores digitales.
        </p>

      </section>

      {/* Carrusel */}
      <section className="space-y-4">

        <h2 className="text-xl md:text-2xl font-semibold">
          Productos destacados
        </h2>

        <ProductCarousel />

      </section>

    </main>
  );
}