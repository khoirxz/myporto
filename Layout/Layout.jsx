import React from "react";
import { Box } from "@chakra-ui/react";

import { Footer, Navbar } from "../components/Atoms";
import { Hero } from "../components/Molecules";

const Layout = ({ children, hero, contact, ...rest }) => {
  return (
    <Box
      color="blackAlpha.800"
      bgColor="white"
      fontFamily="'Inter', sans-serif"
      position="relative"
      zIndex="1"
      {...rest}
    >
      <Box as="header">
        <Navbar />
        {hero ? <Hero /> : null}
      </Box>

      <Box as="main">{children}</Box>
      <Box borderTop="1px solid #E3E3E3">
        <Footer contact={contact} />
      </Box>
    </Box>
  );
};

export default Layout;
