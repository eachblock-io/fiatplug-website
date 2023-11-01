import React from "react";
import LogoImg from "@/public/footer-logo.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 gap-8 py-20">
      <div className="logo bg-zinc-900 flex lg:h-auto h-60 mr-4 items-center justify-center rounded-r-[4rem]">
        <Image
          src={LogoImg}
          alt="Fiatplug Logo"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className="container lg:px-20 mb-20">
        <h1 className="text-4xl font-bold mb-10">About us</h1>

        <div className="space-y-10">
          <p>
            Fiat Plug is your gateway to a world of seamless, secure, and
            efficient financial transactions. Our team of dedicated
            professionals is passionate about innovation in the fintech
            industry, committed to providing solutions for all your financial
            needs.
          </p>
          <p>
            We aim to bridge the gap between traditional finance and the digital
            assets landscape, promoting financial inclusivity for everyone,
            regardless of their background or location. Fiat Plug offers a
            secure and user-friendly platform for cryptocurrency transactions,
            gift card exchange, and peer-to-peer transactions.{" "}
          </p>
          <p>
            We prioritize your financial security, employing cutting-edge
            security measures to protect your data and assets. Our user-centric
            approach ensures both newcomers and experienced users can
            confidently navigate our platform. Join Fiat Plug today to explore
            the future of finance and start your journey toward financial
            freedom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
