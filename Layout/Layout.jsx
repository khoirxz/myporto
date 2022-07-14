import React from "react";
import { Box } from "@chakra-ui/react";

import { Footer, Navbar, Sidebar } from "../components/Atoms";

const Layout = ({ children, ...rest }) => {
  return (
    <Box color="blackAlpha.800" bgColor="white" position="relative" {...rest}>
      <Navbar />

      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
