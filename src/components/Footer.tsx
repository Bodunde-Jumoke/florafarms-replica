import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-farm-green text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="FloraFarms logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-display font-bold text-lg">
                Flora<span className="text-farm-orange">Farms</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-xs leading-relaxed">
              FloraFarms is a top-tier provider of livestock and poultry, producing quality products for our customers.
            </p>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="font-sans font-semibold text-sm mb-4">Our Products</h3>
            <ul className="space-y-2">
              {["Live Birds", "Table Eggs", "Swine", "Ornamental Birds", "Point of Lay", "Rams", "Snails"].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-primary-foreground/60 text-xs hover:text-farm-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-sans font-semibold text-sm mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Our Products", "Gallery"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/60 text-xs hover:text-farm-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-sans font-semibold text-sm mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-farm-orange shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 text-xs">1/8 of Omi Road, Janklo, Bassa Farm</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-farm-orange shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 text-xs">+234 801 234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-farm-orange shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 text-xs">info@florafarms.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} FloraFarms. All Rights Reserved. Designed by FloraFarms.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
