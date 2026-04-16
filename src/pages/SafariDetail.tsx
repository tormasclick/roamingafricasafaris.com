import { useParams, Link } from "react-router-dom";
import { getPackageBySlug } from "@/data/safariPackages";
import { getHotelsByDestination } from "@/data/hotels";
import { getDestinationImage } from "@/data/images";
import { whatsappLink } from "@/data/constants";
import { Clock, Check, X, MessageCircle, Calendar, ArrowRight, MapPin, Camera, Tent, Truck as TruckIcon } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

const wildlifeIcons: Record<string, string> = {
  Lion: "🦁", Elephant: "🐘", Giraffe: "🦒", Leopard: "🐆", Buffalo: "🐃",
  Rhino: "🦏", Zebra: "🦓", Hippo: "🦛", Cheetah: "🐆", Flamingo: "🦩",
  Wildebeest: "🐂", Crocodile: "🐊", Gorilla: "🦍",
};

const SafariDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = getPackageBySlug(slug || "");

  if (!pkg) return <div className="container mx-auto px-4 py-20 text-center"><h1>Safari not found</h1><Link to="/" className="text-primary">Return home</Link></div>;

  // Get accommodation options for the safari's destinations
  const accommodations = pkg.destinations.flatMap((d) =>
    getHotelsByDestination(d.toLowerCase().replace(/\s/g, "-"))
  );
  const budgetHotels = accommodations.filter((h) => h.tier === "budget");
  const midHotels = accommodations.filter((h) => h.tier === "mid-range");
  const luxuryHotels = accommodations.filter((h) => h.tier === "luxury");

  // Wildlife highlights based on destination
  const defaultWildlife = ["Lion", "Elephant", "Giraffe", "Leopard", "Buffalo"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: pkg.overview,
    touristType: "Safari",
    itinerary: { "@type": "ItemList", itemListElement: pkg.itinerary.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: d.title })) },
  };

  const galleryImages = [
    { src: getDestinationImage(pkg.image), alt: `${pkg.name} - Wildlife Safari` },
    { src: getDestinationImage(pkg.destinations[0]?.toLowerCase().replace(/\s/g, "-") || pkg.image), alt: `${pkg.destinations[0]} landscape` },
  ];

  return (
    <>
      <SEO title={pkg.name} description={pkg.shortDescription} jsonLd={jsonLd} />

      {/* Hero */}
      <div className="relative h-72 md:h-96" style={{ backgroundImage: `url(${getDestinationImage(pkg.image)})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="flex items-center gap-2 text-primary-foreground opacity-80 text-sm mb-2"><Clock className="w-4 h-4" />{pkg.duration}</div>
            <h1 className="text-primary-foreground">{pkg.name}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[
          { label: `${pkg.country.charAt(0).toUpperCase() + pkg.country.slice(1)} Safaris`, href: `/${pkg.country}-safaris` },
          { label: pkg.name },
        ]} />
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section>
              <h2 className="mb-4">Safari Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{pkg.overview}</p>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="mb-4 flex items-center gap-2"><Camera className="w-5 h-5 text-primary" /> Safari Gallery</h2>
              <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden h-40 md:h-52">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </section>

            {/* Day-by-Day Itinerary */}
            <section>
              <h2 className="mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="flex gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full safari-gradient flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                      Day {day.day}
                    </div>
                    <div className="flex-1 border-b border-border pb-6">
                      <h3 className="text-lg mb-2">{day.title}</h3>
                      <p className="text-muted-foreground text-sm">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Accommodation Options */}
            {accommodations.length > 0 && (
              <section>
                <h2 className="mb-4 flex items-center gap-2"><Tent className="w-5 h-5 text-primary" /> Accommodation Options</h2>
                <p className="text-muted-foreground text-sm mb-4">Choose your preferred accommodation tier for this safari:</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Budget", hotels: budgetHotels, color: "border-highlight" },
                    { label: "Mid-Range", hotels: midHotels, color: "border-secondary" },
                    { label: "Luxury", hotels: luxuryHotels, color: "border-accent" },
                  ].map(({ label, hotels: tierHotels, color }) => (
                    <div key={label} className={`bg-card border-2 ${color} rounded-xl p-4`}>
                      <h3 className="text-sm font-heading font-bold mb-2">{label}</h3>
                      {tierHotels.length > 0 ? (
                        <ul className="space-y-2">
                          {tierHotels.map((h) => (
                            <li key={h.id}>
                              <Link to={`/hotel/${h.slug}`} className="text-sm text-primary hover:underline">{h.name}</Link>
                              {h.priceFrom && <span className="text-xs text-muted-foreground ml-1">from {h.priceFrom}</span>}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-xs text-muted-foreground">Contact us for options</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Safari Vehicle */}
            <section>
              <h2 className="mb-4 flex items-center gap-2"><TruckIcon className="w-5 h-5 text-primary" /> Safari Vehicle</h2>
              <div className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row gap-4 items-start">
                <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80" alt="4×4 Safari Land Cruiser" className="w-full sm:w-40 h-28 object-cover rounded-lg" loading="lazy" />
                <div>
                  <h3 className="text-base mb-1">4×4 Land Cruiser</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />Pop-up roof for wildlife viewing</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />Professional driver guide</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />Radio communication system</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" />Cool box & first aid kit</li>
                  </ul>
                  <Link to="/vehicle/luxury-4x4-safari-land-cruiser" className="mt-2 inline-flex items-center gap-1 text-sm text-primary font-heading font-bold hover:underline">
                    View Vehicle Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Wildlife Highlights */}
            <section>
              <h2 className="mb-4">Wildlife Highlights</h2>
              <div className="flex flex-wrap gap-3">
                {defaultWildlife.map((animal) => (
                  <div key={animal} className="bg-muted rounded-xl px-4 py-3 flex items-center gap-2 text-sm font-heading font-bold">
                    <span className="text-2xl">{wildlifeIcons[animal] || "🐾"}</span>{animal}
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h2 className="mb-4">Inclusions</h2>
                <ul className="space-y-2">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="mb-4">Exclusions</h2>
                <ul className="space-y-2">
                  {pkg.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm"><X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            {/* FAQs */}
            {pkg.faqs.length > 0 && (
              <section>
                <h2 className="mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {pkg.faqs.map((faq, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-5">
                      <h3 className="text-base mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24 space-y-4">
              <h3 className="text-center">Book This Safari</h3>
              <p className="text-muted-foreground text-sm text-center">{pkg.duration} • {pkg.destinations.join(", ")}</p>
              <Link to="/booking" className="block w-full bg-accent text-accent-foreground py-3 rounded-full font-heading font-bold text-center hover:brightness-110 transition-all shadow-md">
                <Calendar className="w-4 h-4 inline mr-2" />Check Availability
              </Link>
              <Link to="/booking" className="block w-full bg-primary text-primary-foreground py-3 rounded-full font-heading font-bold text-center hover:bg-secondary transition-all shadow-md">
                Book Safari
              </Link>
              <a
                href={whatsappLink(`Hi! I'm interested in the ${pkg.name}. Please send more details.`)}
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

export default SafariDetail;
