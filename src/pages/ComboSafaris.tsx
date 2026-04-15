import { Link } from "react-router-dom";
import { whatsappLink } from "@/data/constants";
import { MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { getDestinationImage } from "@/data/images";

const ComboSafaris = () => (
  <>
    <SEO title="Combo Safaris | Kenya Tanzania Combined Tours" description="Combine the best of Kenya and Tanzania in one epic safari adventure. Visit Masai Mara, Serengeti, Ngorongoro Crater and more." />

    <div className="relative h-64 md:h-80" style={{ backgroundImage: `url(${getDestinationImage("serengeti")})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-4 pb-8">
          <h1 className="text-primary-foreground">Combo Safaris</h1>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4">
      <Breadcrumbs items={[{ label: "Combo Safaris" }]} />
    </div>

    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl space-y-8">
        <p className="text-muted-foreground leading-relaxed">
          Why choose between Kenya and Tanzania when you can experience both? Our combo safaris combine the best of two countries into one seamless adventure. Cross the border between the Masai Mara and the Serengeti, explore the Ngorongoro Crater, and end your trip on the beaches of Zanzibar. These itineraries are designed for travelers who want the ultimate East African safari experience.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/combo-safaris/kenya-tanzania" className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src={getDestinationImage("masai-mara")} alt="Kenya Tanzania Combined" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6">
              <h2 className="text-xl mb-2 group-hover:text-primary transition-colors">Kenya & Tanzania Combined</h2>
              <p className="text-muted-foreground text-sm">Start in Kenya's Masai Mara and cross into Tanzania's Serengeti and Ngorongoro Crater.</p>
            </div>
          </Link>

          <Link to="/combo-safaris/tanzania-kenya" className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src={getDestinationImage("ngorongoro")} alt="Tanzania Kenya Combined" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6">
              <h2 className="text-xl mb-2 group-hover:text-primary transition-colors">Tanzania & Kenya Combined</h2>
              <p className="text-muted-foreground text-sm">Begin in Tanzania's northern circuit and finish in Kenya's iconic Masai Mara.</p>
            </div>
          </Link>
        </div>

        <div className="section-brown rounded-xl p-10 text-center">
          <h2 className="mb-4">Want a Custom Combo Safari?</h2>
          <p className="opacity-80 mb-6">We can create a bespoke itinerary combining any destinations across East Africa.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="bg-safari-gold text-safari-dark px-8 py-3 rounded-lg font-heading font-bold hover:brightness-110 transition-all">Request Quote</Link>
            <a href={whatsappLink("Hi! I'm interested in a combo Kenya-Tanzania safari.")} target="_blank" rel="noopener noreferrer" className="whatsapp-btn justify-center">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ComboSafaris;
