import {
  Text,
  Button,
  Center,
  Link,
  Heading,
  FormControl,
  FormHelperText,
  Input,
  Image,
  Card,
  chakra,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../components/shared/header";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const registerHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
  };

  return (
    <>
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
          <Image
            alignSelf="center"
            src="/images/penguin_icon.png"
            alt=""
            width={100}
            height={110}
          />

          <Heading
            variant="h1"
            color={{ base: "primary", md: "primary" }}
            textAlign="center"
            mb="5"
          >
            Forgot Password?
          </Heading>

          <chakra.form
            onSubmit={registerHandler}
            display="flex"
            flexDir="column"
            px={30}
          >
            <Text color="red" textAlign="center">
              We will email you a link to reset your password
            </Text>
            {/*This is "Email" code section */}
            <FormControl isRequired textAlign="left" mb="5">
              <Input
                textAlign="center"
                bg="GhostWhite"
                type="email"
                placeholder="Enter Email Adress"
                w="100%"
                boxShadow="inner"
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                onChange={(event) => setEmail(event.currentTarget.value)}
              />

              <FormHelperText hidden={true}>
                Please enter your email
              </FormHelperText>
            </FormControl>

            {/*This is "SEND RESET LINK" code section*/}
            <Center fontSize={{ base: "20px", md: "26px" }} mb="5">
              <Button type="submit" w="100%" mr="5" ml="5">
                SEND RESET LINK
              </Button>
            </Center>
            <Text color="red" textAlign="center">
              <Link color="primary" variant="link" href="/login">
                continue
              </Link>
            </Text>
          </chakra.form>
        </Card>
      </Center>
    </>
  );
};

export default ForgotPassword;
