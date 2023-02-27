import {
  Stack,
  Text,
  Button,
  Center,
  Link,
  Heading,
  Card,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../components/shared/header";
import InputField from "../components/shared/input-field";
import Head from "next/head";
import { NextSeo } from "next-seo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/eestec.ico" />
      </Head>
      
      <NextSeo
        title="| Login"
        description="EESTEC MK Login"
        openGraph={{
          url: "https://eestec.mk/login",
          type: "login page/website",
          locale: "mk_MK",
          site_name: "EESTEC MK Login",
        }}
      />

      <Header />

      <Center bg="white" mt={5}>
        <Card
          boxShadow="dark-lg"
          bg="white"
          border="2px"
          borderColor="primary"
          p="6"
          rounded="lg"
          w="80vh"
          mb="50"
        >
          <Heading
            variant={{ base: "h5", md: "h4" }}
            color={{ base: "primary", md: "primary" }}
            textAlign="center"
            w="full"
            mb="7"
            px="10"
          >
            Welcome back!
          </Heading>

          <form onSubmit={loginHandler}>
            <InputField
              type="email"
              name="Email"
              label="Email"
              placeholder="email@mail.com"
              onChange={(event) => setEmail(event.target.value)}
              helperText="Please enter your email"
            />

            <InputField
              type="password"
              name="Password"
              label="Password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              helperText="Please enter your password"
            />

            <Center fontSize={{ base: "10px", md: "14px" }} mb="5">
              <Button type="submit" w="50%" mr="5" ml="5">
                LOG IN
              </Button>
            </Center>
          </form>

          <Stack justify="center" spacing="4">
            <Text as="div" textAlign="left">
              <Center fontSize={{ base: "10px", md: "14px" }} mb="1.5">
                <Link color="primary" variant="link" href="/forgot-password">
                  Forgot password
                </Link>
              </Center>
              <Center mb="3" fontSize={{ base: "10px", md: "14px" }}>
                <span> Don&lsquo;t have an account? &nbsp;</span>
                <Link color="primary" variant="link" href="/register">
                  Sign up
                </Link>
              </Center>
            </Text>
          </Stack>
        </Card>
      </Center>
    </>
  );
};

export default Login;
