import { Stack, HStack, Image, Heading, Circle } from "@chakra-ui/react";

const Statistics = () => {
  return (
    <HStack pt="10%" pb="10%">
      <Stack direction="column" w="full" alignItems={"center"}>
        <Circle
          size={{ base: "10", md: "16", lg: "36" }}
          bg="primary"
          color="white"
        >
          <Image
            height={{ base: "5", md: "10", lg: "20" }}
            src="/images/icon_calendar.png"
            alt="calendar"
          />
        </Circle>
        <Heading variant={{ base: "h4", md: "h1" }}>100+</Heading>
        <Heading variant={{ base: "h5", md: "h5", lg: "h3" }}>Events</Heading>
      </Stack>
      <Stack direction="column" w="full" alignItems={"center"}>
        <Circle
          size={{ base: "10", md: "16", lg: "36" }}
          bg="primary"
          color="white"
        >
          <Image
            h={{ base: "5", md: "10", lg: "20" }}
            src="/images/icon_glass.png"
            alt="calendar"
          />
        </Circle>
        <Heading variant={{ base: "h4", md: "h1" }}>400+</Heading>
        <Heading variant={{ base: "h5", md: "h5", lg: "h3" }}>Students</Heading>
      </Stack>
      <Stack direction="column" w="full" alignItems={"center"}>
        <Circle
          size={{ base: "10", md: "16", lg: "36" }}
          bg="primary"
          color="white"
        >
          <Image
            h={{ base: "5", md: "10", lg: "20" }}
            src="/images/icon_handshake.png"
            alt="calendar"
          />
        </Circle>
        <Heading variant={{ base: "h4", md: "h1" }}>30+</Heading>
        <Heading variant={{ base: "h5", md: "h5", lg: "h3" }}>Partners</Heading>
      </Stack>
      <Stack direction="column" w="full" alignItems={"center"}>
        <Circle
          size={{ base: "10", md: "16", lg: "36" }}
          bg="primary"
          color="white"
        >
          <Image
            h={{ base: "5", md: "10", lg: "20" }}
            src="/images/icon_people.png"
            alt="calendar"
          />
        </Circle>
        <Heading variant={{ base: "h4", md: "h1" }}>200+</Heading>
        <Heading variant={{ base: "h5", md: "h5", lg: "h3" }}>Memories</Heading>
      </Stack>
    </HStack>
  );
};

export default Statistics;
