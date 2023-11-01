import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: 1,
    title: "How does FiatPlug work for Crypto trading?",
    des: "FiatPlug allows users to create buy or sell offers for various cryptocurrencies. Buyers and sellers can connect, negotiate terms, and complete transactions directly with each other. The platform offers a secure escrow service to protect both parties during the trade.",
  },
  {
    id: 2,
    title: "Can I exchange gift cards on FiatPlug?",
    des: "Yes, FiatPlug also facilitates the exchange of gift cards for cryptocurrencies. Sellers can list their gift cards, and buyers can purchase them using cryptocurrency. This provides a convenient way to convert gift cards into digital assets.",
  },
  {
    id: 3,
    title: "Is FiatPlug a secure platform for P2P trading?",
    des: "Yes, FiatPlug takes security seriously. It employs various security measures, including an escrow service, user reviews and ratings, and a dispute resolution system to ensure safe and secure transactions. Always practice due diligence when trading.",
  },
  {
    id: 4,
    title: "How does FiatPlug work for Crypto trading?",
    des: "FiatPlug allows users to create buy or sell offers for various cryptocurrencies. Buyers and sellers can connect, negotiate terms, and complete transactions directly with each other. The platform offers a secure escrow service to protect both parties during the trade.",
  },
  {
    id: 5,
    title: "How do I create an account on FiatPlug?",
    des: "To get started, visit the FiatPlug website and sign up by providing the necessary information. You'll need to verify your identity for security purposes. Once your account is created, you can start trading.",
  },
  {
    id: 6,
    title: "Is FiatPlug available globally?",
    des: "FiatPlug aims to serve users worldwide, but features and payment methods may vary by region.",
  },
  {
    id: 7,
    title: "Is my personal information secure on FiatPlug?",
    des: "FiatPlug takes user privacy and data security seriously. They use encryption and follow industry best practices to protect your personal information.",
  },
  {
    id: 8,
    title: "How can I contact FiatPlug support?",
    des: "If you have any questions or face any problems, you can contact FiatPlug's customer support team through their website or email. They typically offer responsive support to assist you with your inquiries.",
  },
  {
    id: 9,
    title: "Can I cancel a trade on FiatPlug after it's initiated?",
    des: "Once a trade is initiated, it can be challenging to cancel, especially if the other party has already sent funds or gift cards. It's important to communicate with the other party and reach an agreement if any issues arise.",
  },
  {
    id: 10,
    title: "What should I do if I suspect fraudulent activity on FiatPlug?",
    des: "If you suspect fraudulent activity or encounter a user who violates the platform's terms of service, it's important to report it to FiatPlug's customer support. They will investigate and take appropriate action.",
  },
  {
    id: 11,
    title: "Can I trade on FiatPlug 24/7?",
    des: "Yes, FiatPlug typically operates 24/7, allowing users to trade cryptocurrencies and exchange gift cards at any time that suits them. The availability of sellers and buyers may vary based on your location and the time of day.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-[#00103C] lg:py-40 py-20 mt-10">
      <div className="container mx-auto">
        <h1
          data-aos="fade-left"
          data-aos-duration="2000"
          className="lg:text-4xl text-2xl font-bold text-white text-center">
          Frequently asked questions
        </h1>
        <div className="lg:mt-20 mt-10 space-y-6 w-full lg:w-9/12 mx-auto">
          {faqData?.map((data) => (
            <Accordion
            key={data?.id}
              data-aos="fade-left"
              data-aos-duration="2000"
              type="single"
              collapsible
              className="bg-white px-4 rounded-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger>{data?.title}</AccordionTrigger>
                <AccordionContent>
                  {data?.des}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
