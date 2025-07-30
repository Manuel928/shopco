import { useNavigate, Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="relative bg-softGray pt-[220px] lg:pt-[150px] pb-[40px] px-[16px] lg:px-[100px] max-w-[1440px] mx-auto">
        <div className="absolute -top-[140px] lg:-top-[178px] left-1/2 transform -translate-x-1/2 w-full">
          <NewsLetter />
        </div>
        <footer>
          <div className="flex flex-col gap-[24.5px] lg:gap-[50px] lg:flex-row justify-between">
            {/* 1st */}
            <div className="flex flex-col lg:max-w-[248px] gap-[20px] lg:gap-[35px]">
              <div className="space-y-[14px] lg:space-y-[25px]">
                <Link
                  to="/"
                  className="font-IntegralCF font-bold text-[25.2px] lg:text-[28px]"
                >
                  SHOP.CO
                </Link>
                <p className="mt-2 text-sm font-satoshi text-gray-500">
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="bg-white rounded-full p-[8px] flex items-center justify-center border border-[#00000033] hover:bg-black transition duration-300 group">
                  <TwitterIcon className="w-[15px] h-[15px] fill-black group-hover:fill-white transition duration-300" />
                </div>

                <div className="bg-white rounded-full p-[8px] flex items-center justify-center border border-[#00000033] hover:bg-black transition duration-300 group">
                  <FacebookIcon className="w-[15px] h-[15px] fill-black group-hover:fill-white transition duration-300" />
                </div>

                <div className="bg-white rounded-full p-[8px] flex items-center justify-center border border-[#00000033] hover:bg-black transition duration-300 group">
                  <InstagramIcon className="w-[15px] h-[15px] fill-white group-hover:fill-white transition duration-300" />
                </div>

                <div className="bg-white rounded-full p-[8px] flex items-center justify-center border border-[#00000033] hover:bg-black transition duration-300 group">
                  <GithubIcon className="w-[15px] h-[15px] fill-black group-hover:fill-white transition duration-300" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px] lg:gap-[113.5px]">
              <div className="flex flex-col font-satoshi gap-[6px] max-w-[104px]">
                <h2 className="font-semibold text-gray-900 mb-5">COMPANY</h2>
                <ul className="text-sm text-nowrap text-[#00000099] space-y-3 list-none">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Works</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col font-satoshi gap-[6px] max-w-[136px]">
                <h2 className="font-semibold text-gray-900 mb-5">HELP</h2>
                <ul className="text-sm text-nowrap text-[#00000099] space-y-3 list-none">
                  <li>
                    <a href="#">Customer Support</a>
                  </li>
                  <li>
                    <a href="#">Delivery Details</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col font-satoshi gap-[6px] max-w-[149px]">
                <h2 className="font-semibold text-gray-900 mb-5">FAQ</h2>
                <ul className="text-sm text-nowrap text-[#00000099] space-y-3 list-none">
                  <li>
                    <a href="#">Account</a>
                  </li>
                  <li>
                    <a href="#">Manage Deliveries</a>
                  </li>
                  <li>
                    <a href="#">Orders</a>
                  </li>
                  <li>
                    <a href="#">Payments</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col font-satoshi gap-[6px] max-w-[149px]">
                <h2 className="font-semibold text-gray-900 mb-5">RESOURCES</h2>
                <ul className="text-sm text-nowrap text-[#00000099] space-y-3 list-none">
                  <li>
                    <a href="#">Free eBooks</a>
                  </li>
                  <li>
                    <a href="#">Development Tutorial</a>
                  </li>
                  <li>
                    <a href="#">How to - Blog</a>
                  </li>
                  <li>
                    <a href="#">YouTube Playlist</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="text-[#0000001A] mt-[40px] lg:mt-[50px]" />
          <div className="flex items-center justify-center mt-[16px] lg:mt-[25px] lg:justify-between">
            <p className="py-4 text-xs md:text-sm text-gray-500">
              Shop.co © 2000-{new Date().getFullYear()}, All Rights Reserved
            </p>

            {/* Credit cards */}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
