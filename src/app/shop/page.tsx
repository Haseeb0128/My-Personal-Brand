import { shopSubLinks } from "@/constants/nav-links";
import React from "react";

const Shop = () => {
  return (
    <div className="min-h-screen bg-white px-[15px] sm:px-[25px] md:px-[50px] py-[40px] md:py-[50px]">
      <h2 className="text-black text-[48px] font-semibold mb-[30px]">Shop</h2>
      <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[25px]">
        {shopSubLinks?.map((link, index: number) => {
          return (
            <div key={index} className="border h-[350px]">
              1
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
