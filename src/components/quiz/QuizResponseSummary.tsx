import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import { IQuestion, IUserResponse } from "../../models/quiz";
import QuestionContainer from "./QuestionContainer";
import QuizQuestionOptions from "./QuizQuestionOptions";

interface OwnProps {
  questions: IQuestion[];
  responses: IUserResponse[];
}

const QuizResponseSummary: React.FunctionComponent<OwnProps> = ({
  questions,
  responses,
}) => {
  return (
    <Stack spacing={2}>
      <Typography
        fontSize={16}
        fontWeight={500}
        sx={{ textDecoration: "underline" }}
      >
        Response Summary:
      </Typography>

      <Stack spacing={2}>
        {questions.map((data, index) => (
          <QuestionContainer
            key={data.question}
            questionNumber={index + 1}
            question={data.question}
          >
            <QuizQuestionOptions
              options={data.options}
              response={responses[index].response ?? ""}
              submitted={!!responses[index].response}
              answer={data.answer}
            />

            <Stack spacing={0.5} mt={4}>
              <Typography fontSize={13} fontWeight={500}>
                Answer
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {data.answer}
              </Typography>
            </Stack>
          </QuestionContainer>
        ))}
      </Stack>
    </Stack>
  );
};

export default QuizResponseSummary;
