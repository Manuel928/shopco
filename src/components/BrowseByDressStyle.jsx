const BrowseByDressStyle = () => {
  return (
    <div className="bg-softGray max-w-[1440px] flex flex-col items-center gap-[28px] lg:gap-[64px] px-[24px] lg:px-[64px] rounded-[20px] lg:rounded-[40px] py-[40px] lg:py-[70px] mt-[50px] lg:mt-[80px] mx-[16px] lg:mx-[100px]">
      <p className="font-bold font-IntegralCF text-center max-w-[246px] lg:max-w-full text-[24px] lg:text-[36px]">
        BROWSE BY DRESS STYLE
      </p>

      {/* Styles */}
      <div className="space-y-[20px]">
        <div className="grid lg:grid-cols-3 items-center gap-[20px]">
          <div className="bg-white lg:col-span-1 bg-no-repeat w-[310px] bg-cover bg-left-top bg-[url('/Casual.png')] flex px-[24px] pt-[16px] lg:px-[36px] lg:pt-[25px] h-[190px] rounded-[20px]">
            <p className="font-bold font-satoshi text-[18px] lg:text-[24px]">
              Casual
            </p>
          </div>
          <div className="bg-white lg:col-span-2 bg-no-repeat bg-cover bg-left-top bg-[url('/Formal.png')] flex w-full px-[24px] pt-[16px] lg:px-[36px] lg:pt-[25px] h-[190px] rounded-[20px]">
            <p className="font-bold font-satoshi text-[18px] lg:text-[24px]">
              Formal
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 items-center gap-[20px]">
          <div className="bg-white lg:col-span-2 bg-no-repeat bg-cover bg-left-top bg-[url('/Party.png')] flex w-full px-[24px] pt-[16px] lg:px-[36px] lg:pt-[25px] h-[190px] rounded-[20px]">
            <p className="font-bold font-satoshi text-[18px] lg:text-[24px]">
              Party
            </p>
          </div>
          <div className="bg-white lg:col-span-1 bg-no-repeat bg-cover bg-left-top bg-[url('/Gym.png')] flex w-[310px] px-[24px] pt-[16px] lg:px-[36px] lg:pt-[25px] h-[190px] rounded-[20px]">
            <p className="font-bold font-satoshi text-[18px] lg:text-[24px]">
              Gym
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByDressStyle;
