import {
  Button,
  Card,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/shared/header";

import { NextSeo } from "next-seo";

export default function ResetPasswordForm(): JSX.Element {
  
  const SEO = {
    title: "Reset Password",
    description: "EESTEC MK Reset Password",
    openGraph: {
      url: "https://eestec.mk/reset-password",
      type: "website",
      locale: "mk_MK",
      site_name: "EESTEC MK Reset Password",
    },
  };

  return (
    <>
      <NextSeo {...SEO} />

      <Header />
      <Flex minH={"80vh"} align={"center"} justify={"center"} mt={5}>
        <Card
          w={"full"}
          maxW={"60%"}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Stack>
            <Image
              alignSelf="center"
              src="/images/icon_padlock.png"
              alt=""
              width={100}
              height={110}
            />
            <Heading textAlign="center" textTransform="capitalize" variant="h1">
              reset your password
            </Heading>
            <FormControl id="password" isRequired>
              <FormLabel>New Password</FormLabel>
              <Input type="password" variant="filled" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" variant="filled" />
            </FormControl>{" "}
            <Text color="primary" align="center">
              x The passwords do not match
            </Text>
            <Stack spacing={6}>
              <Button>Confirm Changes</Button>
            </Stack>
          </Stack>
        </Card>
      </Flex>
    </>
  );
}
