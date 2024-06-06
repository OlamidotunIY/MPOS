import NavBar from "@/pages/landing_page/components/nav-bar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-full">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
