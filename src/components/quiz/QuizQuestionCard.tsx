import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import { MAX_ALLOWED_SECONDS } from "../../constants/constant";
import { IQuestion } from "../../models/quiz";
import Timer from "../Timer/Timer";
import QuestionContainer from "./QuestionContainer";
import QuizQuestionOptions from "./QuizQuestionOptions";

interface OwnProps {
  data: IQuestion;
  onNext: (score: number, response?: string) => void;
  questionNumber: number;
}

const QuizQuestionCard: React.FunctionComponent<OwnProps> = ({
  data,
  onNext,
  questionNumber,
}) => {
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [notAnswered, setNoAnswered] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (submitted || notAnswered) return; // don't submit again
    setResponse((event.target as HTMLInputElement).value);
  };

  const onResponseSubmit = () => {
    setSubmitted(true);
  };

  const onNextHandler = () => {
    onNext(submitted && response && response === data.answer ? 1 : 0, response);
    setSubmitted(false);
    setResponse("");
    setNoAnswered(false);
  };

  return (
    <QuestionContainer question={data.question} questionNumber={questionNumber}>
      <QuizQuestionOptions
        options={data.options}
        response={response}
        submitted={submitted}
        onChange={handleChange}
        answer={data.answer}
      />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Stack direction="row" spacing={2} mt={4}>
          <Button
            size="small"
            variant="contained"
            onClick={onResponseSubmit}
            disabled={submitted || notAnswered || !response}
          >
            Submit
          </Button>
          <Button size="small" onClick={onNextHandler}>
            Next
          </Button>
        </Stack>
        <Timer
          initialSeconds={MAX_ALLOWED_SECONDS}
          key={data.question}
          onComplete={() => !submitted && setNoAnswered(true)}
        />
      </Stack>
      <Typography fontSize={12} color="text.secondary" mt={1}>
        Note: Your response will be counted as an answer upon clicking the
        'SUBMIT' button only.
      </Typography>
    </QuestionContainer>
  );
};

export default QuizQuestionCard;
