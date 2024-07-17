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

const NoticeboardPage: React.FC = () => {
  return (
    <Container
      maxW="container.lg"
      p={8}
      bg={branding.colors.white}
      color="gray.700"
    >
      <Heading as="h2" size="xl" mb={6}>
        Noticeboard
      </Heading>
      <Box mb={4}>
        <Link href="/dashboard/noticeboard/create" passHref>
          <Button colorScheme="tomato">Add New Notice</Button>
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
          {/* Map through  notices and display */}
          <Tr>
            <Td>Upcoming Event</Td>
            <Td>July 15, 2024</Td>
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

export default NoticeboardPage;
