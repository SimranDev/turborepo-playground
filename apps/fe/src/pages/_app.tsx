import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useLayoutEffect, useState } from "react";
import { theme } from "themer";
import { ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const [subDomain, setSubDomain] = useState("");

  useLayoutEffect(() => {
    const _subDomain = window.location.hostname.split(".")[0];
    setSubDomain(_subDomain);
  }, []);

  return (
    <ThemeProvider theme={theme(subDomain)}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
