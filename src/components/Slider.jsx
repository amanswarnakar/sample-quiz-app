import React from "react";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "Strongly Disagree",
  },
  {
    value: 25,
    label: "Disagree",
  },
  {
    value: 50,
    label: "Neutral",
  },
  {
    value: 75,
    label: "Agree",
  },
  {
    value: 100,
    label: "Strongly Agree",
  },
];

export default function DiscreteSliderValues({ value, changeValue }) {
  return (
    <div className="slider">
      <Slider
        sx={{ fontSize: "30px" }}
        aria-label="Restricted values"
        defaultValue={0}
        value={value}
        onChangeCommitted={changeValue}
        step={null}
        marks={marks}
      />
    </div>
  );
}
