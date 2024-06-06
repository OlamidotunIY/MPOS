import { NavLink } from "react-router-dom";

const NavRoutes = () => {
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
    <ul className="items-center justify-center gap-x-5 hidden md:flex">
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
