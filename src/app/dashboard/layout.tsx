"use client";
import React from "react";
import {
  Box,
  Flex,
  VStack,
  Link as ChakraLink,
  Icon,
  Heading,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
import {
  FaHome,
  FaClipboard,
  FaProjectDiagram,
  FaUsers,
  FaFileAlt,
  FaComments,
  FaBars,
} from "react-icons/fa";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  const linkItems = [
    { href: "/dashboard", label: "Home", icon: FaHome },
    { href: "/dashboard/posts", label: "Blog Posts", icon: FaClipboard },
    { href: "/dashboard/noticeboard", label: "Noticeboard", icon: FaFileAlt },
    {
      href: "/dashboard/stemworkshops",
      label: "STEM Workshops",
      icon: FaProjectDiagram,
    },
    { href: "/dashboard/projects", label: "Projects", icon: FaProjectDiagram },
    {
      href: "/dashboard/testimonials",
      label: "Testimonials",
      icon: FaComments,
    },
    { href: "/dashboard/scholarships", label: "Scholarships", icon: FaFileAlt },
    { href: "/dashboard/team", label: "Team Members", icon: FaUsers },
    { href: "/dashboard/resources", label: "Resources", icon: FaFileAlt },
  ];

  const renderLinkItems = () =>
    linkItems.map((item) => (
      <Link key={item.href} href={item.href} passHref>
        <ChakraLink
          display="flex"
          alignItems="center"
          p={2}
          bg={pathname === item.href ? "gray.300" : "transparent"}
          borderRadius="md"
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={item.icon} mr={2} />
          {item.label}
        </ChakraLink>
      </Link>
    ));

  return (
    <Flex direction={{ base: "column", md: "row" }} h="100vh">
      <Box
        as="nav"
        bg="tomato"
        color="white"
        w={{ base: "100%", md: "200px" }}
        py={4}
        px={2}
        display={{ base: "none", md: "block" }}
      >
        <VStack spacing={4} align="stretch">
          <Heading as="h3" size="lg" mb={6} textAlign="center">
            Admin Dashboard
          </Heading>
          {renderLinkItems()}
        </VStack>
      </Box>
      <IconButton
        aria-label="Open Menu"
        icon={<FaBars />}
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
        position="absolute"
        top={2}
        left={2}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {renderLinkItems()}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box flex="1" p={8} overflowY="auto">
        {children}
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
