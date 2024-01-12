"use client";
import Image from "next/image";
import React, { useState } from "react";
import appleStoreImg from "@/public/appstore.png";
import googleStoreImg from "@/public/googleplay.png";
import shape from "@/public/shape.png";
import heroShape from "@/public/hero-shape.png";
import heroPhone from "@/public/heroPhone.png";
import heroPhone2 from "@/public/heroPhone2.png";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import WaitlistModal from "./WaitlistModal";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Hero = () => {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    window.localStorage.setItem("userEmail", email);
    // router.push("/https://app.fiatplug.com/login");
    setLoading(true);
    console.log(email);
  };

  return (
    <>
      <WaitlistModal open={open} setOpen={setOpen} />
      <div className="w-full lg:h-screen h-auto bg-amber-50 flex items-center relative sm:overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 bg-amber-50 pt-10 ">
          <div className="content lg:space-y-10 space-y-6 lg:text-left text-center">
            <h1 className="font-[700] lg:text-6xl text-3xl animate__animated animate__rotateInDownLeft">
              Instant cash for gift cards & crypto exchange
            </h1>
            <p className="lg:text-xl text-md animate__animated animate__fadeInTopLeft">
              Enjoy fast & secure transactions{" "}
              <br className="hidden lg:block" /> with amazing rates
            </p>
            <div className="lg:hidden">
              <Button
                onClick={() => setOpen(true)}
                className=" py-6 mb-1 px-20 bg-amber-400 transition-all hover:bg-amber-200 text-zinc-800 font-semibold">
                Get Started
              </Button>
            </div>
            <form>
              <div className="lg:flex hidden w-full max-w-md space-x-2">
                <Link href="https://app.fiatplug.com/login">
                  <Button className=" py-7 px-14 bg-amber-400 transition-all hover:bg-amber-200 text-zinc-800 font-semibold">
                    Get Started
                  </Button>
                </Link>
              </div>
            </form>

            <div className="btns flex items-center lg:justify-start justify-center space-x-4">
              <Image
                onClick={() => setOpen(true)}
                src={appleStoreImg}
                alt="Apple Store"
                width={150}
                height={150}
                priority
              />
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.eachblock.fiatplug">
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
              className="absolute lg:right-[15rem] lg:top-[7rem] top-[30rem] z-20 animate__animated animate__fadeInTopLeft animate__delay-1s"
            />
            <Image
              src={heroPhone2}
              alt="shape"
              width={300}
              height={400}
              className="absolute lg:right-[5rem] right-[0rem] lg:top-[4rem] top-[25rem] z-10 animate__animated animate__fadeInRightBig"
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
