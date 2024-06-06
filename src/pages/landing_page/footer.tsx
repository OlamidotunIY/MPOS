import { insta, tiktok, twitter, uTube } from "@/assets";
import Logo from "./components/logo";
import { Separator } from "@/components/ui/separator";

const FooterSection = () => {
  return (
    <div className="p-10 ">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <Logo />
          <p className="md:w-1/2 text-xs md:text-sm text-[#151515]/70 mt-5">
            Manage your online or offline business seamlessly from any device of
            your choice.
          </p>
          <div className="flex  gap-x-5 mt-10">
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={tiktok} alt="" />
            <img src={uTube} alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <h1 className="text-md font-bold">Company</h1>
            <ul className="mt-3 flex flex-col gap-2">
              <li className="text-sm text-[#151515]/70">
                Mobile point of sale
              </li>
              <li className="text-sm text-[#151515]/70">Online store</li>
              <li className="text-sm text-[#151515]/70">Pricing</li>
            </ul>
          </div>
          <div>
            <h1 className="text-md font-bold">Legal</h1>
            <ul className="mt-3 flex flex-col gap-2">
              <li className="text-sm text-[#151515]/70">
                Terms and conditions
              </li>
              <li className="text-sm text-[#151515]/70">Privacy policy</li>
            </ul>
          </div>
          <div>
            <h1 className="text-md font-bold">Support</h1>
            <ul className="mt-3 flex flex-col gap-2">
              <li className="text-sm text-[#151515]/70">Call</li>
              <li className="text-sm text-[#151515]/70">Help centre</li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="bg-black/50 mt-10"  />
      <div className="text-center py-5 text-xs md:text-sm">
        <p>© 2023, MPOS All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default FooterSection;
