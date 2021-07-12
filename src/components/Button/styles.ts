import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 0.25rem;
  padding: 0 1rem;

  font-size: 1rem;
  font-weight: 700;

  background: ${(props) => props.theme.colors.blue};
  font-weight: bold;
  color: #fcfdff;
  cursor: pointer;
`;
