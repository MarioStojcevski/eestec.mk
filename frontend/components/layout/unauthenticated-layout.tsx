import { useRouter } from "next/router";
import { Box, chakra } from "@chakra-ui/react";
import LandingPage from "../landing-page";
import MissionVision from "../mission-vision";
import Footer from "../shared/footer";
import Header from "../shared/header";

type LayoutProps = {
  children: React.ReactNode;
};

const UnauthenticatedLayout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();

  return (
    <Box bg="#fafafa">
      <Header />
      <chakra.main w="80%" m="auto">
        {children}
      </chakra.main>
      <Footer />
    </Box>
  );
};

export default UnauthenticatedLayout;
