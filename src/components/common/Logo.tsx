import { LogoProps } from "@/constants/interfaces";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Image
      src="/assets/images/logo.png"
      alt="logo"
      width={150}
      height={100}
      className={cn(
        "xl:w-40 xl:h-[60px] sm:w-[130px] sm:h-[50px] w-[120px] h-[45px]",
        className
      )}
    />
  );
};

export default Logo;
