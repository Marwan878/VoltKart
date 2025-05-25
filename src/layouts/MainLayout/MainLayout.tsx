import { Footer, Header } from "@components/common";
import { ToastList } from "@components/feedback";
import { Outlet } from "react-router-dom";

import styles from "./styles.module.css";

const { wrapper } = styles;

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
      <ToastList />
    </>
  );
};

export default MainLayout;
