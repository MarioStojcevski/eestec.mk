import {
  Stack,
  Text,
  Button,
  Center,
  Link,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Checkbox,
  Card,
  chakra,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../components/shared/header";
import Head from "next/head";

{
  /*   1. NOT RESPONSIVE! -> to use padding instead of margins
        2."Confirm Password" needs to be fixed 
        3.In "Already have acc." the "Sign in" button needs to be updated with ref. link to "Login page" 
        4.Smile more often 
    */
}

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const registerHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>| Register</title>
        <link rel="icon" href="/eestec.ico" />
      </Head>

      <Header />

      <Center bg="white" mt={5}>
        <Card
          width="100%"
          boxShadow="dark-lg"
          border="2px"
          borderColor="primary"
          p="6"
          rounded="lg"
          w="80vh"
          mb="50"
        >
          <Heading
            variant="h1"
            color={{ base: "primary", md: "primary" }}
            textAlign="center"
            mb="5"
          >
            Become An EESTECer!
          </Heading>

          <chakra.form
            onSubmit={registerHandler}
            display="flex"
            flexDir="column"
            px={30}
          >
            {/*This is "First Name" code section */}
            <FormControl isRequired textAlign="left" mb="5">
              <FormLabel fontSize={{ base: "12px", md: "16px" }}>
                First name
              </FormLabel>

              <Input
                type="firstName"
                placeholder="First Name"
                w="100%"
                boxShadow="inner"
                bg="GhostWhite"
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                onChange={(event) => setFirstName(event.currentTarget.value)}
              />

              <FormHelperText hidden={true}>
                Please enter your first name
              </FormHelperText>
            </FormControl>

            {/*This is "Last Name" code section */}
            <FormControl isRequired textAlign="left" mb="5">
              <FormLabel fontSize={{ base: "12px", md: "16px" }}>
                Last Name
              </FormLabel>

              <Input
                type="lastName"
                placeholder="Last Name"
                w="100%"
                boxShadow="inner"
                bg="GhostWhite"
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                onChange={(event) => setLastName(event.currentTarget.value)}
              />

              <FormHelperText hidden={true}>
                Please enter your last name
              </FormHelperText>
            </FormControl>

            {/*This is "Email" code section */}
            <FormControl isRequired textAlign="left" mb="5">
              <FormLabel fontSize={{ base: "12px", md: "16px" }}>
                Email
              </FormLabel>

              <Input
                type="email"
                placeholder="example@gmail.com"
                w="100%"
                boxShadow="inner"
                bg="GhostWhite"
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                onChange={(event) => setEmail(event.currentTarget.value)}
              />

              <FormHelperText hidden={true}>
                Please enter your email
              </FormHelperText>
            </FormControl>

            {/*This is "Password" code section */}
            <FormControl isRequired textAlign="left" mb="7">
              <FormLabel fontSize={{ base: "12px", md: "16px" }}>
                Password
              </FormLabel>

              <Input
                type="password"
                placeholder="*******"
                w="100%"
                boxShadow="inner"
                bg="GhostWhite"
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                onChange={(event) => setPassword(event.currentTarget.value)}
              />

              <FormHelperText hidden={true}>
                Please enter your password
              </FormHelperText>
            </FormControl>

            <FormControl isRequired textAlign="left" mb="7">
              <FormLabel fontSize={{ base: "12px", md: "16px" }}>
                Confirm Password
              </FormLabel>

              {/*This is "Confirm password" code section and needs to be fixed*/}
              <Input
                type="password"
                placeholder="*******"
                w="100%"
                boxShadow="inner"
                bg="GhostWhite"
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                onChange={(event) =>
                  setConfirmPassword(event.currentTarget.value)
                }
              />

              <FormHelperText hidden={true}>
                Please enter your password again to confirm
              </FormHelperText>
            </FormControl>

            <Checkbox
              alignSelf="center"
              isInvalid
              color="red"
              fontWeight="bold"
              size="lg"
              colorScheme="red"
              defaultChecked
            >
              I am currently a student at a University.
            </Checkbox>

            <Text color="red" textAlign="center">
              I agree to the <Link>terms of service</Link> and{" "}
              <Link>privacy</Link>
            </Text>
            {/*This is "Register" code section*/}
            <Center fontSize={{ base: "10px", md: "18px" }} mb="5">
              <Button type="submit" w="100%" mr="5" ml="5">
                REGISTER
              </Button>
            </Center>
          </chakra.form>

          {/*This is "Already have account" code section and needs to be fixed*/}

          {
            <Stack justify="center" spacing="4">
              <Text as="div" textAlign="left">
                <Center mb="3" fontSize={{ base: "16px", md: "18px" }}>
                  <span> Already have an account? &nbsp;</span>
                  {/*in href, the link to the login section should be placed -> (https://eestec.mk/login) */}
                  <Link href="/login" color="primary" variant="link">
                    Sign in
                  </Link>
                </Center>
              </Text>
            </Stack>
          }
        </Card>
      </Center>
    </>
  );
};

export default Register;
