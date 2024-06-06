import { question } from "@/assets";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const ContactUsSection = () => {
  return (
    <div className="w-full bg-primary flex p-10 md:px-16 items-center justify-center relative overflow-hidden flex-col md:flex-row">
      <div className="md:w-1/2 text-white">
        <h1 className="text-2xl md:text-4xl font-bold">Have a question?</h1>
        <h1 className="text-2xl md:text-4xl font-bold mt-4">Our team of experts is happy to assist you.</h1>
        <p className="text-xs md:text-sm mt-10 text-white/60">
          Our team is available 24/7 to help you with any issues you may have.
          Check out our detailed FAQs and help articles that can help you fix
          minor issues all by yourself.
        </p>
        <Separator className="bg-white/60 mt-10" />
        <div className="mt-10 flex items-center gap-x-5">
            <Button variant={"outline"} className="px-10 text-black hover:text-black">Contact Us</Button>
            <Link to={""} className="underline">Or call +234 902 423 2473</Link>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center z-20">
        <img src={question} alt="question" width={400} className="" />
      </div>
      <div className="absolute w-[400px] h-[400px] bg-secondary rounded-full bottom-[-150px] right-[-150px] "></div>
    </div>
  );
};

export default ContactUsSection;
