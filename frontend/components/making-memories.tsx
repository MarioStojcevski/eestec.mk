import { Box, Grid, Heading, VStack, GridItem } from "@chakra-ui/react";

const MakingMemories = () => {
  return (
    <VStack w="full" padding="106px">
      <Heading fontSize="50px" textTransform="uppercase" mb="60px">
        Making memories since 2003
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {Array.from({ length: 6 }).map((_, i) => (
          <GridItem key={i} w="330px" h="330px">
            <Box
              w="full"
              h="full"
              background="conic-gradient(from 180deg at 50% 50%, #D9D9D9 0deg, rgba(217, 217, 217, 0) 360deg);"
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
