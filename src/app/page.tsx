"use client"; // This line marks the component as Client Component

import Image from "next/image";
import styles from "./page.module.css";
// import HomePage from "./pages";
import { HomePage } from "./homepage";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
}
