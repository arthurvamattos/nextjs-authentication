import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  height: 2.75rem;
  border-radius: 0.25rem;
  padding: 0 1rem;

  font-size: 0.875rem;
  font-weight: 500;

  background: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.text};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;
