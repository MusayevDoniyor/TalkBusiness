import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  img: StaticImageData;
  month: string;
  year: number;
  title: string;
}

const CardRow = ({ img, month, year, title }: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-4 shadow-lg rounded-lg bg-white">
      <div className="flex-1">
        <p className="text-[#6610F2] font-bold text-base mb-2">
          {month} {year - Math.floor(Math.random() * 12)}
        </p>

        <h4 className="font-bold text-2xl w-64">{title}</h4>
      </div>

      <div className="flex-shrink-0">
        <Image
          src={img}
          alt="card's image"
          width={600}
          height={400}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default CardRow;
