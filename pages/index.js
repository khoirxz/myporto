import Head from "next/head";
import {
  Box,
  Flex,
  Heading,
  Text,
  Img,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { Card, Hero } from "../components/Molecules";
import { CustomContainer, CustomBtn } from "../components/Molecules";

import Layout from "../Layout/Layout";

const stack = [
  {
    id: 1,
    name: "next",
    imgIrl: "/assets/svg/tech/next.svg",
  },
  {
    id: 2,
    name: "react",
    imgIrl: "/assets/svg/tech/react.svg",
  },
  {
    id: 3,
    name: "figma",
    imgIrl: "/assets/svg/tech/figma.svg",
  },
  {
    id: 4,
    name: "javascript",
    imgIrl: "/assets/svg/tech/javascript.svg",
  },
  {
    id: 5,
    name: "tailwind",
    imgIrl: "/assets/svg/tech/tailwind.svg",
  },
  {
    id: 6,
    name: "linux",
    imgIrl: "/assets/svg/tech/linux.svg",
  },
  {
    id: 7,
    name: "expressjs",
    imgIrl: "/assets/svg/tech/expressjs.svg",
  },
  {
    id: 8,
    name: "nodejs",
    imgIrl: "/assets/svg/tech/nodejs.svg",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Rizqi K - Portofolio</title>
      </Head>

      <Layout>
        <Hero />

        <CustomContainer>
          <Box
            minH="100vh"
            pt="12rem"
            maxW="500px"
            sx={{
              marginInlineStart: "auto",
              marginInlineEnd: "auto",
            }}
          >
            <Heading textAlign="center" fontSize="48px" mb="65px">
              About me
            </Heading>

            <Flex mb="38px">
              <Box mr="3">
                <Img src="/assets/svg/indicator.svg" boxSize="40px" />
              </Box>

              <Box>
                <Box fontSize="16px">
                  <Text mb={5}>
                    hello, I&apos;m Khoir a freelancer, Fullstack developer,
                    pixel art maker and I also have networking skills.
                  </Text>

                  <Text mb={5}>
                    I have a lot of experience on websites, and sometimes I make
                    pixel art in Aseprite. I designed using Figma then made a
                    website using ReactJs. I&apos;m quite used to using MonggoDB
                    as a database and I really like Framer Motion.
                  </Text>
                </Box>
                <Flex mt="5rem">
                  <CustomBtn primary={true}>DOWNLOAD CV</CustomBtn>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </CustomContainer>

        <CustomContainer>
          <Box
            minH="100vh"
            pt="10rem"
            maxW="600px"
            sx={{
              marginInlineStart: "auto",
              marginInlineEnd: "auto",
            }}
          >
            <Heading textAlign="center" fontSize="48px" mb="65px">
              Projects
            </Heading>

            <Flex flexDir="column">
              <Text textAlign="center" fontSize="16px">
                List project from github
              </Text>

              <Box my={9}>
                <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                  <GridItem marginX="auto">
                    <Card />
                  </GridItem>
                  <GridItem marginX="auto">
                    <Card />
                  </GridItem>
                  <GridItem marginX="auto">
                    <Card />
                  </GridItem>
                  <GridItem marginX="auto">
                    <Card />
                  </GridItem>
                </Grid>
              </Box>

              <Flex mt="4rem" justifyContent="center">
                <CustomBtn primary={true}>view more</CustomBtn>
              </Flex>
            </Flex>
          </Box>
        </CustomContainer>

        <CustomContainer>
          <Box
            minH="100vh"
            pt="10rem"
            maxW="700px"
            sx={{
              marginInlineStart: "auto",
              marginInlineEnd: "auto",
            }}
          >
            <Heading textAlign="center" fontSize="48px" mb="65px">
              Tech Stack
            </Heading>

            <Flex flexDir="column">
              <Box maxW="500px" marginX="auto" mb="4rem">
                <Text textAlign="center" fontSize="16px">
                  List of my favorite technologies that i use and iam pretty
                  confident using that.
                </Text>
              </Box>

              <Grid templateColumns="repeat(8, 1fr)" alignItems="center">
                {stack.map((item) => (
                  <GridItem key={item.id} p={3}>
                    <Img
                      src={item.imgIrl}
                      alt={item.name}
                      sx={{
                        maxW: "75px",
                        width: "100%",
                        display: "block",
                        height: "auto",
                        filter: "grayscale(100%)",
                        cursor: "pointer",
                      }}
                      _hover={{
                        filter: "grayscale(0%)",
                      }}
                    />
                  </GridItem>
                ))}
              </Grid>
            </Flex>
          </Box>
        </CustomContainer>
      </Layout>
    </>
  );
}
