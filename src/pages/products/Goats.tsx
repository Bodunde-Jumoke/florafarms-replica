import ProductDetailLayout from "@/components/products/ProductDetailLayout";
import goats from "@/assets/goats.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import rams from "@/assets/rams.jpeg";

const Goats = () => {
  return (
    <ProductDetailLayout
      slug="goats"
      title="Goats"
      heroImage={goats}
      heroImageAlt="Goats on the farm"
      images={[
        { src: gallery4, alt: "Goats grazing" },
        { src: rams, alt: "Livestock on the farm" },
      ]}
      sections={[
        {
          title: "Commercial Goat Production in Ijurin Ekiti, Nigeria",
          content: [
            "Our goat production unit focuses on structured rearing practices that promote resilience, healthy growth, and commercial livestock standards. Goats are raised under supervised feeding programs and housed in clean, ventilated enclosures.",
          ],
        },
        {
          title: "Growth & Reproductive Management",
          content: [
            "Nutritional programs are designed to support both meat production and breeding potential. Routine weight checks and health assessments help maintain herd stability and performance consistency.",
          ],
        },
        {
          title: "Sanitation & Disease Prevention",
          content: [
            "Housing areas are regularly cleaned and monitored. Vaccination and deworming schedules are implemented to protect herd health and reduce mortality rates.",
          ],
        },
      ]}
    />
  );
};

export default Goats;
