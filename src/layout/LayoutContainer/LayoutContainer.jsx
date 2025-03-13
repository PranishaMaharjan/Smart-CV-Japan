import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./LayoutContainer.scss";
import { Outlet } from "react-router-dom";

const LayoutContainer = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="content-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutContainer;
