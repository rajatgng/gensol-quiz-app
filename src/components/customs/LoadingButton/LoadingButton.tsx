import { Button, ButtonProps, CircularProgress } from "@mui/material";
import React from "react";

interface OwnProps extends ButtonProps {
  loading: boolean;
}

const getSize = (size: "small" | "medium" | "large" | undefined) => {
  switch (size) {
    case "large":
      return 36;
    case "medium":
      return 28;
    case "small":
      return 20;
    default:
      return 28;
  }
};

const LoadingButton: React.FunctionComponent<OwnProps> = ({
  loading,
  children,
  ...btnProps
}) => {
  return (
    <Button {...btnProps}>
      {!loading ? (
        children
      ) : (
        <CircularProgress color="inherit" size={getSize(btnProps.size)} />
      )}
    </Button>
  );
};

export default LoadingButton;
