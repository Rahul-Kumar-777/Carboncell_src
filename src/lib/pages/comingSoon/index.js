import { Typography } from "@mui/material";
import { font, theme } from "../../styles";

export const ComingSoon = () => {
        return (
          <Typography
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={theme.col_4}
            fontSize={font.size.fs_2}
          >
            COMING SOON
          </Typography>
        );
  };