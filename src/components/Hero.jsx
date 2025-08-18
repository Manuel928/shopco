import Button from "./Buttons/Button";
import KpiBlock from "./KpiBlock";
import { images } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section
      className="relative bg-softGray flex lg:flex-col
  lg:bg-no-repeat 
  lg:bg-cover 
  lg:bg-center
  h-[853px] lg:h-[663px] lg:bg-[url('/HeroImage.webp')] max-w-[1440px] px-[16px] lg:px-[100px] overflow-hidden"
    >
      {/* Stars */}
      <img
        src={images.SmallStar}
        className="absolute left-[21px] top-[610px] md:top-[600px] md:left-[100px] lg:left-[710px] lg:top-[250px]"
        alt=""
        srcset=""
      />
      <img
        src={images.BigStar}
        className="absolute left-[307px] top-[483px] md:left-[600px] lg:left-[1155px] lg:top-[110px]"
        alt=""
        srcset=""
      />
      {/* Stars end */}
      
      <div className="flex flex-col space-y-[20px] lg:space-y-[32px] pt-[40px]">
        {/* Come Back Later To Fix Line-Height here */}
        <h1 className="font-IntegralCF text-[36px] leading-[34px] md:leading-[64px] md:tracking-[0] md:text-[54px] lg:text-[64px] md:max-w-[577px] font-bold">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="font-satoshi pb-[4px] lg:pb-[0px] text-sm lg:max-w-[545px] leading-[20px] lg:leading-[22px] text-[#000000]/60">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button backgroundColor="black" textcolor="white" text="Shop now" onClick={() => navigate("/shop")} />
        <KpiBlock />
      </div>
      <img
        src="/HeroMobile.png"
        className="absolute mt-2 md:mt-4 lg:mt-0 top-1/2 left-0 right-0 md:mx-auto lg:hidden object-contain"
        alt=""
        srcset=""
      />
    </section>
  );
};

export default Hero;
