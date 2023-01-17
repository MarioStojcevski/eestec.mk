import {
  Flex,
  Grid,
  GridItem,
  Box,
  Card,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const BlogShowcase = () => {
  const router = useRouter();

  return (
    <Flex h="100vh">
      <Flex
        fontFamily="Roboto"
        textAlign="justify"
        flexDirection="column"
        verticalAlign="middle"
        margin="auto"
      >
        <Heading variant="h2" textAlign="center">
          Blog
        </Heading>

        <Grid
          marginTop="20px"
          marginBottom="20px"
          w="100%"
          gap={6}
          templateColumns="repeat(3, 1fr)"
        >
          <GridItem>
            <Card padding="20px" h="60vh">
              <VStack h="100%" spacing={5} align="stretch">
                <Box
                  paddingBottom="70%"
                  bgGradient="conic-gradient(from 0.50turn at 50% 50%, rgba(218, 218, 218, 0),  rgba(218, 218, 218, 1));"
                />

                <Heading variant="h4" textTransform="uppercase">
                  Title
                </Heading>
                <Text
                  textAlign="justify"
                  overflowX="hidden"
                  overflowY="auto"
                  paddingRight="10px"
                >
                  Lorem ipsum dolor sit amet consectetur. Eu ligula tellus nisi
                  nunc ut rhoncus. Fermentum nunc est tellus quis mattis
                  elementum nec praesent vel. Pellentesque quis a vel
                  pellentesque et amet tellus mauris. Amet nullam hendrerit vel
                  aliquet id.Lorem ipsum dolor sit amet consectetur. Eu ligula
                  tellus nisi nunc ut rhoncus. Fermentum nunc est tellus quis
                  mattis elementum nec praesent vel. Pellentesque quis a vel
                  pellentesque et amet tellus mauris. Amet nullam hendrerit vel
                  aliquet id.Lorem ipsum dolor sit amet consectetur. Eu ligula
                  tellus nisi nunc ut rhoncus. Fermentum nunc est tellus quis
                  mattis elementum nec praesent vel. Pellentesque quis a vel
                  pellentesque et amet tellus mauris. Amet nullam hendrerit vel
                  aliquet id.
                </Text>
              </VStack>
            </Card>
          </GridItem>
          <GridItem>
            <Card padding="20px" h="60vh">
              <VStack h="100%" spacing={5} align="stretch">
                <Box
                  paddingBottom="70%"
                  bgGradient="conic-gradient(from 0.50turn at 50% 50%, rgba(218, 218, 218, 0),  rgba(218, 218, 218, 1));"
                />

                <Heading variant="h4" textTransform="uppercase">
                  Title
                </Heading>
                <Text
                  textAlign="justify"
                  overflowX="hidden"
                  overflowY="auto"
                  paddingRight="10px"
                >
                  Lorem ipsum dolor sit amet consectetur. Eu ligula tellus nisi
                  nunc ut rhoncus. Fermentum nunc est tellus quis mattis
                  elementum nec praesent vel. Pellentesque quis a vel
                  pellentesque et amet tellus mauris. Amet nullam hendrerit vel
                  aliquet id.Lorem ipsum dolor sit amet consectetur. Eu ligula
                  tellus nisi nunc ut rhoncus. Fermentum nunc est tellus quis
                  mattis elementum nec praesent vel. Pellentesque quis a vel
                  pellentesque et amet tellus mauris. Amet nullam hendrerit vel
                  aliquet id.Lorem ipsum dolor sit amet consectetur. Eu ligula
                  tellus nisi nunc ut rhoncus. Fermentum nunc est tellus quis
                  mattis elementum nec praesent vel. Pellentesque quis a vel
                  pellentesque et amet tellus mauris. Amet nullam hendrerit vel
                  aliquet id.
                </Text>
              </VStack>
            </Card>
          </GridItem>

          <GridItem>
            <Card padding="20px" h="60vh">
              <VStack h="100%" spacing={5} align="stretch">
                <Box
                  paddingBottom="70%"
                  bgGradient="conic-gradient(from 0.50turn at 50% 50%, rgba(218, 218, 218, 0),  rgba(218, 218, 218, 1));"
                />

                <Heading variant="h4" textTransform="uppercase">
                  Title
                </Heading>
                <Text
                  textAlign="justify"
                  overflowX="hidden"
                  overflowY="auto"
                  paddingRight="10px"
                >
                  Lorem ipsum dolor sit amet consectetur. Eu ligula tellus nisi
                  nunc ut rhoncus. Fermentum nunc est tellus quis mattis
                  elementum nec praesent vel. Pellentesque quis a vel
                  pellentesque et amet tellus mauris. Amet nullam hendrerit vel
                  aliquet id.Lorem ipsum dolor sit amet consectetur. Eu ligula
                  tellus nisi nunc ut rhoncus. Fermentum nunc est tellus quis
                  mattis elementum nec praesent vel. Pellentesque quis a vel
                  pellentesque et amet tellus mauris. Amet nullam hendrerit vel
                  aliquet id.Lorem ipsum dolor sit amet consectetur. Eu ligula
                  tellus nisi nunc ut rhoncus. Fermentum nunc est tellus quis
                  mattis elementum nec praesent vel. Pellentesque quis a vel
                  pellentesque et amet tellus mauris. Amet nullam hendrerit vel
                  aliquet id.
                </Text>
              </VStack>
            </Card>
          </GridItem>
        </Grid>

        <Button
          alignSelf="end"
          w="fit-content"
          onClick={() => router.replace("/blog")}
        >
          See More
        </Button>
      </Flex>
    </Flex>
  );
};

export default BlogShowcase;
