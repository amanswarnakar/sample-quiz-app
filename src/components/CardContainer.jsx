import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Question from "./Question";

const CardContainer = () => {
  const [data, setData] = useState([
    {
      ques: "I have ambitious aims of making a difference.",
      id: 1,
      value: 0,
    },
    {
      ques: "My leadership journey has progressed as I anticipated.",
      id: 2,
      value: 0,
    },
    {
      ques: "I have spent fewer than 4 years in full time service or ministry.",
      id: 3,
      value: 0,
    },
    {
      ques: "I question whether I can remain effective in my role long-term.",
      id: 4,
      value: 0,
    },
    {
      ques: "I wonder if I’m really making the difference I anticipated making.",
      id: 5,
      value: 0,
    },
    {
      ques: "It feels as though I have hit a wall in my ministry, and I’m not surewhere to go from here.",
      id: 6,
      value: 0,
    },
  ]);
  const [currQues, setCurrQues] = useState(1);
  const totalQues = 6;
  const [progress, setProgress] = React.useState(0);

  const changeValue = (event, newValue) => {
    setData(
      data.map((obj) =>
        obj.id === currQues ? { ...obj, value: newValue } : obj
      )
    );
    setTimeout(() => {
      handleNext();
    }, 500);
  };

  const handlePrev = () => {
    setProgress((prev) => {
      return Math.max(prev - 100 / (totalQues - 1), 0);
    });
    setCurrQues((prev) => {
      return Math.max(prev - 1, 1);
    });
  };
  const handleNext = () => {
    setProgress((prev) => {
      return Math.min(prev + 100 / (totalQues - 1), 100);
    });
    setCurrQues((prev) => {
      return Math.min(prev + 1, totalQues);
    });
  };

  return (
    <div className="card-container">
      <ProgressBar currQues={currQues} progress={progress} />
      <Question
        currQues={currQues}
        totalQues={totalQues}
        handleNext={handleNext}
        handlePrev={handlePrev}
        question={data[currQues - 1].ques}
        changeValue={changeValue}
        value={data[currQues - 1].value}
      />
    </div>
  );
};

export default CardContainer;
