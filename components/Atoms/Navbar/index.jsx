import { useEffect, useState } from "react";
import Router from "next/router";
import { Box, Flex, Heading, Button, Text, chakra } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const data = [
  {
    id: 1,
    name: "About",
    link: "about",
  },
  {
    id: 2,
    name: "Project",
    link: "project",
  },
  {
    id: 3,
    name: "Tech stack",
    link: "tech-stack",
  },
  {
    id: 4,
    name: "Contact",
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
    width: 0,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    width: "100%",
    transition: {
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
};

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [navbar, setNavbar] = useState(false);

  const changeBgNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    window.addEventListener("scroll", changeBgNavbar);
  }, [open]);

  return (
    <Box as="nav" position="relative" maxW="1420px" zIndex={9}>
      <Box
        py="4"
        width="100%"
        position="fixed"
        left="50%"
        transform="translate(-50%)"
        zIndex={9}
        bgColor={navbar && !open ? "white" : "transparent"}
        shadow={navbar ? "md" : "none"}
      >
        <Flex
          position="relative"
          alignItems="center"
          justifyContent="space-between"
          width={{ base: "80%", lg: "65%" }}
          margin="auto"
        >
          <Box>
            <Heading
              fontFamily="'Inter', sans-serif"
              fontSize="22px"
              cursor="pointer"
              onClick={() => Router.push("/")}
            >
              R KHOIR
            </Heading>
          </Box>

          <Box position="relative" zIndex="99">
            <Button bgColor="white" onClick={cycleOpen}>
              {open ? <HiOutlineX size="28" /> : <HiMenu size="28" />}
            </Button>
          </Box>
        </Flex>
      </Box>

      <AnimatePresence>
        {open && (
          <Box
            as={motion.div}
            position="fixed"
            overflow="hidden"
            h="100%"
            w="100%"
            bg="black"
            zIndex="2"
            top="0"
            left="0"
            bgColor="black"
            variants={sideVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
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
              {data.map(({ name, id, link: url }) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                >
                  <Text
                    as={motion.p}
                    variant={itemVariants}
                    initial="hidden"
                    animate="visible"
                    fontSize="50px"
                    fontWeight="bold"
                    cursor="pointer"
                  >
                    <Link onClick={cycleOpen} to={url}>
                      {name}
                    </Link>
                  </Text>
                </motion.div>
              ))}
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;
