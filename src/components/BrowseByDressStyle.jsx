import { useNavigate } from "react-router-dom";

const BrowseByDressStyle = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-softGray max-w-[1440px] overflow-hidden flex flex-col items-center gap-[28px] lg:gap-[64px] px-[24px] lg:px-[64px] rounded-[20px] lg:rounded-[40px] py-[40px] lg:py-[70px] mt-[50px] lg:mt-[80px] mx-[16px] lg:mx-[100px]">
      <p className="font-bold font-IntegralCF text-center leading-[36px] lg:leading-[100%] max-w-[246px] lg:max-w-full text-[24px] lg:text-[36px]">
        BROWSE BY DRESS STYLE
      </p>

      {/* Styles */}
      <div className="space-y-[20px]">
        <div className="grid lg:grid-cols-3 items-center gap-[20px]">
          <div
            className="relative col-span-1 group w-[310px] h-[190px] rounded-[20px] cursor-pointer overflow-hidden"
            onClick={() => navigate("/category/beauty")}
          >
            {/* Background layer */}
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-left-top bg-[url('/Casual.png')] transition-transform duration-500 group-hover:scale-110"></div>

            {/* Content layer */}
            <div className="relative z-10 flex items-start px-[24px] pt-[16px] lg:px-[36px] lg:pt-[25px] h-full group-hover:bg-black/20 group-hover:duration-700 group-hover:transition-colors rounded-[20px]">
              <p className="font-bold font-satoshi text-[18px] lg:text-[24px] group-hover:text-white">
                Beauty
              </p>
            </div>
          </div>

          <div
            className="relative col-span-2 group w-full h-[190px] rounded-[20px] cursor-pointer overflow-hidden"
            onClick={() => navigate("/category/tops")}
          >
            {/* Background layer */}
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-left-top bg-[url('/Formal.png')] transition-transform duration-500 group-hover:scale-110"></div>

            {/* Content layer */}
            <div className="relative z-10 flex items-start px-[24px] pt-[16px] lg:px-[36px] lg:pt-[25px] h-full group-hover:bg-black/20 group-hover:duration-700 group-hover:transition-colors rounded-[20px]">
              <p className="font-bold font-satoshi text-[18px] lg:text-[24px] group-hover:text-white">
                Tops
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 items-center gap-[20px]">
          <div
            className="relative col-span-2 group w-full h-[190px] rounded-[20px] cursor-pointer overflow-hidden"
            onClick={() => navigate("/category/skin-care")}
          >
            {/* Background layer */}
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-left-top bg-[url('/Party.png')] transition-transform duration-500 group-hover:scale-110"></div>

            {/* Content layer */}
            <div className="relative z-10 flex items-start px-[24px] pt-[16px] lg:px-[36px] lg:pt-[25px] h-full group-hover:bg-black/20 group-hover:duration-700 group-hover:transition-colors rounded-[20px]">
              <p className="font-bold font-satoshi text-[18px] lg:text-[24px] group-hover:text-white">
                Skin Care
              </p>
            </div>
          </div>
          <div
            className="relative col-span-1 group w-[310px] h-[190px] rounded-[20px] cursor-pointer overflow-hidden"
            onClick={() => navigate("/category/mens-shirts")}
          >
            {/* Background layer */}
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-left-top bg-[url('/Gym.png')] transition-transform duration-500 group-hover:scale-110"></div>

            {/* Content layer */}
            <div className="relative z-10 flex items-start px-[24px] pt-[16px] lg:px-[36px] lg:pt-[25px] h-full group-hover:bg-black/20 group-hover:duration-700 group-hover:transition-colors rounded-[20px]">
              <p className="font-bold font-satoshi text-[18px] lg:text-[24px] group-hover:text-white">
                Mens Shirt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByDressStyle;
