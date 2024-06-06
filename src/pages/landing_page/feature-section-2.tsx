import { featureImage2 } from "@/assets";
import { Button } from "@/components/ui/button";

const FeatureSectionTwo = () => {
  return (
    <div className="p-10 md:px-16 flex flex-col ">
      <div className="flex flex-col items-start w-full md:max-w-[50%]">
        <h1 className="text-3xl md:text-5xl font-bold">
          One Platform for all Your Business Needs.
        </h1>
        <p className="text-sm mt-10">
          Get all the resources you need to grow your business MPOS is
          efficient, effective and the best tool to grow your businesses.
        </p>
      </div>
      <div className="md:mt-20 mt-16">
        <img src={featureImage2} alt="" />
      </div>
      <Button className="px-10 mt-16 self-center" size={"lg"}>
        Try it for free
      </Button>
    </div>
  );
};

export default FeatureSectionTwo;
