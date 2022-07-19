import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
};

export default ProgressBar;
