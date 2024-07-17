"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Divider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import branding from "@/app/theme";

const scholarships = [
  {
    name: "STEM Scholarship",
    amount: "$5000",
    description: "A scholarship for girls students pursuing degrees in STEM.",
  },
  {
    name: "Future Tech Leaders Scholarship",
    amount: "$3000",
    description: "Supporting the next generation of leaders in various Tech.",
  },
];

const ScholarshipPage: React.FC = () => {
  return (
    <Container
      maxW="container.lg"
      p={8}
      bg="white"
      color={branding.colors.black}
    >
      <Heading as="h1" size="2xl" mb={8} color={branding.colors.secondary}>
        Scholarship Program
      </Heading>

      <Box mb={12}>
        <Heading as="h2" size="lg" mb={4} color={branding.colors.secondary500}>
          About the Program
        </Heading>
        <Text fontSize="lg" lineHeight="tall" color={branding.colors.black}>
          Our scholarship program aims to support students who demonstrate
          exceptional talent and dedication in their chosen fields. We offer a
          variety of scholarships to help you achieve your academic and career
          goals.
        </Text>
      </Box>

      <Divider borderColor={branding.colors.black} mb={12} />

      <Box mb={12}>
        <Heading as="h2" size="lg" mb={4} color={branding.colors.secondary500}>
          Eligibility Criteria
        </Heading>
        <List spacing={3} fontSize="lg" color={branding.colors.black}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={branding.colors.secondary} />
            Must be a full-time student.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={branding.colors.secondary} />
            Demonstrated academic excellence.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={branding.colors.secondary} />
            Involvement in extracurricular activities.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={branding.colors.secondary} />
            Commitment to community service.
          </ListItem>
        </List>
      </Box>

      <Divider borderColor={branding.colors.black} mb={12} />

      <Box mb={12}>
        <Heading as="h2" size="lg" mb={4} color={branding.colors.secondary500}>
          Application Process
        </Heading>
        <Text fontSize="lg" lineHeight="tall" color={branding.colors.black}>
          To apply for our scholarships, please follow the steps below:
        </Text>
        <List spacing={3} fontSize="lg" color={branding.colors.black} mt={4}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={branding.colors.secondary} />
            Fill out the online application form.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={branding.colors.secondary} />
            Submit your transcripts and letters of recommendation.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={branding.colors.secondary} />
            Write a personal statement outlining your achievements and goals.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color={branding.colors.secondary} />
            Attend an interview if shortlisted.
          </ListItem>
        </List>
      </Box>

      <Divider borderColor={branding.colors.black} mb={12} />

      <Box mb={12}>
        <Heading as="h2" size="lg" mb={4} color={branding.colors.secondary500}>
          Available Scholarships
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {scholarships.map((scholarship, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              p={6}
              bg={branding.colors.black}
              color={branding.colors.white}
            >
              <VStack align="start">
                <Heading as="h3" size="md" color={branding.colors.secondary}>
                  {scholarship.name}
                </Heading>
                <Text fontSize="lg" color={branding.colors.secondary}>
                  {scholarship.amount}
                </Text>
                <Text fontSize="md" color={branding.colors.white}>
                  {scholarship.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Divider borderColor={branding.colors.black} mb={12} />

      <Box>
        <Heading as="h2" size="lg" mb={4} color={branding.colors.secondary500}>
          Contact Us
        </Heading>
        <Text fontSize="lg" lineHeight="tall" color={branding.colors.black}>
          For any questions or more information about the scholarship program,
          feel free to contact us at scholarship@netyourself.net
        </Text>
      </Box>
    </Container>
  );
};

export default ScholarshipPage;
