import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ProductsHero from "@/components/products/ProductsHero";
import WhatWeDo from "@/components/WhatWeDo";
import CommitmentToQuality from "@/components/about/CommitmentToQuality";

const Products = () => {
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
