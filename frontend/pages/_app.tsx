import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { светописмо } from "../styles/светописмо";
import UnauthenticatedLayout from "../components/layout/unauthenticated-layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={светописмо}>
      <UnauthenticatedLayout>
        <Component {...pageProps} />
      </UnauthenticatedLayout>
    </ChakraProvider>
  );
}
