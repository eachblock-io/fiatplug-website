import Image from "next/image";
import React from "react";
import coinImg from "@/public/coinsImg.png";

const FeatureHero = () => {
  return (
    <section className="lg:pt-20 pt-10">
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 bg-[#092B89] rounded-t-[4rem]">
        <div className="content lg:p-20 pt-20 pb-10 space-y-8">
          <h1 className="lg:text-4xl text-2xl font-bold text-white leading-snug lg:mt-10 animate__animated animate__rotateInDownLeft lg:text-left text-center">
            Trade Gift Cards and Engage in Cryptocurrency Buying and Selling
          </h1>
          <p className="lg:text-left text-center text-gray-300 lg:text-lg text-md animate__animated animate__fadeInTopLeft">
            Exchange gift cards and instantly engage in buying and selling
            cryptocurrencies using your peer-to-peer bank account.
          </p>
        </div>
        <div className="img flex items-center justify-center lg:p-10 p-8 ">
          <div>
            <Image
              src={coinImg}
              alt="coinsImage"
              width={400}
              height={400}
              className="animate__animated animate__fadeInTopLeft animate__delay-1s"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
