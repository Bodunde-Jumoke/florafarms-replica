import ProductDetailLayout from "@/components/products/ProductDetailLayout";
import swine from "@/assets/swine.jpg";
import pig from "@/assets/pig.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";

const Swine = () => {
  return (
    <ProductDetailLayout
      slug="swine"
      title="Swine"
      heroImage={swine}
      heroImageAlt="Pigs on the farm"
      images={[
        { src: pig, alt: "Piglets on the farm" },
        { src: gallery5, alt: "Pigs in housing" },
      ]}
      sections={[
        {
          title: "Structured Pig Farming in Ijurin Ekiti, Nigeria",
          content: [
            "Our swine production unit is designed to support efficient pig growth under supervised feeding, housing, and health management systems. Pigs are maintained in structured pens that allow controlled movement, proper drainage, and routine cleaning.",
            "The production process emphasizes healthy weight gain, disease prevention, and consistent livestock quality.",
          ],
        },
        {
          title: "Veterinary Supervision & Housing",
          content: [
            "Routine veterinary supervision ensures pigs remain healthy and productive. Preventive health programs and sanitation routines reduce disease exposure.",
            "Housing is designed for proper ventilation and waste management, promoting a healthier environment and improved growth performance.",
          ],
        },
      ]}
    />
  );
};

export default Swine;
