import React from "react";
import { MdUnsubscribe, MdFacebook } from "react-icons/md";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-950 mt-10 p-2 text-white">
      <div className="space-y-3 p-5">
        <div className="max-w-screen-md mx-auto">
          <input
            className="bg-white focus:outline-none border-[1.5px] border-[#00030AA3] rounded-md my-1 p-4 w-full"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="bg-secondary w-full p-3 text-[18px] text-white capitalize font-bold my-3 rounded-lg md:text-[14px] md:p-2 flex items-center justify-center gap-2">
            <MdUnsubscribe size={30} />
            subscribe
          </button>
        </div>
        <div className="space-y-3 flex items-start justify-between">
          <div>
            <p className="font-semibold text-[18px] capitalize leading-8 py-2 text-secondary">
              Ministries
            </p>
            <ul className="flex flex-col gap-3 capitalize">
              <Link className="hover:text-secondary" href={"#!"}>
                Media team
              </Link>
              <Link className="hover:text-secondary" href={"#!"}>
                Technical team
              </Link>
              <Link className="hover:text-secondary" href={"#!"}>
                Evangelism team
              </Link>
              <Link className="hover:text-secondary" href={"#!"}>
                Drama team
              </Link>
              <Link className="hover:text-secondary" href={"#!"}>
                Follow up team
              </Link>
              <Link className="hover:text-secondary" href={"#!"}>
                Ushering team
              </Link>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-[18px] capitalize leading-8 py-2 text-secondary">
              socials
            </p>
            <ul className="flex items-center gap-5 capitalize">
              <Link className="hover:text-secondary" href={"#!"}>
                <MdFacebook size={35} />
              </Link>
              <Link className="hover:text-secondary" href={"#!"}>
                <FaInstagram size={35} />
              </Link>
              <Link className="hover:text-secondary" href={"#!"}>
                <FaYoutube size={35} />
              </Link>
              <Link className="hover:text-secondary" href={"#!"}>
                <FaTiktok size={30} />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center font-medium text-[14px]">
        All right reserved &copy; {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
