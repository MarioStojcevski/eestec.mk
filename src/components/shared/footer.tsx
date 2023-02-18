import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Footer = () => {
  const [buttonText, setButtonText] = useState("Copy");
  const handleOnClick = () => {
    navigator.clipboard.writeText("skopje.lc@gmail.com");
    setButtonText("Copied!");
    setTimeout(() => {
      setButtonText("Copy");
    }, 1000);
  };
  console.log(`TextChange state: $(textChange)`);
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
          <Text variant="white" mb="1">
            Rugjer Boshkovikj bb 1000 Skopje
          </Text>
          <HStack>
            <Text variant="white" mr="6">
              skopje.lc@gmail.com
            </Text>
            <Button fontSize="12" width="14" height="6" onClick={handleOnClick}>
              {buttonText}
            </Button>
          </HStack>
        </Box>
        <Box>
          <Image src="/images/smallmap.svg" alt="map-location" />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Footer;
