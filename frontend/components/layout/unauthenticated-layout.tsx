import Header from "../shared/header";

type LayoutProps = {
  children: React.ReactNode;
}

const UnauthenticatedLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      
      <main >{children}</main>
    </>
  );
};

export default UnauthenticatedLayout;
