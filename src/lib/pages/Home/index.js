import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { font, theme } from "../../styles";
import { NavigationDock } from "../../components/navigationDock";
import { ApplicationContext } from "../../context";
import { HomeTab } from "../../components/home";
import { chartData, prices } from "../../api/controllers/controller";
import MenuIcon from "@mui/icons-material/Menu";
import { SideDrawer } from "../../components/drawer/drawer";
import { Home as HomeIcon } from "@mui/icons-material";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import BusinessIcon from "@mui/icons-material/Business";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import TimerIcon from "@mui/icons-material/Timer";
import WalletIcon from "@mui/icons-material/Wallet";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { HttpStatusCode } from "axios";

export const Home = () => {
  /* Application context variables */
  const { activeTab, setPopulationData, globalQuery, setPriceData } =
    useContext(ApplicationContext);
  /* UseState data variables */
  const [openDock, setOpenDock] = useState(false);

  /* Navigation tabs json */
  let navItems = [
    {
      label: "Home",
      icon: (
        <HomeIcon
          sx={{
            color: activeTab === 0 ? theme.col_16 : theme.col_4,
            fontSize: font.size.fs_5,
          }}
        />
      ),
    },
    {
      label: "Organisation",
      icon: (
        <BusinessIcon
          sx={{
            color: activeTab === 1 ? theme.col_16 : theme.col_4,
            fontSize: font.size.fs_5,
          }}
        />
      ),
    },
    {
      label: "Assets",
      icon: (
        <ViewInArIcon
          sx={{
            color: activeTab === 2 ? theme.col_16 : theme.col_4,
            fontSize: font.size.fs_5,
          }}
        />
      ),
    },
    {
      label: "Trade",
      icon: (
        <ImportExportIcon
          sx={{
            color: activeTab === 3 ? theme.col_16 : theme.col_4,
            fontSize: font.size.fs_5,
          }}
        />
      ),
    },
    {
      label: "History",
      icon: (
        <TimerIcon
          sx={{
            color: activeTab === 4 ? theme.col_16 : theme.col_4,
            fontSize: font.size.fs_5,
          }}
        />
      ),
    },
    {
      label: "Wallet",
      icon: (
        <WalletIcon
          sx={{
            color: activeTab === 5 ? theme.col_16 : theme.col_4,
            fontSize: font.size.fs_5,
          }}
        />
      ),
    },
  ];

  /* Navigation bottom button json */
  let utility = [
    {
      label: "Notifications",
      icon: (
        <NotificationsActiveIcon
          sx={{ color: theme.col_4, fontSize: font.size.fs_5 }}
        />
      ),
    },
    {
      label: "Organisation",
      icon: (
        <HelpOutlineIcon
          sx={{ color: theme.col_4, fontSize: font.size.fs_5 }}
        />
      ),
    },
    {
      label: "Assets",
      icon: (
        <SettingsIcon sx={{ color: theme.col_4, fontSize: font.size.fs_5 }} />
      ),
    },
  ];

  /* Useffect lifecycle to fetch chart and price data */
  useEffect(() => {
    /* Function to fetch chart data  */
    (async () => {
      try {
        let response = await chartData();
        if (response.status === HttpStatusCode.Ok) {
          setPopulationData(response.data.data);
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    })();

    /* Function to fetch prices  */
    (async () => {
      try {
        let response = await prices();
        if (response.status === HttpStatusCode.Ok) {
          setPriceData(response.data.bpi);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return (
    <>
      {/* Main layout component */}
      <Box
        display="flex"
        flexDirection={globalQuery ? "column" : "row"}
        width="100vw"
        height="100vh"
        backgroundColor={theme.col_2}
      >
        {/* Navigation component */}
        {globalQuery ? (
          <MenuIcon
            onClick={() => setOpenDock(true)}
            sx={{ color: theme.col_16, fontSize: font.size.fs_1, pl: 1, pt: 2 }}
          />
        ) : (
          <NavigationDock
            setOpenDock={setOpenDock}
            utility={utility}
            navItems={navItems}
          />
        )}

        {/* Right side module component */}
        <Box display="flex" flex="1" px={3.5} overflow="auto">
          <ActiveModule activeTab={activeTab} />
        </Box>
      </Box>

      {/* Navigation drawer for smaller screens */}
      {globalQuery ? (
        <SideDrawer
          openDock={openDock}
          setOpenDock={setOpenDock}
          navItems={navItems}
          utility={utility}
        />
      ) : (
        <></>
      )}
    </>
  );
};

/* Functional component for switching modules */
const ActiveModule = ({ activeTab }) => {
  switch (activeTab) {
    case 0:
      return <HomeTab />;
    case 1:
      return <Typography>wef</Typography>;
    default:
      return;
  }
};
