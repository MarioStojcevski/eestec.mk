import Footer from "../shared/footer";
import Header from "../shared/header";

type LayoutProps = {
  children: React.ReactNode;
};

const UnauthenticatedLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default UnauthenticatedLayout;
