import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
import {
  Heading,
  Box,
  Text,
  Img,
  Flex,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useParallax } from "react-scroll-parallax";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Layout from "../Layout/Layout";
import {
  AnimateLink,
  CustomContainer,
  ListItem,
} from "../components/Molecules";

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

const Home = ({ pinnedItems }) => {
  const parallax = useParallax({
    rotate: [0, 360],
  });
  return (
    <>
      <Head>
        <title>Rizqi K - Portofolio</title>
        <meta name="title" content="Rizqi Khoirurrohman - Portofolio" />
        <meta name="description" content="Fullstack Developer, Linux " />
      </Head>
      <Layout hero={true} contact={true}>
        <CustomContainer id="about">
          <Box minH="100vh" display="flex" alignItems="center" width="100%">
            <Box
              py="5"
              display="flex"
              justifyContent="space-between"
              width="100%"
            >
              <Box w="550px">
                <Heading mb={5}>About</Heading>
                <Box pr={{ base: "0", md: "2rem" }}>
                  <Text color="blackAlpha.600" mb={3}>
                    Hello, I&apos;m Khoir a freelancer, fullstack developer,
                    pixel art maker and I also have networking skills.
                  </Text>
                  <Text color="blackAlpha.600">
                    I have a lot of experience on websites, and sometimes I make
                    pixel art in Aseprite. I designed using Figma then made a
                    website using ReactJs. I&apos;m quite used to using MonggoDB
                    as a database and I really like Framer Motion.
                  </Text>
                </Box>

                <Box pt="2rem">
                  <Box display="flex">
                    <AnimateLink
                      icon={true}
                      onClick={() => Router.push("/resume.pdf")}
                    >
                      Download CV
                    </AnimateLink>
                  </Box>
                </Box>
              </Box>
              <Box display={{ base: "none", md: "flex" }}>
                <div ref={parallax.ref}>
                  <Img
                    maxW={{ md: "200px", xl: "500px" }}
                    src="/assets/svg/illustation-about.svg"
                    alt="About me"
                  />
                </div>
              </Box>
            </Box>
          </Box>
        </CustomContainer>
        <CustomContainer id="project">
          <Box minH="100vh">
            <Box>
              <Heading mb="15px">Projects</Heading>
              <Text color="blackAlpha.600">List project from github</Text>
            </Box>

            <Box my="4rem">
              <Flex flexDir="column">
                {pinnedItems.map((item) => (
                  <Box key={item.id}>
                    <ListItem
                      title={item.name}
                      desc={item.description}
                      link={item.url}
                    />
                  </Box>
                ))}
              </Flex>
            </Box>

            <Box display="flex" justifyContent="center">
              <Button
                sx={{
                  borderWidth: "3px",
                  borderColor: "#3C4043",
                  borderStyle: "solid",
                  bgColor: "white",
                }}
                _hover={{
                  bgColor: "#3C4043",
                  color: "white",
                }}
              >
                <NextLink href="https://github.com/khoirxz?tab=repositories">
                  view more
                </NextLink>
              </Button>
            </Box>
          </Box>
        </CustomContainer>
        <CustomContainer id="tech-stack">
          <Box
            minH="90vh"
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box textAlign="center">
              <Heading mb="15px">Tech Stack</Heading>
              <Text color="blackAlpha.600">
                List of my favorite technologies that i use and iam pretty
                confident using that.
              </Text>
            </Box>

            <Box maxW="70%" marginX="auto">
              <Grid
                mt="3rem"
                templateColumns={{
                  base: "repeat(4, 1fr)",
                  md: "repeat(8, 1fr)",
                }}
                alignItems="center"
              >
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
                        cursor: "pointer",
                      }}
                    />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </Box>
        </CustomContainer>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "khoirxz") {
          pinnedItems(first: 4) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  url
                  description
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node);

  return {
    props: {
      pinnedItems,
    },
  };
}

export default Home;
