import React from "react";
import CreditCard from "@/public/CreditCard.png";
import BitcoinImg from "@/public/bitcoinconvert_.png";
import GiveCoin from "@/public/GivingRupiahcoin.png";
import ListImg from "@/public/List.png";
import Image from "next/image";

const cardList = [
//   {
//     id: 1,
//     img: CreditCard,
//     title: "Sell Giftcard",
//     des: "P2p giftcard transactions with High rates",
//   },
  {
    id: 2,
    img: BitcoinImg,
    title: "Buy & Sell crypto",
    des: "P2p giftcard transactions with High rates",
  },
  {
    id: 3,
    img: GiveCoin,
    title: "Airtime & Data",
    des: "P2p giftcard transactions with High rates",
  },
  {
    id: 4,
    img: ListImg,
    title: "Pay Bills",
    des: "P2p giftcard transactions with High rates",
  },
];

const ServiceSection = () => {
  return (
    <div className="bg-white my-10">
      <div className="container mx-auto">
        <div className="section-title text-center lg:px-40 py-8 lg:space-y-10 space-y-2">
          <h1 className="lg:text-4xl text-3xl font-[600] text-[#092B89]">
            Trade made with <span className="text-amber-400">ease</span>
          </h1>
          <p className="lg:px-40 text-sm">
            Our platform ensures a seamless and secure trading experience for
            selling gift cards and cryptocurrencies, Our dedicated customer
            support team is always here to assist you with any questions,
            concerns, or issues you may encounter during your P2P trading
            journey.
          </p>
        </div>
        <section className="grid lg:grid-cols-4 grid-cols-1 gap-6 mt-10">
          {cardList?.map((item) => (
            <div key={item.id} className="card border p-8 shadow-lg">
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
