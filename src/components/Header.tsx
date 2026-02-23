import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "HOME", href: "#" },
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
          <a href="#" className="flex items-center shrink-0">
            <img src={logo} alt="FloraFarms Poultry logo" className="h-14 w-14 md:h-16 md:w-16 rounded-lg object-cover" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <div key={link.label} className="flex items-center gap-2">
                <a
                  href={link.href}
                  className="text-sm font-medium text-primary-foreground/90 hover:text-farm-orange transition-colors"
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="w-2 h-2 rounded-full bg-farm-orange" />
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+2348124564892" className="flex items-center gap-3 text-primary-foreground">
              <Phone className="h-5 w-5" />
              <div className="flex flex-col">
                <span className="text-xs text-primary-foreground/70">Call us Now</span>
                <span className="text-sm font-semibold">+234 8124564892</span>
              </div>
            </a>
            <a
              href="#products"
              className="bg-farm-orange hover:bg-farm-orange-hover text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
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
                className="block px-3 py-2 rounded text-sm font-medium text-primary-foreground/80 hover:text-farm-orange"
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
