import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "HOME", href: "#", active: true },
  { label: "ABOUT US", href: "#about" },
  { label: "OUR PRODUCTS", href: "#products" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT US", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-farm-green sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="FloraFarms Poultry logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-primary-foreground font-display font-bold text-lg hidden sm:block">
              Flora<span className="text-farm-orange">Farms</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.active
                    ? "text-farm-orange"
                    : "text-primary-foreground/80 hover:text-farm-orange"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+2348012345678" className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <Phone className="h-4 w-4" />
              <span>Call Us: +234 801 234 5678</span>
            </a>
            <a
              href="#products"
              className="bg-farm-orange hover:bg-farm-orange-hover text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Explore Products
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block px-3 py-2 rounded text-sm font-medium ${
                  link.active
                    ? "text-farm-orange"
                    : "text-primary-foreground/80 hover:text-farm-orange"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#products"
              className="block bg-farm-orange text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-3"
            >
              Explore Products
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
