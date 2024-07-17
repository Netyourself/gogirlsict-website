"use client";

import React, { useState } from "react";
import {
  Container,
  Heading,
  Box,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import branding from "@/app/theme";
import { faqs } from "@/app/data/resourcesPageData";

const FAQsPage: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const handleToggle = (index: number) =>
    setExpandedIndex(expandedIndex === index ? null : index);

  return (
    <Container maxW="container.xl" py={8} color="gray.700">
      <Heading
        as="h1"
        size="2xl"
        mb={8}
        color={branding.colors.secondary600}
        textAlign="center"
      >
        Frequently Asked Questions (FAQs)
      </Heading>
      <VStack spacing={4} align="stretch">
        <Accordion
          allowToggle
          //   index={expandedIndex}
          onChange={(index) =>
            setExpandedIndex(Array.isArray(index) ? index[0] : index)
          }
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <Heading as="h2">
                <AccordionButton
                  onClick={() => handleToggle(index)}
                  _hover={{ bg: branding.colors.secondary }}
                  backgroundColor={branding.colors.gray600}
                  mt="2"
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    color={branding.colors.white}
                  >
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                <Text color={branding.colors.gray600}>{faq.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Container>
  );
};

export default FAQsPage;
