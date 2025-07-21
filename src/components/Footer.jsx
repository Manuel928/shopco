import { useNavigate, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-softGray px-[16px] lg:px-[100px] max-w-[1440px]">
        <div className="grid grid-cols-5 items-center justify-between gap-[113.5px]">
          {/* 1st */}
          <div className="flex flex-col">
            <Link
              to="/"
              className="font-IntegralCF font-bold text-[25.2px] lg:text-[28px]"
            >
              SHOP.CO
            </Link>
            <p className="mt-6 text-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
            <div className="flex items-center">
              {/* Social links */}
            </div>
          </div>

          <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
            <div>
              <h2 className="font-semibold text-gray-900 mb-5">COMPANY</h2>
              <ul className="text-sm text-gray-500 space-y-2 list-none">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-5">COMPANY</h2>
              <div className="text-sm text-gray-500 space-y-2 list-none">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </div>
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
