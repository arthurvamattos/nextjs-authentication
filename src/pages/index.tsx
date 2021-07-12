import Head from "next/head";
import { useForm } from "react-hook-form";

import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { ToggleThemeButton } from "../components/ToggleThemeButton";

import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";

import { Container } from "../styles/pages/Home";

export default function Home() {
  const { toggleTheme } = useTheme();
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();

  async function handleSignIn(data) {
    await signIn(data);
  }

  return (
    <Container>
      <Head>
        <title>Next Auth</title>
        <meta
          name="description"
          content="A simple auth project using next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToggleThemeButton />

      <Header subTitle="Sign in to your account" />

      <Form onSubmit={handleSubmit(handleSignIn)}>
        <Input {...register("email")} type="email" placeholder="Your e-mail" />
        <Input
          {...register("password")}
          type="password"
          placeholder="Your secret password"
        />

        <Button type="submit">Sign in</Button>
      </Form>
    </Container>
  );
}
