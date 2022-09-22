import { ThemeOptions } from "@mui/material";

export const tellaTheme = {
  palette: {
    primary: { main: "#10069f" },
    secondary: { dark: "#f7ced7", main: "#fcebef", light: "#fff" },
    success: { main: "#37c49f" },
    info: { main: "#263238" },
    error: { main: "#ef426f" },
  },
  brand: {
    logo: "assets/images/tella-logo.svg",
  },
};

export const themes: { name: string; theme: ThemeOptions }[] = [
  {
    name: "tella",
    theme: tellaTheme,
  },

  {
    name: "eightfold",
    theme: {
      palette: {
        primary: { dark: "371F59", main: "#4F2D7F" },
        secondary: { dark: "#f7f7f7", main: "#ffffff", light: "#ffffff" },
        success: { main: "#2D89EF" },
        info: { main: "#263238" },
        error: { main: "#B71C1C" },
      },
    },
  },
];
