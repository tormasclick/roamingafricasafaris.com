import { useParams, Link } from "react-router-dom";
import { getHotelBySlug, getHotelsByDestination } from "@/data/hotels";
import { getDestinationImage } from "@/data/images";
import { safariPackages } from "@/data/safariPackages";
import { whatsappLink } from "@/data/constants";
import { MapPin, Star, Check, MessageCircle, Calendar, Bed, Wifi, UtensilsCrossed } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

const amenityIcons: Record<string, typeof Wifi> = {
  "Wi-Fi": Wifi,
  Restaurant: UtensilsCrossed,
};

const HotelDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const hotel = getHotelBySlug(slug || "");

  if (!hotel) return <div className="container mx-auto px-4 py-20 text-center"><h1>Hotel not found</h1><Link to="/hotels" className="text-primary">Browse Hotels</Link></div>;

  const nearbySafaris = safariPackages.filter((p) =>
    p.destinations.some((d) => d.toLowerCase() === hotel.location.toLowerCase())
  ).slice(0, 3);

  const countryLabel = hotel.country === "kenya" ? "Kenya" : hotel.country === "tanzania" ? "Tanzania" : "Uganda";

  return (
    <>
      <SEO
        title={`${hotel.name} – ${hotel.location} ${countryLabel}`}
        description={hotel.shortDescription}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: hotel.name,
          description: hotel.overview,
          address: { "@type": "PostalAddress", addressLocality: hotel.location, addressCountry: countryLabel },
        }}
      />

      <div className="relative h-72 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${getDestinationImage(hotel.image)})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <p className="text-primary-foreground/80 text-sm mb-1 flex items-center gap-1"><MapPin className="w-4 h-4" />{hotel.location}, {countryLabel}</p>
            <h1 className="text-primary-foreground">{hotel.name}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[
          { label: "Hotels & Lodges", href: "/hotels" },
          { label: hotel.name },
        ]} />
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="mb-4">Hotel Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{hotel.overview}</p>
            </section>

            <section>
              <h2 className="mb-4">Room Types</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {hotel.roomTypes.map((room) => (
                  <div key={room} className="bg-card border border-border rounded-xl p-5 flex items-center gap-3">
                    <Bed className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-heading font-bold">{room}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4">Amenities</h2>
              <div className="flex flex-wrap gap-3">
                {hotel.amenities.map((a) => (
                  <span key={a} className="inline-flex items-center gap-1.5 bg-muted px-4 py-2 rounded-full text-sm">
                    <Check className="w-4 h-4 text-primary" />{a}
                  </span>
                ))}
              </div>
            </section>

            {nearbySafaris.length > 0 && (
              <section>
                <h2 className="mb-4">Nearby Safari Tours</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {nearbySafaris.map((s) => (
                    <Link key={s.id} to={`/safari/${s.slug}`} className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
                      <h3 className="text-sm font-heading font-bold">{s.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{s.duration}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24 space-y-4">
              <h3 className="text-center">Book This Hotel</h3>
              {hotel.priceFrom && (
                <p className="text-center text-xl font-heading font-bold text-primary">From {hotel.priceFrom} <span className="text-sm font-normal text-muted-foreground">/ night</span></p>
              )}
              <Link to="/booking" className="block w-full bg-accent text-accent-foreground py-3 rounded-full font-heading font-bold text-center hover:brightness-110 transition-all shadow-md">
                <Calendar className="w-4 h-4 inline mr-2" />Check Availability
              </Link>
              <a
                href={whatsappLink(`Hi! I'm interested in booking ${hotel.name} in ${hotel.location}. Please send availability and rates.`)}
                target="_blank" rel="noopener noreferrer"
                className="whatsapp-btn w-full justify-center rounded-full"
              >
                <MessageCircle className="w-5 h-5" /> Inquire on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default HotelDetail;
