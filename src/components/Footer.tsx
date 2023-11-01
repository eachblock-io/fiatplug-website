import Link from "next/link";
import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import LogoImg from "@/public/footer-logo.png";
import Image from "next/image";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <footer className="bg-zinc-800 pt-20">
      <div className="container mx-auto border-b-2 border-gray-500 pb-10">
        <div className="newsletter grid gap-8 lg:grid-cols-2 grid-cols-1 items-center">
          <div>
            <h2 className="text-white text-2xl font-bold">
              Join our Newsletter
            </h2>
            <p className="text-white mt-1">
              Never miss out on our promotion and updates
            </p>
          </div>
          <form className="flex lg:justify-end justify-center">
            <div className="flex items-center lg:flex-row flex-col lg:w-auto w-full">
              <input
                className="py-3 w-full px-4 rounded-md"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-[#F9A21B] lg:w-auto w-full text-white py-2 px-4 lg:ml-2 lg:mt-0 mt-4 rounded-md">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <nav className="pt-20 grid lg:grid-cols-2 grid-cols-1">
          <div className="logo lg:mx-0 mx-auto">
            <Image
              src={LogoImg}
              alt="Fiatplug Logo"
              width={200}
              height={200}
              priority
            />
            <h2 className="text-white pl-16 leading-4">TECHNOLOGY L.T.D</h2>
          </div>
          <div className="nav flex lg:justify-around justify-between lg:mt-0 mt-10">
            <div className="list">
              <h2 className="text-[#F9A21B] text-xl mb-2">Company</h2>
              <div className="links space-y-2 mt-2 grid grid-cols-1">
                <Link href="/about" className="text-white">
                  About us
                </Link>
                <Link href="/about" className="text-white">
                  Contact
                </Link>
                <Link href="/about" className="text-white">
                  About us
                </Link>
                <Link href="/about" className="text-white">
                  Privacy policy
                </Link>
                <Link href="/about" className="text-white">
                  Terms & Condition
                </Link>
              </div>
            </div>
            <div className="list">
              <h2 className="text-[#F9A21B] text-xl mb-2">Social</h2>
              <div className="links space-y-2 mt-2 grid grid-cols-1">
                <Link href="/about" className="text-white">
                  Instagram
                </Link>
                <Link href="/about" className="text-white">
                  Twitter
                </Link>
                <Link href="/about" className="text-white">
                  LinkenIn
                </Link>
                <Link href="/about" className="text-white">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="container flex items-center justify-between flex-wrap py-8">
        <div className="flex items-center text-gray-300 space-8">
          <p className="sm:text-sm mr-10 ">
            &copy; {currentDate} All right Reserved
          </p>
          <p className="sm:text-sm">
            Designed by{" "}
            <a
              target="_blank"
              href="https://www.eachblock.xyz"
              className="font-bold text-[#F9A21B]">
              Eachblock.
            </a>
          </p>
        </div>
        <div className="icons grid grid-cols-4 gap-6 mt-8">
          <a href="#">
            <FaTwitter className="text-white text-xl" />
          </a>
          <a href="#">
            <BiLogoInstagramAlt className="text-white text-xl" />
          </a>
          <a href="#">
            <FaLinkedin className="text-white text-xl" />
          </a>
          <a href="#">
            <FaFacebook className="text-white text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
