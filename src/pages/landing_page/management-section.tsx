import {
  breifCase,
  clock,
  cube2,
  cube4,
  profileOutline,
  store,
  storeLine,
} from "@/assets";
import { Separator } from "@/components/ui/separator";

const ManagementSection = () => {
  const features = [
    {
      title: "Manage multiple online and offline stores, anywhere, anytime",
      icon: storeLine,
    },
    {
      title: "Generate and print bar-codes and receipts.",
      icon: cube2,
    },
    {
      title: "Create accounts for your employees & give them access.",
      icon: profileOutline,
    },
    {
      title: "Keep an up-to-date inventory of your products.",
      icon: clock,
    },
    {
      title: "Maintain a list of your orders and suppliers.",
      icon: cube4,
    },
    {
      title: "Control your business finances and accept payments.",
      icon: breifCase,
    },
  ];
  return (
    <div className="p-10 md:px-16 flex justify-center items-center flex-col md:flex-row gap-y-10">
      <div className="md:w-[50%]">
        <div className="bg-background-red w-[350px] h-[350px] p-10 rounded-md">
          <div className="flex justify-center items-start">
            <img src={store} alt="" width={250} className="rounded" />
          </div>
          <h1 className="text-sm font-bold text-center mt-3">Access Advanced Management And Financial Tools</h1>
          <h1 className="text-xs text-center mt-2">
            With MPOS you can be assured to make smarter and more profitable
            business decisions.
          </h1>
        </div>
      </div>
      <div className="md:w-[50%]">
        <h1 className="text-3xl font-bold">
          Stay ahead of the game with our advanced management & financial tools.
        </h1>
        <div className="mt-10">
          <p className="text-sm text-primary font-bold">Features</p>
          <div>
            {features.map((feature, index) => (
              <div key={index} className="text-xs flex flex-col gap-y-2 mt-3">
                <img src={feature.icon} alt="icon" width={16} />
                <p>{feature.title}</p>
                <Separator className="bg-black" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementSection;
