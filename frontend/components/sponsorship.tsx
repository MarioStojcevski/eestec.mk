import { Box,Stack, HStack, VStack, Flex, Spacer, Heading, Image, Center, Square, Circle } from "@chakra-ui/react";

const Sponsorship = () => {
    return(

        <Box bgColor={"whilte"} width={"100%"}height={"600px"}>
            <VStack paddingTop={"100px"} paddingBottom={"100px"} marginLeft={"150px"} marginRight={"150px"}>

                <Center>
                <Box width={"50%"} color='black'>

                    <HStack>                                 
                        <Box>
                            <Heading size='xl'>Partners</Heading>
                        </Box>
                    </HStack>  

                </Box>
                </Center>
                
                
                <Box>
                
                    <HStack spacing={20}> 

                
                    <Box marginLeft={20}>
                            <Image padding={3} height="120px" width="120px" borderRadius={100} bgColor="white" src="/images/bulb.svg" />
                    </Box>
                    
                    <Box>
                            <Image padding={3} height="120px" width="120px" borderRadius={100} bgColor="white" src="/images/bulb.svg" />
                    </Box>

                    <Box>
                            <Image padding={3} height="120px" width="120px" borderRadius={100} bgColor="white" src="/images/bulb.svg" />
                    </Box>

                    <Box>
                            <Image padding={3} height="120px" width="120px" borderRadius={100} bgColor="white" src="/images/bulb.svg" />
                    </Box>

                    <Box>
                            <Image padding={3} height="120px" width="120px" borderRadius={100} bgColor="white" src="/images/bulb.svg" />
                    </Box>


                    </HStack>
                    
                </Box>
               
                <Center>
                <Box width={"50%"} color='black'>
                    <HStack>                       
                        <Box>
                            <Heading size='xl'>Supporters</Heading>
                        </Box>
                    </HStack>
                </Box>
                </Center>
                
                <Box>
                    <HStack spacing={20}> 
                    <Box marginLeft={20}>
                            <Image padding={3} height="120px" width="120px" borderRadius={100} bgColor="white" src="/images/bulb.svg" />
                    </Box>

                    <Box>
                            <Image padding={3} height="120px" width="120px" borderRadius={100} bgColor="white" src="/images/bulb.svg" />
                    </Box>

                    <Box>
                            <Image padding={3} height="120px" width="120px" borderRadius={100} bgColor="white" src="/images/bulb.svg" />
                    </Box>

                    <Box>
                            <Image padding={3} height="120px" width="120px" borderRadius={100} bgColor="white" src="/images/bulb.svg" />
                    </Box>

                    <Box>
                            <Image padding={3} height="120px" width="120px" borderRadius={100} bgColor="white" src="/images/bulb.svg" />
                    </Box>

                    </HStack>
                </Box>
               
            </VStack>
        </Box>
    )
}

export default Sponsorship;