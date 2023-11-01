import React from "react";
import phoneImg from "@/public/listimg.png";
import Image from "next/image";
import { ImCheckmark } from "react-icons/im";

const OfferSection = () => {
  return (
    <section>
      <div className="container mx-auto lg:py-20 pb-10">
        <div className="section-title text-center lg:px-40 py-8 lg:space-y-10 space-y-2">
          <h1
            data-aos="fade-up-right"
            className="lg:text-4xl font-bold text-3xl font-[600] text-[#092B89]">
            Fiatplug provides a seamless P2P <br />
            <span className="text-amber-400">transactions</span>
          </h1>
        </div>
        <div className="relative">
          <div className="card flex sm:items-center bg-white rounded-xl lg:w-8/12 w-full mx-auto drop-shadow-lg">
            <div className="list p-8 space-y-6 mt-6 lg:w-9/12 w-full">
              <div
                data-aos-duration="2000"
                data-aos="fade-up"
                className="list flex">
                <div className="lg:mr-8 mr-4">
                  <div className="border-2 border-gray-300 lg:h-14 lg:w-14 h-12 w-12 rounded-full flex items-center justify-center ">
                    <ImCheckmark className="text-[#0246FF] text-xl" />
                  </div>
                </div>
                <div className="text lg:pr-10 pr-0">
                  <h2 className="font-bold text-lg font-[600] text-[#0246FF]">
                    Safe and secured
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    Our platform ensures a seamless and secure trading
                    experience for selling gift cards and cryptocurrencies.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="list flex">
                <div className="lg:mr-8 mr-4">
                  <div className="border-2 border-gray-300 lg:h-14 lg:w-14 h-12 w-12 rounded-full flex items-center justify-center ">
                    <ImCheckmark className="text-[#0246FF] text-xl" />
                  </div>
                </div>
                <div className="text lg:pr-10 pr-0">
                  <h2 className="font-bold text-lg font-[600] text-[#0246FF]">
                    Extensive Gift Card Options
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    Our platform ensures a seamless and secure trading
                    experience for selling gift cards and cryptocurrencies.
                  </p>
                </div>
              </div>
              <div
                data-aos-duration="2000"
                data-aos="fade-up"
                className="list flex">
                <div className="lg:mr-8 mr-4">
                  <div className="border-2 border-gray-300 lg:h-14 lg:w-14 h-12 w-12 rounded-full flex items-center justify-center ">
                    <ImCheckmark className="text-[#0246FF] text-xl" />
                  </div>
                </div>
                <div className="text lg:pr-10 pr-0">
                  <h2 className="font-bold text-lg font-[600] text-[#0246FF]">
                    Sell Cryptocurrency
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    Selling cryptocurrency on Fiat Plug is a straightforward and
                    secure process that allows you to convert your digital
                    assets into fiat currency with ease
                  </p>
                </div>
              </div>
              <div
                data-aos-duration="2000"
                data-aos="fade-up"
                className="list flex">
                <div className="lg:mr-8 mr-4">
                  <div className="border-2 border-gray-300 lg:h-14 lg:w-14 h-12 w-12 rounded-full flex items-center justify-center ">
                    <ImCheckmark className="text-[#0246FF] text-xl" />
                  </div>
                </div>
                <div className="text lg:pr-10 pr-0">
                  <h2 className="font-bold text-lg font-[600] text-[#0246FF]">
                    24 /7 Customer Support
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    Our dedicated customer support team is always here to assist
                    you with any questions, concerns, or issues you may
                    encounter during your P2P trading journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="img lg:block hidden">
              <Image
                src={phoneImg}
                data-aos="fade-left"
                data-aos-duration="2000"
                alt="phoneImg"
                width={220}
                height={200}
                className="absolute top-[-1.5rem] right-[-2rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
