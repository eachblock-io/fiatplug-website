"use client";
import React, { useEffect } from "react";
import CreditCard from "@/public/CreditCard.png";
import BitcoinImg from "@/public/bitcoinconvert_.png";
import GiveCoin from "@/public/GivingRupiahcoin.png";
import ListImg from "@/public/List.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const cardList = [
  {
    id: 1,
    img: CreditCard,
    title: "Sell Giftcard",
    des: "P2P giftcard transactions with amazing rates",
  },
  {
    id: 2,
    img: BitcoinImg,
    title: "Buy & Sell crypto",
    des: "P2P crypto transactions with amazing rates",
  },
  {
    id: 3,
    img: GiveCoin,
    title: "Airtime & Data",
    des: "Buy airtime and data with your earned Fiatplug coins for free, Coins can be earned from trading with the Fiatplug app.",
  },
  {
    id: 4,
    img: ListImg,
    title: "Pay Bills",
    des: "Pay bills with bank transfers, USSD, or with your FiatPlug coins. Payment with FiatPlug coins are free of charge",
  },
];

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="bg-white lg:py-20 py-10">
      <div className="container mx-auto">
        <div className="section-title text-center lg:px-40 py-8 lg:space-y-10 space-y-2">
          <h1
            data-aos="fade-up"
            className="lg:text-4xl text-3xl mb-6 font-[600] text-[#092B89]">
            Trade made with <span className="text-amber-400">ease</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:px-40 text-sm">
            Our platform ensures a seamless and secure trading experience for
            selling gift cards and cryptocurrencies, Our dedicated customer
            support team is always here to assist you with any questions,
            concerns, or issues you may encounter during your P2P trading
            journey.
          </p>
        </div>
        <section className="grid lg:grid-cols-4 grid-cols-1 gap-6 mt-10">
          {cardList?.map((item) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              key={item.id}
              className="card border p-8 shadow-lg">
              <Image
                src={item.img}
                alt={item?.title}
                width={150}
                height={150}
                priority
              />
              <div className="space-y-4 mt-8">
                <h2 className="font-[600] text-xl">{item.title}</h2>
                <p className="text-gray-500">{item.des}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ServiceSection;
