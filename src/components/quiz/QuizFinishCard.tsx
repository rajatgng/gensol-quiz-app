import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

import { QUESTIONS_COUNTS } from "../../constants/constant";
import { IUserResponse } from "../../models/quiz";

interface OwnProps {
  score: number;
  onRestart: () => void;
  responses: IUserResponse[];
}

const QuizFinishCard: React.FunctionComponent<OwnProps> = ({
  score,
  onRestart,
  responses
}) => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Typography fontSize={16} fontWeight={500}>
            Quiz Finished!!
          </Typography>

          <Typography fontSize={16} fontWeight={400}>
            You scored: <b>{score}</b> out of {QUESTIONS_COUNTS}
          </Typography>
          <Typography fontSize={16} fontWeight={400}>
            Questions Attempted: {responses.filter(i => i.response).length}
          </Typography>
          <Typography fontSize={16} fontWeight={400}>
          Questions Not Attempted: {responses.filter(i => !i.response).length}
          </Typography>
          <Typography fontSize={16} fontWeight={400}>
            Correct Answers: {responses.filter(i => i.response && score === 1).length}
          </Typography>
          <Typography fontSize={16} fontWeight={400}>
            Wrong Answers: {responses.filter(i => i.response && score === 0).length}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} mt={4}>
          <Button size="small" onClick={onRestart}>
            Retake Quiz
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default QuizFinishCard;
