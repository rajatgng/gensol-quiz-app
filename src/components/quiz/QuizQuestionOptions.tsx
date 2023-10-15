import {
    FormControl, FormControlLabel,
    Radio, RadioGroup, Typography, useTheme
} from "@mui/material";
import React from "react";

interface OwnProps {
  response: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  answer: string;
  submitted: boolean;
  options: string[];
}

const QuizQuestionOptions: React.FunctionComponent<OwnProps> = ({
  response,
  onChange,
  answer,
  submitted,
  options,
}) => {
  const theme = useTheme();

  const getColor = () => {
    if (submitted && response && response === answer) {
      return "success";
    } else if (submitted && response && response !== answer) {
      return "error";
    } else {
      return "default";
    }
  };

  const getFontColor = (d: string) => {
    if (submitted && d === answer) {
      return theme.palette.success.main;
    } else if (submitted && d !== answer) {
      return theme.palette.error.main;
    } else {
      return theme.palette.text.primary;
    }
  };

  return (
    <FormControl>
      <Typography fontSize={13} fontWeight={500} mt={4}>
        Options
      </Typography>
      <RadioGroup
        aria-labelledby="questions-options-label"
        name="questions-options"
        value={response}
        onChange={onChange}
      >
        {options.map((d) => (
          <FormControlLabel
            value={d}
            control={<Radio color={getColor()} />}
            label={d}
            key={d}
            sx={{ color: getFontColor(d) }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default QuizQuestionOptions;
