import React from "react";
import { Link, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HiArrowSmRight } from "react-icons/hi";

const anchor = {
  visible: { opacity: 1 },
};

const anchorLink = {
  visible: { x: 5 },
};

const AnimateLink = ({ icon, children, ...rest }) => {
  return icon ? (
    <Link
      as={motion.span}
      color="blue.500"
      _hover={{
        textDecoration: "none",
      }}
      display="flex"
      alignItems="center"
      variants={anchor}
      whileHover="visible"
      {...rest}
    >
      <chakra.span>{children}</chakra.span>

      <chakra.span as={motion.span} ml={1} variants={anchorLink}>
        <HiArrowSmRight />
      </chakra.span>
    </Link>
  ) : (
    <Link
      as={motion.span}
      color="blue.500"
      _hover={{
        textDecoration: "none",
      }}
      display="flex"
      alignItems="center"
      {...rest}
    >
      <chakra.span>{children}</chakra.span>
    </Link>
  );
};

export default AnimateLink;
