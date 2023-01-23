import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";
import BlogShowcase from "../components/blog-showcase";
import LandingPage from "../components/landing-page";
import UnauthenticatedLayout from "../components/layout/unauthenticated-layout";
import MakingMemories from "../components/making-memories";
import MeetTheBoard from "../components/meet-the-board";
import MissionVision from "../components/mission-vision";
import Partners from "../components/partners";
import Statistics from "../components/statistics";
import WhyYouShouldJoin from "../components/why-you-should-join";

const Home = () => {
  return (
    <>
      <LandingPage />

      <MissionVision />
      <Box mx="auto" w="80%">
        <Statistics />

        <WhyYouShouldJoin />

        <MakingMemories />

        <BlogShowcase />

        <MeetTheBoard />

        <Partners />
      </Box>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <UnauthenticatedLayout>{page}</UnauthenticatedLayout>;
};

export default Home;
