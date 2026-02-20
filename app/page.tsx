
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";


export default function HomePage() {
  return (
    <>
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-4">
          TechStore 💻
        </h1>
        <p className="text-slate-400 text-lg">
          Equipamiento premium para desarrolladores y creadores digitales.
        </p>
      </div>
      <div className="bg-red-500 text-white p-10">
  PRUEBA
</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}

