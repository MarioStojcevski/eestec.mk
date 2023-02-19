import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  HStack,
} from "@chakra-ui/react";

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
            alt="flag"
          />

          <Heading variant="h3white">EESTEC LC Skopje</Heading>
          <Text variant="white">Rugjer Boshkovikj 1000 Skopje</Text>
        </Box>
        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d185.78867338759105!2d21.40655531520495!3d42.0051081466911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smk!4v1676655442519!5m2!1sen!2smk"
            width="400"
            height="200"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Footer;
