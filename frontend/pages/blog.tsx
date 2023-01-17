import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Blog = () => {
  return (
    <>
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
