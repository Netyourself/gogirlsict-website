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
  Stack,
  Badge,
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { FaThumbtack } from "react-icons/fa";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { notices } from "../data/noticeboard";
import branding from "../theme";
// import theme from "../theme/index";

const EventsNoticeBoardPage: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container
        maxW="container.lg"
        p={8}
        bg={branding.colors.white}
        color={branding.colors.black}
      >
        <Heading as="h1" size="2xl" mb={8} color={branding.colors.primary}>
          NoticeBoard
        </Heading>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color={branding.colors.primary500}>
            Welcome to our NoticeBoard
          </Heading>
          <Text fontSize="lg" lineHeight="tall" color={branding.colors.black}>
            Stay updated with the latest events, announcements, and other
            important information. Check the notices below and mark your
            calendars for the upcoming events.
          </Text>
        </Box>

        <Divider borderColor={branding.colors.black} mb={12} />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={12}>
          {notices.map((notice, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              p={6}
              position="relative"
              bg={branding.colors.black}
              color={branding.colors.white}
            >
              <Box
                position="absolute"
                top="10px"
                right="10px"
                color={branding.colors.primary}
              >
                <FaThumbtack />
              </Box>
              <VStack align="start">
                <Badge colorScheme={notice.type === "event" ? "red" : "yellow"}>
                  {notice.type === "event" ? "Event" : "Announcement"}
                </Badge>
                <Heading as="h3" size="md" color={branding.colors.primary}>
                  {notice.title}
                </Heading>
                <Text fontSize="lg" color="red.300">
                  {notice.date.toString()}
                </Text>
                <Text fontSize="md" color={branding.colors.white}>
                  {notice.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        <Divider borderColor={branding.colors.black} mb={12} />

        <Box>
          <Heading as="h2" size="lg" mb={4} color={branding.colors.primary500}>
            Upcoming Events
          </Heading>
          <Text fontSize="lg" lineHeight="tall" color={branding.colors.black}>
            Mark your calendars for the upcoming events. Stay tuned for more
            updates!
          </Text>
          <Stack mt={4} spacing={4}>
            {notices
              .filter((notice) => notice.type === "event")
              .map((event, index) => (
                <Box
                  key={index}
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  bg={branding.colors.black}
                  color={branding.colors.white}
                >
                  <Text fontSize="lg" color={branding.colors.primary}>
                    {event.title} - {event.date.toString()}
                  </Text>
                </Box>
              ))}
          </Stack>
        </Box>
      </Container>
      <Footer />
    </ChakraProvider>
  );
};

export default EventsNoticeBoardPage;
