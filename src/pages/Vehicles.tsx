import { Link } from "react-router-dom";
import { vehicles } from "@/data/vehicles";
import { Truck, Users, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

const Vehicles = () => (
  <>
    <SEO
      title="Safari Vehicles & Tour Buses for Hire"
      description="Hire reliable safari vehicles in Nairobi and Arusha. 4×4 Land Cruisers, tour vans, overland trucks and buses with professional driver guides at competitive rates."
    />

    <div className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url(${vehicles[0].image})` }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-4 pb-8">
          <h1 className="text-primary-foreground">Safari Vehicles & Tour Buses</h1>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4">
      <Breadcrumbs items={[{ label: "Safari Vehicles" }]} />
    </div>

    <div className="container mx-auto px-4 py-10 space-y-10">
      <div className="max-w-3xl">
        <h2 className="mb-4">Explore East Africa in Style and Comfort</h2>
        <p className="text-muted-foreground leading-relaxed">
          We offer reliable safari vehicle hire services in Nairobi (Kenya) and Arusha (Tanzania). All vehicles come with experienced professional driver guides at competitive rates. Our fleet includes safari tour vans, 4×4 Land Cruisers, luxury buses, and overland safari trucks — all well maintained and equipped for safety and comfort.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((v) => (
          <Link
            key={v.id}
            to={`/vehicle/${v.slug}`}
            className="group bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-5">
              <h3 className="text-base font-heading font-bold mb-1 flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary flex-shrink-0" />{v.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1"><Users className="w-3 h-3" />{v.capacity}</p>
              <p className="text-sm text-muted-foreground line-clamp-2">{v.shortDescription}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-heading font-bold text-primary">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Safety & Features */}
      <section className="section-beige rounded-2xl p-8 md:p-12">
        <h2 className="mb-6">Safety & Equipment Standards</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg mb-3">Safety Equipment</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Cool boxes", "Toolkits", "First aid kits", "Fire extinguishers", "Seat belts", "High frequency radio communication", "Additional spare parts for breakdowns"].map((f) => (
                <li key={f} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" />{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-3">Vehicle Enhancements</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Special shock absorbers", "Double springs", "Tubeless tires to reduce punctures", "Canvas seats for comfort", "Pop-up roofs for game viewing", "Charging ports for devices"].map((f) => (
                <li key={f} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent" />{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default Vehicles;
