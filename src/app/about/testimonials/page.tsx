"use client";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import branding from "@/app/theme";
import { testimonials } from "@/app/data/pageData";

const TestimonialsPage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentCount = currentTestimonial + 1;
  const totalCount = testimonials.length;

  const { quote, author, position, image, company } =
    testimonials[currentTestimonial];

  return (
    <Box p={8}>
      <Center mb={4}>
        <Text
          fontSize="lg"
          color={branding.colors.gray600}
          textTransform="uppercase"
        >
          Hear from what people say about us
        </Text>
      </Center>
      <Center mb={8}>
        <Heading as="h1" size="xl" color={branding.colors.primary}>
          Testimonials
        </Heading>
      </Center>
      <Center mb={4}>
        <Heading as="h2" size="md" color={branding.colors.gray600}>
          {currentCount}/{totalCount} Quotes
        </Heading>
      </Center>
      <Flex align="center" justify="center" position="relative">
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={prevTestimonial}
          position="absolute"
          left={0}
          aria-label="Previous Testimonial"
          size="lg"
          bg="transparent"
          color={branding.colors.primary600}
          _hover={{ bg: "gray.200" }}
        />
        <VStack
          spacing={4}
          align="center"
          maxW="2xl"
          mx="auto"
          textAlign="center"
        >
          <motion.div
            key={quote}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text fontSize="2xl" fontStyle="italic" color="gray.700">
              {`"${quote}"`}
            </Text>
            <Flex align="center" direction="column" mt={4}>
              <Avatar
                src={image}
                size="lg"
                name={author}
                mb={2}
                color={branding.colors.white}
                bg={branding.colors.gray}
              />
              <Text fontWeight="bold" color="gray.800">
                {author}, {position}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {company}
              </Text>
            </Flex>
          </motion.div>
        </VStack>
        <IconButton
          icon={<ArrowForwardIcon />}
          onClick={nextTestimonial}
          position="absolute"
          right={0}
          aria-label="Next Testimonial"
          size="lg"
          color={branding.colors.primary600}
          bg="transparent"
          _hover={{ bg: "gray.200" }}
        />
      </Flex>
    </Box>
  );
};

export default TestimonialsPage;
