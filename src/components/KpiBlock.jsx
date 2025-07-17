import React from "react";

const kpis = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
];

const KpiBlock = () => {
  return (
    <div className="flex items-center justify-center lg:items-start lg:justify-start">
      <div className="grid grid-cols-3 lg:grid-cols-5 items-center gap-[27.5px] lg:gap-[32px] w-[278px] lg:w-[596px]">
        {kpis.map((kpi, index) => (
          <React.Fragment key={index}>
            <div className="w-[106px] h-full lg:w-[141px] lg:h-[74px] flex flex-col justify-center space-y-[2px]">
              <p className="font-satoshi font-bold text-[24px]">{kpi.value}</p>
              <p className="font-satoshi text-nowrap text-[12px]">
                {kpi.label}
              </p>
            </div>
            {index < kpis.length - 1 && (
              <hr
                className={`${
                  index === 1 ? "hidden lg:flex" : "flex"
                } text-[#0000001A] w-[52px] h-20 rotate-[90deg]`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default KpiBlock;
