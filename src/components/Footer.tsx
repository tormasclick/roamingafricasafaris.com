import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { PHONE, EMAIL, LOCATION, COMPANY } from "@/data/constants";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-safari-dark text-safari-cream">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Company */}
        <div className="lg:col-span-1">
          <img src={logo} alt={COMPANY} className="h-14 mb-4" />
          <p className="text-sm opacity-80 mb-4">
            Your trusted East African safari operator offering unforgettable wildlife adventures across Kenya, Tanzania, and Uganda.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-safari-earth flex items-center justify-center hover:bg-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Safaris */}
        <div>
          <h3 className="text-lg mb-4 text-accent">Safaris</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Kenya Safaris", href: "/kenya-safaris" },
              { label: "Tanzania Safaris", href: "/tanzania-safaris" },
              { label: "Uganda Safaris", href: "/uganda-safaris" },
              { label: "Combo Safaris", href: "/combo-safaris" },
              { label: "Day Trips", href: "/kenya-safaris/day-trips" },
            ].map((l) => (
              <li key={l.href}><Link to={l.href} className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg mb-4 text-accent">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Hotels & Lodges", href: "/hotels" },
              { label: "Safari Vehicles", href: "/vehicles" },
              { label: "Destinations", href: "/destinations" },
              { label: "Resources", href: "/resources" },
              { label: "Book Your Safari", href: "/booking" },
            ].map((l) => (
              <li key={l.href}><Link to={l.href} className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg mb-4 text-accent">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 opacity-80"><Phone className="w-4 h-4 text-accent" />{PHONE}</li>
            <li className="flex items-center gap-2 opacity-80"><Mail className="w-4 h-4 text-accent" />{EMAIL}</li>
            <li className="flex items-center gap-2 opacity-80"><MapPin className="w-4 h-4 text-accent" />{LOCATION}</li>
          </ul>
        </div>

        {/* Payments */}
        <div>
          <h3 className="text-lg mb-4 text-accent">We Accept</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8" loading="lazy" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-8" loading="lazy" />
            <span className="bg-secondary text-secondary-foreground text-xs font-heading font-bold px-3 py-1.5 rounded-full">M-Pesa</span>
          </div>
          <div className="mt-6">
            <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-safari-earth">
      <div className="container mx-auto px-4 py-4 text-center text-sm opacity-60">
        © {new Date().getFullYear()} {COMPANY}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
