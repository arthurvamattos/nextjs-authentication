import styled from "styled-components";
import { FiKey } from "react-icons/fi";

export const Container = styled.header`
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled(FiKey)`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 25rem) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 25rem) {
    font-size: 1rem;
  }
`;
