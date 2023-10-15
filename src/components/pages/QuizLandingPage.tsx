import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

import { QUESTIONS_COUNTS } from "../../constants/constant";
import { QUIZ_DIFFICULTY, QUIZ_STATE } from "../../constants/enum";
import { IQuestion } from "../../models/quiz";
import { fetchQuestions } from "../../services/quiz";
import Header from "../Header";
import QuizFinishCard from "../quiz/QuizFinishCard";
import QuizQuestionsNavigator from "../quiz/QuizQuestionCard";
import QuizSelection from "../quiz/QuizSelection";

const QuizLandingPage: React.FunctionComponent = () => {
  const [category, setCategory] = useState<string>("9");
  const [difficulty, setDifficulty] = useState<QUIZ_DIFFICULTY>(
    QUIZ_DIFFICULTY.EASY
  );
  const [state, setState] = useState<QUIZ_STATE>(QUIZ_STATE.NOT_STARTED);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [loading, setLoading] = useState(false);

  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const onQuizStart = async () => {
    try {
      setLoading(true);
      const res = await fetchQuestions(category, difficulty);
      setQuestions(res);
      setState(QUIZ_STATE.IN_PROGRESS);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const onNext = (score: number) => {
    setScore((prev) => prev + score);
    const newIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(newIndex);

    // once index reaches to last questions, finish the quiz;
    if (newIndex === QUESTIONS_COUNTS) {
      setState(QUIZ_STATE.FINISHED);
    }
  };

  const onRetake = () => {
    // reset the values
    setState(QUIZ_STATE.NOT_STARTED);
    setScore(0);
    setCurrentQuestionIndex(0);
    setCategory("");
    setDifficulty(QUIZ_DIFFICULTY.EASY);
  };

  return (
    <Stack>
      <Header />

      <Box display="flex" justifyContent="center" mt={4}>
        {state === QUIZ_STATE.NOT_STARTED && (
          <QuizSelection
            category={category}
            setCategory={setCategory}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            onSubmit={onQuizStart}
            loading={loading}
          />
        )}

        {state === QUIZ_STATE.IN_PROGRESS &&
          questions[currentQuestionIndex] && (
            <QuizQuestionsNavigator
              data={questions[currentQuestionIndex]}
              onNext={onNext}
              questionNumber={currentQuestionIndex + 1}
            />
          )}

        {state === QUIZ_STATE.FINISHED && (
          <QuizFinishCard score={score} onRestart={onRetake} />
        )}
      </Box>
    </Stack>
  );
};

export default QuizLandingPage;
