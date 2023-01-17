import { Box, Stack, VStack, HStack, Image, Heading, Center, Circle } from "@chakra-ui/react";
// import Image from "next/image";

const Statistics = () => {

    
    return (
        <Box
            bgColor="white"
            height="65vh"
        >
            <HStack spacing={8} w='full' p='10%'>
                <Stack  direction='column' w='full'>
                    <Center>
                        <Circle size={{ base: '10', md: '16', lg: '36' }} bg='primary' color='white'>
                            <Image
                                h={{ base: '5', md: '10', lg: '20' }}
                                src="/images/icon_calendar.png"
                                alt="calendar"
                            />
                    </Circle>
                    </Center>
                    <Center>
                        <Heading variant={{ base: 'h4', md: 'h1' }}>
                            100+
                        </Heading>
                    </Center>
                    <Center>
                        <Heading variant={{ base: 'h5', md: 'h5', lg: 'h3' }}>
                            Events
                        </Heading>
                    </Center>
                </Stack>
                <Stack  direction='column' w='full'>
                    <Center>
                        <Circle size={{ base: '10', md: '16', lg: '36' }} bg='primary' color='white'>
                            <Image
                                h={{ base: '5', md: '10', lg: '20' }}
                                src="/images/icon_glass.png"
                                alt="calendar"
                            />
                    </Circle>
                    </Center>
                    <Center>
                        <Heading variant={{ base: 'h4', md: 'h1' }}>
                            400+
                        </Heading>
                    </Center>
                    <Center>
                        <Heading variant={{ base: 'h5', md: 'h5', lg: 'h3' }}>
                            Students
                        </Heading>
                    </Center>
                </Stack>
                <Stack  direction='column' w='full'>
                    <Center>
                        <Circle size={{ base: '10', md: '16', lg: '36' }} bg='primary' color='white'>
                            <Image
                                h={{ base: '5', md: '10', lg: '20' }}
                                src="/images/icon_handshake.png"
                                alt="calendar"
                            />
                    </Circle>
                    </Center>
                    <Center>
                        <Heading variant={{ base: 'h4', md: 'h1' }}>
                            30+
                        </Heading>
                    </Center>
                    <Center>
                        <Heading variant={{ base: 'h5', md: 'h5', lg: 'h3' }}>
                            Partners
                        </Heading>
                    </Center>
                </Stack>
                <Stack  direction='column' w='full'>
                    <Center>
                        <Circle size={{ base: '10', md: '16', lg: '36' }} bg='primary' color='white'>
                            <Image
                                h={{ base: '5', md: '10', lg: '20' }}
                                src="/images/icon_people.png"
                                alt="calendar"
                            />
                    </Circle>
                    </Center>
                    <Center>
                        <Heading variant={{ base: 'h4', md: 'h1' }}>
                            200+
                        </Heading>
                    </Center>
                    <Center>
                        <Heading variant={{ base: 'h5', md: 'h5', lg: 'h3' }}>
                            Memories
                        </Heading>
                    </Center>
                </Stack>
            </HStack>
    </Box>
    );
};

export default Statistics;
