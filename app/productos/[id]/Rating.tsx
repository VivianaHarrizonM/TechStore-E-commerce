"use client";

type Props = {
  rating: number;
  reviews: number;
};

export default function Rating({ rating, reviews }: Props) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-2">
      <div className="flex text-yellow-400 text-lg">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i}>★</span>
        ))}

        {hasHalfStar && <span>☆</span>}

        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <span key={i + 10} className="text-gray-300">
            ★
          </span>
        ))}
      </div>

      <span className="text-gray-500 text-sm">
        ({reviews} reseñas)
      </span>
    </div>
  );
}