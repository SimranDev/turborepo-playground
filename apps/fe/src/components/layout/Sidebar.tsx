import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { SIDEBAR } from "../../lib/config";
import Scrollbar from "../Scrollbar";

type Props = {
  children: React.ReactNode;
  drawerOpen: boolean;
  drawerOnClose: (value: boolean) => void;
};

export default function Sidebar({
  children,
  drawerOpen,
  drawerOnClose,
}: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box component="nav" sx={{ width: { lg: SIDEBAR.WIDTH } }}>
      {!isDesktop && (
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={drawerOnClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          PaperProps={{
            sx: {
              width: SIDEBAR.WIDTH,
              color: "secondary.light",
              backgroundColor: "primary.main",
              display: { xs: "block", lg: "none" },
            },
          }}
        >
          <Scrollbar>{children}</Scrollbar>
        </Drawer>
      )}
      {isDesktop && (
        <Drawer
          variant="permanent"
          PaperProps={{
            sx: {
              width: SIDEBAR.WIDTH,
              color: "secondary.light",
              backgroundColor: "primary.main",
              display: { xs: "none", lg: "block" },
            },
          }}
          open
        >
          <Scrollbar>{children}</Scrollbar>
        </Drawer>
      )}
    </Box>
  );
}
