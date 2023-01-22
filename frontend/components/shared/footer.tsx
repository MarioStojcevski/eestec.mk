import { Box, Image, Text, Flex, Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex bgColor="primary" width="100%" padding={50}>
      <Box width="50%">
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

      <Box width="50%">
        <Image src="/images/smallmap.svg" alt="map-location" />
      </Box>
    </Flex>
  );
};

export default Footer;
