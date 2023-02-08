import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import UnauthenticatedLayout from "../components/layout/unauthenticated-layout";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { светописмо } from "../styles/светописмо";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <ChakraProvider resetCSS theme={светописмо}>
      <UnauthenticatedLayout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </UnauthenticatedLayout>
    </ChakraProvider>
  );
}
