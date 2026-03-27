import liveBirds from "@/assets/live-birds.jpg";
import tableEggs from "@/assets/table-eggs.jpg";
import swine from "@/assets/swine.jpg";
import peacock from "@/assets/peacock.jpeg";
import pointOfLay from "@/assets/point-of-lay.jpeg";
import rams from "@/assets/rams.jpeg";
import goats from "@/assets/goats.jpg";

export interface ProductData {
  name: string;
  slug: string;
  image: string;
}

export const products: ProductData[] = [
  { name: "Live Bird", slug: "live-birds", image: liveBirds },
  { name: "Table Eggs", slug: "table-eggs", image: tableEggs },
  { name: "Swine", slug: "swine", image: swine },
  { name: "Exotic Birds", slug: "exotic-birds", image: peacock },
  { name: "Point of Lay", slug: "point-of-lay", image: pointOfLay },
  { name: "Rams", slug: "rams", image: rams },
  { name: "Goats", slug: "goats", image: goats },
];
