import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const images = [
  { src: gallery1, alt: "Free-range hen on the farm" },
  { src: gallery2, alt: "Baby chicks in the brooder" },
  { src: gallery3, alt: "Geese on the farm grounds" },
  { src: gallery4, alt: "Goats on the farm" },
  { src: gallery5, alt: "Roosting hens in the coop" },
  { src: gallery6, alt: "Farm infrastructure and workers" },
  { src: gallery7, alt: "Peacocks on display" },
  { src: gallery8, alt: "Farm entrance and landscaping" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#gallery"
            className="inline-block bg-farm-orange hover:bg-farm-orange-hover text-primary-foreground px-8 py-3 rounded-full font-semibold transition-colors text-sm"
          >
            View More Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
