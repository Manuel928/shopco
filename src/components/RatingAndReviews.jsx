import { ChevronDown, Link, FilterIcon } from "lucide-react";
import Button from "./Buttons/Button";
import { images, ratings } from "../assets/assets";
import RatingAndReviewsCard from "./Cards/RatingAndReviewsCard";

const RatingAndReviews = () => {
  return (
    <div className="max-w-[1440px] flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <p className="font-satoshi font-bold">All Reviews</p>{" "}
          <span className="text-[#00000099] mb-1.5">
            <sub>(451)</sub>
          </span>
        </div>
        <div className="flex items-center gap-[10px] justify-between">
          <img
            src={images.FilterIcon}
            className="bg-softGray rounded-[62px] px-[16px] py-[20px] object-cover"
            alt=""
            srcset=""
          />
          <button className="hidden md:flex group group-hover:cursor-pointer font-satoshi font-medium items-center bg-softGray justify-center rounded-[62px] gap-[4px] w-[120px] h-[48px]">
            Latest
            <ChevronDown />
          </button>
          <Button
            text={"Write a review"}
            backgroundColor="black"
            textcolor="white"
            width="w-[166px]"
            height="h-[48px]"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-2 gap-[20px] mt-[32px] mb-[36.42px]">
        {ratings.map((r) => (
          <RatingAndReviewsCard ratings={r} key={r.stars} />
        ))}
      </div>
      <Button
        backgroundColor="white"
        textcolor="black"
        align="self-center"
        border="softGray"
        text={"Load More Reviews"}
        width="w-[195px] lg:w-[230px]"
        height="h-[47px] lg:h-[52px]"
      ></Button>
    </div>
  );
};

export default RatingAndReviews;
