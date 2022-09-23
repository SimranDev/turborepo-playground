import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, ListItemButton, ListItemText } from "@mui/material";
import { ReactNode, useState } from "react";
import { SIDEBAR } from "../../lib/config";

type Props = {
  title: string;
  children: ReactNode;
};

const CollapsibleSidebarList = ({ title, children }: Props) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{
          borderRadius: SIDEBAR.ITEM_BORDER_RADIUS,
          marginTop: 2,
          opacity: 0.7,
        }}
      >
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            fontSize: 13,
            fontWeight: "bold",
          }}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  );
};
export default CollapsibleSidebarList;
