import { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    padding: "10px",
    paddingLeft: "30px",
    paddingRight: "30px",
    borderRadius: "10px",
    backgroundColor: "primary",
    textColor: "white",
    textTransform: "uppercase",
    border: "1px solid #B20D13",
    boxShadow: "inset -3px -3px #B20D13, inset 3px 3px white",
    margin: "5px",
    _hover: {
      boxShadow: "inset 3px 3px #B20D13",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
