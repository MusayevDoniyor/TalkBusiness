import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-col md:flex-row justify-between py-5 px-4 md:px-16 items-center font-semibold shadow-md bg-white">
      <div className="mb-4 md:mb-0">
        <Link href="/">
          <Image src={logo} alt="Site logo" width={200} height={50} />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center text-lg">
        <nav>
          <ul className="flex md:flex-row gap-4 md:gap-10 items-center">
            <li className="hover:text-[#6610F2] hover:text-xl hover:font-bold transition-all">
              <Link href="/">Home</Link>
            </li>

            <li className="hover:text-[#6610F2] hover:text-xl hover:font-bold transition-all">
              <Link href="/about">About</Link>
            </li>

            <li className="hover:text-[#6610F2] hover:text-xl hover:font-bold transition-all">
              <Link href="#services">Services</Link>
            </li>

            <li className="hover:text-[#6610F2] hover:text-xl hover:font-bold transition-all">
              <Link href="/systems">Systems</Link>
            </li>
          </ul>
        </nav>

        <button className="border-2 border-[#6610F2] text-[#6610F2] rounded-3xl py-2 px-5 md:py-3 md:px-8 mt-4 md:mt-0 hover:bg-[#6610F2] hover:text-white transition-all">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
