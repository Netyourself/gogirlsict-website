"use client";
import NextLink from "next/link";

import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import branding from "@/app/theme";

const VolunteerPage: React.FC = () => {
  const router = useRouter();

  const handleJoinClick = () => {
    router.push("/volunteer/signup");
  };

  return (
    <Box bg="white" p={8}>
      <Center mb={8}>
        <Heading
          as="h1"
          size="2xl"
          color={branding.colors.secondary}
          textAlign="center"
        >
          Join Us as a Freelancer
        </Heading>
      </Center>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-around"
        align="center"
        mb={16}
        maxW="1300px"
        mx="auto"
      >
        <VStack spacing={4} align="start" maxW="xl">
          <Heading as="h2" size="xl" color={branding.colors.secondary500}>
            Make a Difference
          </Heading>
          <Text fontSize="lg" color={branding.colors.gray600}>
            Freelancing with us means you’ll be making a positive impact on our
            community. Whether you have a few hours a week or can commit to a
            longer period, your time and skills are invaluable.
          </Text>
          <Text fontSize="md" color={branding.colors.gray} mt={4}>
            Contact us via email or Visit our office
          </Text>
          {/* <Button size="lg" colorScheme="red" onClick={handleJoinClick} mt={4}>
            Join Now
          </Button> */}
        </VStack>
        <Box
          mt={{ base: 8, md: 0 }}
          maxW="400px"
          opacity="0.8"
          overflow="hidden"
        >
          <Image
            src="/images/Beyond-Conflict-Final-Poster-1-0-400x250.jpg"
            alt="Volunteering"
            borderRadius="md"
            opacity="0.7"
            objectFit="cover"
            w="100%"
            h="auto"
            _hover={{ transform: "scale(1.05)" }}
            transition="transform 0.2s ease"
          />
        </Box>
      </Flex>
      <Stack
        spacing={8}
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        maxW="1300px"
        mx="auto"
      >
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          maxW="xs"
          bg="gray.50"
          textAlign="center"
        >
          <Heading
            as="h3"
            size="md"
            color={branding.colors.secondary500}
            mb={4}
          >
            Community Engagement
          </Heading>
          <Text color="gray.600">
            Participate in community events and initiatives to create a
            supportive environment for everyone.
          </Text>
        </Box>
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          maxW="xs"
          bg="gray.50"
          textAlign="center"
        >
          <Heading
            as="h3"
            size="md"
            color={branding.colors.secondary500}
            mb={4}
          >
            Skill Development
          </Heading>
          <Text color="gray.600">
            Gain new skills and experience through various volunteer
            opportunities and training programs.
          </Text>
        </Box>
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          maxW="xs"
          bg="gray.50"
          textAlign="center"
        >
          <Heading
            as="h3"
            size="md"
            color={branding.colors.secondary500}
            mb={4}
          >
            Networking
          </Heading>
          <Text color="gray.600">
            Connect with like-minded individuals and build a network that can
            support your personal and professional growth.
          </Text>
        </Box>
      </Stack>
      <Center mt={16}>
        <Link
          as={NextLink}
          href="/#contactUs"
          color={branding.colors.white}
          // isExternal
        >
          <Button
            size="lg"
            colorScheme="red"
            // onClick={handleJoinClick}
            bg={branding.colors.secondary}
            color="white"
            _hover={{ bg: "red.600" }}
          >
            Contact us to became a Freelancer
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default VolunteerPage;
