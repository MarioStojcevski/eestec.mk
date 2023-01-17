import LandingPage from "../components/landing-page";
import Statistics from "../components/statistics";
import MissionVision from "../components/mission-vision";
import MakingMemories from "../components/making-memories";
import BlogShowcase from "../components/blog-showcase";

const Home = () => {
  return (
    <>
      <LandingPage />

      <MissionVision/>

      <Statistics />
      
      <MakingMemories />

      <BlogShowcase />
    </>
  );
};

export default Home;
