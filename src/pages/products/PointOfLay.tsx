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
            "Our point of lay birds are carefully reared pullets aged 16–18 weeks, prepared for transition into egg production. At this stage, birds have completed their primary vaccination schedules and have reached appropriate body weight and maturity levels.",
            
            "These birds are suitable for farms seeking ready-to-lay stock managed under structured production systems.",

          ],
        },
        {
          title: "Development & Growth Monitoring",
          content: [
            " Throughout the rearing period, birds are fed stage-appropriate diets formulated to promote skeletal strength, feather quality, and reproductive development. Growth rates are monitored weekly to ensure uniformity within batches.",

            "Lighting programs are introduced gradually to prepare birds for consistent egg production upon transfer to laying facilities.",
          ],
        },
         {
          title: "Health Vaccination & Program",
          content: [
            "Complete vaccination schedules are administered during the brooding and growing phases. Routine health checks ensure early detection of abnormalities and maintain flock stability.",
            
            "Controlled housing, sanitation practices, and restricted access protocols help maintain strong biosecurity standards.",

          ],
        },

      ]}
    />
  );
};

export default PointOfLay;
