import { ComponentStyleConfig } from "@chakra-ui/react";

export const CardStyles: ComponentStyleConfig = {
  // style object for variants
  variants: {
    authCard: {
      width: "800px",
      height: "70vh",
    },
  },
  // default values for 'size'
  defaultProps: {
    size: "",
  },
};
