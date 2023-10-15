import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

import { QUESTIONS_COUNTS } from "../../constants/constant";

interface OwnProps {
  questionNumber: number;
  question: string;
  children: React.ReactNode;
}

const QuestionContainer: React.FunctionComponent<OwnProps> = ({
  question,
  questionNumber,
  children,
}) => {
  return (
    <Card sx={{ width: { sm: "100%", md: 700 } }}>
      <CardContent>
        <Stack spacing={0.5}>
          <Typography fontSize={13} fontWeight={500}>
            Question {questionNumber}/{QUESTIONS_COUNTS}
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {question}
          </Typography>
        </Stack>

        {children}
      </CardContent>
    </Card>
  );
};

export default QuestionContainer;
