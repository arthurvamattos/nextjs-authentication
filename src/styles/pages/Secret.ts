import styled from "styled-components";

export const UserWrapper = styled.div`
  width: 100%;
  max-width: 21rem;
  margin-bottom: 2rem;
  border-radius: 0%.25rem;
  padding: 1.5rem 1rem;

  display: flex;
  align-items: center;

  background: ${(props) => props.theme.colors.foreground};

  > header {
    margin-right: 1rem;
  }
`;

export const UserAvatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 1.5rem;
`;

export const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

export const UserEmail = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.text};
`;
