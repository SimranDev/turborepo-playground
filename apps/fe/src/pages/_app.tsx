import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { theme } from "themer";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import Layout from "../components/layout/index ";
import useIsomorphicLayoutEffect from "../hooks/useIsomorphicLayoutEffect";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const [subDomain, setSubDomain] = useState("");

  useIsomorphicLayoutEffect(() => {
    const _subDomain = window.location.hostname.split(".")[0];
    setSubDomain(_subDomain);
  }, []);

  return (
    <ThemeProvider theme={theme(subDomain)}>
      {asPath === "/application" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
