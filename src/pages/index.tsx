import { useSession } from "next-auth/react";
import BlogShowcase from "../components/blog-showcase";
import MakingMemories from "../components/making-memories";
import MeetTheBoard from "../components/meet-the-board";
import Partners from "../components/partners";
import Statistics from "../components/statistics";
import WhyYouShouldJoin from "../components/why-you-should-join";

const Home = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <Statistics />

      <WhyYouShouldJoin />

      <MakingMemories />

      <BlogShowcase />

      <MeetTheBoard />

      <Partners />
    </>
  );
};

export default Home;
