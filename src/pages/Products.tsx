import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ProductsHero from "@/components/products/ProductsHero";
import WhatWeDo from "@/components/WhatWeDo";
import CommitmentToQuality from "@/components/about/CommitmentToQuality";

const Products = () => {
  useEffect(() => {
    document.title = "Our Products | FloraFarms - Live Birds, Eggs, Swine, Rams & Goats";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Explore FloraFarms products: live birds, table eggs, swine, exotic birds, point of lay, rams, and goats. Quality livestock from Ijurin Ekiti, Nigeria.");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductsHero />
        <WhatWeDo />
        <CommitmentToQuality />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
