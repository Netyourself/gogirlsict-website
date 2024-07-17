"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Divider,
  Image,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import branding from "@/app/theme";
import { blogPosts } from "@/app/data/pageData";

const BlogPostDetailPage: React.FC = () => {
  const router = useParams();

  const { id } = router;

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <Container
      maxW="container.lg"
      p={8}
      bg={branding.colors.white}
      color="gray.700"
    >
      <VStack align="start" spacing={4}>
        <Heading as="h1" size="2xl" mb={4} color={branding.colors.primary}>
          {post.title}
        </Heading>
        <Image
          src={post.image}
          alt={post.title}
          borderRadius="md"
          boxShadow="md"
          objectFit="cover"
          w="full"
          h={{ base: "200px", md: "300px", lg: "400px" }}
        />
        <Text fontSize="lg" color={branding.colors.gray600}>
          <strong>Date:</strong> {post.date}
        </Text>
        <Divider borderColor={branding.colors.gray} my={4} />
        <Text fontSize="md" color={branding.colors.gray600}>
          {post.content}
        </Text>
      </VStack>
    </Container>
  );
};

export default BlogPostDetailPage;
