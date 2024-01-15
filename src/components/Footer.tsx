import Link from "next/link";
import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import LogoImg from "@/public/footer-logo.png";
import Image from "next/image";
import { MdOutlineMarkEmailUnread, MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

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
            <h2 className="text-white pl-14 leading-4">TECHNOLOGIES L.T.D</h2>
            <div className="contact-info mt-8">
              <div className="flex items-center text-white">
                <MdOutlineMarkEmailUnread className="mr-2 text-2xl text-[#F9A21B]" />
                <p>support@fiatplug.com</p>
              </div>
              <div className="flex items-center text-white mt-4">
                <BsTelephone className="mr-2 text-2xl text-[#F9A21B]" />
                <p>+234 814 570 7211</p>
              </div>
              {/* <div className="flex items-center text-white mt-4">
                <div>
                  <MdOutlineLocationOn className="mr-2 text-3xl text-[#F9A21B]" />
                </div>
                <p>Suite 217A DBM plaza, Nouakchott Street Wuse zone 1 Abuja</p>
              </div> */}
            </div>
          </div>
          <div className="nav flex lg:justify-around justify-between lg:mt-0 mt-10">
            <div className="list">
              <h2 className="text-[#F9A21B] text-xl mb-2">Company</h2>
              <div className="links space-y-2 mt-2 grid grid-cols-1">
                <Link href="/about" className="text-white">
                  About us
                </Link>
                <Link href="/contact" className="text-white">
                  Contact
                </Link>
                <Link href="/about" className="text-white">
                  About us
                </Link>
                <Link href="/privacy" className="text-white">
                  Privacy policy
                </Link>
                <Link href="/terms&condition" className="text-white">
                  Terms & Condition
                </Link>
              </div>
            </div>
            <div className="list">
              <h2 className="text-[#F9A21B] text-xl mb-2">Social</h2>
              <div className="links space-y-2 mt-2 grid grid-cols-1">
                <Link
                  href="https://instagram.com/fiatplug.ng?igshid=OGQ5ZDc2ODk2ZA=="
                  className="text-white"
                  target="_blank">
                  Instagram
                </Link>
                <Link
                  href="https://twitter.com/fiatplug/status/1655456794305523712?s=46"
                  className="text-white"
                  target="_blank">
                  Twitter
                </Link>
                <Link
                  href="https://www.linkedin.com/in/fiat-plug-006386299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="text-white"
                  target="_blank">
                  LinkenIn
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100091570693160&mibextid=LQQJ4d"
                  className="text-white"
                  target="_blank">
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
        <div className="icons grid grid-cols-4 gap-6 lg:mt-0 mt-8">
          <a
            target="_blank"
            href="https://twitter.com/fiatplug/status/1655456794305523712?s=46">
            <FaTwitter className="text-white text-xl" />
          </a>
          <a
            target="_blank"
            href="https://instagram.com/fiatplug.ng?igshid=OGQ5ZDc2ODk2ZA==">
            <BiLogoInstagramAlt className="text-white text-xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fiat-plug-006386299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <FaLinkedin className="text-white text-xl" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100091570693160&mibextid=LQQJ4d">
            <FaFacebook className="text-white text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
