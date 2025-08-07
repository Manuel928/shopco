import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1440px] pt-[70px] pb-[178px] flex flex-col items-center gap-[50px] justify-between px-[16px] lg:px-[100px]">
      <h1 className="font-satoshi font-bold text-[54px] text-center">
        The page you are looking for does not exist! ☹
      </h1>

      <div className="flex items-center justify-center gap-8">
        <button
          onClick={() => navigate(-1)}
          className="font-satoshi cursor-pointer flex items-center justify-between gap-2 border-2 shadow-xl border-black rounded-[10px] px-8 py-3 text-black"
        >
          <ArrowLeft width={20} />
          <span>Go Back</span>
        </button>
        <button
          onClick={() => navigate("/")}
          className="font-satoshi cursor-pointer flex items-center justify-between gap-2 border-2 shadow-xl border-black rounded-[10px] px-8 py-3 text-black"
        >
          <span>Go Home</span>
          <ArrowRight width={20} />
        </button>
      </div>
    </div>
  );
};

export default NotFound;
