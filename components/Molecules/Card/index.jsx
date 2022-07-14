import React from "react";
import Link from "next/link";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

const Card = () => {
  return (
    <Box
      minH="220px"
      w="100%"
      h="100%"
      sx={{
        border: "1px solid #D9D9D9",
        backgroundColor: "#F0F0F0",
        borderRadius: "5px",
      }}
    >
      <Flex flexDir="column" p={3} justifyContent="space-between" h="100%">
        <Box>
          <Box display="flex" justifyContent="flex-end">
            <BsGithub size="26px" />
          </Box>
          <Box>
            <Heading fontSize="22px" pb="5px">
              Quran mobile
            </Heading>
            <Text fontSize="16px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              quibusdam.
            </Text>
          </Box>
        </Box>
        <Box>
          <Link href="#">
            <Box display="flex" alignItems="center">
              <Text fontSize="16px" mr={2}>
                more
              </Text>

              <Image src="/assets/svg/link.svg" transform="translateY(3px)" />
            </Box>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Card;
