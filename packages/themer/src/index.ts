import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakpoints";
import { tellaTheme, themes } from "./themes";

const defaults = {
  breakpoints,
  typography: {
    fontFamily: "BeausiteClassicRegular, Arial",
  },
  components: {
    // removed extra bottom padding to the last child element in MUI card component
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: 16,
          },
        },
      },
    },
  },
};

export const theme = (subDomain: string) => {
  const themeFound =
    themes.find((theme) => theme.name === subDomain)?.theme ?? tellaTheme;

  return createTheme({ ...themeFound, ...defaults });
};

//adding custom variable in theme type using module augmentation
declare module "@mui/material/styles" {
  interface Theme {
    brand: {
      logo: string;
    };
  }
  interface ThemeOptions {
    brand?: {
      logo?: string;
    };
  }
}
