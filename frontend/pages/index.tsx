import LandingPage from "../components/landing-page";
import Statistics from "../components/statistics";
import MissionVision from "../components/mission-vision";
import MakingMemories from "../components/making-memories";

const Home = () => {
  return (
    <>
      <LandingPage />

      <MissionVision/>

      <Statistics />
      
      <MakingMemories />
    </>
  );
};

export default Home;
