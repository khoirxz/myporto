import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Box, Button, Text } from "@chakra-ui/react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";

const data = [
  {
    id: 1,
    name: "about",
    link: "about",
  },
  {
    id: 2,
    name: "project",
    link: "project",
  },
  {
    id: 3,
    name: "tech stack",
    link: "tech-stack",
  },
  {
    id: 4,
    name: "contact",
    link: "contact",
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1 },
};

const sideVariants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, cycleOpen] = useCycle(false, true);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);

  return (
    <>
      <Box
        as="nav"
        sx={{
          position: "fixed",
          width: "full",
          zIndex: "4",

          backdropFilter: navbar ? "saturate(180%) blur(10px)" : "none",
        }}
      >
        <Box
          display="flex"
          maxW="1440px"
          my={5}
          marginInlineStart="auto"
          marginInlineEnd="auto"
        >
          <Box
            display={{ base: "none", md: "flex" }}
            width="76%"
            margin="auto"
            flexDir="row"
            justifyContent="center"
            alignContent="center"
          >
            {data.map((item) => (
              <Text
                key={item.id}
                mx={5}
                sx={{
                  textTransform: "UPPERCASE",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                <Link to={item.link} smooth={true}>
                  {item.name}
                </Link>
              </Text>
            ))}
          </Box>

          <Box
            display={{ base: "flex", md: "none" }}
            width="90%"
            margin="auto"
            justifyContent="flex-end"
            position="relative"
          >
            <Button
              sx={{
                backgroundColor: "transparent",
              }}
              _hover={{
                backgroundColor: "#transparent",
                boxShadow: "xl",
              }}
              position="relative"
              zIndex="98"
              onClick={cycleOpen}
            >
              {open ? (
                <RiCloseLine color="#fff" size="22px" />
              ) : (
                <RiMenu4Fill size="22px" />
              )}
            </Button>

            <AnimatePresence>
              {open && (
                <Box
                  as={motion.aside}
                  position="fixed"
                  overflow="hidden"
                  h="100vh"
                  bg="black"
                  zIndex="-1"
                  top="0"
                  left="0"
                  initial={{ width: "0" }}
                  animate={{ width: "100%" }}
                  exit={{
                    width: "0",
                    transition: { delay: 0.3, duration: 0.3 },
                  }}
                >
                  <Box
                    as={motion.div}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={sideVariants}
                    sx={{
                      display: "flex",
                      flexDir: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100vh",
                      color: "white",
                    }}
                  >
                    {data.map(({ name, id, link }) => (
                      <motion.a
                        key={id}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.1 }}
                      >
                        <Text
                          as={motion.text}
                          variant={itemVariants}
                          initial="hidden"
                          animate="visible"
                          fontSize="50px"
                          fontWeight="bold"
                          cursor="pointer"
                        >
                          <Link onClick={cycleOpen} to={link}>
                            {name}
                          </Link>
                        </Text>
                      </motion.a>
                    ))}
                  </Box>
                </Box>
              )}
            </AnimatePresence>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
