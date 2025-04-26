import React from "react";
import Image from "next/image";
import Link from "next/link";

function CardsHomepage() {
  const imageArray = [
    "running",
    "weight-lifting",
    "bodyweight",
    "calisthenics",
  ];
  return (
    <div
      id="cards-homepage"
      className="pt-5 relative grid grid-cols-1 lg:grid-cols-2 gap-4 px-12 max-w-[700px] lg:max-w-[1200px] mx-auto"
    >
      {imageArray.map((x, index) => (
        <Link href={`/${x}`} key={x}>
          <div
            key={index}
            className="relative max-w-[700px] place-items-center"
          >
            <Image
              src={`/${x}.avif`}
              alt={`${x} example`}
              width={800}
              height={500}
              layout="responsive"
              className="rounded-xl object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-xl hover:cursor-pointer border-4 border-transparent hover:border-pink-300">
              <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                {x}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardsHomepage;
