import React from "react";
import CurrQues from "./CurrQues";
import Slider from "./Slider";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Question = ({
  currQues,
  totalQues,
  question,
  handlePrev,
  handleNext,
  value,
  changeValue,
}) => {
  return (
    <div className="ques-area">
      <CurrQues currQues={currQues} totalQues={totalQues} />
      <div className="ques-text">{question}</div>
      <Slider value={value} changeValue={changeValue} />
      <div className="buttons">
        <Button variant="text" onClick={handlePrev}>
          <ChevronLeftIcon /> Prev
        </Button>
        <Button variant="text" onClick={handleNext}>
          Next <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
};
export default Question;
