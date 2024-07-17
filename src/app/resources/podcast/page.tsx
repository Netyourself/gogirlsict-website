"use client";
import { Box, Container, Heading, Link, VStack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { podcasts } from "@/app/data/resourcesPageData";

const PodcastsPage: React.FC = () => {
  return (
    <Container maxW="container.lg" p={8}>
      <Heading as="h1" size="xl" mb={8} color="blue.600">
        Podcasts
      </Heading>
      <VStack spacing={8} align="stretch">
        {podcasts.map((podcast) => (
          <Box
            key={podcast.id}
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
          >
            <Heading as="h3" size="md" mb={2}>
              {podcast.title}
            </Heading>
            <Text mb={4} color="gray.600">
              {podcast.description}
            </Text>
            <Link href={podcast.link} isExternal color="blue.500">
              Listen Now <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default PodcastsPage;
