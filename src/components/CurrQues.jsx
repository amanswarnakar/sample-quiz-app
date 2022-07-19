import React from "react";

const CurrQues = ({ currQues, totalQues }) => {
  return (
    <div className="curr-ques">
      {currQues}/{totalQues}
    </div>
  );
};

export default CurrQues;
