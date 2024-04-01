import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { font, theme } from "../../styles";
import { ButtonCustom } from "../button/button";
import { Info } from "@mui/icons-material";
import he from "he";

export const PriceCards = React.memo(({ priceData, globalQuery }) => {
  return (
    <Box display={"flex"} width="100%" flexWrap="wrap" gap="20px" pb={8}>
      {Object.keys(priceData).map((key, i) => (
        <Box
          backgroundColor={theme.col_1}
          minWidth="178px"
          sx={{
            transition: ".5s ease 0s",
            "&:hover": { transform: "scale(1.04)" },
          }}
          display={"flex"}
          flexDirection={"column"}
          gap="10px"
          borderRadius="12px"
          px={2}
          py={1.5}
          width={globalQuery ? "100%" : "18%"}
        >
          <Typography
            fontSize={font.size.fs_3}
            color={theme.col_4}
            display="flex"
            gap="7px"
          >
            {priceData[key]?.code}
          </Typography>
          <Typography
            fontSize={font.size.fs_4}
            color={theme.col_17}
            display="flex"
            gap="7px"
          >
            {priceData[key]?.description}
          </Typography>
          <Typography
            fontSize={font.size.fs_2}
            color={theme.col_4}
            display="flex"
            fontWeight="bold"
            gap="7px"
          >
            {he.decode(priceData[key]?.symbol)}
            {priceData[key]?.rate}
          </Typography>
          <Box backgroundColor={theme.col_1} display={"flex"}>
            <Tooltip
              title={
                <Box display="flex" flexDirection="column" gap="8px">
                  <Typography
                    display="flex"
                    gap="4px"
                    fontSize={font.size.fs_4}
                  >
                    Price:
                    <Typography fontSize={font.size.fs_4}>
                      {he.decode(priceData[key]?.symbol)}
                      {priceData[key]?.rate}
                    </Typography>
                  </Typography>
                </Box>
              }
            >
              <Info sx={{ color: theme.col_4 }} />
            </Tooltip>
            <Box flex="1"></Box>
            <ButtonCustom
              background={theme.col_16}
              height="30px"
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
                  Trade
                </Typography>
              }
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
});
