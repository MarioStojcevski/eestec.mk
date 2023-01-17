import { Box, Stack, VStack, HStack, Image, Heading, Center, Circle } from "@chakra-ui/react";

const MeetTheBoard = () =>{

    return (
        <Box
            bgColor="white"
            height="65vh"
        >
            <Center>
                <Heading variant='h2'>
                    Board 2022/2023
                </Heading>
            </Center>
            <HStack spacing={1} w='full' p='10%'>
                <Stack  direction='column' w='full'>
                    <Center>
                        <Circle size={{ base: '20', md: '36', lg: '52' }} bg='primary' color='white' marginBottom='2'>
                            <Image
                                h={{ base: '5', md: '10', lg: '20' }}
                                src=""
                                alt="Bojan Picture"
                            />
                    </Circle>
                    </Center>
                    <Center>
                        <Heading variant='h4'>
                            Bojan Mladenovski
                        </Heading>
                    </Center>
                    <Center>
                        <Heading variant='h4'>
                            CHAIRPERSON
                        </Heading>
                    </Center>
                </Stack>
                <Stack  direction='column' w='full'>
                    <Center>
                        <Circle size={{ base: '20', md: '36', lg: '52' }} bg='primary'  color='white' marginBottom='2'>
                            <Image
                                h={{ base: '5', md: '10', lg: '20' }}
                                src=""
                                alt="Kristina Picture"
                            />
                    </Circle>
                    </Center>
                    <Center>
                        <Heading variant='h4'>
                            Kristina Mladenova
                        </Heading>
                    </Center>
                    <Center>
                        <Heading variant='h4'>
                            CONTACT PERSON
                        </Heading>
                    </Center>
                </Stack>
                <Stack  direction='column' w='full'>
                    <Center>
                        <Circle size={{ base: '20', md: '36', lg: '52' }} bg='primary' color='white' marginBottom='2'>
                            <Image
                                h={{ base: '5', md: '10', lg: '20' }}
                                src=""
                                alt="Andrea Picture"
                            />
                    </Circle>
                    </Center>
                    <Center>
                        <Heading variant='h4'>
                            Andrea Lapevska
                        </Heading>
                    </Center>
                    <Center>
                        <Heading variant='h4'>
                            PUBLIC RELATIONS
                        </Heading>
                    </Center>
                </Stack>
                <Stack  direction='column' w='full'>
                    <Center>
                        <Circle size={{ base: '20', md: '36', lg: '52' }} bg='primary' color='white' marginBottom='2'>
                            <Image
                                h={{ base: '5', md: '10', lg: '20' }}
                                src=""
                                alt="Ivana Picture"
                            />
                    </Circle>
                    </Center>
                    <Center>
                        <Heading variant='h4'>
                            Ivana Atanasoska
                        </Heading>
                    </Center>
                    <Center>
                        <Heading variant='h4'>
                            HUMAN RESOURCES
                        </Heading>
                    </Center>
                </Stack>
                <Stack  direction='column' w='full'>
                    <Center>
                        <Circle size={{ base: '20', md: '36', lg: '52' }} bg='primary' color='white' marginBottom='2'>
                            <Image
                                h={{ base: '5', md: '10', lg: '20' }}
                                src=""
                                alt="Mario zimi se"
                            />
                    </Circle>
                    </Center>
                    <Center>
                        <Heading variant='h4'>
                            Mario Stojchevski
                        </Heading>
                    </Center>
                    <Center>
                        <Heading variant='h4'>
                            IT COORDINATOR
                        </Heading>
                    </Center>
                </Stack>
            </HStack>
    </Box>
    );
}

export default MeetTheBoard;