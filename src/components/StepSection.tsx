import Image from "next/image";
import React from "react";
import imgOne from "@/public/step1Img.png";
import shapeImg from "@/public/leftshape.png";
import shape from "@/public/shapeRight.png";
import imgTwo from "@/public/shapeLeft.png";

const StepSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 lg:gap-20 items-center relative py-10">
        <div className="image">
          <Image
            src={shapeImg}
            alt="phone img"
            width={300}
            height={300}
            priority
            className="relative left-[-6rem] top-[-4rem]"
          />
          <Image
            src={imgOne}
            alt="phone img"
            data-aos="fade-up-right"
            data-aos-duration="2000"
            width={600}
            height={500}
            priority
            className="z-50 absolute top-20 left-0"
          />
        </div>
        <div data-aos="fade-up-left" className="content sm:pt-20 lg:px-20">
          <h1 className="lg:text-4xl text-3xl font-bold space-y-4 font-[600] text-[#092B89]">
            We offer a range of <br /> gift cards at <br />
            exceptional rates.
          </h1>
          <p className="mt-6 text-gray-500">
            We purchase gift cards from a diverse array of brands and countries,
            including Apple iTunes, Google Play, Nordstrom, Steam, Sephora,
            Amazon, Walmart, Visa, American Express, and many others.
          </p>
        </div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center relative">
        <div
          data-aos="fade-up-right"
          className="content pt-14 lg:px-20">
          <h1 className="lg:text-4xl text-3xl font-bold leading-9 font-[600] text-[#092B89]">
            Effortless Peer-to-Peer Cryptocurrency Transactions
          </h1>
          <p className="mt-6 text-gray-500">
            We purchase gift cards from a diverse array of brands and countries,
            including Apple iTunes, Google Play, Nordstrom, Steam, Sephora,
            Amazon, Walmart, Visa, American Express, and many others.
          </p>
        </div>
        <div className="image">
          <Image
            src={shape}
            alt="phone img"
            width={400}
            height={400}
            priority
            className="relative lg:right-[-20rem] right-[-22rem] top-[-12rem] lg:top-[-14rem]"
          />
          <Image
            src={imgTwo}
            data-aos="fade-up-left"
            alt="phone img"
            width={600}
            height={500}
            priority
            className="z-50 lg:absolute absolute bottom-[10rem] right-0 lg:top-10 lg:right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default StepSection;
