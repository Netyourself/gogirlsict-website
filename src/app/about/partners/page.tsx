import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import PartnerCard from "./partnerCard";
import { partners } from "@/app/data/aboutusPageData";

const PartnersPage: React.FC = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Our Partners
      </Heading>
      <Text fontSize="lg" mb={8}>
        We are privileged to partner, work, collaborate, and receive support of
        any kind from these partners/.... Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus eu fermentum dolor. Sed eget eros
        ut lectus efficitur viverra.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 6 }} spacing={8}>
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PartnersPage;
