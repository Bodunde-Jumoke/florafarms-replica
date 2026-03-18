import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery9 from "@/assets/Cow.png";
import gallery10 from "@/assets/crate-egg.png";
import gallery11 from "@/assets/egg-basket1.png";
import gallery12 from "@/assets/peacockU.png";
import gallery13 from "@/assets/swine2.png";
import gallery14 from "@/assets/goats.jpg";
import gallery15 from "@/assets/peacock.jpeg";
import gallery16 from "@/assets/pig.jpeg";
import gallery17 from "@/assets/goat2.png";
import gallery18 from "@/assets/ram2.jpeg";
import gallery19 from "@/assets/swine3.png";
import gallery20 from "@/assets/rams.jpeg";

const images = [
  { src: gallery1, alt: "Free-range hen on the farm" },
  { src: gallery2, alt: "Baby chicks in the brooder" },
  { src: gallery3, alt: "Geese on the farm grounds" },
  { src: gallery4, alt: "Goats on the farm" },
  { src: gallery5, alt: "Roosting hens in the coop" },
  { src: gallery6, alt: "Farm goats grazing" },
  { src: gallery7, alt: "Peacock on display" },
  { src: gallery8, alt: "Egg crates loaded for delivery" },
  { src: gallery10, alt: "Crate of eggs" },
  { src: gallery11, alt: "Egg basket on the farm" },
  { src: gallery12, alt: "Peacock on the farm" },
  { src: gallery13, alt: "Swine on the farm" },
  { src: gallery14, alt: "Goats on the farm" },
  { src: gallery15, alt: "Peacock display" },
  { src: gallery16, alt: "Pig on the farm" },
  { src: gallery17, alt: "Goat on the farm" },
  { src: gallery18, alt: "Ram on the farm" },
  { src: gallery19, alt: "Swine feeding" },
  { src: gallery20, alt: "Rams on the farm" },
  { src: gallery9, alt: "Cow on the farm" },
];

const INITIAL_COUNT = 8;

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? images : images.slice(0, INITIAL_COUNT);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleImages.map((img, index) => (
            <div key={index} className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {!showAll && images.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="bg-farm-orange hover:bg-farm-orange-hover text-primary-foreground px-8 py-3 rounded-full font-semibold transition-colors"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
