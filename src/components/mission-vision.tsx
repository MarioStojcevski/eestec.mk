import { Box, Text, Heading, HStack, Image } from "@chakra-ui/react";

const MissionVision = () => {
  return (
    <Box bgColor={"primary"}>
      <Box width={"80%"} margin="auto">
        <HStack paddingTop={"100px"} paddingBottom={"100px"}>
          <Box width={"45%"} color="white">
            <HStack width={"100%"}>
              <Box width={"15%"}>
                <Image
                  padding={3}
                  height="80px"
                  width="80px"
                  borderRadius={100}
                  bgColor="white"
                  src="/images/flag.svg"
                  alt={"flag"}
                />
              </Box>

              <Box width={"85%"}>
                <Heading size="3xl"> Our Mission</Heading>
                <Text
                  variant="whiteBig"
                  noOfLines={[1, 2, 3]}
                  textAlign="justify"
                >
                  Connecting EECS students and supporting them in their
                  professional, academic and personal growth.
                </Text>
              </Box>
            </HStack>
          </Box>

          <Box width={"10%"}></Box>

          <Box width={"45%"} color="white">
            <HStack width={"100%"}>
              <Box width={"15%"}>
                <Image
                  padding={3}
                  height="80px"
                  width="80px"
                  borderRadius={100}
                  bgColor="white"
                  src="/images/bulb.svg"
                  alt={"bulb"}
                />
              </Box>
              <Box width="85%">
                <Heading size="3xl"> Our Vision</Heading>
                <Text
                  variant="whiteBig"
                  noOfLines={[1, 2, 3, 4]}
                  textAlign="justify"
                >
                  Empowering EECS students across Europe to reach their full
                  potencial in their academic, professional and social lives.
                </Text>
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default MissionVision;
