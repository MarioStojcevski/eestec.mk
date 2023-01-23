import {
  Stack,
  Text,
  Button,
  Center,
  Link,
  Heading,
  VStack,
  Card
} from "@chakra-ui/react";
import React, { useState } from 'react';
import Field from "../components/forms/field";

const Login = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(`Email: ${email}\nPassword: ${password}`);
  }

  return (
    <Center bg="white">
      <Card
        boxShadow="dark-lg"
        bg="white"
        border="2px"
        borderColor="primary"
        p="6"
        rounded="lg"
        w='80vh'
        mb="50"
      >
          <Heading
            variant={{ base: "h5", md: "h4" }}
            color={{ base: "primary", md: "primary" }}
            textAlign="left"
            w="full"
            mb="5"
            px='10'
          >
            Sign in
          </Heading>

          <form onSubmit={loginHandler}>
          <Field
              type="email"
              name="Email"
              label="Email"
              placeholder="email@mail.com"
              onChange={(event) => setEmail(event.target.value)}
              helperText="Please enter your email"
            />

            <Field
              type="password"
              name="Password"
              label="Password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              helperText="Please enter your password"
            />

            <Center fontSize={{ base: "10px", md: "14px" }} mb="5">
                <Button type='submit' w='50%' mr='5' ml='5'>
                  LOG IN
                </Button>
              </Center>
          </form>

          <Stack justify="center" spacing="4">
            <Text as="div" textAlign="left">
              <Center fontSize={{base: '10px', md: '14px'}} mb='1.5'>
                <Link color="primary" variant="link">
                  Forgot password
                </Link>
              </Center>
              <Center mb="3" fontSize={{ base: "10px", md: "14px" }}>
                <span> Don&lsquo;t have an account? &nbsp;</span>
                <Link color="primary" variant="link">
                  Sign up
                </Link>
              </Center>
            </Text>
          </Stack>
      </Card>
    </Center>
  );
};

export default Login;
