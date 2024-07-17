"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import branding from "@/app/theme";

const BlogPostsPage: React.FC = () => {
  return (
    <Container
      maxW="container.lg"
      p={8}
      bg={branding.colors.white}
      color="gray.700"
    >
      <Heading as="h2" size="xl" mb={6}>
        Blog Posts
      </Heading>
      <Box mb={4}>
        <Link href="/dashboard/posts/create" passHref>
          <Button colorScheme="tomato">Add New Post</Button>
        </Link>
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* Map through posts and display */}
          <Tr>
            <Td>Understanding AI and Machine Learning</Td>
            <Td>July 10, 2024</Td>
            <Td>
              <Button size="sm" colorScheme="blue" mr={2}>
                Edit
              </Button>
              <Button size="sm" colorScheme="red">
                Delete
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
};

export default BlogPostsPage;
