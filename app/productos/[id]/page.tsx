import { products } from "@/lib/data";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import Rating from "./Rating";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = Number(id);

  const product = products.find((p) => p.id === numericId);

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        
        {/* Imagen */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            
          />
          
        </div>
        
        {/* Información */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>
          <Rating rating={product.rating} reviews={product.reviews} />
          <p className="text-2xl font-semibold text-green-600">
            ${product.price}
          </p>
          
          <AddToCartButton product={product} />
          
        </div>
      </div>
    </div>
  );
}