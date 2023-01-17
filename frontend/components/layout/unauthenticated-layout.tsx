import { useRouter } from "next/router";
import LandingPage from "../landing-page";
import MissionVision from "../mission-vision";
import Header from "../shared/header";

type LayoutProps = {
  children: React.ReactNode;
};

const UnauthenticatedLayout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();
  return (
    <>
      <Header />
      {pathname !== "/blog" && <LandingPage />}
      {pathname !== "/blog" && <MissionVision />}
      <main style={{ width: "80%", margin: "auto" }}>{children}</main>
    </>
  );
};

export default UnauthenticatedLayout;
