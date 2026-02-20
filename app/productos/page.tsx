import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function Productos() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">
        Productos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Container>
  );
}
