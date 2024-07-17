import { Container, Heading, Box, Text } from "@chakra-ui/react";
import React from "react";
import { TeamSection } from "./teamMember";
import branding from "../../theme/index";
import {
  coFounders,
  projectTeam,
  advisoryBoard,
} from "@/app/data/aboutusPageData";
import { AdvisoryBoardSection } from "./advisoryBoard";

const OurTeam: React.FC = () => (
  <Container maxW="container.xl" py={8}>
    <Heading
      as="h1"
      size="xl"
      textAlign="center"
      mb={8}
      color={branding.colors.secondary600}
    >
      Meet Our Team
    </Heading>
    <Box mb={12} textAlign="center" color={branding.colors.gray600}>
      <Text fontSize="lg" mb={4}>
        At GoGirls ICT Initiative, our team is composed of dedicated
        professionals committed to making a difference. Our collective expertise
        and passion drive us to create impactful programs and initiatives. Get
        to know the people behind our success.
      </Text>
    </Box>
    <TeamSection title="Co-Founders" members={coFounders} />
    <TeamSection title="Project Team" members={projectTeam} />
    <AdvisoryBoardSection title="Advisory Board" members={advisoryBoard} />
  </Container>
);

export default OurTeam;
