import { Card, Card1, Card2 } from "@/assets";

const Cards = () => {
  const data = [
    {
      image: Card,
      title: "Create an online store for your business",
      description:
        "You can create an online store for your business in 5 seconds and start selling your products online.",
      color: "bg-[#EAE7FF]",
    },
    {
      image: Card1,
      title: "Manage your business seamlessly from anywhere, anytime.",
      description:
        "Access and download a report of your sales, purchases, expenses, inventory and your staff’s performance wherever and whenever you need it.",
      color: "bg-[#F1F5F9]",
    },
    {
      image: Card2,
      title: "Take stock of all your products across multiple stores",
      description:
        "Manage your inventory across multiple stores and warehouses. Get real-time updates on stock levels and sales. And never run out of stock again.",
      color: "bg-[#F8EDE3]",
    },
  ];
  return (
    <div className="mt-28 flex flex-wrap justify-center gap-5">
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-[320px] h-auto ${item.color} p-5 rounded-lg flex px-10 flex-col items-center justify-start gap-5`}
        >
          <div className="flex items-center justify-center">
            <img src={item.image} alt="" />
          </div>
          <div className="text-center ">
            <h1 className="text-sm font-bold">{item.title}</h1>
            <p className="text-xs text-gray-500 mt-3">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
