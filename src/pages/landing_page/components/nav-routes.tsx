import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface props {
isMobile? : Boolean
}

const NavRoutes = ({
  isMobile
} : props) => {
  const routes = [
    {
      path: "/",
      name: "Mobile Point of Sale",
    },
    {
      path: "/",
      name: "Create Store",
    },
    {
      path: "/",
      name: "Pricing",
    },
    {
      path: "/",
      name: "Support",
    },
  ];
  return (
    <ul className={cn("md:items-center justify-center gap-5 hidden md:flex ",
      isMobile && 'flex flex-col'
    )}>
      {routes.map((route, index) => {
        return (
          <li key={index}>
            <NavLink to={route.path} className={"text-[18px] font-semibold"}>{route.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavRoutes;
