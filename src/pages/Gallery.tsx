import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "@/components/Gallery";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Spacer for absolute header */}
        <div className="h-20 bg-farm-green" />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
