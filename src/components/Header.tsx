import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "OUR PRODUCTS", href: "/products" },
  { label: "GALLERY", href: "/#gallery" },
  { label: "CONTACT US", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-16 md:h-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="FloraFarms Poultry logo" className="h-14 w-14 md:h-16 md:w-16 rounded-lg object-cover" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <div key={link.label} className="flex items-center gap-2">
                <Link
                  to={link.href}
                  className="text-sm font-medium text-white/90 hover:text-farm-orange transition-colors"
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="w-2 h-2 rounded-full bg-farm-orange" />
                )}
              </div>
            ))}
          </nav>

          {/* Call us */}
          <div className="hidden lg:flex items-center">
            <a href="tel:+2348124564892" className="flex items-center gap-3 text-white">
              <Phone className="h-5 w-5" />
              <div className="flex flex-col">
                <span className="text-xs text-white/70">Call us Now</span>
                <span className="text-sm font-semibold">+234 8124564892</span>
              </div>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Explore Products button - outside container, flush right */}
        <Link
          to="/products"
          className="hidden lg:flex bg-farm-orange hover:bg-farm-orange-hover text-white px-8 py-5 text-sm font-semibold transition-colors items-center shrink-0"
        >
          Explore Products
        </Link>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden pb-4 space-y-2 bg-farm-green/95 rounded-b-lg px-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block px-3 py-2 rounded text-sm font-medium text-white/80 hover:text-farm-orange"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/products"
            className="block bg-farm-orange text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-3"
            onClick={() => setMobileOpen(false)}
          >
            Explore Products
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
