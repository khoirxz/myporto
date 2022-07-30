import React from "react";
import NextLink from "next/link";
import { Box, Flex, Heading, Link, chakra } from "@chakra-ui/react";
import { FaHeart, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box maxW="1420px" margin="auto" width="65%" as="footer" id="contact">
        <Box mt={8} mb="7rem">
          <Heading fontSize="36px">Get in touch</Heading>
          <Box>
            <Link
              fontSize={{ base: "20px", md: "36px" }}
              fontWeight="semibold"
              color="blue.500"
              _hover={{
                textDecoration: "none",
              }}
              href="mailto:khoirrurrohman@gmail.com"
            >
              khoirrurrohman@gmail.com
            </Link>
          </Box>
        </Box>
      </Box>
      <Box as="footer" maxW="1420px" margin="auto" width="65%" my={5}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <chakra.span mr={2}>Made with</chakra.span>
            <FaHeart color="#EA4335" /> <chakra.span ml={2}>Rizqi</chakra.span>
          </Box>
          <Box>
            <Flex mt={3}>
              <NextLink href="https://facebook.com/rootbackdor" passHref>
                <Link mx={2}>
                  <FaFacebook size="26" />
                </Link>
              </NextLink>
              <NextLink href="https://github.com/khoirxz" passHref>
                <Link mx={2}>
                  <FaGithub size="26" />
                </Link>
              </NextLink>
              <NextLink href="https://facebook.com/rizqi.khoir" passHref>
                <Link mx={2}>
                  <FaInstagram size="26" />
                </Link>
              </NextLink>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
