import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { FaFacebook, FaYoutube, FaPodcast } from "react-icons/fa";
import branding from "../app/theme";
import { FaX } from "react-icons/fa6";
import { partners } from "@/app/data/aboutusPageData";

const Footer = () => (
  <Box
    as="footer"
    py={10}
    bg={branding.colors.primary}
    color={branding.colors.white}
  >
    <Container maxW="container.lg">
      <Grid templateColumns="repeat(auto-fit, minmax(100px, 1fr))" gap={6}>
        <Box>
          <Box display="flex" alignItems="center">
            <Image
              src="/images/logo_trans.png"
              alt="Logo"
              boxSize={{ base: "70px", md: "100px" }}
              objectFit="contain"
              bg="transparent"
              ml={0}
            />
            <Heading size="md" color={branding.colors.white}>
              GoGirls ICT Initiative
            </Heading>{" "}
          </Box>
          <Text color={branding.colors.white}>
            Empowering girls and young women in technology through education,
            mentorship, and skills development.
          </Text>
        </Box>
        <VStack spacing={4}>
          <Heading size="md" mb={2} color={branding.colors.white}>
            Important Links
          </Heading>
          <Link as={NextLink} href="/" color={branding.colors.white}>
            Home
          </Link>
          <Link as={NextLink} href="/#aboutUs" color={branding.colors.white}>
            About Us
          </Link>
          <Link
            as={NextLink}
            href="/resources/faqs"
            color={branding.colors.white}
          >
            FAQs
          </Link>
          <Link as={NextLink} href="/#contactUs" color={branding.colors.white}>
            Contact
          </Link>
        </VStack>
        <VStack spacing={4}>
          <Heading size="md" mb={2} color={branding.colors.white}>
            Connect with us
          </Heading>
          <Link
            as={NextLink}
            href="https://www.facebook.com/GoGirlsICT"
            color={branding.colors.white}
            isExternal
          >
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook size="24px" />}
              variant="ghost"
              color={branding.colors.white}
              _hover={{ bg: "gray.700" }}
            />{" "}
          </Link>

          <Link
            as={NextLink}
            href="https://x.com/gogirlsictjuba"
            color={branding.colors.white}
            isExternal
          >
            <IconButton
              aria-label="X formly Twitter"
              icon={<FaX size="24px" />}
              variant="ghost"
              color={branding.colors.white}
              _hover={{ bg: "gray.700" }}
            />
          </Link>
        </VStack>
        <VStack spacing={4}>
          <Heading size="md" mb={2} color={branding.colors.white}>
            Listen to our podcast
          </Heading>

          <Link
            as={NextLink}
            href="https://www.youtube.com/channel/UCPn5exq63qRHlNkecMywNwQ"
            color={branding.colors.white}
            isExternal // Open in new tab
          >
            <IconButton
              aria-label="YouTube"
              icon={<FaYoutube size="24px" />}
              variant="ghost"
              color={branding.colors.white}
              _hover={{ bg: "gray.700" }}
            />
          </Link>
          <Link
            as={NextLink}
            href="/resources/podcast"
            color={branding.colors.white}
            isExternal
          >
            <IconButton
              aria-label="Podcast"
              icon={<FaPodcast size="24px" />}
              variant="ghost"
              color={branding.colors.white}
              _hover={{ bg: "gray.700" }}
            />
          </Link>
        </VStack>
      </Grid>
      {/* Added Partner Section */}
      <Box id="partners">
        <Heading size="md" mt={10} color={branding.colors.white}>
          Our Partners
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(100px, 1fr))" gap={2}>
          {partners.map((partner) => (
            <Flex key={partner.name} alignItems="center">
              <VStack>
                <Image
                  src={partner.logoUrl}
                  alt={`${partner.name} logo`}
                  boxSize="100px"
                  objectFit="contain"
                  mr={2}
                />
                <Text fontSize="sm">{partner.name}</Text>
              </VStack>
            </Flex>
          ))}
        </Grid>
      </Box>

      <Text mt={8} textAlign="center">
        &copy; {new Date().getFullYear()} GoGirls ICT Initiative. All rights
        reserved.
      </Text>
    </Container>
  </Box>
);

export default Footer;
