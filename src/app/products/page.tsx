import SelectField from "@/components/common/SelectField";
import ProductCard from "@/components/products/ProductCard";
import { sortByOptions } from "@/constants/other";
import React from "react";

const Shop = () => {
  return (
    <div className="min-h-screen bg-white px-[15px] sm:px-[25px] md:px-[50px] py-10 md:py-[50px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-5 mb-[30px]">
        <h2 className="text-black text-[48px] font-semibold">Products</h2>
        <SelectField
          placeholder="Sort By"
          options={sortByOptions}
          className="w-full sm:w-fit"
        />
      </div>
      <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[25px]">
        <ProductCard
          name="Planet Space Lamps"
          price={1200}
          rating={4}
          isOnSale
          isSoldOut
          oldPrice={1500}
          productSlug="product-name"
        />
        <ProductCard
          name="Planet Space Lamps"
          price={1200}
          rating={3}
          productSlug="product-name"
        />
        <ProductCard
          name="Planet Space Lamps"
          price={1200}
          rating={3}
          productSlug="product-name"
        />
        <ProductCard
          name="Planet Space Lamps"
          price={1200}
          rating={2}
          productSlug="product-name"
        />
      </div>
    </div>
  );
};

export default Shop;
