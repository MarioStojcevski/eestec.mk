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
  const blogShowcaseData = [
    {
      id: 1,
      title: "Design Sprint",
      description:
        "It is time for another fun event organized by EESTEC LC Eskisehir and that is the 8th Design Sprint...",
      imageUrl: "/images/blog-showcase/design-sprint.png",
    },
    {
      id: 2,
      title: "Personal Development Hub",
      description:
        "The main idea for this event is series of training session aimed for developing ourselves...",
      imageUrl: "/images/blog-showcase/personal-dev.png",
    },
    {
      id: 3,
      title: "What does it mean to be an EESTECer",
      description:
        "“The opportunity for self-improvement through the non-formal education offered by this wonderful organization”",
      imageUrl: "/images/blog-showcase/eestec-lc-skopje.png",
    },
  ];

  const router = useRouter();

  return (
    <Flex h="100vh" pt={"5%"}>
      <Flex flexDirection="column">
        <Heading mb={"50px"} variant="h2" textAlign="center">
          Blog
        </Heading>

        <Grid marginBottom="20px" gap={6} templateColumns="repeat(3, 1fr)">
          {blogShowcaseData.map((blogShowcase) => (
            <GridItem key={blogShowcase.id}>
              <Card padding="20px" h="60vh">
                <VStack h="100%" spacing={5} align="stretch">
                  <Box
                    paddingBottom="70%"
                    backgroundImage={`url(${blogShowcase.imageUrl})`}
                    backgroundSize={"cover"}
                  />

                  <Heading variant="h4" textTransform="uppercase">
                    {blogShowcase.title}
                  </Heading>
                  <Text
                    textAlign="justify"
                    overflowX="hidden"
                    overflowY="hidden"
                    paddingRight="10px"
                  >
                    {blogShowcase.description}
                  </Text>
                </VStack>
              </Card>
            </GridItem>
          ))}
        </Grid>

        <Button alignSelf="end" onClick={() => router.replace("/blog")}>
          See More
        </Button>
      </Flex>
    </Flex>
  );
};

export default BlogShowcase;
