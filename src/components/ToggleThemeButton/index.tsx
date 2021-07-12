import { useTheme } from "../../hooks/useTheme";
import { Container, MoonIcon, SunIcon } from "./styles";

export function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container onClick={() => toggleTheme()}>
      {theme.title === "light" ? <SunIcon /> : <MoonIcon />}
    </Container>
  );
}
