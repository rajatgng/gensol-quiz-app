import {
    Alert, Card,
    CardContent, Stack,
    Typography
} from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { QUIZ_DIFFICULTY } from "../../constants/enum";
import { ICategory } from "../../models/quiz";
import { fetchCategories } from "../../services/quiz";
import LoadingButton from "../customs/LoadingButton/LoadingButton";
import QuizCategorySelect from "./QuizCategorySelect";
import QuizDifficultySelect from "./QuizDifficultySelect";

interface OwnProps {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  difficulty: QUIZ_DIFFICULTY;
  setDifficulty: Dispatch<SetStateAction<QUIZ_DIFFICULTY>>;
  onSubmit: () => void;
  loading: boolean;
}

const QuizSelection: React.FunctionComponent<OwnProps> = ({
  category,
  setCategory,
  difficulty,
  setDifficulty,
  onSubmit,
  loading,
}) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [catLoading, setCatLoading] = useState(false);

  useEffect(() => {
    setCatLoading(true);
    fetchCategories()
      .then((res) => {
        setCategories(res);
        setCategory(res[0].id);
        setCatLoading(false);
      })
      .catch(() => {
        setError("Unable to fetch categories");
        setCatLoading(false);
      });
  }, []);

  return (
    <Card sx={{ minWidth: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Start The Quiz
        </Typography>

        <Stack spacing={4} mt={3}>
          {error && <Alert severity="error">{error}</Alert>}

          <QuizCategorySelect
            value={category}
            onChange={setCategory}
            options={categories}
            helperText={catLoading ? "Fetching categories..." : ""}
          />

          <QuizDifficultySelect value={difficulty} onChange={setDifficulty} />

          <LoadingButton
            size="small"
            variant="contained"
            disabled={!!error || categories.length === 0 || catLoading}
            onClick={onSubmit}
            loading={loading}
          >
            Start Quiz
          </LoadingButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default QuizSelection;
