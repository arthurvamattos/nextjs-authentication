import type { AppProps } from "next/app";

import GlobalStyle from "../styles/global";
import ContextProvider from "../contexts";
import { ThemeProvider } from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
}
export default MyApp;
