import CartItem from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Handbag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="cursor-pointer relative mr-[10px]">
          <p className="absolute w-[20px] h-[20px] rounded-full text-white bg-black top-[-12px] right-[-15px] flex items-center justify-center font-body text-[11px]">
            10
          </p>
          <Handbag size={22} />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[90vw] sm:w-[400px] p-6">
        <SheetHeader className="p-0">
          <SheetTitle className="font-heading text-lg font-semibold">
            Your Cart
          </SheetTitle>
          <SheetDescription className="font-body text-sm text-gray-500">
            Review and manage the items in your shopping cart.
          </SheetDescription>
        </SheetHeader>

        <Separator className="my-4" />

        <div className="flex flex-col gap-4 font-body h-[calc(100vh-200px)] overflow-y-auto">
          <CartItem />
          <CartItem />
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between items-center font-heading text-lg font-semibold">
          <span>Total:</span>
          <span>$280</span>
        </div>
        <Link href="/checkout" className="w-full">
          <Button className="w-full">Proceed to Checkout</Button>
        </Link>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
