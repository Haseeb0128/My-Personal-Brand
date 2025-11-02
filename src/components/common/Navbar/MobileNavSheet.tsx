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
import Logo from "../Logo";

const MobileNavSheet: React.FC<MobileNavSheetProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
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
          <Logo />
        </SheetHeader>

        <Separator className="my-3" />

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col gap-4 font-heading">
          {navbarLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleMobileLinkClick}
              className={`block py-2 rounded-md text-[14px] font-semibold transition-colors ${
                pathname === link.path
                  ? "text-[#a4a4a4]"
                  : "hover:text-[#a4a4a4]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSheet;
