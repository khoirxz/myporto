import React from "react";
import { Box } from "@chakra-ui/react";

const CustomContainer = ({ children, ...rest }) => {
  return (
    <Box
      maxW="1420px"
      margin="auto"
      width={{ base: "80%", md: "65%" }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default CustomContainer;
