import { Box, Flex, Heading, Text, Button, Image, SimpleGrid, Container, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaPlay, FaStar, FaUserFriends } from "react-icons/fa";

const Index = () => {
  const courses = [
    {
      title: "Culinary Arts",
      instructor: "Gordon Ramsay",
      description: "Learn cooking techniques from the Michelin star chef.",
      image: "https://images.unsplash.com/photo-1707616954302-de63d45c3135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHb3Jkb24lMjBSYW1zYXklMjBjb29raW5nfGVufDB8fHx8MTcxMzQ3NzgyN3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Writing",
      instructor: "Margaret Atwood",
      description: "Explore the art of storytelling with the author of 'The Handmaid's Tale'.",
      image: "https://images.unsplash.com/photo-1608304605075-f73dd7761b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNYXJnYXJldCUyMEF0d29vZHxlbnwwfHx8fDE3MTM0Nzc4Mjd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Photography",
      instructor: "Annie Leibovitz",
      description: "Master the art of portrait photography with an iconic photographer.",
      image: "https://images.unsplash.com/photo-1641847234618-98582b77d2e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbm5pZSUyMExlaWJvdml0enxlbnwwfHx8fDE3MTM0Nzc4Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            MasterClass Clone
          </Heading>
          <Text fontSize="xl">Master any skill with the best in the world.</Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {courses.map((course, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
              <Image src={course.image} alt={course.title} borderRadius="md" mb={4} />
              <Heading as="h3" size="lg">
                {course.title}
              </Heading>
              <Text mt={2} fontSize="sm" color="gray.600">
                <Icon as={FaUserFriends} /> {course.instructor}
              </Text>
              <Text mt={2}>{course.description}</Text>
              <HStack mt={4} justifyContent="space-between">
                <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid">
                  Start Learning
                </Button>
                <HStack>
                  <Icon as={FaStar} color="yellow.400" />
                  <Text>4.9 (120)</Text>
                </HStack>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
