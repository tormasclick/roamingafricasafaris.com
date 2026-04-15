import { useParams, Link } from "react-router-dom";
import { getDestinationBySlug } from "@/data/destinations";
import { safariPackages } from "@/data/safariPackages";
import { getDestinationImage } from "@/data/images";
import { whatsappLink } from "@/data/constants";
import { MessageCircle, MapPin, Calendar, Binoculars } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SafariCard from "@/components/SafariCard";
import SEO from "@/components/SEO";

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const dest = getDestinationBySlug(slug || "");

  if (!dest) return <div className="container mx-auto px-4 py-20 text-center"><h1>Destination not found</h1><Link to="/destinations" className="text-primary">View all destinations</Link></div>;

  const relatedPackages = safariPackages.filter((p) => p.destinations.some((d) => d.toLowerCase().includes(dest.name.toLowerCase().split(" ")[0])));

  return (
    <>
      <SEO title={`${dest.name} Safari Guide | Best Tours & Travel Tips`} description={dest.shortDescription} />

      <div className="relative h-72 md:h-96" style={{ backgroundImage: `url(${getDestinationImage(dest.image)})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="flex items-center gap-2 text-primary-foreground opacity-80 text-sm mb-2"><MapPin className="w-4 h-4" />{dest.country}</div>
            <h1 className="text-primary-foreground">{dest.name}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: dest.name }]} />
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{dest.overview}</p>
            </section>

            <section className="section-beige rounded-xl p-8">
              <h2 className="mb-4 flex items-center gap-2"><Binoculars className="w-6 h-6 text-primary" /> Wildlife Highlights</h2>
              <div className="flex flex-wrap gap-2">
                {dest.wildlife.map((w) => (
                  <span key={w} className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-heading">{w}</span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 flex items-center gap-2"><Calendar className="w-6 h-6 text-primary" /> Best Time to Visit</h2>
              <p className="text-muted-foreground">{dest.bestTime}</p>
            </section>

            <section>
              <h2 className="mb-4">Travel Tips</h2>
              <ul className="space-y-2">
                {dest.travelTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="w-2 h-2 bg-safari-gold rounded-full mt-1.5 flex-shrink-0" />{tip}
                  </li>
                ))}
              </ul>
            </section>

            {relatedPackages.length > 0 && (
              <section>
                <h2 className="mb-6">Safari Tours to {dest.name}</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedPackages.map((pkg) => <SafariCard key={pkg.id} pkg={pkg} />)}
                </div>
              </section>
            )}

            {dest.faqs.length > 0 && (
              <section>
                <h2 className="mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {dest.faqs.map((faq, i) => (
                    <div key={i} className="bg-card border border-border rounded-lg p-5">
                      <h3 className="text-base mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside>
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24 space-y-4">
              <h3 className="text-center">Plan Your {dest.name} Safari</h3>
              <Link to="/booking" className="block w-full bg-safari-gold text-safari-dark py-3 rounded-lg font-heading font-bold text-center hover:brightness-110 transition-all">
                Get Custom Quote
              </Link>
              <a
                href={whatsappLink(`Hi! I'm interested in visiting ${dest.name}. Can you help me plan?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default DestinationDetail;
