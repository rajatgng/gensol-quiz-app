import { Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

interface OwnProps {
  initialMinute?: number;
  initialSeconds?: number;
  onComplete?: () => void;
}

const Timer: React.FunctionComponent<OwnProps> = (props) => {
  const { initialMinute = 0, initialSeconds = 0, onComplete } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          onComplete?.(); // when timer finished
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Typography fontSize={16} fontWeight={500}>
      {" "}
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </Typography>
  );
};

export default Timer;
