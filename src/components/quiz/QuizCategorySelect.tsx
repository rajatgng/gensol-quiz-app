import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

import { ICategory } from "../../models/quiz";

interface OwnProps {
  value: string;
  onChange: (value: string) => void;
  options: ICategory[];
  helperText?: string;
}

const QuizCategorySelect: React.FunctionComponent<OwnProps> = ({
  value,
  onChange,
  options,
  helperText,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="quiz-category-label">Select Category</InputLabel>
      <Select
        labelId="quiz-category-label"
        id="quiz-category"
        value={value}
        onChange={handleChange}
        label="Select Category"
        MenuProps={{
          style: {
            maxHeight: 400,
          },
        }}
      >
        {options.map((option) => (
          <MenuItem value={option.id} key={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default QuizCategorySelect;
