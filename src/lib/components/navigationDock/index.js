import { Box, Typography } from "@mui/material";
import { font, theme } from "../../styles";
import { ApplicationContext } from "../../context";
import { useContext } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const NavigationDock = ({ navItems,setOpenDock, utility }) => {
  const { activeTab, setActiveTab } = useContext(ApplicationContext);

  const handleButton = (i)=>{
     setOpenDock(false)
    setActiveTab(i)
  }
  return (
    /* Navigation dock start */
    <Box
      display="flex"
      width="16%"
      minWidth="174px"
      flexDirection="column"
      height="97%"
      borderRadius="0px 12px 12px 0px"
      backgroundColor={theme.col_1}
    >
      <Box display="flex" pl={3}>
        <Typography
          fontSize={font.size.fs_5}
          lineHeight={1}
          color={theme.col_16}
          width={"40px"}
          pt={"29px"}
        >
          Carbon Cell
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        height="70px"
        alignItems="center"
      >
        <input
          placeholder="Search"
          className="searchBar"
        />
      </Box>
      {/* Middle Nav Button Section */}
      <Box display="flex" width="90%" flexDirection="column" gap={"13px"}>
        {navItems.map((items, i) => (
          <Box
            sx={{ "&:hover": { backgroundColor: theme.col_5 } }}
            key={i}
            onClick={()=>handleButton(i)}
            display="flex"
            width="100%"
            alignItems={"center"}
            backgroundColor={activeTab === i ? theme.col_5 : ""}
            py={0.9}
            pl={2.4}
            borderRadius="0px 45px 45px 0px"
            boxSizing="border-box"
            gap="8px"
          >
            {items.icon}
            <Typography
              fontSize={font.size.fs_4}
              fontWeight="bold"
              color={activeTab === i ? theme.col_16 : theme.col_4}
            >
              {items.label}
            </Typography>
          </Box>
        ))}
      </Box>
      {/* Bottom Section */}
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        gap="23px"
        justifyContent="flex-end"
        alignItems="center"
        flex="1"
        pb={2}
      >
        <Box
          display="flex"
          width="95%"
          justifyContent="flex-end"
          flexDirection="column"
          gap={"13px"}
        >
          {utility.map((items, i) => (
            <Box
              key={i}
              display="flex"
              width="100%"
              alignItems={"center"}
              py={0.9}
              pl={2.4}
              borderRadius="0px 45px 45px 0px"
              boxSizing="border-box"
              gap="8px"
            >
              {items.icon}
              <Typography
                fontSize={font.size.fs_4}
                fontWeight="bold"
                color={theme.col_18}
                flex="1"
              >
                {items.label}
              </Typography>
              {i === 0 ? (
                <Box
                  display="flex"
                  alignItems="center"
                  minWidth="30px"
                  minHeight="17px"
                  borderRadius="3px"
                  justifyContent="center"
                  backgroundColor={theme.col_16}
                >
                  <Typography
                    fontSize={font.size.fs_6}
                    fontWeight="bold"
                    color={theme.col_2}
                  >
                    12
                  </Typography>
                </Box>
              ) : (
                <></>
              )}
            </Box>
          ))}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={1}
          boxSizing="border-box"
          width="100%"
        >
          <Box
            display="flex"
            alignItems="center"
            flex="1"
            backgroundColor={theme.col_5}
            py={2}
            pl={2}
            borderRadius="7px"
            gap="12px"
          >
            <Box
              display="flex"
              alignItems="center"
              minWidth="35px"
              minHeight="35px"
              borderRadius="67px"
              backgroundColor={theme.col_17}
            ></Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              flex="1"
            >
              <Typography fontSize={font.size.fs_4} color={theme.col_4}>
                Rahul Tyagi
              </Typography>
              <Typography
                fontSize={font.size.fs_6}
                fontWeight="bold"
                color={theme.col_18}
              >
                Bork@gmail.com
              </Typography>
            </Box>
            <MoreVertIcon sx={{ color: theme.col_17 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
