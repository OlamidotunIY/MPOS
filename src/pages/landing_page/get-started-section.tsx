import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const GetStartedSection = () => {
  return (
    <div className="md:p-20 px-5 py-20">
      <div className="bg-primary flex flex-col items-center justify-center p-10 md:p-16 text-white">
        <h1 className="md:text-4xl text-3xl font-bold text-center w-full">
          Let’s get you started with MPOS
        </h1>
        <p className="md:w-1/2 text-center mt-5 md:text-sm text-xs text-white/60">
          Create your free account in minutes and start selling with Mobile
          Point of Sale (MPOS)
        </p>
        <div className="flex gap-5 mt-10 flex-col md:flex-row items-start md:items-center justify-center">
          <div className="flex gap-x-5 items-center justify-center">
            <CheckCircle size={20} fill="white" className="text-black" />
            <p>Free 30-day trial </p>
          </div>
          <div className="flex gap-x-5 items-center justify-center">
            <CheckCircle size={20} fill="white" className="text-black" />
            <p>No credit card required </p>
          </div>
        </div>
        <Button
          size={"lg"}
          className="px-16 mt-10 bg-white text-black"
          variant={"secondary"}
        >
          Try for free
        </Button>
      </div>
    </div>
  );
};

export default GetStartedSection;
