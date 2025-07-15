import React from "react";
import { X } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-black text-white justify-center lg:justify-end text-sm gap-[10px] lg:gap-[425px] mx-auto px-[16px] lg:px-[0px] font-satoshi h-[38px] flex items-center">
      <p>
        Sign up and get 20% off to your first order.{" "}
        <a href="" className="underline">
          Sign Up Now
        </a>
      </p>
      <X className="w-5 lg:w-8"/>
    </div>
  );
};

export default Topbar;
