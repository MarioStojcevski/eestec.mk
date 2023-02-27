import { Box } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
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
import Head from "next/head";
import { NextSeo } from "next-seo";

const Home = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <Head>
        <link rel="icon" href="/eestec.ico" />
      </Head>
      
      <NextSeo
        title="| Home"
        description="EESTEC MK Home"
        openGraph={{
          url: "https://eestec.mk/",
          type: "homepage/website",
          locale: "mk_MK",
          site_name: "EESTEC MK Home",
        }}
      />

      <LandingPage />
      <MissionVision />

      <Box mx="auto" width="80%">
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
