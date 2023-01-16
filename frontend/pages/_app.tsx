import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { светописмо } from "../styles/светописмо";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={светописмо}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
