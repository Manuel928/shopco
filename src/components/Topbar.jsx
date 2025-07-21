import React from "react";
import { X } from "lucide-react";

const Topbar = () => {
  return (
    <div className="relative max-w-[1440px] overflow-hidden bg-black text-white h-[38px] flex items-center justify-center px-[16px] lg:px-[100px] text-sm font-satoshi">
      <p className="text-center text-[12px] lg:text-sm">
        Sign up and get 20% off to your first order.{" "}
        <a href="#" className="underline">
          Sign Up Now
        </a>
      </p>
      <X className="absolute right-[16px] lg:right-[100px] w-5 lg:w-6 cursor-pointer" />
    </div>
  );
};

export default Topbar;
