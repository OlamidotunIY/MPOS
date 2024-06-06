import { Button } from "@/components/ui/button";
import Logo from "./logo";
import NavRoutes from "./nav-routes";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const isLoginPage = useLocation().pathname === "/login" || useLocation().pathname.includes("/signup");
  return (
    <div className="w-full py-2">
      <div className="px-5 flex justify-between items-center">
        <Logo />
        {!isLoginPage && (
          <>
            <NavRoutes />
            <Link to={"/login"}>
              <Button variant={"outline"} size={"lg"} className="hidden md:flex px-16">
                Login
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
