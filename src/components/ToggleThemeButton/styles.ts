import { FiMoon, FiSun } from "react-icons/fi";
import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.colors.text};

  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const SunIcon = styled(FiSun)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.colors.background};
`;

export const MoonIcon = styled(FiMoon)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.colors.background};
`;
