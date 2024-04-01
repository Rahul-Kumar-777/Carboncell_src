import { Button, CircularProgress } from "@mui/material";
import React from "react";
import { theme } from "../../styles";

export const ButtonCustom = (props) => {
  return (
    <Button
      {...props}
      sx={{
        background: props.background,
        borderRadius: props.borderRadius,
        width: props.width,
        height: props.height,
        ".MuiButton-startIcon": { width: "25px", height: "25px" },
        "&:hover": { background: props.backgroundRipple },
        "&:disabled": { background: theme.col_7 },
        ".MuiTouchRipple-child": {
          background: `${props.focusColor} !important`,
        },
      }}
    >
      {props.loaderState ? (
        <CircularProgress sx={{ color: theme.col_2 }} size="22px" />
      ) : (
        props.typography
      )}
    </Button>
  );
};
