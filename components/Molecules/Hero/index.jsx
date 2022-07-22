import React from "react";
import { Box, chakra, Heading, Img } from "@chakra-ui/react";
import { motion } from "framer-motion";

import CustomContainer from "../CustomContainer";

const containerBox = {
  open: { opacity: 1 },
  close: { opacity: 0 },
};

const arrowDown = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
      staggerChildren: 1.5,
    },
  },
  hidden: {
    opacity: 0,
    x: -50,
  },
  down: {
    y: [4, -4, 4],
    transition: {
      delay: 1,
      repeat: Infinity,
      times: [0, 0.8],
    },
  },
};

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const title = "WEB DEVELOPER";

const Hero = () => {
  return (
    <CustomContainer>
      <Box
        className="Hero-Header"
        minH="80vh"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignContent="center"
        position="relative"
        top="70px"
      >
        <Box
          position="absolute"
          sx={{
            bottom: "0",
            left: "0",
          }}
        >
          <Box
            as={motion.div}
            display="flex"
            flexDir="column"
            alignItems="center"
            cursor="pointer"
            variants={arrowDown}
            initial="hidden"
            animate={["visible", "down"]}
          >
            <chakra.span
              fontSize="12px"
              whiteSpace="nowrap"
              pb={2}
              sx={{
                writingMode: "vertical-rl",
              }}
            >
              learn more
            </chakra.span>
            <Img verticalAlign="baseline" src="/assets/svg/arrow.svg" />
          </Box>
        </Box>

        <Box maxW="500px" w="full" margin="auto" h="300px" position="relative">
          <Box position="absolute" w="full" h="full" zIndex="1">
            <motion.img
              style={{
                position: "absolute",
                height: "300px",
                width: "300px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              src="/assets/svg/rectangle.svg"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                transition: { times: [0, 1, 2, 1, 0], repeat: Infinity },
              }}
              exit={{ opacity: 0 }}
            />
          </Box>
          <Box
            as={motion.div}
            initial="hidden"
            animate="open"
            variants={containerBox}
            position="absolute"
            w="full"
            h="full"
            zIndex="1"
          >
            <motion.img
              style={{
                position: "absolute",
                width: "35px",
                height: "35px",
              }}
              src="/assets/svg/box.svg"
              initial={{
                top: "50%",
                left: "50%",
                opacity: 0,
              }}
              animate={{
                top: ["50%", "0%", "0%"],
                left: ["50%", "50%", "0%"],
                opacity: 1,
              }}
              exit={{
                top: "0",
                left: "0",
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                times: [0, 0.3, 0.6],
              }}
            />
            <motion.img
              style={{
                position: "absolute",
                width: "35px",
                height: "35px",
              }}
              src="/assets/svg/box.svg"
              initial={{
                bottom: "50%",
                right: "50%",
                opacity: 0,
              }}
              animate={{
                bottom: ["50%", "0%", "0%"],
                right: ["50%", "50%", "0%"],
                opacity: 1,
              }}
              exit={{
                bottom: "0",
                right: "0",
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                times: [0, 0.3, 0.6],
              }}
            />
          </Box>
          <Box
            as={motion.div}
            display="flex"
            w="full"
            h="full"
            position="relative"
            zIndex="2"
            flexDir="column"
            justifyContent="center"
            textAlign="center"
          >
            <Heading
              as={motion.h2}
              fontSize="22px"
              color="blackAlpha.500"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0, 1],
              }}
              exit={{
                opacity: 0,
              }}
            >
              RIZQI{" "}
              <motion.span
                style={{
                  color: "#999999",
                  cursor: "pointer",
                }}
                whileHover={{
                  color: "#333333",
                }}
              >
                KHOIR
              </motion.span>
              URROHMAN
            </Heading>

            <motion.h1
              variants={sentence}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: "52px",
                fontWeight: "bold",
              }}
            >
              {title.split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </Box>
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default Hero;
