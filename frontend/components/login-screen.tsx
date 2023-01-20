 import { Stack , Text , Button, Center, Link , Image , Heading } from "@chakra-ui/react"

const LoginScreen = () =>{
    

    return (
        <>
            <Center h='100vh' bg ='red'>
                <Stack boxShadow='md' bg='white' p='20' rounded='md'>
                <Image src="/images/eestec-logo.png" maxW='50%' mb='10' mx='auto' />
                <Heading variant='h4'>Sign in</Heading>

                /** Implement form */

                    <Stack justify='center' color='gray.600' spacing='3'>
                        <Text as='div' textAlign='left'>
                            <Link color='primary' variant='link'>
                                Forgot password
                            </Link>
                            <br />
                            <br />
                            <span>  Don&lsquo;t have an account? </span>
                            <Link color='primary' variant='link'>
                                Sign up
                            </Link>
                        </Text>
                        
                    </Stack>

                </Stack>
            </Center>
        </>
        
    )

}

export default LoginScreen;