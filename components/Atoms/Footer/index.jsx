import React from "react";
import { Box, chakra, Flex, Heading, Link, Img, Text } from "@chakra-ui/react";
import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Box
      minH="5vh"
      sx={{
        borderTop: "1px solid #BDBDBD",
        backgroundColor: "#EAEAEA",
      }}
    >
      <Box textAlign="center" my="5rem">
        <Box>
          <Img
            src="/assets/png/toad-export.png"
            alt="profile"
            boxSize="80px"
            sx={{
              display: "block",
              marginInlineStart: "auto",
              marginInlineEnd: "auto",
            }}
          />
        </Box>
        <Box>
          <Heading fontSize={{ base: "32px", md: "64px" }} fontWeight="bold">
            have any question?
          </Heading>
          <Box mt={{ base: "30px", md: "45px" }}>
            <Text fontSize={{ base: "20px", md: "42px" }}>
              <chakra.span color="blackAlpha.500" fontWeight="normal">
                feel free to ask
              </chakra.span>{" "}
              <chakra.span cursor="pointer" fontWeight="bold">
                <Link href="mailto:khoirrurrohman@gmail.com">
                  khoirrurrohman@gmail.com
                </Link>
              </chakra.span>
            </Text>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" mt="5">
          <Box mx={4}>
            <Link href="https://fb.com/rootbackdor">
              <RiFacebookFill size="36" />
            </Link>
          </Box>
          <Box mx={4}>
            <Link href="https://www.instagram.com/rizqi.khoir/">
              <RiInstagramFill size="36" />
            </Link>
          </Box>
        </Box>
      </Box>
      <Flex
        width="80%"
        margin="auto"
        justifyContent="space-between"
        py={5}
        fontSize="14px"
      >
        <Box>Copyright 2022 Rizqi K</Box>
        <Box>
          Made with <chakra.span fontWeight="bold">NextJs</chakra.span> and{" "}
          <chakra.span fontWeight="bold">ChakraUI</chakra.span>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
