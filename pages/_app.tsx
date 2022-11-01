import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../my-theme";
import Layout from "../Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
