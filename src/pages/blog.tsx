import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Header from "../components/shared/header";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <title>| Blog</title>
        <meta name="description" content="EESTEC MK Blog" />
        <link rel="icon" href="/eestec.ico" />
      </Head>

      <Header />
      <Flex
        width="100vw"
        height="100vh"
        bgColor="primary"
        justifyContent="center"
        alignItems="center"
      >
        <VStack>
          <Heading variant="title">Blog coming soon!</Heading>
          <Text
            _hover={{ textDecoration: "underline" }}
            variant="white"
            cursor="pointer"
          >
            <a href="/">Go back</a>
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default Blog;
