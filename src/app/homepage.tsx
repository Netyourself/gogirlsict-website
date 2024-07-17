import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaBullseye, FaEye, FaRocket } from "react-icons/fa6";
import branding from "./theme/index";
import { Navbar } from "../components/Navbar";
import ProjectsPage from "./programs/projects/page";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

export const HomePage = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4480848782105!2d31.57301967519685!3d4.864334695111374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x171280f3f25938db%3A0xb974a8363233ea88!2s88.4%20City%20FM%20Juba!5e0!3m2!1sen!2s!4v1719096817125!5m2!1sen!2s";

  return (
    <Box>
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <Box as="section" py={20} bg={branding.colors.gray100}>
        <Container maxW="container.xl">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={8}
            align="center"
          >
            <VStack spacing={4} align="start">
              <Heading as="h1" size="2xl">
                GoGirls ICT Initiative
              </Heading>
              <Text fontSize="lg">
                A Juba, South Sudan based non-profit initiative founded by a
                group of dedicated young women in the fields of Computer
                Science, Information Systems, ICT4D Innovation, hacktivism and
                peace-building
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  colorScheme={branding.colors.secondary}
                  size="lg"
                  as={Link}
                  href="#aboutUs"
                  _hover={{
                    color: branding.colors.gray,
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  More About us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  as={Link}
                  href="/getInvolved/donation"
                  _hover={{
                    color: branding.colors.gray,
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Donate
                </Button>
              </Stack>
            </VStack>
            <Image
              src="/images/file1.png"
              alt="Hero Image"
              boxSize={{ base: "100%", md: "100%" }}
            />
          </Stack>
        </Container>
      </Box>

      {/* Mission Section */}

      <Box as="section" id="mission" py={20}>
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={10} as="h1" size="2xl">
            What Defines us
          </Heading>
          <Flex wrap="wrap" justify="space-around">
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              m={2}
            >
              <VStack spacing={4} align="center">
                <Icon
                  as={FaBullseye}
                  fontSize="48px"
                  color={branding.colors.gray}
                />
                <Heading size="md">Focus</Heading>
                <Text mt={2}>
                  GoGirls ICT’s focus is on mentorship in STEAM (Science,
                  Technology, Engineering, Art and Mathematics) related topics
                  leveraging more on Open Source resources to create an Open
                  Culture in South Sudan.
                </Text>
              </VStack>
            </Box>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              m={2}
            >
              <VStack spacing={4} align="center">
                <Icon
                  as={FaEye}
                  fontSize="48px"
                  // color={branding.colors.tomato}
                  color={branding.colors.secondary}
                />
                <Heading size="md">Vision</Heading>
                <Text mt={2}>
                  To spark Imaginations and curiosity of generations of problem
                  solvers most especially girls and Women to use technology to
                  innovate and create lasting solutions for their local
                  communities..
                </Text>
              </VStack>
            </Box>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              m={2}
            >
              <VStack spacing={4} align="center">
                <Icon
                  as={FaRocket}
                  fontSize="48px"
                  color={branding.colors.gray}
                />
                <Heading size="md">Mission</Heading>
                <Text mt={2}>
                  To Engage, To Educate, To Empower Core values Creativity,
                  Innovation, Collaboration, Open-Mindness,Flexibility,
                  Responsibility, Consistency, and Positivity.
                </Text>
              </VStack>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* About Section */}

      <Box as="section" id="aboutUs" py={20} bg={branding.colors.gray100}>
        <Container maxW="container.xl">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={8}
            align="center"
          >
            <Image
              src="/images/yine.png"
              alt="About Us Image"
              boxSize={{ base: "100%", md: "200%" }}
              bg="transparents"
              opacity={0.75}
            />
            <VStack spacing={4} align="start">
              <Heading as="h1" size="2xl">
                About Us
              </Heading>

              <Box maxW="container.4xl" px={0} py={4}>
                <Text fontSize="lg" mb={4}>
                  GoGirls ICT Initiative is a Juba, South Sudan based non-profit
                  initiative founded by a group of dedicated young women in the
                  fields of Computer Science, Information Systems, ICT4D
                  Innovation, hacktivism and peace-building.
                </Text>
                <Text fontSize="lg" mb={4}>
                  GoGirls ICT’s focus is on mentorship in STEAM (Science,
                  Technology, Engineering, Art and Mathematics) related topics
                  leveraging more on Open Source resources to create an Open
                  Culture in South Sudan. Founded in 2015, the Organization was
                  finally registered as an independent Non-Governmental
                  Organization in 2019.
                </Text>
                <Text fontSize="lg">
                  The organization is part of the Global Innovation Gathering
                  and Access to Skills and Knowledge network #ASKnet , while its
                  founders have been featured on Eskills4girls’ The
                  Storytellers: Experiences around the Globe
                </Text>
              </Box>
            </VStack>
          </Stack>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <ProjectsPage />

      {/* Blog Section */}
      <Box as="section" id="blogPosts" py={20} bg={branding.colors.gray100}>
        <Blog />
      </Box>

      {/* Contact Section */}

      <Box as="section" id="contactUs" py={20}>
        <Container maxW="container.xl">
          <Heading textAlign="center" mb={10} as="h1" size="2xl">
            Contact Us
          </Heading>
          <Flex wrap="wrap" justify="space-around">
            <VStack spacing={4} align="start" maxW="md" p={4} m={2}>
              <Heading size="md">Get in Touch</Heading>
              <Text>
                {`We'd love to host you at our office, Use below Google map
                direction to easily navigate to our Office`}
              </Text>
              {/* <Button colorScheme="blue" size="lg">
                Contact Us
              </Button> */}
              <iframe
                width="100%"
                height="300px"
                allowFullScreen
                src={mapUrl}
              />
            </VStack>
            <Box
              maxW="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              m={2}
            >
              <Heading size="md">Our Address</Heading>
              <Text mt={2}>
                Block B, Munuki, Next to City FM, Juba, Central Equatoria State,
                South Sudan
              </Text>
              <Heading size="md" mt={4}>
                Call Us
              </Heading>
              <Text mt={2}>+211920000000</Text>
              <Heading size="md" mt={4}>
                Email Us
              </Heading>
              <Text mt={2}>info@netyoursel.net</Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};
