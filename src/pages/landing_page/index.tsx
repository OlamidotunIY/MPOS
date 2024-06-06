import HeroSection from "./Hero";
import ContactUsSection from "./contact-us-section";
import FeatureSection from "./feature-section";
import FeatureSectionTwo from "./feature-section-2";
import FeatureSectionThree from "./feature-section-3";
import FooterSection from "./footer";
import GetStartedSection from "./get-started-section";
import GlobalSection from "./global-section";
import ManagementSection from "./management-section";

const Home = () => {
  return (
    <div className="w-full h-full">
      <HeroSection />
      <FeatureSection />
      <FeatureSectionTwo />
      <FeatureSectionThree />
      <GlobalSection />
      <ManagementSection />
      <ContactUsSection />
      <GetStartedSection />
      <FooterSection />
    </div>
  );
};

export default Home;
