import ProductDetailLayout from "@/components/products/ProductDetailLayout";
import rams from "@/assets/rams.jpeg";
import goats from "@/assets/ram2.jpeg";
import gallery4 from "@/assets/ram1.png";

const Rams = () => {
  return (
    <ProductDetailLayout
      slug="rams"
      title="Rams"
      heroImage={rams}
      heroImageAlt="Rams on the farm"
      images={[
        { src: gallery4, alt: "Rams grazing" },
        { src: goats, alt: "Livestock on the farm" },
      ]}
      sections={[
        {
          title: "Structured Livestock Management in Ijurin Ekiti, Nigeria",
          content: [
            "Our ram unit operates under disciplined feeding and veterinary supervision programs aimed at maintaining strength, fertility, and healthy growth. Rams are raised in secure housing environments that support their physical development and overall welfare.",
          ],
        },
        {
          title: "Feeding & Monitoring",
          content: [
            "Feeding programs are structured to maintain optimal body condition and muscle strength. Routine growth monitoring allows early identification of health or nutritional adjustments where necessary.",
          ],
        },
        {
          title: "Health & Biosecurity",
          content: [
            "Vaccination programs and routine deworming schedules are strictly implemented. Clean housing, controlled access, and sanitation routines help maintain livestock quality and minimize health risks.",
          ],
        },
      ]}
    />
  );
};

export default Rams;
