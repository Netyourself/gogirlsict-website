import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Divider,
  Button,
  Image,
} from "@chakra-ui/react";
import branding from "@/app/theme";
import ImageAvatar from "@/components/commons/Avatar";
import { mentors } from "@/app/data/aboutusPageData";
import Link from "next/link";

const MentorshipPage: React.FC = () => {
  return (
    <Container maxW="container.lg" p={8}>
      <Heading as="h1" size="2xl" mb={8} color={branding.colors.secondary600}>
        Mentorship Program
      </Heading>

      <Box mb={12}>
        <Heading as="h2" size="lg" mb={4} color={branding.colors.secondary}>
          About the Program
        </Heading>
        <Text fontSize="lg" lineHeight="tall">
          Our mentorship program is designed to help aspiring professionals
          connect with experienced mentors in the industry. Whether you are
          looking to advance your career, develop new skills, or gain insights
          into your field, our mentors are here to guide you.
        </Text>
      </Box>

      <Divider mb={12} />

      <Box mb={12}>
        <Heading as="h2" size="lg" mb={8} color={branding.colors.secondary}>
          Meet Our Mentors
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {mentors.map((mentor, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              p={6}
            >
              <HStack spacing={4} align="start">
                {/* <Avatar size="xl" src={mentor.avatarUrl} /> */}
                {mentor?.image ? (
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    borderRadius="full"
                    boxSize="150px"
                    mx="auto"
                  />
                ) : (
                  <ImageAvatar boxSize="100px" size="lg" />
                )}
                <VStack align="start">
                  <Heading as="h3" size="md">
                    {mentor.name}
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    {mentor.description}
                  </Text>
                  {/* <Text fontSize="md">{mentor.bio}</Text> */}
                </VStack>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Divider mb={12} />

      <Box mb={12}>
        <Heading as="h2" size="lg" mb={4} color={branding.colors.secondary}>
          How to Join
        </Heading>
        <Text fontSize="lg" lineHeight="tall">
          If you are interested in joining our mentorship program, please fill
          out the application google form. We will match you with a mentor based
          on your career goals and interests.
        </Text>
        <Button
          mt={6}
          colorScheme="red"
          size="lg"
          color={branding.colors.white}
        >
          {/* Apply Now // TODO application google form or custom form */}

          <Link href="/#contactUs" scroll={true}>
            Please Contact us with your interest
          </Link>
        </Button>
      </Box>

      <Divider mb={12} />

      <Box>
        <Heading as="h2" size="lg" mb={4} color={branding.colors.secondary}>
          Contact Us
        </Heading>
        <Text fontSize="lg" lineHeight="tall">
          For any questions or more information about the mentorship program,
          feel free to contact us at info@netyourself.net.
        </Text>
      </Box>
    </Container>
  );
};

export default MentorshipPage;
