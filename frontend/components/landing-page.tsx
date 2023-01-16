import { Box, Text, Flex, Heading, HStack, Button } from "@chakra-ui/react";
import Image from "next/image";

const LandingPage = () => {
  const imageUrl = "/images/yearbook-photo.jpeg";
  const gradient = "rgba(229, 42, 48, 0), rgba(229, 42, 48, 1)";

  return (
    <Flex
      height="90vh"
      bgImage={`url(${imageUrl})`}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <Flex
        width="100%"
        backgroundImage={`linear-gradient(${gradient})`}
      >
        <Box height="90vh" width="100%" marginTop="200px">
          <HStack display="flex" justifyContent="space-between">
            <Flex flexDir={"column"} alignItems={"baseline"} paddingLeft="150px">
              <Heading variant="title">
                Power your future, <br /> be an eestecer
              </Heading>

              <Text variant="white">
                Invoking Passion, Pursuing Development, Empowering Collaboration
              </Text>
            </Flex>

            <Flex flexDir={"column"} paddingRight="150px">
              <Image
                width={500}
                height={500}
                src="/images/mk-map.png"
                alt="eestec map"
              />

              <Button alignSelf={"flex-end"} width={"max-content"} mt="50px">JOIN US</Button>
            </Flex>
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
