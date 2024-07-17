import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { Partner } from "@/types/user";

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" boxSize="300px">
      <Image
        src={partner.logoUrl}
        alt={partner.name + " Logo"}
        boxSize="150px"
        borderRadius="full"
        mb={4}
        mx="auto"
      />
      <Heading as="h2" size="md" mb={2}>
        {partner.name}
      </Heading>

      <Text fontSize="sm">{partner.description}</Text>
    </Box>
  );
};

export default PartnerCard;
