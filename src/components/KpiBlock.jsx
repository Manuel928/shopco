import React from "react";

const kpis = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
];

const KpiBlock = () => {
  return (
    <div className="flex max-w-[1440px] items-center justify-center lg:items-start lg:justify-start">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-[12px]">
        {kpis.map((kpi, index) => (
          <React.Fragment key={index}>
            <div className="h-full lg:h-[74px] flex flex-col space-y-[2px]">
              <p className="font-satoshi font-bold text-[24px]">{kpi.value}</p>
              <p className="font-satoshi text-nowrap text-[12px]">
                {kpi.label}
              </p>
            </div>
            {index < kpis.length - 1 && (
              <hr
                className={`${
                  index === 1 ? "hidden lg:flex" : "flex"
                } text-[#0000001A] w-[52px] rotate-[90deg]`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default KpiBlock;
