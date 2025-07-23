import { MailIcon } from "lucide-react";
import Button from "./Buttons/Button";

const NewsLetter = () => {
  return (
    <section className="pt-[49.81px] max-w-[1440px] mx-auto flex flex-col lg:pt-[80.42px] px-[16px] lg:px-[100px]">
      <div className="h-[293px] px-[24px] lg:px-[64px] bg-black lg:h-[180px] flex flex-col lg:flex-row rounded-[20px] gap-[32px] justify-center lg:justify-between lg:items-center">
        <p className="font-bold font-IntegralCF lg:max-w-[551px] max-w-full text-white text-[24px] lg:text-[36px]">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </p>
        <div className="flex flex-col gap-[12px] lg:gap-[14px]">
          <div className="bg-[#F0F0F0] max-w-full lg:max-w-[349px] flex items-center rounded-[62px]">
            <MailIcon className="text-[#00000066] w-5 h-5 ml-4" />
            <input
              className="bg-transparent h-[42px] px-4 py-3 placeholder:font-satoshi focus:outline-none text-sm"
              placeholder="Enter your email address..."
            />
          </div>
          <Button
            text="Subscribe to Newsletter"
            width="w-full lg:w-[349px]" height="h-[42px] lg:h-[46px]"
            backgroundColor="white"
            border="softGray"
            textcolor="black"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
