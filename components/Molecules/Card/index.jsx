import React from "react";
import Link from "next/link";
import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const linkProject = {
  visible: {
    opacity: 1,
  },

  hidden: {
    opacity: 0,
  },

  onHover: {
    x: 10,
  },
};

const Card = ({ title, desc, link }) => {
  return (
    <Box
      maxH="220px"
      minH="220px"
      w="280px"
      h="100%"
      sx={{
        border: "1px solid #D9D9D9",
        backgroundColor: "#F0F0F0",
        borderRadius: "5px",
      }}
    >
      <Flex
        flexDir="column"
        p={3}
        justifyContent="space-between"
        w="100%"
        h="100%"
      >
        <Box>
          <Box display="flex" justifyContent="flex-end">
            <BsGithub size="26px" />
          </Box>
          <Box>
            <Heading fontSize="22px" pb="5px">
              {title}
            </Heading>
            <Text fontSize="16px">{desc}</Text>
          </Box>
        </Box>
        <Box>
          <Link href={link}>
            <Box
              as={motion.div}
              display="flex"
              alignItems="center"
              cursor="pointer"
              variants={linkProject}
              animate="visible"
              initial="hidden"
              whileHover="onHover"
            >
              <Text fontSize="16px" mr={2}>
                more
              </Text>

              <Img src="/assets/svg/link.svg" transform="translateY(3px)" />
            </Box>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Card;
