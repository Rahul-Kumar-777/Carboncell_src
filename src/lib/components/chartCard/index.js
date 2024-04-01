import { Box, Typography } from "@mui/material";
import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { font, theme } from "../../styles";

export const ChartCard = React.memo(({ populationData }) => {
  return (
    <Box
      backgroundColor={theme.col_1}
      display={"flex"}
      flexDirection={"column"}
      gap="22px"
      borderRadius="12px"
      pr={3}
      width="fit-content"
      py={3}
      sx={{ "&:hover .chartAnimate": { transform: "scale(1.04)" } }}
    >
      <Box pl={2}>
        <Typography
          fontSize={font.size.fs_3}
          color={theme.col_16}
          display="flex"
          fontWeight="bold"
          gap="7px"
        >
          Population overview
        </Typography>
      </Box>
      <LineChart
        className="chartAnimate"
        width={400}
        margin={{ left: 45, right: 12 }}
        height={200}
        data={populationData}
      >
        <Line type="monotone" dataKey="Population" stroke={theme.col_16} />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Box>
  );
});
