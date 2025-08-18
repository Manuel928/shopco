import { StarIcon, LucideCheckCircle2 } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white border w-full h-full border-[#0000001A] rounded-[20px] p-[24px] lg:px-[32px] lg:py-[28px]">
      <div className="flex flex-col gap-[12px] lg:gap-[15px] justify-between">
        <div className="flex gap-[5.51px] lg:gap-[6.49px] items-center">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <StarIcon
              className="w-[15.49px] lg:w-[18.47px]"
              fill="#FFC633"
              stroke="#FFC633"
              key={i}
            />
          ))}
        </div>
        <div className="flex flex-col gap-[8px] lg:gap-[12px]">
          <div className="flex items-center gap-[3.5px] lg:gap-[4.5px]">
            <p className="font-bold font-satoshi text-[14px] lg:text-[16px]">{testimonial.reviewerName}</p>
            <LucideCheckCircle2 fill="#01AB31" color="white" />
          </div>
          <p className="text-[#00000099] font-satoshi text-[14px] lg:text-[16px]">{testimonial.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
