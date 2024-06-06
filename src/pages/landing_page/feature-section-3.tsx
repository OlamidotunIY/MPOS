import { invoice, lens, profile } from "@/assets";

const FeatureSectionThree = () => {
  const data = [
    {
      icon: invoice,
      title: "Multiple Payment Options",
      bgColor: "bg-yellow-50",
      description:
        "MPOS integrates multiple payment gateways for your business. Your customers can use NFC technology, an ATM card, direct bank transfers or other options to pay, either online or offline.",
    },
    {
      icon: lens,
      title: "Invoices and Receipts",
      bgColor: "bg-blue-50",
      description:
        "You can print invoices and receipts  from your POS or send directly to your customers’ inboxes. We have a flexible payment plan and variety of choices for mobile printers and barcode printers. ",
    },
    {
      icon: profile,
      title: "Customer Information",
      bgColor: "bg-gray-50",
      description:
        "Easily store your customers information/sales history and retrieve them easily when needed. Send automated holiday celebration wishes and discount deal announcements with ease.",
    },
  ];
  return (
    <div className="p-10 md:px-16 flex w-full items-center justify-center px-0">
      <div className="bg-primary w-full p-10 ">
        <div className="flex text-white md:gap-10 gap-5 items-center justify-between flex-col md:flex-row">
          <h1 className="text-2xl md:text-4xl md:max-w-[40%] font-bold">
            Need to take your business from 0-100? MPOS is the key.{" "}
          </h1>
          <p className="text-xs md:text-sm md:max-w-[50%]">
            With MPOS you can easily stay ahead of your competitors and run your
            business smoothly. Anywhere, Anytime
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 md:mt-24 mt-16">
          {data.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} text-gray-900 p-6 rounded-lg shadow-lg`}
            >
              <div>
                <img src={card.icon} alt="" width={40} height={40} />
              </div>
              <div className="h-[1px] w-full bg-black mt-5"></div>
              <div className="mt-2">
                <h1 className="font-bold text-md">{card.title}</h1>
                <h1 className="text-xs mt-5">{card.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSectionThree;
