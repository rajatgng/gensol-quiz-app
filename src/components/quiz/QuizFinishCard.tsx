import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

import { QUESTIONS_COUNTS } from "../../constants/constant";

interface OwnProps {
  score: number;
  onRestart: () => void;
}

const QuizFinishCard: React.FunctionComponent<OwnProps> = ({
  score,
  onRestart,
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
