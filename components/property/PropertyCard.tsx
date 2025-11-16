import Image from "next/image";

interface PropertyCardProps {
  id?: string | number;
  title: string;
  location?: string;
  price: string;      // e.g. "$45 / night"
  rating?: number;    // 0–5
  imageUrl?: string;
  onClick?: () => void;
}

const defaultImage =
  "https://images.unsplash.com/photo-1505691723518-36a0f3c4b3de?w=1200&q=80";

export default function PropertyCard({
 id, title, location, price, rating = 0, imageUrl = defaultImage, onClick
}: PropertyCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer rounded-xl overflow-hidden bg-white 
        shadow-sm border hover:shadow-md transition duration-200
      "
    >
      <div className="relative h-60 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Heart Button */}
        <button title="Add to favorites" className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm rounded-full p-2 hover:bg-white transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 
              2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.099 
              3.75 3 5.765 3 8.25c0 7.22 9 12 9 
              12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>

      <div className="p-4 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[15px]">{title}</h3>
          <div className="flex items-center gap-1 text-sm">
            <span>★</span>
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>

        {location && (
          <p className="text-gray-500 text-sm">{location}</p>
        )}

        <p className="pt-1 font-semibold text-[15px]">{price}</p>
      </div>
    </div>
  );
}
