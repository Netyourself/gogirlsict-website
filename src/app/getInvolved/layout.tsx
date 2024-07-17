"use client";
import { ReactNode } from "react";
import { Navbar } from "../../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/index";
import Footer from "../../components/Footer";

const GetInvolvedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {children}
      <Footer />
    </ChakraProvider>
  );
};

export default GetInvolvedLayout;
