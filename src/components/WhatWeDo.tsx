import liveBirds from "@/assets/live-birds.jpg";
import tableEggs from "@/assets/table-eggs.jpg";
import swine from "@/assets/swine.jpg";
import exoticBirds from "@/assets/exotic-birds.jpg";
import pointOfLay from "@/assets/point-of-lay.jpg";
import rams from "@/assets/rams.jpg";
import snails from "@/assets/snails.jpg";
import peacock from "@/assets/peacock.jpg";

const products = [
  {
    name: "Live Birds",
    image: liveBirds,
    description: "Healthy broilers and layers raised for maximum profit, perfect for bulk buying and retailing purposes.",
    alt: "Live chickens on the farm",
  },
  {
    name: "Table Eggs",
    image: tableEggs,
    description: "Fresh eggs daily for the biggest markets directly from our hatch, guaranteed fresh.",
    alt: "Fresh farm eggs in a basket",
  },
  {
    name: "Swine",
    image: swine,
    description: "Well-managed pigs raised in modern, humane housing for both breeding and meat production needs.",
    alt: "Pigs on the farm",
  },
  {
    name: "Exotic Birds",
    image: exoticBirds,
    description: "Ducks, geese, and other exotic poultry raised with care for diverse markets and needs.",
    alt: "Exotic ducks and geese on the farm",
  },
  {
    name: "Point of Lay",
    image: pointOfLay,
    description: "Carefully raised point of lay chickens ready for egg production, delivering maximum yield.",
    alt: "Point of lay hens ready for egg production",
  },
  {
    name: "Rams",
    image: rams,
    description: "Prime quality rams and sheep, carefully selected from the best breeds for every occasion and event.",
    alt: "Rams and sheep on the farm",
  },
  {
    name: "Snails",
    image: snails,
    description: "Well-fed snails from controlled environments for the discerning buyer, available in large quantities.",
    alt: "Farm snails close-up",
  },
  {
    name: "Exotic Birds",
    image: peacock,
    description: "Beautiful peacocks and ornamental birds for farms, events, and private collections.",
    alt: "Peacock on the farm",
  },
];

const WhatWeDo = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            We raise and manage all these types of Livestock and Poultry, available in every form to meet the needs you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-sans font-semibold text-foreground text-sm mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href="#"
                  className="inline-block text-xs font-semibold text-farm-orange border border-farm-orange px-4 py-1.5 rounded-full hover:bg-farm-orange hover:text-primary-foreground transition-colors"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
