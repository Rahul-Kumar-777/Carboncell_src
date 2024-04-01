import React from "react";
import { font } from "../../styles";
import { Typography } from "@mui/material";

export const KeyValue = React.memo(({data,keys,value}) => {
  return (
    <Typography display="flex" fontSize={font.size.fs_4}>
      Price:
      <Typography fontSize={font.size.fs_4}>{data[keys][value]}</Typography>
    </Typography>
  );
});
