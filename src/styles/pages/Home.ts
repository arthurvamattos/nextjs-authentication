import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${(props) => props.theme.colors.background};
`;
