import Image from "next/image";
import React from "react";
import phoneImg from "@/public/startphone.png";
import appleStoreImg from "@/public/appstore.png";
import googleStoreImg from "@/public/googleplay.png";

const GetStartedSection = () => {
  return (
    <section className="startedBg lg:py-40 py-24 relative overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 grid-cols-1 items-center">
        <div className="content space-y-8">
          <h1
            data-aos="zoom-in-up"
            className="lg:text-6xl text-4xl font-bold text-white">
            Lets get you <br /> started
          </h1>
          <p data-aos="fade-left" className="text-white text-xl">
            Get the app today to start <br /> enjoying trading fast and easy
          </p>
          <div className="btns mx-auto flex items-center space-x-4">
            <a href="/">
              <Image
                src={appleStoreImg}
                alt="Apple Store"
                width={150}
                height={150}
                priority
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.eachblock.fiatplug">
              <Image
                src={googleStoreImg}
                alt="PlayStore"
                width={150}
                height={150}
                priority
              />
            </a>
          </div>
        </div>
        <div className="mt-10">
          <Image
            src={phoneImg}
            data-aos="zoom-in-up"
            alt="phoneImg"
            width={450}
            height={300}
            priority
            className="lg:absolute bottom-0 lg:mb-0 mb-[-8rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
