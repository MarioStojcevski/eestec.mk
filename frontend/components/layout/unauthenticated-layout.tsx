import Header from "../shared/header";

const UnauthenticatedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default UnauthenticatedLayout;
