import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

import { QUIZ_DIFFICULTY } from "../../constants/enum";

interface OwnProps {
  value: QUIZ_DIFFICULTY;
  onChange: (value: QUIZ_DIFFICULTY) => void;
}

const QuizDifficultySelect: React.FunctionComponent<OwnProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as QUIZ_DIFFICULTY);
  };

  return (
    <FormControl>
      <InputLabel id="quiz-difficulty-label">Select Difficulty</InputLabel>
      <Select
        labelId="quiz-difficulty-label"
        id="quiz-difficulty"
        value={value}
        onChange={handleChange}
        label="Select Difficulty"
      >
        <MenuItem value={QUIZ_DIFFICULTY.EASY}>Easy</MenuItem>

        <MenuItem value={QUIZ_DIFFICULTY.MEDIUM}>Medium</MenuItem>

        <MenuItem value={QUIZ_DIFFICULTY.HARD}>Hard</MenuItem>
      </Select>
    </FormControl>
  );
};

export default QuizDifficultySelect;
