"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  LinkBox,
  LinkOverlay,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { blogPosts } from "@/app/data/pageData";
import branding from "@/app/theme";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  content: string;
}

const BlogPostListPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleOpenModal = (post: BlogPost) => {
    setSelectedPost(post);
    onOpen();
  };

  return (
    <Container maxW="container.xl" p={8} color="gray.700">
      <Heading
        as="h1"
        size="2xl"
        mb={8}
        color={branding.colors.secondary600}
        textAlign="center"
      >
        Latest Blog Posts
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
        {blogPosts.map((post: BlogPost) => (
          <LinkBox
            key={post.id}
            as="article"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={6}
            bg="gray.100"
            _hover={{ bg: "gray.200" }}
          >
            <Image
              src={post.image}
              alt={post.title}
              borderRadius="md"
              boxShadow="md"
              objectFit="cover"
              w="full"
              h={{ base: "70px", md: "100px", lg: "200px" }}
            />
            <Heading as="h3" size="md" mb={2}>
              <LinkOverlay
                as={NextLink}
                href="#"
                color={branding.colors.secondary}
              >
                {post.title}
              </LinkOverlay>
            </Heading>
            <Text fontSize="lg" color={branding.colors.gray600}>
              <strong>Date:</strong> {post.date}
            </Text>
            <Box mt={4}>
              <Button
                colorScheme="purple"
                backgroundColor={branding.colors.secondary}
                onClick={() => handleOpenModal(post)}
              >
                Read More
              </Button>
            </Box>
          </LinkBox>
        ))}
      </SimpleGrid>

      {selectedPost && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedPost.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                borderRadius="md"
                boxShadow="md"
                objectFit="cover"
                w="full"
                mb={4}
              />
              <Text fontSize="lg" color={branding.colors.gray600}>
                <strong>Date:</strong> {selectedPost.date}
              </Text>
              <Text mt={4} color={branding.colors.gray600}>
                {selectedPost.content}
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default BlogPostListPage;
