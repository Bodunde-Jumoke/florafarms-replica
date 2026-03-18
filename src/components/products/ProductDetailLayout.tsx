import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ProductsHero from "./ProductsHero";
import ProductSidebar from "./ProductSidebar";
import heroBG from "@/assets/about-hero.png";

interface ProductSection {
  title: string;
  content: string[];
}

interface ProductDetailLayoutProps {
  slug: string;
  title: string;
  heroImage: string;
  heroImageAlt: string;
  images: { src: string; alt: string }[];
  sections: ProductSection[];
}

const ProductDetailLayout = ({
  slug,
  title,
  heroImage,
  heroImageAlt,
  images,
  sections,
}: ProductDetailLayoutProps) => {
  useEffect(() => {
    document.title = `${title} | FloraFarms Poultry - Ijurin Ekiti`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", `${sections[0]?.content[0]?.slice(0, 155) ?? `Quality ${title} from FloraFarms Poultry in Ijurin Ekiti, Nigeria.`}`);
  }, [title, sections]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductsHero />

        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
              <div className="w-full md:w-[55%] overflow-hidden rounded-lg">
                <img
                  src={heroBG}
                  alt={heroImageAlt}
                  className="w-full h-[280px] md:h-[460px] object-cover"
                />
              </div>
              <div className="w-full md:w-[35%]">
                <ProductSidebar activeSlug={slug} />
              </div>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-10 mb-6">
              {title}
            </h2>

            <div className="border-l-4 border-farm-orange bg-card p-6 mb-8">
              {sections[0] && (
                <>
                  <h3 className="font-bold text-sm text-foreground mb-3">
                    {sections[0].title}
                  </h3>
                  {sections[0].content.map((p, i) => (
                    <p key={i} className="text-muted-foreground text-sm leading-relaxed mb-3 last:mb-0">{p}</p>
                  ))}
                </>
              )}
            </div>

            {images.length >= 2 && (
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="w-full sm:w-1/2 overflow-hidden rounded-lg">
                  <img src={images[0].src} alt={images[0].alt} className="w-full h-[200px] md:h-[240px] object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="w-full sm:w-1/2 overflow-hidden rounded-lg">
                  <img src={images[1].src} alt={images[1].alt} className="w-full h-[200px] md:h-[240px] object-cover" loading="lazy" decoding="async" />
                </div>
              </div>
            )}

            <div className="border-l-4 border-farm-orange bg-card p-6 mb-8">
              {sections.slice(1).map((section, i) => (
                <div key={i} className={i > 0 ? "mt-4" : ""}>
                  <h3 className="font-bold text-sm text-foreground mb-2">{section.title}</h3>
                  {section.content.map((p, j) => (
                    <p key={j} className="text-muted-foreground text-sm leading-relaxed mb-2 last:mb-0">{p}</p>
                  ))}
                </div>
              ))}
            </div>

            <a href="/contact" className="block w-full bg-farm-orange hover:bg-farm-orange-hover text-primary-foreground text-center py-3 rounded-full font-semibold transition-colors text-sm">
              Contact Us Today
            </a>
          </div>
        </section>

        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailLayout;
