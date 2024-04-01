import { Box, Button, TextField, Typography } from "@mui/material";
import { font, theme } from "../../styles";
import { ApplicationContext } from "../../context";
import { useContext } from "react";
import { ButtonCustom } from "../button/button";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

import { PriceCards } from "../priceCards";
import { ChartCard } from "../chartCard";
export const HomeTab = () => {
  const { populationData, priceData, globalQuery } =
    useContext(ApplicationContext);
  return (
    <Box display="flex" width="100%" flexDirection="column" gap="23px">
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        position={"sticky"}
        top="0px"
        zIndex="10"
        sx={{ backdropFilter: "blur(5px)" }}
        pt={3.5}
      >
        <Box display="flex" flexDirection="column" flex="1">
          <Typography
            fontSize={font.size.fs_2}
            color={theme.col_16}
            display="flex"
            flexWrap="wrap"
            gap="7px"
          >
            <Typography fontSize={font.size.fs_2} color={theme.col_4}>
              Hello,
            </Typography>
            Rahul Tyagi
          </Typography>
          <Typography
            fontSize={font.size.fs_3}
            color={theme.col_16}
            display="flex"
            gap="8px"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            <Typography fontSize={font.size.fs_3} color={theme.col_4}>
              Welcome to
            </Typography>
            Sport trading!
          </Typography>
        </Box>
        <ButtonCustom
          background={theme.col_16}
          height="40px"
          backgroundRipple={theme.col_3}
          focusColor={theme.col_1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          typography={
            <Typography
              fontFamily={font.family.fm_2}
              textTransform={"capitalize"}
              fontSize={font.size.fs_3}
              color={theme.col_4}
            >
              Start Trading
            </Typography>
          }
        />
      </Box>

      <ChartCard populationData={populationData} />
      <Typography
        fontSize={font.size.fs_3}
        color={theme.col_16}
        display="flex"
        fontWeight="bold"
        gap="7px"
      >
        Assets
      </Typography>
      <PriceCards globalQuery={globalQuery} priceData={priceData} />
    </Box>
  );
};
