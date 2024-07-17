import {
  Heading,
  SimpleGrid,
  VStack,
  Divider,
  Box,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import branding from "../../theme/index";
import { TeamMember } from "@/types/user";
import ImageAvatar from "@/components/commons/Avatar";

export const TeamSection: React.FC<{
  title: string;
  members: TeamMember[];
}> = ({ title, members }) => (
  <Box mt={8}>
    <Heading as="h2" size="lg" mb={4} color={branding.colors.secondary600}>
      {title}
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {members.map((member, index) => (
        <Box
          key={index}
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg={branding.colors.white}
          boxShadow="md"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.05)" }}
        >
          <Flex justify="center">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                borderRadius="full"
                boxSize="150px"
                mx="auto"
              />
            ) : (
              <ImageAvatar />
            )}
          </Flex>
          <VStack mt={4} spacing={2} textAlign="center">
            <Heading as="h3" size="md">
              {member.name}
            </Heading>
            <Text fontWeight="bold" color="gray.500">
              {member.role}
            </Text>
            <Text>{member.description}</Text>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
    <Divider mt={8} />
  </Box>
);
