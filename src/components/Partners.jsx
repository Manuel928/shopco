import { images } from "../assets/assets"

const Partners = () => {
  return (
    <div className='flex flex-wrap max-w-[1440px] overflow-hidden items-center justify-center lg:justify-between gap-[34px] py-[39px] lg:py-[45px] lg:gap-[106px] bg-black px-[16px] lg:px-[100px]'>
        <img src={images.VersaceLogo} alt="" srcset="" />
        <img src={images.zaraLogo} alt="" srcset="" />
        <img src={images.gucciLogo} alt="" srcset="" />
        <img src={images.pradaLogo} alt="" srcset="" />
        <img src={images.CalvinKlienLogo} alt="" srcset="" />
    </div>
  )
}

export default Partners