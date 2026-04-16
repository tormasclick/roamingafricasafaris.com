import { useParams, Link } from "react-router-dom";
import { getVehicleBySlug } from "@/data/vehicles";
import { whatsappLink, PHONE } from "@/data/constants";
import { Check, MessageCircle, Phone as PhoneIcon, Users, Truck, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

const VehicleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const vehicle = getVehicleBySlug(slug || "");

  if (!vehicle) return <div className="container mx-auto px-4 py-20 text-center"><h1>Vehicle not found</h1><Link to="/vehicles" className="text-primary">Browse Vehicles</Link></div>;

  return (
    <>
      <SEO
        title={`${vehicle.name} – Safari Vehicle Hire`}
        description={vehicle.shortDescription}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: vehicle.name,
          description: vehicle.overview,
          category: "Safari Vehicle Hire",
        }}
      />

      <div className="relative h-72 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${vehicle.image})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <p className="text-primary-foreground/80 text-sm mb-1 flex items-center gap-1"><Users className="w-4 h-4" />{vehicle.capacity}</p>
            <h1 className="text-primary-foreground">{vehicle.name}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[
          { label: "Safari Vehicles", href: "/vehicles" },
          { label: vehicle.name },
        ]} />
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="mb-4">Vehicle Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{vehicle.overview}</p>
            </section>

            <section>
              <h2 className="mb-4">Features & Equipment</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {vehicle.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 bg-muted rounded-xl px-4 py-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />{f}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4">Ideal For</h2>
              <div className="flex flex-wrap gap-3">
                {vehicle.idealFor.map((u) => (
                  <span key={u} className="bg-highlight/30 text-foreground px-4 py-2 rounded-full text-sm font-heading font-bold">{u}</span>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24 space-y-4">
              <h3 className="text-center">Hire This Vehicle</h3>
              <p className="text-center text-sm text-muted-foreground">{vehicle.capacity}</p>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="block w-full bg-primary text-primary-foreground py-3 rounded-full font-heading font-bold text-center hover:bg-secondary transition-all shadow-md"
              >
                <PhoneIcon className="w-4 h-4 inline mr-2" />Call Now
              </a>
              <a
                href={whatsappLink(`Hi! I'd like to hire the ${vehicle.name}. Please send availability and rates.`)}
                target="_blank" rel="noopener noreferrer"
                className="whatsapp-btn w-full justify-center rounded-full"
              >
                <MessageCircle className="w-5 h-5" /> Book via WhatsApp
              </a>
              <Link to="/vehicles" className="block text-center text-sm text-primary font-heading font-bold hover:underline">
                View All Vehicles <ArrowRight className="w-3.5 h-3.5 inline" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default VehicleDetail;
