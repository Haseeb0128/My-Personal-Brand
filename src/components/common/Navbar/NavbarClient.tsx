"use client";

import { navbarLinks } from "@/constants/nav-links";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import CartSheet from "./CartSheet";
import MobileNavSheet from "./MobileNavSheet";

const NavbarClient = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleShopNavigation = () => {
    router.push("/shop");
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleShopMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="border-b w-full xl:h-[70px] sm:h-[60px] h-[55px] bg-white flex justify-center fixed top-0 left-0 right-0 z-50">
      <div className="w-full h-full max-w-[1536px] flex items-center justify-between xl:px-[30px] sm:px-[20px] px-[15px]">
        <div className="flex items-center sm:gap-[50px] gap-[20px]">
          <MobileNavSheet
            handleMobileLinkClick={handleMobileLinkClick}
            pathname={pathname}
            handleShopMobileLinkClick={handleShopMobileLinkClick}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <div className="border w-[150px] h-[45px] flex items-center justify-center font-heading text-lg font-semibold">
            LOGO
          </div>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-[30px] text-[14px] font-heading font-semibold">
              {navbarLinks.map((link, index) => (
                <li key={index}>
                  {link.name === "Shop" ? (
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger
                            className={`bg-transparent text-[14px] font-heading font-semibold p-0 h-auto 
              hover:bg-transparent focus:bg-transparent active:bg-transparent
              data-[state=open]:bg-transparent 
              data-[state=open]:hover:bg-transparent
              data-[state=open]:focus:bg-transparent
              focus:text-current active:text-current
              transition-colors duration-200
              ${
                pathname === link.path
                  ? "text-[#a4a4a4]"
                  : "text-black hover:text-[#a4a4a4]"
              }`}
                          >
                            <span
                              className="cursor-pointer block w-full"
                              onClick={handleShopNavigation}
                            >
                              {link.name}
                            </span>
                          </NavigationMenuTrigger>

                          <NavigationMenuContent className="p-3 bg-white shadow-xl rounded-xl border border-gray-100 min-w-[320px]">
                            <ul className="grid grid-cols-1 gap-x-6 gap-y-2">
                              {link.subPaths.map((category, i) => (
                                <li key={i}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={category.path}
                                      className="block px-2 py-2 rounded-md text-[13.5px] text-gray-700 hover:bg-gray-100 hover:text-black font-heading transition-all"
                                    >
                                      {category.name}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  ) : (
                    <Link
                      href={link.path}
                      className={`transition-colors ${
                        pathname === link.path
                          ? "text-[#a4a4a4]"
                          : "hover:text-[#a4a4a4]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <CartSheet />
      </div>
    </div>
  );
};

export default NavbarClient;
