import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Header: React.FunctionComponent = () => {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      p={2}
      bgcolor="#bf64d1"
    >
      <Stack alignItems="center">
        <Typography
          fontSize={20}
          fontWeight={600}
          color="white"
          fontFamily="monospace"
        >
          Gensol - Quiz
        </Typography>
        <Typography fontSize={12} color="white">
          Enrich your knowledge
        </Typography>
      </Stack>
    </Box>
  );
};

export default Header;
