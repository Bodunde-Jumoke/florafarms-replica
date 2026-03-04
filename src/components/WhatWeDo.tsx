import liveBirds from "@/assets/live-birds.jpg";
import tableEggs from "@/assets/table-eggs.jpg";
import swine from "@/assets/swine.jpg";
import ducks from "@/assets/duck1.jpeg";
import pointOfLay from "@/assets/point-of-lay.jpeg";
import rams from "@/assets/rams.jpeg";
import goats from "@/assets/goats.jpg";
import peacock from "@/assets/peacock.jpeg";

const products = [
  {
    name: "Live Birds",
    slug: "live-birds",
    image: liveBirds,
    description: "Healthy broilers and layers raised under structured feeding and vaccination programs.",
    alt: "Live chickens on the farm",
  },
  {
    name: "Table Eggs",
    image: tableEggs,
    description: "Fresh, hygienically handled eggs collected daily and properly graded.",
    alt: "Fresh farm eggs in a basket",
  },
  {
    name: "Swine",
    image: swine,
    description: "Well-managed pigs raised in controlled housing with balanced nutrition.",
    alt: "Pigs on the farm",
  },
  {
    name: "Ducks",
    image: ducks,
    description: "Carefully bred exotic birds maintained in clean, stress-free environments.",
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
    name: "Goats",
    image: goats,
    description: "Well-fed and healthy goats raised in clean, controlled environments for premium meat and dairy.",
    alt: "Farm goats on the farm",
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We Do?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            We raise and manage a diverse range of poultry and livestock, carefully monitored to meet industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-sans font-semibold text-foreground text-base mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href="#"
                  className="inline-block text-sm font-semibold text-farm-orange border border-farm-orange px-5 py-2 rounded-full hover:bg-farm-orange hover:text-primary-foreground transition-colors"
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
