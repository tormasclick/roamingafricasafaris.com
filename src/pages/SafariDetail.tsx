import { useParams, Link } from "react-router-dom";
import { getPackageBySlug } from "@/data/safariPackages";
import { getDestinationImage } from "@/data/images";
import { whatsappLink } from "@/data/constants";
import { Clock, Check, X, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

const SafariDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = getPackageBySlug(slug || "");

  if (!pkg) return <div className="container mx-auto px-4 py-20 text-center"><h1>Safari not found</h1><Link to="/" className="text-primary">Return home</Link></div>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: pkg.overview,
    touristType: "Safari",
    itinerary: { "@type": "ItemList", itemListElement: pkg.itinerary.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: d.title })) },
  };

  return (
    <>
      <SEO title={pkg.name} description={pkg.shortDescription} jsonLd={jsonLd} />

      {/* Hero */}
      <div className="relative h-72 md:h-96" style={{ backgroundImage: `url(${getDestinationImage(pkg.image)})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
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
            <section>
              <h2 className="mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{pkg.overview}</p>
            </section>

            <section>
              <h2 className="mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="flex gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full safari-gradient flex items-center justify-center text-primary-foreground font-heading font-bold">
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

            {pkg.faqs.length > 0 && (
              <section>
                <h2 className="mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {pkg.faqs.map((faq, i) => (
                    <div key={i} className="bg-card border border-border rounded-lg p-5">
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
              <Link to="/booking" className="block w-full bg-safari-gold text-safari-dark py-3 rounded-lg font-heading font-bold text-center hover:brightness-110 transition-all">
                <Calendar className="w-4 h-4 inline mr-2" />Book Now
              </Link>
              <a
                href={whatsappLink(`Hi! I'm interested in the ${pkg.name}. Please send more details.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" /> Plan on WhatsApp
              </a>
              <Link to="/contact" className="block text-center text-sm text-primary font-heading font-bold hover:underline">
                Ask a Question <ArrowRight className="w-3.5 h-3.5 inline" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default SafariDetail;
