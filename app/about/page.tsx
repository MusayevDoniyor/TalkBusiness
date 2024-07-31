import Image from "next/image";
import React from "react";
import woman from "@/public/woman.png";
import manWithLaptop from "@/public/manWithLaptop.png";
import laptop from "@/public/laptopOnTable.png";
import watch from "@/public/watch.png";
import CardRow from "@/components/cards/CardRow";

export default function About() {
  function getRandomMonth() {
    const currentYear = new Date().getFullYear();
    const randomMonth = Math.floor(Math.random() * 12) + 1;

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return {
      year: currentYear,
      month: months[randomMonth - 1],
    };
  }

  const cardData = [
    {
      img: manWithLaptop,
      month: getRandomMonth(),
    },

    {
      img: laptop,
      month: getRandomMonth(),
    },

    {
      img: watch,
      month: getRandomMonth(),
    },
  ];

  return (
    <section className="py-7 px-4 md:px-16 mt-16">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug md:leading-tight text-center">
          Become a better
          <br />
          business with us.
        </h1>

        <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Nullam turpis tortor, ultricies ut justo eu.
        </p>

        <button className="py-3 px-6 md:py-4 md:px-8 bg-[#8540F5] text-white rounded-3xl font-semibold text-base md:text-xl hover:bg-white hover:outline hover:outline-[#8540F5] hover:text-[#8540F5] transition-all">
          Our Business
        </button>
      </div>

      <div className="mt-8 md:mt-16">
        <Image
          src={woman}
          alt="A woman with her tablet"
          className="rounded-md w-full"
        />
      </div>

      <div className="mt-16 md:mt-24">
        <div className="max-w-full md:max-w-4xl font-bold text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mt-4 md:mt-5">
            Here is what's happening in the world of talk business.
          </h2>
        </div>

        <div className="mt-10 md:mt-16 flex flex-col gap-6 md:gap-8">
          {cardData.map((data, index) => (
            <CardRow
              key={index}
              img={data.img}
              month={data.month.month}
              year={data.month.year}
              title="Agile focused business services and more."
            />
          ))}
        </div>

        <div className="flex justify-center py-4 mt-8 mb-16">
          <div className="shadow-md flex items-center rounded-md bg-white">
            <button className="p-3 md:p-4 text-[#ABB5BE] hover:bg-gray-100 transition-colors duration-200">
              Prev
            </button>

            <button className="p-3 md:p-4 border-l text-[#7749F8] border-gray-300 hover:bg-[#7749F8] hover:text-white transition-colors duration-200">
              1
            </button>

            <button className="p-3 md:p-4 border-x text-[#7749F8] border-gray-300 hover:bg-[#7749F8] hover:text-white transition-colors duration-200">
              2
            </button>

            <button className="p-3 md:p-4 border-r text-[#7749F8] border-gray-300 hover:bg-[#7749F8] hover:text-white transition-colors duration-200">
              3
            </button>

            <button className="p-3 md:p-4 text-[#7749F8] hover:bg-gray-100 transition-colors duration-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
