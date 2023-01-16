import { ComponentStyleConfig } from "@chakra-ui/react";

export const TextStyles: ComponentStyleConfig = {
  // style object for variants
  variants: {
    white: {
      textColor: "white",
    },
    black: {
      textColor: "black",
    },
  },
  // default values for 'size'
  defaultProps: {
    size: "",
  },
};
