import { MPOSDashboard } from "@/assets";
import { Button } from "@/components/ui/button";

const MainLookup = () => {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-5xl font-bold ">
        Online & Offline Point of Sale System for all Businesses.
      </h1>
      <p className="text-xs md:text-sm text-center mt-7">
        Manage your online or offline business seamlessly from any device of
        your choice.
      </p>
      <div className="flex flex-col items-center justify-center mt-10 gap-y-5">
        <Button size={"lg"} className="w-[250px]">
          Try it Free
        </Button>
        <Button variant={"outline"} size={"lg"} className="w-[250px]">
          Download the App
        </Button>
      </div>
      <div className="flex items-center justify-center mt-14">
        <img src={MPOSDashboard} alt="hero" className=""  />
      </div>
    </div>
  );
};

export default MainLookup;
