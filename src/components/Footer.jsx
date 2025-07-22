import { useNavigate, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-softGray px-[16px] pt-[140px] lg:px-[100px] max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[50px] lg:flex-row lg:items-center justify-between">
          {/* 1st */}
          <div className="flex flex-col lg:max-w-[248px]">
            <Link
              to="/"
              className="font-IntegralCF font-bold text-[25.2px] lg:text-[28px]"
            >
              SHOP.CO
            </Link>
            <p className="mt-2 text-sm font-satoshi text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
            <div className="flex items-center">{/* Social links */}</div>
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
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2024 © <a href="https://prebuiltui.com">PrebuiltUI</a>. All
          Right Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
