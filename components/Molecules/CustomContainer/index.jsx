import React from "react";
import { Box } from "@chakra-ui/react";

const CustomContainer = ({ children, ...rest }) => {
  return (
    <Box maxW="1440px" width="76%" margin="auto" {...rest}>
      {children}
    </Box>
  );
};

export default CustomContainer;
