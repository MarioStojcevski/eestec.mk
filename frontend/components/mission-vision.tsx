import { Box } from "@chakra-ui/react";
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Bulb from "./icons/Bulb";

const MissionVision = ()=> { 

return(

    <Box bgColor={"primary"} width={"100%"}>
        <HStack paddingTop={"100px"} paddingBottom={"100px"} marginLeft={"150px"} marginRight={"150px"}>
            <Box width={"45%"} color='white'>
                <HStack width={"100%"}>
                    <Box width={"15%"}>
                        <Image padding={3} height="80px" width="80px" borderRadius={100} bgColor="white" src="/images/flag.svg" />
                    </Box>
                    
                    <Box width={"85%"}>
                        <Heading size='3xl'> Our Mission</Heading>
                        <Text noOfLines={[1, 2, 3]} textAlign='justify'>
                            Connecting EECS students and supporting
                            them in their professional, academic and
                            personal growth. 
                        </Text>
                    </Box>
                </HStack>                
            </Box>

            <Box width={"10%"}></Box>

            <Box width={"45%"} color='white'>
                <HStack width={"100%"}>
                    <Box width={"15%"}>
                        <Image padding={3} height="80px" width="80px" borderRadius={100} bgColor="white" src="/images/bulb.svg" />
                    </Box>
                    <Box width="85%">
                        <Heading size='3xl'> Our Vision</Heading>
                        <Text noOfLines={[1, 2, 3, 4]} textAlign='justify'>
                            Empowering EECS students across Europe to
                            reach their full potencial in their academic,
                            professional and social lives in a strong and
                            recognizable network.
                        </Text>
                    </Box>
                </HStack>
            </Box>

        </HStack>
    </Box>

)
};

export default MissionVision;