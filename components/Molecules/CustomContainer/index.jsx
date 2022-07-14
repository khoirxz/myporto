import React from "react";
import { Box } from "@chakra-ui/react";

const CustomContainer = ({ children }) => {
  return (
    <Box maxW="1440px" width="76%" margin="auto">
      {children}
    </Box>
  );
};

export default CustomContainer;
