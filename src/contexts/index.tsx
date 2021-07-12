import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { AuthProvider } from "./AuthContext";

type Props = {
  children?: ReactNode;
};

function ContextProvider({ children }: Props) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}

export default ContextProvider;
