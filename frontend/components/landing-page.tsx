import { Box, Button, Flex, Heading, HStack } from "@chakra-ui/react";
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
        height="90vh"
        width="100%"
        backgroundImage={`linear-gradient(${gradient})`}
      >
        <Box height="90vh" width="100%">
          <HStack display="flex" justifyContent="space-between">
            <Heading variant="title">
              Power your future, <br /> be an eestecer
            </Heading>

            <Image
              width={400}
              height={400}
              src="/images/mk-map.png"
              alt="eestec map"
            />
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
