import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Star } from "lucide-react";
import { ProductCardProps } from "@/constants/interfaces";
import Image from "next/image";

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  rating,
  imageUrl = "/assets/images/placeholder.png",
  isOnSale = false,
  productSlug,
  oldPrice,
  isSoldOut,
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={18}
          className={
            i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-w-[290px] border overflow-hidden hover:shadow-lg transition">
      <Link href={`/products/${productSlug}`}>
        <div className="h-[250px] w-full relative">
          <Image
            src={imageUrl}
            alt={name}
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
          {isOnSale && (
            <p className="bg-black text-white text-sm font-heading w-fit py-1 px-2 rounded-md absolute top-2.5 left-2.5">
              Sale
            </p>
          )}
          {isSoldOut && (
            <p className="bg-black text-white text-sm font-heading w-fit py-1 px-2 rounded-md absolute top-2.5 right-2.5">
              Sold Out
            </p>
          )}
        </div>

        <div className="h-[134px] w-full flex flex-col gap-2.5 p-2.5">
          <div className="flex items-center gap-1">{renderStars(rating)}</div>

          <h6 className="font-semibold text-[18px] line-clamp-2">{name}</h6>

          <div className="flex items-center gap-3">
            {isOnSale && <del className="text-black">{oldPrice} Rs</del>}
            <p className="text-gray-700 font-medium">{price} Rs</p>
          </div>
        </div>
      </Link>

      <div className="px-2.5 pb-2.5">
        <Button className="mt-auto w-full">Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
