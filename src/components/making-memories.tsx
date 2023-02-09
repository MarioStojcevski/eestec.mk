import { Box, Grid, Heading, VStack, GridItem } from "@chakra-ui/react";

const MakingMemories = () => {
  const memoryData = [
    { id: 1, imageUrl: "/images/memories/memory1.jpeg" },
    { id: 2, imageUrl: "/images/memories/memory2.jpeg" },
    { id: 3, imageUrl: "/images/memories/memory3.jpeg" },
    { id: 4, imageUrl: "/images/memories/memory4.jpeg" },
    { id: 5, imageUrl: "/images/memories/memory5.jpeg" },
    { id: 6, imageUrl: "/images/memories/memory6.jpeg" },
  ];
  return (
    <VStack w="full" pt={"5%"} pb={"5%"}>
      <Heading mb={"50px"} variant={"h2"}>
        Making memories since 2003
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {memoryData.map((memory) => (
          <GridItem key={memory.id} w="330px" h="330px">
            <Box
              backgroundImage={`url(${memory.imageUrl})`}
              backgroundSize={"cover"}
              w="full"
              h="full"
              border="5px solid #FFFFFF"
              shadow="lg"
            />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default MakingMemories;
