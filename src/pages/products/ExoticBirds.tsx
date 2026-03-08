import ProductDetailLayout from "@/components/products/ProductDetailLayout";
import peacock from "@/assets/peacock.jpeg";
import peacockU from "@/assets/peacockU.png";
import duck4 from "@/assets/duck4.png";

const ExoticBirds = () => {
  return (
    <ProductDetailLayout
      slug="exotic-birds"
      title="Exotic Birds"
      heroImage={peacock}
      heroImageAlt="Peacock on the farm"
      images={[
        { src: peacockU, alt: "Peacock display" },
        { src: duck4, alt: "Exotic bird on the farm" },
      ]}
      sections={[
        {
          title: "Managed Care & Controlled Environments",
          content: [
            "Our Exotic bird unit maintains selected species under structured care systems designed to support health, hygiene, and breeding viability. Each species is housed in enclosures suited to its environmental and behavioral requirements.",
          ],
        },
        {
          title: "Care & Environmental Management",
          content: [
            "Specialized feeding programs, clean water systems, and proper cage maintenance ensure birds remain healthy and visually vibrant. Environmental enrichment practices support natural behavior and reduce stress.",
          ],
        },
        {
          title: "Health Monitoring & Biosecurity",
          content: [
            "Routine health assessments and sanitation protocols are enforced to protect against disease. Controlled access to the ornamental unit ensures biosecurity integrity across the farm.",
          ],
        },
      ]}
    />
  );
};

export default ExoticBirds;
