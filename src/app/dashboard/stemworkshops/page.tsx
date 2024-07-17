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

const WorkshopsPage: React.FC = () => {
  return (
    <Container
      maxW="container.lg"
      p={8}
      bg={branding.colors.white}
      color="gray.700"
    >
      <Heading as="h2" size="xl" mb={6}>
        STEM Workshops
      </Heading>
      <Box mb={4}>
        <Link href="/dashboard/workshops/create" passHref>
          <Button colorScheme="tomato">Add New Workshop</Button>
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
          <Tr>
            <Td>Introduction to Robotics</Td>
            <Td>July 20, 2024</Td>
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

export default WorkshopsPage;
