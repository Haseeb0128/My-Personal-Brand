"use client";

import { navbarLinks } from "@/constants/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import CartSheet from "./CartSheet";
import MobileNavSheet from "./MobileNavSheet";
import Logo from "../Logo";
import SearchSheet from "./SearchSheet";

const NavbarClient = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="border-b w-full xl:h-[70px] sm:h-[60px] h-[55px] bg-white flex flex-col items-center fixed top-0 left-0 right-0 z-50">
      {/* <div className="w-full flex justify-center bg-black text-white text-[12px] font-heading font-semibold">
        <p>Free Delivery Nationwide</p>
      </div> */}
      <div className="w-full h-full max-w-[1536px] flex items-center justify-between xl:px-[30px] sm:px-5 px-[15px]">
        <div className="flex items-center sm:gap-[50px] gap-5">
          <MobileNavSheet
            handleMobileLinkClick={handleMobileLinkClick}
            pathname={pathname}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <Logo />
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-[30px] text-[14px] font-heading font-semibold">
              {navbarLinks.map((link, index) => (
                <li key={index}>
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
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <SearchSheet />
          <CartSheet />
        </div>
      </div>
    </div>
  );
};

export default NavbarClient;
