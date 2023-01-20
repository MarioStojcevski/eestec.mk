import { Stack , Text , Button, Center, Link } from "@chakra-ui/react"

const LoginScreen = () =>{
    

    return (
        <>
            <Center h='100vh' bg ='white'>
                <Stack boxShadow='md' bg='white' p='20' rounded='md'>

                    <Stack justify='center' color='gray.600' spacing='3'>
                        <Text as='div' textAlign='center'>
                            <span>Don&lsquo;t have an account? </span>
                            <Link color='primary' variant='link'>
                                Sign up
                            </Link>
                        </Text>
                        <Link color='primary' variant='link'>
                            Forgot password
                        </Link>
                    </Stack>

                </Stack>
            </Center>
        </>
        
    )

}

export default LoginScreen;