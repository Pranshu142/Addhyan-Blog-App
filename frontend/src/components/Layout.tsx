import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  const navElements = [
    "login",
    "signup",
    "write post",
    "profile photo",
    "feed",
  ];

  return (
    <div className="min-h-screen">
      <NavBar navElements={navElements} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
