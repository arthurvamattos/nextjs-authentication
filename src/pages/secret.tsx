import { useEffect } from "react";
import Head from "next/head";
import { parseCookies } from "nookies";

import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { Button } from "../components/Button";
import { ToggleThemeButton } from "../components/ToggleThemeButton";

import { useTheme } from "../hooks/useTheme";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";

import { Container } from "../styles/pages/Home";

import {
  UserAvatar,
  UserEmail,
  UserName,
  UserWrapper,
} from "../styles/pages/Secret";
import { GetServerSideProps } from "next";
import { getAPIClient } from "../services/axios";

export default function Secret() {
  const { toggleTheme } = useTheme();
  const { user, signOut } = useAuth();

  useEffect(() => {
    // api.get("/users");
  }, []);

  return (
    <Container>
      <Head>
        <title>Next Auth - Secret Page</title>
        <meta
          name="description"
          content="A simple auth project using next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToggleThemeButton />

      <Header subTitle="You’re signed" />

      <UserWrapper>
        <header>
          <UserAvatar src={user?.avatar_url} alt={user?.name} />
        </header>
        <main>
          <UserName>{user?.name}</UserName>
          <UserEmail>{user?.email}</UserEmail>
        </main>
      </UserWrapper>

      <Form>
        <Button type="button" onClick={() => signOut()}>
          Sign out
        </Button>
      </Form>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const apiClient = getAPIClient(ctx);

  const { ["@next-auth:token"]: token } = parseCookies(ctx);

  // await apiClient.get("/users");

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
