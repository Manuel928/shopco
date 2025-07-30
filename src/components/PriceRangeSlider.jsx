import { useState, useMemo } from "react";
import { Slider } from "antd";

const onChange = (value) => {
  console.log("onChange: ", value);
};
const onChangeComplete = (value) => {
  console.log("onChangeComplete: ", value);
};

const PriceRangeSlider = () => {
  return (
    <Slider
      range
      step={10}
      defaultValue={[50, 200]}
      min={0}
      max={500}
      onChange={onChange}
      onChangeComplete={onChangeComplete}
      marks={{
        0: "$0",
        500: "$500",
      }}
    />
  );
};

export default PriceRangeSlider;
