import { Link } from "react-router-dom";
import { hotels } from "@/data/hotels";
import { getDestinationImage } from "@/data/images";
import { MapPin, Star } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

const tierLabel: Record<string, string> = { budget: "Budget", "mid-range": "Mid-Range", luxury: "Luxury" };
const tierColor: Record<string, string> = {
  budget: "bg-highlight text-foreground",
  "mid-range": "bg-secondary text-secondary-foreground",
  luxury: "bg-accent text-accent-foreground",
};

const grouped = [
  { country: "Kenya", locations: ["Masai Mara", "Amboseli", "Nairobi"] },
  { country: "Tanzania", locations: ["Serengeti", "Ngorongoro"] },
  { country: "Uganda", locations: ["Bwindi"] },
];

const Hotels = () => (
  <>
    <SEO
      title="Hotels & Lodges – Safari Accommodation"
      description="Browse safari lodges, camps and hotels across Kenya, Tanzania and Uganda. Budget, mid-range and luxury accommodation for your East Africa safari holiday."
    />

    <div className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url(${getDestinationImage("masai-mara")})` }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-4 pb-8">
          <h1 className="text-primary-foreground">Hotels & Safari Lodges</h1>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4">
      <Breadcrumbs items={[{ label: "Hotels & Lodges" }]} />
    </div>

    <div className="container mx-auto px-4 py-10 space-y-16">
      <p className="text-muted-foreground max-w-3xl">
        Choose from our curated selection of safari lodges, tented camps and hotels across East Africa. Whether you prefer a budget-friendly camp or a luxury lodge, we have the perfect accommodation for your safari adventure.
      </p>

      {grouped.map(({ country, locations }) => (
        <div key={country}>
          <h2 className="mb-6">{country} Hotels & Lodges</h2>
          {locations.map((loc) => {
            const locHotels = hotels.filter((h) => h.location === loc);
            if (!locHotels.length) return null;
            return (
              <div key={loc} className="mb-10">
                <h3 className="text-lg font-heading font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> {loc}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {locHotels.map((hotel) => (
                    <Link
                      key={hotel.id}
                      to={`/hotel/${hotel.slug}`}
                      className="group bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={getDestinationImage(hotel.image)}
                          alt={hotel.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <span className={`absolute top-3 right-3 text-xs font-heading font-bold px-3 py-1 rounded-full ${tierColor[hotel.tier]}`}>
                          {tierLabel[hotel.tier]}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-base font-heading font-bold mb-1">{hotel.name}</h3>
                        <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1"><MapPin className="w-3 h-3" />{hotel.location}, {hotel.country === "kenya" ? "Kenya" : hotel.country === "tanzania" ? "Tanzania" : "Uganda"}</p>
                        <p className="text-sm text-muted-foreground line-clamp-2">{hotel.shortDescription}</p>
                        {hotel.priceFrom && (
                          <p className="mt-3 text-sm font-heading font-bold text-primary">From {hotel.priceFrom} <span className="text-xs font-normal text-muted-foreground">per night</span></p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  </>
);

export default Hotels;
