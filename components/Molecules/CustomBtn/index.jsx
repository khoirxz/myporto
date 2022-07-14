import React from "react";
import { Button } from "@chakra-ui/react";

const CustomBtn = ({ primary, children, ...rest }) => {
  return (
    <Button
      borderColor="#000"
      borderWidth="1px"
      borderStyle="solid"
      sx={{
        color: primary == true ? "white" : "#242424",
        bgColor: primary == true ? "#242424" : "#fff",
        borderRadius: "3px",
        fontWeight: "md",
      }}
      _hover={{
        bgColor: "#fff",
        color: "#000",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomBtn;
