import {
  StarIcon,
  LucideCheckCircle2,
  Ellipsis

} from "lucide-react";

const RatingAndReviewsCard = ({ ratings }) => {
  return (
    <div className="bg-white border w-full h-full border-[#0000001A] rounded-[20px] p-[24px] lg:px-[32px] lg:py-[28px]">
      <div className="flex flex-col gap-[12px] lg:gap-[15px] justify-between">
        <div className="flex items-center justify-between">
          <div className="flex gap-[5.51px] lg:gap-[6.49px] items-center">
            {Array.from({ length: ratings.stars }, (_, i) => (
              <StarIcon
                className="w-[15.49px] lg:w-[18.47px]"
                fill="#FFC633"
                stroke="#FFC633"
                key={i}
              />
            ))}
          </div>

          <Ellipsis />
        </div>
        <div className="flex flex-col gap-[8px] lg:gap-[12px]">
          <div className="flex items-center gap-[3.5px] lg:gap-[4.5px]">
            <p className="font-bold font-satoshi text-[14px] lg:text-[16px]">
              {ratings.clientName}
            </p>
            <LucideCheckCircle2 fill="#01AB31" color="white" />
          </div>
          <p className="text-[#00000099] font-satoshi text-[14px] lg:text-[16px]">
            {ratings.text}
          </p>
          <p className="text-[#00000099] pt-[12px] font-satoshi text-[14px] lg:text-[16px]">
            {ratings.dateTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RatingAndReviewsCard;
