import ProductDetailLayout from "@/components/products/ProductDetailLayout";
import liveBirds from "@/assets/live-birds.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpeg";

const LiveBirds = () => {
  return (
    <ProductDetailLayout
      slug="live-birds"
      title="Live Birds"
      heroImage={liveBirds}
      heroImageAlt="Live chickens on the farm"
      images={[
        { src: gallery1, alt: "Hens on the farm" },
        { src: gallery2, alt: "Chickens in the coop" },
      ]}
      sections={[
        {
          title: "Commercial Broilers and Old Layers in Ijurin Ekiti, Nigeria",
          content: [
            "Our live bird production unit operates under a structured commercial system focused on maintaining flock health, uniform growth, and performance consistency. From broilers raised for meat production to layers developed for sustained egg production, each bird is managed through carefully supervised feeding, housing, and veterinary programs.",
            "We maintain disciplined farm management practices that prioritize biosecurity, environmental control, and routine performance monitoring. This ensures that birds reach their intended growth targets efficiently while maintaining strong immunity and low mortality rates.",
          ],
        },
        {
          title: "Broiler Production System",
          content: [
            "Broilers are raised in clean, well-ventilated housing units that support rapid but healthy growth. Feeding programs are stage-specific, ensuring that chicks, growers, and finishers receive balanced nutrition aligned with industry standards. Water systems are monitored daily to maintain cleanliness and prevent contamination.",
            "Environmental management, including temperature control, litter management, and ventilation, is implemented to reduce stress and promote uniform weight gain. Growth performance is recorded and evaluated regularly to ensure consistent output.",
          ],
        },
      ]}
    />
  );
};

export default LiveBirds;
