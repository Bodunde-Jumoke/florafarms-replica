import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <WhatWeDo />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
