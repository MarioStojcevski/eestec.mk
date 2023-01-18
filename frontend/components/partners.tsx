import { Box, HStack, VStack, Heading, Circle, Flex } from "@chakra-ui/react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Image from "next/image";

const Partners = () => {
  const partners = [
    { id: 1, name: "Brainster", imageUrl: "/images/partners/brainster.png" },
    { id: 2, name: "Haselt", imageUrl: "/images/partners/haselt.png" },
    { id: 3, name: "IT Labs", imageUrl: "/images/partners/it-labs.png" },
    { id: 4, name: "IW:Connect", imageUrl: "/images/partners/iw-connect.png" },
    { id: 5, name: "Semos Education", imageUrl: "/images/partners/semos.png" },
  ];

  const supporters = [
    {
      id: 1,
      name: "Dobra Voda Active",
      imageUrl: "/images/supporters/dobra-voda-active.png",
    },
    {
      id: 2,
      name: "Dobra Voda Wellness",
      imageUrl: "/images/supporters/dobra-voda-wellness.png",
    },
    { id: 3, name: "Red Bull", imageUrl: "/images/supporters/red-bull.png" },
    { id: 4, name: "Sano", imageUrl: "/images/supporters/sano.png" },
    { id: 5, name: "Sinalco", imageUrl: "/images/supporters/sinalco.png" },
  ];

  return (
    <Box height="80vh" textAlign="center">
      <VStack>
        <HStack marginBottom={35}>
          <Box>
            <Heading size="xl">Partners</Heading>
            <Flex flexDirection="row" alignItems="center">
              <GoChevronLeft cursor="pointer" size={45} />

              {partners.map((partner) => (
                <Box key={partner.id} pl={5} pr={5} cursor="pointer">
                  <Image
                    width={150}
                    height={150}
                    alt={`${partner.name}`}
                    src={`${partner.imageUrl}`}
                  ></Image>
                </Box>
              ))}

              <GoChevronRight cursor="pointer" size={45} />
            </Flex>
          </Box>
        </HStack>

        <HStack>
          <Box>
            <Heading size="xl">Supporters</Heading>
            <Flex flexDirection="row" alignItems="center">
              <GoChevronLeft cursor="pointer" size={45} />

              {supporters.map((supporter) => (
                <Box key={supporter.id} ml={5} mr={5} cursor="pointer">
                  <Image
                    width={150}
                    height={150}
                    alt={`${supporter.name}`}
                    src={`${supporter.imageUrl}`}
                  ></Image>
                </Box>
              ))}

              <GoChevronRight cursor="pointer" size={45} />
            </Flex>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Partners;
