import Header from "../components/shared/header";
import LandingPage from "../components/landing-page";
import Statistics from "../components/statistics";
import MissionVision from "../components/mission-vision";
import MeetTheBoard from "../components/meet-the-board";

const Home = () => {
  return (
    <>
      <Header />

      <LandingPage />

      <MissionVision/>

      <Statistics />

      <MeetTheBoard />
      
    </>
  );
};

export default Home;
