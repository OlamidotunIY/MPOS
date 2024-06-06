import { flags, map } from "@/assets";
import { Button } from "@/components/ui/button";

const GlobalSection = () => {
  return (
    <div className="py-10 flex items-center justify-center flex-col">
      <div className="flex flex-col max-w-[60%] text-center">
        <h1 className="text-2xl md:text-5xl font-bold ">Grow Your Business with MPOS and Go Global!</h1>
        <p className="mt-5 md:mt-10 text-xs md:text-sm">
          With MPOS, you create an automated sales system for your business and
          a beautiful experience for your customers. Our software helps you keep
          an up-to-date database, structured financial record and powerful
          analytics. Which leads to an all-round business growth.
        </p>
      </div>
      <div className="mt-14 relative">
        <img src={map} alt=""  />
        <img src={flags} alt="" className="absolute top-0" />
      </div>
      <div>
        <Button className="mt-10 px-16">More Features</Button>
      </div>
    </div>
  );
};

export default GlobalSection;
