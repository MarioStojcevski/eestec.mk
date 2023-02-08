import React from "react";
import { Box, Flex, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";

const WhyYouShouldJoin = () => {
  return (
    <Flex
      height="90vh"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      alignItems="center"
      justifyContent="center"
    >
      <HStack height="85%" width="95%">
        <VStack width="60%">
          <VStack alignItems="center" justifyContent="center">
            <Heading variant="h2">WHY YOU SHOULD JOIN US?</Heading>
            <Image width={800} height={15} src="/images/line.png" alt="line" />
          </VStack>
          <HStack px={30}>
            <Box w="20%">
              <Image
                width={150}
                height={150}
                src="/images/events.png"
                alt="events"
              />
            </Box>
            <VStack padding={10} px={10} alignItems="start" w="80%">
              <Heading variant="h4">International and local events</Heading>
              <Text>
                Be part of the organizing committee or simply attend an
                international workshop, exchange or motivational weekend. You
                will certainly not regret it!
              </Text>
            </VStack>
          </HStack>
          <HStack px={30}>
            <Box w="20%">
              <Image
                width={150}
                height={150}
                src="/images/meeting_people.png"
                alt="meeting_people"
              />
            </Box>
            <VStack padding={10} px={10} alignItems="start" w="80%">
              <Heading variant="h4">Meeting new people</Heading>
              <Text>
                You will have the chance to meet new people from all over Europe
                and explore their culture, tradition and cuisine.
              </Text>
            </VStack>
          </HStack>
          <HStack px={30}>
            <Box w="20%">
              <Image
                width={150}
                height={150}
                src="/images/development.png"
                alt="development"
              />
            </Box>
            <VStack padding={10} px={10} alignItems="start" w="80%">
              <Heading variant="h4">Personal Development</Heading>
              <Text>
                Improve your skills and qualities through training and set life
                goals that will improve your employment prospects.
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack width="40%" position="relative">
          <Image
            width={600}
            height={600}
            src="/images/join_us_image.png"
            alt="line"
          />
          <Box zIndex={2} right="24px" top="-75px" position="absolute">
            <Image alt="" width={80} height={80} src="/images/paperclip.png" />
          </Box>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default WhyYouShouldJoin;
