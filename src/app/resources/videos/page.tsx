"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Button,
  Link,
  VStack,
  Text,
} from "@chakra-ui/react";
import { podcasts } from "@/app/data/resourcesPageData";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import branding from "@/app/theme";
interface VideosProps {
  title: string;
  published: string;
  thumbnailUrl: string;
  videoId: string;
}

const VideosPage: React.FC = () => {
  const [videos, setVideos] = useState<VideosProps[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/videos");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVideos();
  }, []);

  // Gogirls ICT YouTube channel URL
  const youtubeChannelUrl =
    "https://www.youtube.com/channel/UCPn5exq63qRHlNkecMywNwQ";

  return (
    <Container maxW="container.lg" p={8}>
      <Heading as="h1" size="xl" mb="2" color={branding.colors.secondary600}>
        Videos
      </Heading>
      <Text mb={8}>Watch our videos from youtube platform....</Text>
      <Button
        as="a"
        href={youtubeChannelUrl}
        target="_blank"
        rel="noopener noreferrer"
        colorScheme="pink"
        mb={6}
      >
        Visit Our YouTube Channel
      </Button>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {videos.map((video, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
          >
            {/* Youtube player preview- Iframe */}
            <Box p={6}>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Heading
        as="h1"
        size="xl"
        mb={2}
        mt={8}
        color={branding.colors.secondary600}
      >
        Podcasts
      </Heading>
      <Text mb={8}>
        Listen to our collections of podcast on the podcast channels
        platforms...
      </Text>

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

      <Heading
        as="h1"
        size="xl"
        mb={2}
        mt={8}
        color={branding.colors.secondary600}
      >
        Open Education Resources
      </Heading>
      <Text mb={8}>
        Read and view our collections of open education resources from us and
        our partners
      </Text>
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
              View Now <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default VideosPage;
