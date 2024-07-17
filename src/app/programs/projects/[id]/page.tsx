"use client";
import { useParams } from "next/navigation";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Container,
  Flex,
} from "@chakra-ui/react";
import { projects } from "@/app/data/pageData";
import branding from "@/app/theme";

const ProjectDetailsPage: React.FC = () => {
  const router = useParams();
  const { id } = router;

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <Text>Project not found</Text>; // TODO proper not found page
  }

  return (
    <Container maxW="container.lg" p={8}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        // spacing={8}
      >
        <Box flex="1" mr={{ md: 8 }} mb={{ base: 4, md: 0 }}>
          <Image
            src={project.image}
            alt={project.title}
            borderRadius="md"
            boxShadow="md"
            objectFit="cover"
            w="full"
            h={{ base: "200px", md: "300px", lg: "400px" }}
          />
        </Box>
        <VStack flex="2" align="start" spacing={4}>
          <Heading as="h1" size="2xl" color={branding.colors.secondary600}>
            {project.title}
          </Heading>
          <Text fontSize="lg" color={branding.colors.gray600}>
            {project.year}
          </Text>
        </VStack>
      </Flex>
      <Box mt={8} p={4} borderRadius="md" bg="gray.50" boxShadow="md">
        <Heading as="h2" size="lg" mb={4} color={branding.colors.secondary600}>
          Project Details
        </Heading>
        <Text color="gray.700">{project.description}</Text>
      </Box>
    </Container>
  );
};

export default ProjectDetailsPage;
