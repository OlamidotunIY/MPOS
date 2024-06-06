import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import NavRoutes from "./nav-routes";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="rounded-md">
          <Menu size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col h-full ">
          <div className="pt-10">
            <NavRoutes isMobile={true} />
          </div>
          <SheetFooter className="mt-auto mx-auto">
            <SheetClose asChild>
              <Link to={"/login"}>
                <Button variant={"default"} size={"lg"} className="px-24">
                  Login
                </Button>
              </Link>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
