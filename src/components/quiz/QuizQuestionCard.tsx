import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import { QUESTIONS_COUNTS } from "../../constants/constant";
import { IQuestion } from "../../models/quiz";
import { decodeHtmlCharCodes } from "../../utils/stringUtils";
import QuizQuestionOptions from "./QuizQuestionOptions";

interface OwnProps {
  data: IQuestion;
  onNext: (score: number) => void;
  questionNumber: number;
}

const QuizQuestionCard: React.FunctionComponent<OwnProps> = ({
  data,
  onNext,
  questionNumber,
}) => {
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (submitted) return; // don't submit again
    setResponse((event.target as HTMLInputElement).value);
  };

  const onResponseSubmit = () => {
    setSubmitted(true);
  };

  const onNextHandler = () => {
    onNext(submitted && response && response === data.answer ? 1 : 0);
    setSubmitted(false);
    setResponse("");
  };

  return (
    <Card sx={{ minWidth: 600 }}>
      <CardContent>
        <Stack spacing={0.5}>
          <Typography fontSize={13} fontWeight={500}>
            Question {questionNumber}/{QUESTIONS_COUNTS}
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {decodeHtmlCharCodes(data.question)}
          </Typography>
        </Stack>

        <QuizQuestionOptions
          options={data.options}
          response={response}
          submitted={submitted}
          onChange={handleChange}
          answer={data.answer}
        />

        <Stack direction="row" spacing={2} mt={4}>
          <Button
            size="small"
            variant="contained"
            onClick={onResponseSubmit}
            disabled={submitted}
          >
            Submit
          </Button>
          <Button size="small" disabled={!submitted} onClick={onNextHandler}>
            Next
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default QuizQuestionCard;
