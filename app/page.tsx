import Image from "next/image";
import React from "react";
import woman from "@/public/image.png";
import laptop from "@/public/laptop.png";
import Link from "next/link";
import CardCol from "@/components/cards/CardCol";

export default function Home() {
  return (
    <section className="py-7 px-4 md:px-16 mt-32">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl leading-snug md:leading-tight text-center">
          Become a better
          <br />
          business with us.
        </h1>

        <p className="font-normal text-base md:text-xl leading-relaxed text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Nullam turpis tortor, ultricies ut justo eu.
        </p>

        <button className="py-3 px-6 md:py-4 md:px-12 bg-[#8540F5] text-white rounded-3xl font-semibold text-base md:text-xl hover:bg-white hover:outline hover:outline-[#8540F5] hover:text-[#8540F5] transition-all">
          Our Business
        </button>
      </div>

      <div className="mt-8 md:mt-16">
        <Image
          src={woman}
          alt="A smiling woman with her phone"
          className="rounded-md w-full max-w-full"
        />
      </div>

      <div className="mt-16 md:mt-24" id="services">
        <div className="max-w-full md:max-w-4xl font-bold text-center md:text-left">
          <h4 className="text-[#6610F2] text-base md:text-lg">WHAT WE OFFER</h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mt-4 md:mt-5">
            Agile focused business services and more.
          </h2>
        </div>

        <div className="mt-8 md:mt-10">
          <div className="flex justify-center md:justify-start gap-2 md:gap-3">
            <span className="w-2.5 h-2.5 bg-[#6610F2] rounded-full inline-block"></span>
            <span className="w-2.5 h-2.5 bg-[#BDBDBD] rounded-full inline-block"></span>
            <span className="w-2.5 h-2.5 bg-[#BDBDBD] rounded-full inline-block"></span>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-7 mt-5">
            <CardCol
              img={laptop}
              title="Lorem, ipsum dolor."
              description="Lorem ipsum dolor sit amet, consectetur."
              path="/about"
              linkTitle="Browse"
            />

            <CardCol
              img={laptop}
              title="Lorem, ipsum dolor."
              description="Lorem ipsum dolor sit amet, consectetur."
              path="/about"
              linkTitle="Browse"
            />

            <CardCol
              img={laptop}
              title="Lorem, ipsum dolor."
              description="Lorem ipsum dolor sit amet, consectetur."
              path="/about"
              linkTitle="Browse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
