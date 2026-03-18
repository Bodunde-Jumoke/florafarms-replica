import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "@/components/Gallery";
import heroBg from "@/assets/about-hero.png";

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery | FloraFarms Poultry - Farm Photos";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Browse photos from FloraFarms Poultry in Ijurin Ekiti, Nigeria. See our livestock, poultry, farm facilities, and products.");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative bg-farm-green overflow-hidden min-h-[300px] md:min-h-[460px]">
          <div className="absolute inset-0">
            <img
              src={heroBg}
              alt="FloraFarms background landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end h-full min-h-[300px] md:min-h-[460px] pb-12">
            <h1 className="text-primary-foreground font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-center">
              Gallery
            </h1>
            <p className="text-primary-foreground/70 text-sm text-center">
              <a href="/" className="hover:text-farm-orange transition-colors">HOME</a>
              {" / "}
              <span>GALLERY</span>
            </p>
          </div>
        </section>

        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
