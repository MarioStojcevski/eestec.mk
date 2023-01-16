import { Box } from "@chakra-ui/react";
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

const MissionVision = ()=> { 

return(

    <Box bgColor={"primary"} height={"300px"} >
    
        <HStack spacing='24px'>

            <Box w='400px' h='40px' color='white'>
                <image> </image>
                <Heading size='3xl'> Our Mission</Heading>
                <Text noOfLines={[1, 2, 3]} textAlign='justify'>
                    Connecting EECS students and supporting
                    them in their professional, academic and
                    personal growth. 
                </Text>
            </Box>

            <Box w='400px' h='40px' color='white'>
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

)
};

export default MissionVision;