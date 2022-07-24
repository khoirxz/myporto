import { Box, Flex, Heading, Img, Link } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import NextLink from "next/link";

import CustomContainer from "../CustomContainer";

const Hero = () => {
  return (
    <CustomContainer>
      <Box
        position="relative"
        minH="80vh"
        display="flex"
        flexDir="row"
        alignItems="center"
      >
        <Flex justifyContent="space-between" alignContent="center" w="full">
          <Box>
            <Box>
              <Heading
                fontSize="7xl"
                fontWeight="semibold"
                fontFamily="'Inter', sans-serif"
              >
                FULL STACK
              </Heading>
              <Heading
                fontSize="7xl"
                fontWeight="semibold"
                fontFamily="'Inter', sans-serif"
              >
                DEVELOPER
              </Heading>
            </Box>
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
          <Box display="flex">
            <Img
              display="block"
              marginX="auto"
              src="/assets/svg/illustration-hero.svg"
              alt="Hero Images"
            />
          </Box>
        </Flex>
      </Box>
    </CustomContainer>
  );
};

export default Hero;
