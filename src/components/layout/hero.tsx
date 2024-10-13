import LogoSVG from "@/images/Logo";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.01) 0%, rgba(4, 4, 5, 0.00) 49.4%, #09090B 100%)",
        }}
        className="absolute    w-full h-full z-[3]"
      ></div>
      <div className="w-full aspect-[1.84]  relative">
        <Image
          fill
          alt="hero color"
          src="/images/hero.png"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className="  mt-[-60px] md:mt-[-120px] relative z-[4] ">
        <LogoSVG width={"auto"} className="h-[120px] md:h-[240px] mx-auto" />
        <h1 className="mt-6 text-2xl md:text-3xl font-bold text-center">
          İTÜ Gönüllülük Kulübü
        </h1>
      </div>
    </div>
  );
};

export default Hero;
