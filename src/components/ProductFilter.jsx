import { images } from "../assets/assets";

const ProductFilter = () => {
  return (
    <aside className="hidden lg:flex flex-col gap-[24px] h-[1220px] bg-white border border-pearlGray rounded-[20px] w-[295px]">
      <div className="px-[24px] space-y-[24px] pt-[20px]">
        <div className="flex items-center justify-between">
          <p>Filters</p>
          <img
            src={images.FilterIcon}
            className="rounded-[62px] object-cover"
            alt=""
            srcset=""
          />
        </div>
        <hr className="text-softGray" />
      </div>
    </aside>
  );
};

export default ProductFilter;
