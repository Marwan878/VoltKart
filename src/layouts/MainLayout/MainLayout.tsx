import { Footer, Header } from "@components/common";
import { ToastList } from "@components/feedback";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastList />
    </>
  );
};

export default MainLayout;
