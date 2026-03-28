import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = { sm: 'h-4 w-4', md: 'h-6 w-6', lg: 'h-8 w-8' };

/**
 * Renders stars with standard rounding: 4.9 → 5 filled stars.
 * The numeric rating text (4.9) is always displayed truthfully alongside.
 */
export function StarRating({ rating, size = 'md', className = '' }: StarRatingProps) {
  const filledStars = Math.round(rating);

  return (
    <div className={`flex items-center gap-0.5 ${className}`} role="img" aria-label={`${rating} από 5 αστέρια`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${sizeMap[size]} ${
            i <= filledStars ? 'fill-[#E31E24] text-[#E31E24]' : 'text-[#D4D4D4]'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
