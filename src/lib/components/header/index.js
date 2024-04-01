import { Box, Typography } from "@mui/material";
import { font, theme } from "../../styles";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = ({ setOpenDock }) => {
  return (
    <Box display="flex" pt={2} alignItems="center" justifyContent="center">
      <MenuIcon
        onClick={() => setOpenDock(true)}
        sx={{ color: theme.col_16, fontSize: font.size.fs_1, pl: 1 }}
      />
      <Box display="flex" justifyContent="center" flex="1">
        <Typography
          fontSize={font.size.fs_2}
          fontWeight={"bold"}
          color={theme.col_16}
        >
          Carbon Cell
        </Typography>
      </Box>
    </Box>
  );
};
