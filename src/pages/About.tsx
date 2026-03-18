import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import CommitmentToQuality from "@/components/about/CommitmentToQuality";
import VisionMissionValues from "@/components/about/VisionMissionValues";
import ProductionApproach from "@/components/about/ProductionApproach";

const About = () => {
  useEffect(() => {
    document.title = "About Us | FloraFarms Poultry - Ijurin Ekiti, Nigeria";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Learn about FloraFarms, a privately managed commercial livestock and poultry farm in Ijurin Ekiti, Nigeria. Our mission, vision, and production approach.");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <WhoWeAre />
        <CommitmentToQuality />
        <VisionMissionValues />
        <ProductionApproach />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default About;
