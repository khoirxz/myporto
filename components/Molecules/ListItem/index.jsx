import React from "react";
import { Box, Heading, Text, Divider, Link } from "@chakra-ui/react";

const ListItem = ({ title, desc, link }) => {
  return (
    <Box mb="2.5rem">
      <Box mb={2}>
        <Heading fontSize="22px">{title}</Heading>
      </Box>
      <Box mb={5}>
        <Text color="blackAlpha.600">{desc}</Text>
      </Box>
      <Box mb={6}>
        <Link
          href={link}
          color="blue.500"
          _hover={{
            textDecoration: "none",
          }}
        >
          view project
        </Link>
      </Box>
      <Divider />
    </Box>
  );
};

export default ListItem;
