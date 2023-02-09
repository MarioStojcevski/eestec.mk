import { Box, Image, Text, Flex, Heading, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex bgColor="primary" width="100%" padding={50} align="center">
      <HStack w="full" justifyContent="space-around">
        <Box>
          <Image
            padding={3}
            height="80px"
            width="80px"
            borderRadius={100}
            bgColor="white"
            src="/images/flag.svg"
            alt={"flag"}
          />

          <Heading variant="h3white">EESTEC LC Skopje</Heading>
          <Text variant="white">Rugjer Boshkovikj bb 1000 Skopje</Text>
        </Box>
        <Box>
          <Image src="/images/smallmap.svg" alt="map-location" />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Footer;
