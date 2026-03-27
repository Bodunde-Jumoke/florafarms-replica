import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-farm-footer-bg text-farm-dark">
      <div className="border-t border-farm-dark/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
             <div className="mb-4 flex justify-center md:justify-start">
              <img src={logo} alt="FloraFarms Poultry logo" className="h-20 w-20 rounded-lg object-cover" />
            </div>
            <p className="text-farm-dark/70 text-sm leading-relaxed">
              we are dedicated to providing the highest quality livestock and poultry products to our customers.
            </p>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="font-sans font-semibold text-base mb-5">Our Products</h3>
            <ul className="space-y-3">
              {["Live Birds", "Table Eggs", "Swine", "Ornamental Birds", "Point of Lay", "Ram", "Goats"].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-farm-dark/70 text-sm hover:text-farm-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Further Links */}
          <div>
            <h3 className="font-sans font-semibold text-base mb-5">Further Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Products", href: "/products" },
                { label: "Gallery", href: "/gallery" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-farm-dark/70 text-sm hover:text-farm-orange transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-sans font-semibold text-base mb-5">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-farm-orange shrink-0 mt-0.5" />
                <span className="text-farm-dark text-sm">Behind Ave Maria Villa, Ijurin Ekiti</span>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Facebook className="h-5 w-5 text-farm-orange shrink-0 mt-0.5" />
                <span className="text-farm-dark text-sm">Flora Farms</span>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-farm-orange shrink-0 mt-0.5" />
                <span className="text-farm-dark text-sm">080 6673 2200</span>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 text-farm-orange shrink-0 mt-0.5" />
                <span className="text-farm-dark text-sm">Florafarmsijurin@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-farm-dark/10 mt-10 pt-6 text-center">
          <p className="text-farm-dark/60 text-sm">
            © 2023 All rights Reserved, Flora Frams
          </p>
          <p className="text-farm-dark/60 text-sm">
            designed by COVY
          </p>
          <p className="text-farm-dark/60 text-sm">
            developed by JumKEdge Technologies (JET)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
