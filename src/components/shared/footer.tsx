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
  /*
  1.  from line 14-21 is a function with the purpose to change the text inside a button from "Copy" to "Copied!" 
  as feedback to the user that they've copied the email address.
  2.  In line 46-48, specifically line 47 -> We call the function*/
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
            <Text variant="white" mr="2">
              skopje.lc@gmail.com
            </Text>
            <Button size="xs" onClick={handleOnClick}>
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
