import { AppBar, Toolbar, IconButton, alpha, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SIDEBAR } from "../../lib/config";

type Props = {
  onClickMenu: () => void;
};

const Header = ({ onClickMenu }: Props) => {
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        width: { lg: `calc(100% - ${SIDEBAR.WIDTH}px)` },
        ml: { lg: `${SIDEBAR.WIDTH}px` },
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        backgroundColor: alpha(theme.palette.secondary.main, 0.8),
        color: "primary.main",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="menu"
          sx={{ mr: 2, display: { lg: "none" } }}
          onClick={onClickMenu}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
