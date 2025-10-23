import { footerLinks, policyLinks, socialLinks } from "@/constants/nav-links";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="flex justify-center w-full bg-white border-t">
      <div className="w-full max-w-[1536px] flex flex-col min-h-[300px]">
        <div className="flex flex-col lg:flex-row justify-between xl:h-[288px] gap-[40px] px-[20px] py-[20px] xl:px-[50px] xl:py-[50px]">
          <div className="max-w-[420px] flex flex-col gap-[20px]">
            <div className="border w-[150px] h-[45px] flex items-center justify-center font-heading text-lg font-semibold">
              LOGO
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              modi, sequi, totam maxime vero obcaecati debitis laborum facilis
              molestiae quo perspiciatis. Perspiciatis consequatur distinctio
              aspernatur dignissimos, nihil modi illum ad.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[40px]">
            {footerLinks.map((link, index: number) => {
              return (
                <div key={index} className="flex flex-col gap-[10px]">
                  <h3 className="text-[16px] font-heading font-semibold">
                    {link.heading}
                  </h3>
                  {link.subLinks.map((subLink, index: number) => {
                    return (
                      <Link href={subLink.path} key={index}>
                        {subLink.name}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
            <div className="gap-[20px] flex flex-col">
              <h3 className="text-[16px] font-heading font-semibold">
                Follow Us
              </h3>
              <div className="gap-[20px] flex">
                {socialLinks.map((link, index: number) => {
                  const IconComponent =
                    link.icon === "Facebook" ? Facebook : Instagram;
                  return (
                    <SocialLinks
                      key={index}
                      href={link.path}
                      icon={<IconComponent size={24} className="text-white" />}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black w-full py-[20px] px-[30px] text-white text-[14px] font-heading font-medium flex flex-col-reverse gap-[32px] xl:flex-row lg:items-center justify-between">
          <p className="">
            Copyright © 2025 Car Silhouettes. All rights reserved.
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center gap-[22px]">
            {policyLinks.map((link, index: number) => {
              return (
                <Link href={link.path} key={index}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
