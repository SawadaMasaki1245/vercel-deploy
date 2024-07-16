import { FC } from "react";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
