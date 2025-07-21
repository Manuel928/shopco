import Button from "./Buttons/Button";
import KpiBlock from "./KpiBlock";
import { images } from "../assets/assets";

const Hero = () => {
  return (
    <section
      className="relative bg-softGray
  bg-no-repeat 
  bg-cover 
  bg-center
  lg:bg-right-top
  h-[853px] lg:h-[663px] lg:bg-[url('/HeroImage.webp')] max-w-[1440px] px-[16px] lg:px-[100px] overflow-hidden"
      // style={{
      //   backgroundImage: `url(${"HeroImage.webp"})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      {/* Stars */}
      <img
        src={images.SmallStar}
        className="absolute left-[27px] top-[640px] lg:left-[750px] lg:top-[431px]"
        alt=""
        srcset=""
      />
      <img
        src={images.BigStar}
        className="absolute left-[293px] top-[543px] lg:left-[1255px] lg:top-[220px]"
        alt=""
        srcset=""
      />
      {/* Stars end */}
      <div className="flex flex-col space-y-[20px] lg:space-y-[32px] pt-[40px]">
        {/* Come Back Later To Fix Line-Height here */}
        <h1 className="font-IntegralCF text-[36px] leading-[34px] lg:leading-[64px] lg:tracking-[0] lg:text-[64px] lg:max-w-[577px] font-bold">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="font-satoshi pb-[4px] lg:pb-[0px] text-sm lg:max-w-[545px] leading-[20px] lg:leading-[22px] text-[#000000]/60">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button backgroundColor="black" textcolor="white" text="Shop now" />
        <KpiBlock />
      </div>
    </section>
  );
};

export default Hero;
