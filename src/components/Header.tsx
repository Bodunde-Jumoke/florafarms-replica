import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "OUR PRODUCTS", href: "/products" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT US", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-16 md:h-20">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          {/* <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="FloraFarms Poultry logo" className="h-14 w-14 md:h-16 md:w-16 rounded-lg object-cover" width={64} height={64} />
          </Link> */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="FloraFarms Poultry logo"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <div key={link.label} className="flex items-center gap-2">
                <Link
                  to={link.href}
                  className={`text-sm font-medium rounded-full px-4 py-2 transition-all duration-300 ${
                    location.pathname === link.href
                      ? "bg-farm-orange text-primary-foreground"
                      : "text-white/90 hover:text-farm-orange hover:bg-white/15"
                  }`}
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="w-2 h-2 rounded-full bg-farm-orange" />
                )}
              </div>
            ))}
          </nav>

          {/* Call us - desktop */}
          <div className="hidden lg:flex items-center">
            <a href="tel:+2348124564892" className="flex items-center gap-3 text-white">
              <Phone className="h-5 w-5" />
              <div className="flex flex-col">
                <span className="text-xs text-white/70">Call us Now</span>
                <span className="text-sm font-semibold">+234 8124564892</span>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile: hamburger toggle */}
        <button
          className="lg:hidden text-white shrink-0 px-4 py-3"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

        {/* Desktop: Explore Products button */}
        <div className="hidden lg:flex rounded-bl-[60px] items-center shrink-0 px-5 py-3 mb-5">
          <Link
            to="/products"
            className="bg-farm-orange hover:bg-farm-orange-hover text-white px-4 py-2.5 text-sm font-semibold transition-colors flex items-center rounded-full whitespace-nowrap"
          >
            Explore Products
          </Link>
        </div>
      </div>

      {/* Mobile menu - NO Explore Products button */}
      {mobileOpen && (
        <nav className="lg:hidden pb-4 space-y-2 bg-farm-green/95 rounded-b-lg px-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                location.pathname === link.href
                  ? "bg-farm-orange text-primary-foreground"
                  : "text-white/80 hover:text-farm-orange hover:bg-white/15"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Call us - mobile */}
          <a href="tel:+2348067732200" className="flex items-center gap-3 text-white px-4 py-3 mt-2">
            <Phone className="h-5 w-5 text-farm-orange" />
            <div className="flex flex-col">
              <span className="text-xs text-white/70">Call us Now</span>
              <span className="text-sm font-semibold">+234 8067732200</span>
            </div>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
