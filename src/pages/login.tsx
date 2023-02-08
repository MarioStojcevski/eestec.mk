import {
  Stack,
  Text,
  Button,
  Center,
  Link,
  Heading,
  VStack,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  return (
    <Center bg="white">
      <VStack w={{ base: "90%", md: "55%", lg: "40%" }} mb="200">
        <Center mb="50"></Center>
        <Box
          boxShadow="dark-lg"
          bg="white"
          border="2px"
          borderColor="primary"
          p="6"
          rounded="lg"
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

          <FormControl textAlign="left" ml="25%" mb="5">
            <FormLabel fontSize={{ base: "12px", md: "16px" }}>Email</FormLabel>

            <Input
              type="email"
              w="50%"
              boxShadow="inner"
              fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            />

            <FormHelperText hidden={true}>
              Please enter your email
            </FormHelperText>
          </FormControl>

          <FormControl textAlign="left" ml="25%" mb="10">
            <FormLabel fontSize={{ base: "12px", md: "16px" }}>
              Password
            </FormLabel>

            <Input
              type="password"
              w="50%"
              boxShadow="inner"
              fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            />

            <FormHelperText hidden={true}>
              Please enter your password
            </FormHelperText>
          </FormControl>

          <Stack justify="center" spacing="4">
            <Text as="div" textAlign="left">
              <Center fontSize={{ base: "10px", md: "14px" }} mb="1.5">
                <Link color="primary" variant="link" mr="10" ml="5">
                  Forgot password
                </Link>
                <Button mr="5" ml="5" onClick={() => signIn()}>
                  LOG IN
                </Button>
              </Center>
              <br />
              <Center mb="3" fontSize={{ base: "10px", md: "14px" }}>
                <span> Don&lsquo;t have an account? &nbsp;</span>
                <Link color="primary" variant="link">
                  Sign up
                </Link>
              </Center>
            </Text>
          </Stack>
        </Box>
      </VStack>
    </Center>
  );
};

export default Login;
