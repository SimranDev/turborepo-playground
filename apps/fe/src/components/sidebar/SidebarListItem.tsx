import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { styled } from "@mui/system";
import * as MuiIcons from "@mui/icons-material";
import { SIDEBAR } from "../../lib/config";
import { ReactNode } from "react";

type Props = {
  title: string;
  href: string;
  isActive: boolean;
  iconName?: string;
  isCompleted?: boolean;
  icon?: ReactNode;
};

const SidebarListItem = ({ title, href, isActive, iconName, icon }: Props) => {
  const MIcon = MuiIcons[iconName as keyof typeof MuiIcons];
  return (
    <Link href={href}>
      <ListItemButtonStyle selected={isActive}>
        <ListItemIcon sx={{ color: "secondary.light", minWidth: 34 }}>
          {icon ? icon : <MIcon sx={{ fontSize: SIDEBAR.ICON_SIZE }} />}
        </ListItemIcon>
        <ListItemText
          primary={title}
          primaryTypographyProps={{ fontWeight: 500 }}
        />
      </ListItemButtonStyle>
    </Link>
  );
};
export default SidebarListItem;

const ListItemButtonStyle = styled(ListItemButton)(({ theme }) => ({
  borderRadius: SIDEBAR.ITEM_BORDER_RADIUS,
  "&.Mui-selected": {
    backgroundColor: theme.palette.success.main,
  },
  "&.Mui-selected:hover": {
    backgroundColor: theme.palette.success.dark,
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
