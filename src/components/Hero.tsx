import Image from "next/image";
import React from "react";
import appleStoreImg from "@/public/appstore.png";
import googleStoreImg from "@/public/googleplay.png";
import shape from "@/public/shape.png";
import heroShape from "@/public/hero-shape.png";
import heroPhone from "@/public/heroPhone.png";
import heroPhone2 from "@/public/heroPhone2.png";

const Hero = () => {
  return (
    <>
      <div className="w-full lg:h-screen h-auto bg-amber-50 flex items-center relative sm:overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 bg-amber-50 py-20">
          <div className="content lg:space-y-10 space-y-8 lg:text-left text-center">
            <h1 className="font-[700] lg:text-6xl text-4xl">
              Instant cash for gift cards & crypto exchange
            </h1>
            <p className="text-xl">
              Enjoy fast & secured transactions{" "}
              <br className="hidden lg:block" /> with amazing rates
            </p>
            <div className="btns flex items-center space-x-4">
              <a href="/">
                <Image
                  src={appleStoreImg}
                  alt="Apple Store"
                  width={150}
                  height={150}
                  priority
                />
              </a>
              <a href="/">
                <Image
                  src={googleStoreImg}
                  alt="Apple Store"
                  width={150}
                  height={150}
                  priority
                />
              </a>
            </div>
          </div>
          <div className="hero-img">
            <Image
              src={shape}
              alt="shape"
              width={300}
              height={400}
              className="absolute right-0 lg:top-[-2rem] z-10"
            />
            <Image
              src={heroPhone}
              alt="shape"
              width={300}
              height={400}
              className="absolute lg:right-[15rem] lg:top-[7rem] top-[36rem] z-20"
            />
            <Image
              src={heroPhone2}
              alt="shape"
              width={300}
              height={400}
              className="absolute lg:right-[5rem] right-[0rem] lg:top-[4rem] top-[28rem] z-10"
            />
            <Image
              src={heroShape}
              alt="shape"
              width={300}
              height={400}
              className="absolute right-[15rem] sm:top-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
