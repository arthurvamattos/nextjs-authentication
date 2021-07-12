import { Container, Icon, Title, SubTitle } from "./styles";

type Props = {
  subTitle: string;
};

export function Header({ subTitle }: Props) {
  return (
    <Container>
      <Icon />
      <Title>Next Auth</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
