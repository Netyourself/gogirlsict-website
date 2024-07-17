import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import branding from "@/app/theme";
import React from "react";
import { AdvisoryBoardProps } from "@/types/user";

export const AdvisoryBoardSection: React.FC<{
  title: string;
  members: AdvisoryBoardProps[];
}> = ({ title, members }) => {
  return (
    <Box mt={12}>
      <Heading
        as="h2"
        size="lg"
        mb={6}
        textAlign="center"
        color={branding.colors.secondary600}
      >
        {title}
      </Heading>
      <Box mb={8} textAlign="center" color={branding.colors.gray600}>
        <Text fontSize="lg">
          Our advisory board consists of seasoned professionals who provide
          strategic guidance and ensure our initiatives align with our mission
          and vision. Their insights and expertise are invaluable to our
          success.
        </Text>
      </Box>
      <Flex wrap="wrap" justify="center" gap={8}>
        {members.map((member, index) => (
          <Box
            key={index}
            bg={branding.colors.white}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
            width="300px"
            textAlign="center"
            p={4}
          >
            <Image
              src={member.image}
              alt={member.name}
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
              mx="auto"
              mb={4}
              borderWidth="4px"
              borderColor={branding.colors.secondary600}
            />
            <Heading as="h3" size="md" mb={2}>
              {member.name}
            </Heading>
            <Text fontSize="sm" color={branding.colors.gray600}>
              {member.position}
            </Text>
            <Text fontSize="sm" color={branding.colors.gray600} mt={2}>
              {member.bio}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
