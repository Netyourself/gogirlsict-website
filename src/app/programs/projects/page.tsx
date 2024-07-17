"use client";
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { projects } from "@/app/data/pageData";
import branding from "@/app/theme";

const ProjectsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 5;
  const router = useRouter();

  const nextProjects = () => {
    setCurrentPage(
      (prev) => (prev + 1) % Math.ceil(projects.length / projectsPerPage)
    );
  };

  const prevProjects = () => {
    setCurrentPage(
      (prev) =>
        (prev - 1 + Math.ceil(projects.length / projectsPerPage)) %
        Math.ceil(projects.length / projectsPerPage)
    );
  };

  const handleProjectClick = (id: number) => {
    router.push(`/programs/projects/${id}`);
  };

  const truncateDescription = (description: string) => {
    if (description.length > 200) {
      return description.substring(0, 200) + "...";
    }
    return description;
  };

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <Box p={8} bg="white">
      <Center mb={4}>
        <Heading
          color={branding.colors.secondary600}
          textTransform="capitalize"
          as="h1"
          size="2xl"
          mb={8}
          textAlign="center"
        >
          Discover Our Projects
        </Heading>
      </Center>
      {/* <Center mb={8}>
        <Heading as="h1" size="xl" color={branding.colors.black}>
          Projects
        </Heading>
      </Center> */}
      <Flex align="center" justify="center" position="relative">
        <IconButton
          icon={<ArrowBackIcon boxSize={8} />}
          onClick={prevProjects}
          position="absolute"
          left={0}
          aria-label="Previous Projects"
          size="lg"
          bg={branding.colors.primary}
          color={branding.colors.white}
          _hover={{ bg: branding.colors.gray600 }}
          isDisabled={currentPage === 0}
        />
        <Grid
          templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          gap={4}
          w="full"
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 0.72 }}
              whileTap={{ scale: 0.95 }}
              style={{ cursor: "pointer" }}
            >
              <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
                bg="gray.50"
                _hover={{ bg: "gray.100" }}
                onClick={() => handleProjectClick(project.id)}
                h="100%"
              >
                <VStack spacing={4}>
                  <Box
                    bg="gray.200"
                    w="full"
                    h="150px"
                    backgroundImage={`url(${
                      project.image ? project.image : "images/hero.svg"
                    })`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    borderRadius="md"
                  />
                  <Heading fontSize="xl">{project.title}</Heading>
                  <Text fontSize="sm" color="gray.500" mb="-6">
                    {project.year}
                  </Text>
                  <Text mt={4} color={branding.colors.gray600}>
                    {truncateDescription(project.description)}
                  </Text>
                  {project.description.length > 150 && (
                    <Button
                      size="sm"
                      // colorScheme="red"
                      color={branding.colors.white}
                      bg={branding.colors.secondary}
                      onClick={() => handleProjectClick(project.id)}
                    >
                      View More
                    </Button>
                  )}
                </VStack>
              </Box>
            </motion.div>
          ))}
        </Grid>
        <IconButton
          icon={<ArrowForwardIcon boxSize={8} />}
          onClick={nextProjects}
          position="absolute"
          right={0}
          aria-label="Next Projects"
          size="lg"
          bg={branding.colors.primary}
          color={branding.colors.white}
          _hover={{ bg: branding.colors.gray600 }}
          isDisabled={(currentPage + 1) * projectsPerPage >= projects.length}
        />
      </Flex>
    </Box>
  );
};

export default ProjectsPage;
