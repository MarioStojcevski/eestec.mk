import {
  Stack,
  Text,
  Button,
  Center,
  Link,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Card,
} from "@chakra-ui/react";
import React, { useState } from 'react';

const Login = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(`Email: ${email}\nPassword: ${password}`);
  }

  return (
    <Center bg="white">
      <VStack w={{ base: "90%", md: "55%", lg: "40%" }} mb="200">
        <Center mb="50"></Center>
        <Card
          boxShadow="dark-lg"
          bg="white"
          border="2px"
          borderColor="primary"
          p="6"
          rounded="lg"
          maxH='60vh'
          w='60vh'
        >
          <Heading
            variant={{ base: "h5", md: "h4" }}
            color={{ base: "primary", md: "primary" }}
            textAlign="left"
            ml="24.5%"
            mb="5"
          >
            Sign in
          </Heading>

          <form onSubmit={loginHandler}>
            <FormControl isRequired textAlign="left" ml="25%" mb="5">
              <FormLabel fontSize={{ base: "12px", md: "16px" }}>Email</FormLabel>

              <Input
                type="email"
                placeholder='email@mail.com'
                w="50%"
                boxShadow="inner"
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                onChange={event => setEmail(event.currentTarget.value)}
              />

              <FormHelperText hidden={true}>
                Please enter your email
              </FormHelperText>
            </FormControl>

            <FormControl isRequired textAlign="left" ml="25%" mb="7" >
              <FormLabel fontSize={{ base: "12px", md: "16px" }}>
                Password
              </FormLabel>

              <Input
                type="password"
                placeholder="*******"
                w="50%"
                boxShadow="inner"
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                onChange={event => setPassword(event.currentTarget.value)}
              />

              <FormHelperText hidden={true}>
                Please enter your password
              </FormHelperText>
            </FormControl>

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
      </VStack>
    </Center>
  );
};

export default Login;
