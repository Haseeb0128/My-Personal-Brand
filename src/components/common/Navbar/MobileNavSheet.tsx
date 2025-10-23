import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileNavSheetProps } from "@/constants/interfaces";
import { navbarLinks } from "@/constants/nav-links";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const MobileNavSheet: React.FC<MobileNavSheetProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  handleShopMobileLinkClick,
  handleMobileLinkClick,
  pathname,
}) => {
  // Use the body scroll lock hook
  useBodyScrollLock(isMobileMenuOpen);

  return (
    <Sheet
      modal={true}
      open={isMobileMenuOpen}
      onOpenChange={setIsMobileMenuOpen}
    >
      <SheetTrigger asChild>
        <button className="lg:hidden block cursor-pointer">
          <Menu size={22} />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[80vw] sm:w-[350px] p-6">
        <SheetHeader className="p-0">
          <SheetTitle className="hidden" />
          <div className="border w-[150px] h-[45px] flex items-center justify-center font-heading text-lg font-semibold">
            LOGO
          </div>
        </SheetHeader>

        <Separator className="my-3" />

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col gap-4 font-heading">
          {navbarLinks.map((link, index) => (
            <div key={index}>
              {link.name === "Shop" ? (
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="shop" className="border-none">
                    <div className="flex items-center justify-between w-full">
                      <Link
                        href={link.path}
                        onClick={handleShopMobileLinkClick}
                        className={`block rounded-md text-[14px] font-semibold transition-colors ${
                          pathname === link.path
                            ? "text-[#a4a4a4]"
                            : "hover:text-[#a4a4a4]"
                        }`}
                      >
                        {link.name}
                      </Link>
                      <AccordionTrigger className="py-2 hover:no-underline hover:bg-gray-50 px-2 rounded-md text-[14px] font-semibold" />
                    </div>
                    <AccordionContent className="pt-2">
                      <div className="flex flex-col gap-2 pl-4">
                        {link.subPaths.map((category, i) => (
                          <Link
                            key={i}
                            href={category.path}
                            onClick={handleMobileLinkClick}
                            className="block px-2 py-2 rounded-md text-[13.5px] text-gray-700 hover:bg-gray-100 hover:text-black transition-all"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  href={link.path}
                  onClick={handleMobileLinkClick}
                  className={`block py-2 rounded-md text-[14px] font-semibold transition-colors ${
                    pathname === link.path
                      ? "text-[#a4a4a4]"
                      : "hover:text-[#a4a4a4]"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSheet;
