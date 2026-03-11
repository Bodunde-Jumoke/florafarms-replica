import ProductDetailLayout from "@/components/products/ProductDetailLayout";
import tableEggs from "@/assets/table-eggs.jpg";
import crateEgg from "@/assets/gallery-8 - Copy.jpeg";
import eggBasket from "@/assets/egg-basket1 - Copy.png";

const TableEggs = () => {
  return (
    <ProductDetailLayout
      slug="table-eggs"
      title="Table Eggs"
      heroImage={tableEggs}
      heroImageAlt="Fresh farm eggs"
      images={[
        { src: crateEgg, alt: "Egg crate on the farm" },
        { src: eggBasket, alt: "Egg basket on the farm" },
      ]}
      sections={[
        {
          title: "Structured Egg Production in Ijurin Ekiti, Nigeria",
          content: [
            "Our egg production unit operates under a carefully managed system designed to ensure freshness, hygiene, and consistent supply. Layers are maintained in clean housing systems with regulated feeding and lighting schedules that support steady egg production throughout their laying cycle.",
            "Egg production is monitored daily to maintain output efficiency and uniform quality standards.",
          ],
        },
        {
          title: "Egg Collection & Handling",
          content: [
            "Eggs are collected multiple times daily to minimize cracks and contamination. After collection, they are carefully sorted and inspected to remove damaged units. The grading process ensures uniform packaging and organized distribution.",
            "We maintain hygienic handling procedures to protect product integrity from collection to storage. Clean trays and storage facilities are used to preserve freshness and extend shelf stability.",
          ],
        },
      ]}
    />
  );
};

export default TableEggs;
