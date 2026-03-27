// 

// ProductSidebar.tsx
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
  onProductClick?: (slug: string) => void;
}

const ProductSidebar = ({ activeSlug, onProductClick }: ProductSidebarProps) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block border border-border rounded-2xl p-6 h-full font-signika">
        <h3 className="font-bold text-foreground text-base mb-4">Products</h3>
        <ul className="space-y-3">
          {products.map((product) => (
            <li key={product.slug}>
              <Link
                to={`/products/${product.slug}`}
                onClick={() => onProductClick?.(product.slug)}
                className={`text-sm transition-colors ${
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

      {/* Mobile Collapsed Navigation */}
      <div className="md:hidden flex flex-wrap justify-center gap-2 p-4 bg-white border-b border-border rounded-b-2xl font-signika">
        {products.map((product) => (
          <button
            key={product.slug}
            onClick={() => onProductClick?.(product.slug)}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              activeSlug === product.slug
                ? "bg-farm-orange text-white rounded-full"
                : "bg-gray-100 text-muted-foreground rounded-full hover:bg-farm-orange hover:text-white"
            }`}
          >
            {product.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductSidebar;