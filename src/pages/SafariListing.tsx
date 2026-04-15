import { getPackagesByCountry } from "@/data/safariPackages";
import SafariCard from "@/components/SafariCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { getDestinationImage } from "@/data/images";
import { Link } from "react-router-dom";
import { whatsappLink } from "@/data/constants";
import { MessageCircle } from "lucide-react";

interface SafariListingProps {
  country: "kenya" | "tanzania" | "uganda";
  title: string;
  description: string;
  heroImage: string;
  seoTitle: string;
  seoDesc: string;
  content: string;
}

const SafariListing = ({ country, title, description, heroImage, seoTitle, seoDesc, content }: SafariListingProps) => {
  const packages = getPackagesByCountry(country);

  return (
    <>
      <SEO title={seoTitle} description={seoDesc} />

      <div className="relative h-64 md:h-80" style={{ backgroundImage: `url(${getDestinationImage(heroImage)})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <h1 className="text-primary-foreground">{title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: title }]} />
      </div>

      <div className="container mx-auto px-4 py-10">
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-4xl">{content}</p>

        {packages.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {packages.map((pkg) => <SafariCard key={pkg.id} pkg={pkg} />)}
          </div>
        ) : (
          <p className="text-muted-foreground mb-12">Safari packages coming soon. Contact us for custom itineraries.</p>
        )}

        <div className="section-brown rounded-xl p-10 text-center">
          <h2 className="mb-4">Can't Find What You're Looking For?</h2>
          <p className="opacity-80 mb-6">We specialize in custom safari itineraries. Tell us your dream trip and we'll make it happen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="bg-safari-gold text-safari-dark px-8 py-3 rounded-lg font-heading font-bold hover:brightness-110 transition-all">Request Custom Safari</Link>
            <a href={whatsappLink(`Hi! I'm interested in ${title}. Can you help?`)} target="_blank" rel="noopener noreferrer" className="whatsapp-btn justify-center">
              <MessageCircle className="w-5 h-5" /> Chat with Expert
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export const KenyaSafaris = () => (
  <SafariListing
    country="kenya"
    title="Kenya Safaris"
    heroImage="masai-mara"
    seoTitle="Best Kenya Safari Packages & Tours 2025"
    seoDesc="Explore the best Kenya safari packages. Visit Masai Mara, Amboseli, Lake Nakuru and more with expert guided tours from Nairobi."
    description="Kenya is the ultimate safari destination in East Africa."
    content="Kenya is the birthplace of the safari and remains one of the world's premier wildlife destinations. From the vast plains of the Masai Mara, where the Great Migration unfolds each year, to the elephant-filled landscapes of Amboseli with Mount Kilimanjaro as a backdrop, Kenya offers unparalleled wildlife viewing. Our Kenya safaris range from budget-friendly day trips to luxury fly-in adventures, all led by experienced local guides who know every corner of these magnificent parks. Whether you want to witness the Big Five, explore the flamingo-lined shores of Lake Nakuru, or discover the remote beauty of Samburu, we have the perfect Kenya safari for you."
  />
);

export const TanzaniaSafaris = () => (
  <SafariListing
    country="tanzania"
    title="Tanzania Safaris"
    heroImage="serengeti"
    seoTitle="Best Tanzania Safari Packages & Tours 2025"
    seoDesc="Discover Tanzania safari packages including Serengeti, Ngorongoro Crater, Zanzibar beaches. Expert-guided tours with competitive pricing."
    description="Tanzania offers some of Africa's most iconic safari experiences."
    content="Tanzania is home to some of Africa's most iconic landscapes and wildlife spectacles. The Serengeti's endless plains host the world-famous Great Migration, while the Ngorongoro Crater — a natural amphitheater formed by a collapsed volcano — shelters an incredible concentration of wildlife including all of the Big Five. Beyond the northern circuit, Tarangire National Park enchants visitors with its ancient baobab trees and massive elephant herds. And when the safari is over, the pristine beaches of Zanzibar offer the perfect tropical finale. Our Tanzania safaris are carefully crafted to showcase the best of this magnificent country."
  />
);

export const UgandaSafaris = () => (
  <SafariListing
    country="uganda"
    title="Uganda Safaris"
    heroImage="bwindi"
    seoTitle="Best Uganda Safari & Gorilla Trekking Tours 2025"
    seoDesc="Experience Uganda gorilla trekking in Bwindi Forest. Book wildlife safaris, gorilla permits and adventure tours in the Pearl of Africa."
    description="Uganda — the Pearl of Africa — offers unique primate experiences."
    content="Uganda, Winston Churchill's 'Pearl of Africa,' offers a safari experience unlike any other in East Africa. The star attraction is mountain gorilla trekking in Bwindi Impenetrable National Park, where you can spend an hour with a habituated gorilla family in their natural rainforest habitat — truly one of the world's most extraordinary wildlife encounters. Beyond gorillas, Uganda offers chimpanzee tracking, tree-climbing lions in Queen Elizabeth National Park, the thundering Murchison Falls, and incredible birdwatching with over 1,000 species recorded. Our Uganda safaris combine these unique experiences into unforgettable itineraries."
  />
);

export default KenyaSafaris;
