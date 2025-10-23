import Link from "next/link";
import React from "react";

interface SocialLinksProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ href, icon }) => {
  return (
    <Link
      href={href}
      className="w-[50px] h-[50px] shrink-0 flex items-center justify-center border rounded-full bg-black"
    >
      {icon}
    </Link>
  );
};

export default SocialLinks;
