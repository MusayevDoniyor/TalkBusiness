import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  img: StaticImageData;
  title: string;
  description: string;
  linkTitle: string;
  path: string;
}

const CardCol = ({ img, title, description, linkTitle, path }: Props) => {
  return (
    <div className="shadow pt-1 pb-5 px-1">
      <Image src={img} alt="Card's image" className="rounded-md" />

      <h3 className="font-semibold text-xl mt-3">{title}</h3>

      <p className="font-normal text-xl my-3">{description}</p>

      <Link
        href={path}
        className="border-b-2 border-[#A370F7] font-semibold text-xl"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default CardCol;
