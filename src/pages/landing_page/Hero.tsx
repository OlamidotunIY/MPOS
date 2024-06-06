import Cards from "./components/cards";
import MainLookup from "./components/main-lookup";

const HeroSection = () => {
  return (
    <div className="p-10 md:px-16 flex flex-col justify-center items-center">
      <MainLookup />
      <Cards />
    </div>
  );
};

export default HeroSection;
