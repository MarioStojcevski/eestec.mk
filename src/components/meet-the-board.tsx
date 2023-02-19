import {
  Box,
  Stack,
  HStack,
  Heading,
  Center,
  Circle,
  Text
} from "@chakra-ui/react";

const MeetTheBoard = () => {
  const boardMembers = [
    {
      id: 1,
      name: "Bojan Mladenovski",
      position: "Chairperson",
      email: "test1@gmail.com",
      imageUrl: "/images/board/bojan.jpeg",
    },
    {
      id: 2,
      name: "Kristina Mladenova",
      position: "Contact Person",
      email: "test2@gmail.com",
      imageUrl: "/images/board/kristina.jpeg",
    },
    {
      id: 3,
      name: "Andrea Lapevska",
      position: "PR Coordinator",
      email: "test3@gmail.com",
      imageUrl: "/images/board/andrea.jpeg",
    },
    {
      id: 4,
      name: "Ivana Atanasoska",
      position: "HR Coordinator",
      email: "test4@gmail.com",
      imageUrl: "/images/board/ivana.jpeg",
    },
    {
      id: 5,
      name: "Mario Stojcevski",
      position: "IT Coordinator",
      email: "test5@gmail.com",
      imageUrl: "/images/board/mario.jpeg",
    },
  ];

  return (
    <Box pt={"10%"} pb={"10%"}>
      <Center>
        <Heading variant="h2">Board 2022/2023</Heading>
      </Center>
      <HStack pt={"50px"}>
        {boardMembers.map((boardMember) => (
          <Stack key={boardMember.id} direction="column" w="full">
            <Center>
              <Circle
                size={{ base: "20", md: "36", lg: "52" }}
                backgroundImage={`url("${boardMember.imageUrl}")`}
                backgroundSize={"cover"}
                color="white"
                marginBottom="2"
              ></Circle>
            </Center>
            <Center>
              <Heading variant="h4">{boardMember.name}</Heading>
            </Center>
            <Center>
              <Heading variant="h4">{boardMember.position}</Heading>
            </Center>
            <Center>
              <Text>{boardMember.email}</Text>
            </Center>
          </Stack>
        ))}
      </HStack>
    </Box>
  );
};

export default MeetTheBoard;
