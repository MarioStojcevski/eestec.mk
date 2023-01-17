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
    whiteBig: {
      textColor: "white",
      textShadow: "1px 1px #282828",
      fontSize: "20px",
    },
    blackBig: {
      textColor: "black",
      textShadow: "1px 1px #282828",
      fontSize: "20px",
    },
  },
  // default values for 'size'
  defaultProps: {
    size: "",
  },
};
