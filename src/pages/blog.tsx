import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { NextSeo } from 'next-seo';
import Header from "../components/shared/header";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/eestec.ico" />
      </Head>
      
      <NextSeo
        title="| Blog"
        description="EESTEC MK Blog"
        openGraph={{
          url: "https://eestec.mk/blog",
          type: "blog/website",
          locale: "mk_MK",
          site_name: "EESTEC MK Blog",
        }}
      />

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
