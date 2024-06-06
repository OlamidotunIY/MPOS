import { featureImage } from "@/assets";
import { Button } from "@/components/ui/button";

const FeatureSection = () => {
  return (
    <div className="p-10 md:px-16 flex justify-center items-center flex-col md:flex-row gap-y-10">
      <div className="md:max-w-[50%]">
        <h1 className="md:text-4xl text-2xl font-bold">A Complete Multiple Payment Options</h1>
        <p className="text-sm mt-10">Regardless of how your customer chooses to pay, your business can accept it. We offer a wide range of payment options including cash, card, mobile money, bank transfer and more. And generate a receipt immediately</p>
        <Button className="px-10 md:mt-24 mt-16" size={"lg"}>Try it for free</Button>
      </div>
      <div >
        <img src={featureImage} alt="" />
      </div>
    </div>
  );
};

export default FeatureSection;
