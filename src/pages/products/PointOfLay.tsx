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
            " Our point of lay birds are carefully reared pullets aged 16–18 weeks, prepared for transition into egg production. At this stage, birds have completed their primary vaccination schedules and have reached appropriate body weight and maturity levels."
              
            "These birds are suitable for farms seeking ready-to-lay stock managed under structured production systems.",
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
