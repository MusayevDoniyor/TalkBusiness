import Image from "next/image";
import React from "react";
import newBusiness from "@/public/newBusiness.svg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[#160530] text-white py-10 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-32">
        <div className="flex flex-col gap-7 max-w-md">
          <h2 className="font-semibold text-2xl md:text-4xl lg:text-5xl">
            Let's start working to build a brighter future.
          </h2>

          <p className="font-normal text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            posuere eget elementum vulputate elementum viverra sapien tellus
            aenean.
          </p>

          <div className="flex gap-6 text-base font-bold text-[#E0CFFC]">
            <span className="cursor-pointer">Fb</span>
            <span className="cursor-pointer">In</span>
            <span className="cursor-pointer">Tw</span>
            <span className="cursor-pointer">Ln</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:mt-28">
          <form className="flex flex-col md:flex-row items-center border border-[#E0CFFC] py-3 px-4 rounded-md transition-all">
            <input
              type="email"
              placeholder="Join our mailing list"
              name="email"
              id="email"
              required
              className="bg-transparent border-none text-white placeholder-white focus:outline-none flex-1 py-2 px-4 rounded-md"
            />

            <button className="mt-3 md:mt-0 md:ml-28 text-[#FFFFFF] transition-all hover:outline py-2 px-6 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 justify-between items-center mt-10 pt-5">
        <div className="flex-shrink-0">
          <Image src={newBusiness} alt="New Business" width={150} height={50} />
        </div>

        <p className="text-base md:text-sm text-[#F2F2F2]">
          Copyright {year}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
