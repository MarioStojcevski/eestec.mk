import { Box, Text, Flex, Heading, HStack, Button } from "@chakra-ui/react";
import Image from "next/image";

const LandingPage = () => {
  const imageUrl = "/images/yearbook-photo.jpeg";
  const gradient = "rgba(229, 42, 48, 0), rgba(229, 42, 48, 1)";

  return (
    <Flex
      bgImage={`url(${imageUrl})`}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <Flex width={"100%"} backgroundImage={`linear-gradient(${gradient})`}>
        <Box margin={"auto"} height="90vh">
          <HStack display="flex" justifyContent="space-between">
            <Flex flexDir={"column"} alignItems={"baseline"}>
              <Heading variant="title">
                Power your future, <br /> be an eestecer
              </Heading>

              <Text variant="whiteBig">
                Invoking Passion, Pursuing Development, Empowering Collaboration
              </Text>
            </Flex>

            <Flex flexDir={"column"}>
              <Image
                width={500}
                height={500}
                src="/images/mk-map-new.png"
                alt="eestec map"
              />

              <Button
                onClick={() => alert("Hold your horses. Feature coming soon!")}
                alignSelf={"flex-end"}
                width={"max-content"}
                mt="50px"
              >
                JOIN US
              </Button>
            </Flex>
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
