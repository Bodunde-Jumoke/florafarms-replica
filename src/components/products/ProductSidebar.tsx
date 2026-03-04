import { Link } from "react-router-dom";

const products = [
  { name: "Live Bird", slug: "live-birds" },
  { name: "Table Eggs", slug: "table-eggs" },
  { name: "Swine", slug: "swine" },
  { name: "Exotic Birds", slug: "exotic-birds" },
  { name: "Point of Lay", slug: "point-of-lay" },
  { name: "Rams", slug: "rams" },
  { name: "Goats", slug: "goats" },
];

interface ProductSidebarProps {
  activeSlug: string;
}

const ProductSidebar = ({ activeSlug }: ProductSidebarProps) => {
  return (
    <div className="border border-border p-6">
      <h3 className="font-sans font-bold text-foreground text-base mb-4">Products</h3>
      <ul className="space-y-3">
        {products.map((product) => (
          <li key={product.slug}>
            <Link
              to={`/products/${product.slug}`}
              className={`text-sm font-sans transition-colors ${
                activeSlug === product.slug
                  ? "text-farm-orange font-semibold"
                  : "text-muted-foreground hover:text-farm-orange"
              }`}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSidebar;
