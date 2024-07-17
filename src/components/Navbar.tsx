//"use client";
import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  Image,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavbarMenu from "./commons/NavbarMenu";
import { menuItems } from "../app/data/menuItemsData";
import branding from "../app/theme/index";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      bg={branding.colors.primary}
      color={branding.colors.white}
      py={4}
    >
      <Container maxW="container.2xl">
        <Flex justify="space-between" align="center">
          <Box display="flex" alignItems="center">
            <Box bg="white" p={2} borderRadius="full" boxShadow="md" mr={1}>
              <Image
                src="/images/logo_trans.png"
                alt="Logo"
                boxSize={{ base: "60px", md: "80px" }}
                objectFit="contain"
              />
            </Box>
            <Heading size="md" ml={0} color={branding.colors.white}>
              <Link href="/">GoGirls ICT Initiative</Link>
            </Heading>
          </Box>

          <Flex display={{ base: "none", md: "flex" }} as="nav" gap={4}>
            <NavbarMenu buttonText="About Us" menuItems={menuItems.aboutUs} />
            <NavbarMenu buttonText="Programs" menuItems={menuItems.programs} />
            <NavbarMenu
              buttonText="Resources"
              menuItems={menuItems.resources}
            />
            <NavbarMenu
              buttonText="Get Involved"
              menuItems={menuItems.getInvolved}
            />
            <Button
              variant="link"
              color={branding.colors.white}
              as={Link}
              href="/blog"
            >
              Blog
            </Button>
            <Button
              variant="link"
              color={branding.colors.white}
              as={Link}
              href="/#contactUs"
            >
              Contact Us
            </Button>
            <Button
              variant="link"
              color={branding.colors.white}
              as={Link}
              href="/noticeBoard"
            >
              NoticeBoard
            </Button>
          </Flex>

          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize={"4xl"} />}
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
            color="white"
          />
        </Flex>
        {/* Responsive layout for Mobile devices */}
        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              <Button
                variant="link"
                color={branding.colors.white}
                as={Link}
                href="#"
              >
                Home
              </Button>
              <NavbarMenu buttonText="About Us" menuItems={menuItems.aboutUs} />
              <NavbarMenu
                buttonText="Programs"
                menuItems={menuItems.programs}
              />
              <NavbarMenu
                buttonText="Resources"
                menuItems={menuItems.resources}
              />
              <NavbarMenu
                buttonText="Get Involved"
                menuItems={menuItems.getInvolved}
              />
              <Button
                variant="link"
                color={branding.colors.white}
                as={Link}
                href="#blogPosts"
              >
                Blog
              </Button>
              <Button
                variant="link"
                color={branding.colors.white}
                as={Link}
                href="#contactUs"
              >
                Contact Us
              </Button>
              <Button
                variant="link"
                color={branding.colors.white}
                as={Link}
                href="/noticeBoard"
              >
                NoticeBoard
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
};
export { Navbar };
