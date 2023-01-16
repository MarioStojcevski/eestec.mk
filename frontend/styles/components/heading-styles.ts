import { ComponentStyleConfig } from "@chakra-ui/react";

export const HeadingStyles: ComponentStyleConfig = {
  // style object for variants
  variants: {
    title: {
      textColor: "white",
      fontSize: "50px",
      textShadow: "3px 3px 0px #B20D13",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    h1: {
      textColor: "primary",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "50px",
    },
    h2: {
      fontSize: "40px",
    },
    h3: {
      fontSize: "30px",
    },
    h4: {
      textColor: "primary",
      fontSize: "20px",
    },
  },
  // default values for 'size'
  defaultProps: {
    size: "",
  },
};
