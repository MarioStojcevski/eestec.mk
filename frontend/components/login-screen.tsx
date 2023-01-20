import { Box , VStack , HStack , Image , Flex , Heading } from "@chakra-ui/react"

const LoginScreen = () =>{
    

    return (
        <>
            <Box height="100vh" textAlign="center" >
                <VStack>
                    <HStack marginTop={300}>
                        <Box>
                            <Heading size="xl">Welcome back!</Heading>
                                <Flex flexDirection="row" alignItems="center">

                                

                                </Flex>
                        </Box>
                    </HStack>
                </VStack>
            </Box>   
        </>
        
    )

}

export default LoginScreen;