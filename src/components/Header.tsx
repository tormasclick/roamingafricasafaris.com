import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { PHONE, EMAIL } from "@/data/constants";
import logo from "@/assets/logo.png";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
  highlight?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Kenya Safaris", href: "/kenya-safaris",
    children: [
      { label: "Safaris in Kenya", href: "/kenya-safaris" },
      { label: "Masai Mara Safaris", href: "/kenya-safaris" },
      { label: "Amboseli Safaris", href: "/kenya-safaris" },
      { label: "Lake Nakuru Safaris", href: "/kenya-safaris" },
      { label: "Safaris from Diani", href: "/kenya-safaris/diani" },
      { label: "Kenya Day Trips", href: "/kenya-safaris/day-trips" },
      { label: "Kenya Fly-in Safaris", href: "/kenya-safaris/fly-in" },
    ],
  },
  {
    label: "Tanzania Safaris", href: "/tanzania-safaris",
    children: [
      { label: "Safaris in Tanzania", href: "/tanzania-safaris" },
      { label: "Serengeti Safaris", href: "/tanzania-safaris" },
      { label: "Ngorongoro Safaris", href: "/tanzania-safaris" },
      { label: "Tarangire Safaris", href: "/tanzania-safaris" },
      { label: "Zanzibar Holidays", href: "/tanzania-safaris/zanzibar" },
      { label: "Tanzania Day Trips", href: "/tanzania-safaris/day-trips" },
      { label: "Tanzania Fly-in Safaris", href: "/tanzania-safaris/fly-in" },
    ],
  },
  {
    label: "Uganda Safaris", href: "/uganda-safaris",
    children: [
      { label: "Gorilla Trekking", href: "/uganda-safaris/gorilla-trekking" },
      { label: "Uganda Wildlife Safaris", href: "/uganda-safaris" },
      { label: "Uganda Day Trips", href: "/uganda-safaris/day-trips" },
    ],
  },
  {
    label: "Combo Safaris", href: "/combo-safaris",
    children: [
      { label: "Kenya Tanzania Combined", href: "/combo-safaris/kenya-tanzania" },
      { label: "Tanzania Kenya Combined", href: "/combo-safaris/tanzania-kenya" },
    ],
  },
  { label: "Hotels & Lodges", href: "/hotels" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Destinations", href: "/destinations" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact", highlight: true },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" />{PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1 hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5" />{EMAIL}
            </a>
          </div>
          <Link to="/booking" className="bg-accent text-accent-foreground px-4 py-1 rounded-full font-heading font-bold text-xs hover:brightness-110 transition-all">
            Book Now
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <header className="bg-popover sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Roaming Africa Tours and Safaris" className="h-12 lg:h-16" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-2.5 py-2 text-sm font-heading font-medium rounded-full transition-colors flex items-center gap-1 ${
                    item.highlight
                      ? "bg-primary text-primary-foreground hover:bg-secondary"
                      : location.pathname === item.href
                        ? "text-primary bg-muted"
                        : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-popover border border-border rounded-lg shadow-xl py-2 animate-fade-in-up">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-popover border-t border-border max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="block px-4 py-3 font-heading font-medium border-b border-border hover:bg-muted"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href + child.label}
                    to={child.href}
                    className="block px-8 py-2 text-sm text-muted-foreground border-b border-border hover:bg-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="p-4">
              <Link to="/booking" className="block text-center bg-accent text-accent-foreground py-3 rounded-full font-heading font-bold" onClick={() => setMobileOpen(false)}>
                Book Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
