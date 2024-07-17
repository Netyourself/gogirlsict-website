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
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import branding from "@/app/theme";

const DonatePage: React.FC = () => {
  const router = useRouter();

  const handleDonateClick = () => {
    router.push("/donate/form");
  };

  return (
    <Box bg={branding.colors.white} p={8}>
      <Center mb={8}>
        <Heading
          as="h1"
          size="2xl"
          color={branding.colors.secondary}
          textAlign="center"
        >
          Partner with Us through Donations
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
        <VStack spacing={4} align="start" maxW="lg">
          <Heading as="h2" size="xl" color={branding.colors.secondary500}>
            Make a Difference with Your Contribution
          </Heading>
          <Text fontSize="lg" color={branding.colors.gray600}>
            Your generous donations help us continue our mission to support and
            uplift our community. Every contribution, big or small, makes a
            significant impact.
          </Text>
          <Text fontSize="md" color={branding.colors.gray} mt={4}>
            Contact us via email or Visit our office
          </Text>
          {/* <Button
            size="lg"
            colorScheme="red"
            onClick={handleDonateClick}
            mt={4}
          >
            Donate Now
          </Button> */}
        </VStack>

        <Box mt={{ base: 8, md: 0 }} maxW="400px" overflow="hidden">
          <Image
            src="/images/projects/repaircafes2_trans.png"
            alt="Donation"
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
        align="space-between"
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
            Transparency
          </Heading>
          <Text color={branding.colors.gray600}>
            We ensure that every donation you donate is used effectively to make
            the maximum impact.
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
            Community Support
          </Heading>
          <Text color={branding.colors.gray600}>
            Your donations help us provide essential support and resources to
            those in need in our community.
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
            Future Growth
          </Heading>
          <Text color={branding.colors.gray600}>
            Investing in our projects ensures sustainable growth and long-term
            positive change.
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
            //   onClick={handleDonateClick}
            bg={branding.colors.secondary}
            color={branding.colors.white}
            _hover={{ bg: branding.colors.primary600 }}
            isDisabled={true}
          >
            Donate via Paypal
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default DonatePage;
