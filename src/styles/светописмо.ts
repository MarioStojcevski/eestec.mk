import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles } from "./components/button-styles";
import { CardStyles } from "./components/card-styles";
import { HeadingStyles } from "./components/heading-styles";
import { TextStyles } from "./components/text-styles";

const colors = {
  primary: "#E52A30",
  secondary: "#B20D13",
  white: "#FFFFFF",
  black: "#000000",
};

export const светописмо = extendTheme({
  colors,
  body: {
    margin: 0,
  },
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  components: {
    Button: { ...ButtonStyles },
    Heading: { ...HeadingStyles },
    Text: { ...TextStyles },
    Card: { ...CardStyles}
  },
});
