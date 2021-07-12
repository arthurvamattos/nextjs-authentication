import { FormHTMLAttributes } from "react";
import { ReactNode } from "react";
import { Container } from "./styles";

type Props = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
};

export function Form({ children, ...rest }: Props) {
  return <Container {...rest}>{children}</Container>;
}
