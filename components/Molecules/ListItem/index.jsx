import React from "react";
import { Box, Heading, Text, Divider, Link, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";

const anchor = {
  visible: { opacity: 1 },
};

const anchorLink = {
  visible: { x: 5 },
};

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
        <Box display="flex">
          <Link
            as={motion.a}
            color="blue.500"
            _hover={{
              textDecoration: "none",
            }}
            href={link}
            display="flex"
            alignItems="center"
            variants={anchor}
            whileHover="visible"
          >
            <chakra.span>view project</chakra.span>

            <chakra.span as={motion.span} ml={1} variants={anchorLink}>
              <BiLinkExternal />
            </chakra.span>
          </Link>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default ListItem;
