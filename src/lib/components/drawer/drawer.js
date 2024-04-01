import { Drawer } from "@mui/material";
import { NavigationDock } from "../navigationDock";

export const SideDrawer = ({ navItems,openDock,setOpenDock,utility }) => {
  return (
    <Drawer
      sx={{ ".MuiDrawer-paper": { background: "transparent" } }}
      open={openDock}
      onClose={()=>setOpenDock(false)}
    >
      <NavigationDock utility={utility} setOpenDock={setOpenDock} navItems={navItems} />
    </Drawer>
  );
};
