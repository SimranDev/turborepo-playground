import { alpha, styled } from "@mui/material";
import { ReactNode } from "react";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

type Props = {
  children: ReactNode;
};

export default function Scrollbar({ children }: Props) {
  return (
    <SimpleBarStyle
      timeout={2000}
      clickOnTrack={false}
      sx={{
        height: 1,
        p: 2,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {children}
    </SimpleBarStyle>
  );
}

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&:before": {
      backgroundColor: alpha(theme.palette.secondary.light, 0.48),
    },
    "&.simplebar-visible:before": {
      opacity: 1,
    },
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 10,
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6,
  },
  "& .simplebar-mask": {
    zIndex: "inherit",
  },
}));
