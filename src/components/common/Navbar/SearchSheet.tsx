import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search } from "lucide-react";
import React from "react";

const SearchSheet = () => {
  return (
    <Sheet modal={true}>
      <SheetTrigger asChild>
        <button className="cursor-pointer">
          <Search size={22} />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[90vw] sm:w-[400px] p-6">
        <SheetHeader className="p-0">
          <SheetTitle className="font-heading text-lg font-semibold">
            Search
          </SheetTitle>
        </SheetHeader>
        <div className="border w-full flex items-center gap-2.5 px-2 py-2 rounded-lg bg-white">
          <Search size={20} />
          <input
            type="search"
            placeholder="Search..."
            className="w-full focus:outline-none text-sm"
          />
        </div>
        <Separator className="my-4" />
        <div className="border flex flex-col gap-5 w-full h-[calc(100vh-195px)] overflow-y-auto">
          List
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
