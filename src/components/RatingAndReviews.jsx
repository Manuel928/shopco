import Button from "./Buttons/Button";
import { images } from "../assets/assets";
import RatingAndReviewsCard from "./Cards/RatingAndReviewsCard";
import { useProduct } from "./context/ProductContext";
import { useState } from "react";

const RatingAndReviews = () => {
  const { product } = useProduct(null);
  const [sortOption, setSortOption] = useState("latest");

  const sortedReviews = product?.reviews
    ? [...product.reviews].sort((a, b) => {
        if (sortOption === "latest") {
          return new Date(b.date) - new Date(a.date);
        } else if (sortOption === "oldest") {
          return new Date(a.date) - new Date(b.date);
        }
        return 0;
      })
    : [];

  return (
    <div className="max-w-[1440px] flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <p className="font-satoshi font-bold">All Reviews</p>
          <span className="text-[#00000099] mb-1.5">
            <sub>({product?.reviews?.length || 0})</sub>
          </span>
        </div>

        <div className="flex items-center gap-[10px] justify-between">
          <img
            src={images.FilterIcon}
            className="bg-softGray rounded-[62px] px-[12px] py-[12px] object-cover"
            alt="Filter"
          />
          <select
            className="h-[48px] font-satoshi text-center bg-softGray rounded-[62px] w-[120px]"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
          <Button
            text={"Write a review"}
            backgroundColor="black"
            textcolor="white"
            width="w-[166px]"
            height="h-[48px]"
          />
        </div>
      </div>

      {/* Review Cards */}
      <div className="grid lg:grid-cols-2 gap-[20px] mt-[32px] mb-[36.42px]">
        {sortedReviews.map((r) => (
          <RatingAndReviewsCard ratings={r} key={r.reviewerName} />
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
      />
    </div>
  );
};


export default RatingAndReviews;
