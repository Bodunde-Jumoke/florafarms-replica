import ProductDetailLayout from "@/components/products/ProductDetailLayout";
import pointOfLay from "@/assets/point-of-lay.jpeg";
import gallery1 from "@/assets/point-of-lay-1.png";
import gallery2 from "@/assets/point-of-lay-2.png";

const PointOfLay = () => {
  return (
    <ProductDetailLayout
      slug="point-of-lay"
      title="Point of Lay"
      heroImage={pointOfLay}
      heroImageAlt="Point of lay hens ready for egg production"
      images={[
        { src: gallery1, alt: "Hens on the farm" },
        { src: gallery2, alt: "Chickens ready for laying" },
      ]}
      sections={[
        {
          title: "Point of Lay Production in Ijurin Ekiti, Nigeria",
          content: [
            "Commercial layers ready for egg production, fully vaccinated and professionally managed.",
          ],
        },
        {
          title: "Vaccination & Health Management",
          content: [
            "All point of lay birds undergo complete vaccination programs before delivery. Health records are maintained and available upon request.",
          ],
        },
      ]}
    />
  );
};

export default PointOfLay;
