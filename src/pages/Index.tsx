import { Link } from "react-router-dom";
import { Search, MapPin, Calendar, Users, Clock, Compass, Shield, Award, Headphones, ArrowRight, MessageCircle } from "lucide-react";
import { getFeaturedPackages, getDayTrips } from "@/data/safariPackages";
import { destinations } from "@/data/destinations";
import { getDestinationImage } from "@/data/images";
import { whatsappLink, COMPANY } from "@/data/constants";
import SafariCard from "@/components/SafariCard";
import SEO from "@/components/SEO";

import heroImg from "@/assets/hero-safari.jpg";
import tripadvisor from "@/assets/partners/tripadvisor.png";
import safaribookings from "@/assets/partners/safaribookings.png";
import touristlink from "@/assets/partners/touristlink.png";
import magicalkenya from "@/assets/partners/magicalkenya.png";
import safarideal from "@/assets/partners/safarideal.png";
import tanzaniatourism from "@/assets/partners/tanzaniatourism.png";
import tra from "@/assets/partners/tra.png";
import eawls from "@/assets/partners/eawls.png";
import yourafricansafari from "@/assets/partners/yourafricansafari.png";

const featured = getFeaturedPackages();
const dayTrips = getDayTrips();
const topDestinations = destinations.slice(0, 8);

const partners = [
  { name: "TripAdvisor", img: tripadvisor },
  { name: "SafariBookings", img: safaribookings },
  { name: "TouristLink", img: touristlink },
  { name: "Magical Kenya", img: magicalkenya },
  { name: "SafariDeal", img: safarideal },
  { name: "Tanzania Tourism Board", img: tanzaniatourism },
  { name: "Tourism Regulatory Authority", img: tra },
  { name: "East African Wild Life Society", img: eawls },
  { name: "Your African Safari", img: yourafricansafari },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: COMPANY,
  url: "https://roamingafricasafaris.com",
  telephone: "+254722433910",
  email: "info@roamingafricasafaris.com",
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  description: "Premier safari operator offering tours across Kenya, Tanzania and Uganda.",
};

const Index = () => (
  <>
    <SEO
      title="Best African Safari Tours & Holiday Packages"
      description="Roaming Africa Tours & Safaris offers expertly planned safari holidays across Kenya, Tanzania & Uganda. Book Masai Mara, Serengeti, gorilla trekking & more."
      jsonLd={jsonLd}
    />

    {/* HERO */}
    <section className="relative min-h-[85vh] flex items-center justify-center" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-primary-foreground mb-6 animate-fade-in-up">
          Discover the Best African Adventure Safaris
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground opacity-90 mb-8 max-w-2xl mx-auto font-body">
          Roaming Africa Tours & Safaris is a well-organized safari operator offering unforgettable tours across Kenya, Tanzania, and Uganda. Let us plan your dream safari holiday.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking" className="bg-safari-gold text-safari-dark px-8 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-all shadow-lg">
            Help Me Plan My Safari
          </Link>
          <a
            href={whatsappLink("Hi! I'd like to plan a safari with Roaming Africa Tours.")}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-lg justify-center"
          >
            <MessageCircle className="w-5 h-5" /> Book on WhatsApp
          </a>
        </div>
      </div>
    </section>

    {/* SEARCH BAR */}
    <section className="relative -mt-10 z-20 px-4">
      <div className="container mx-auto max-w-5xl bg-popover rounded-2xl shadow-2xl p-6 border border-border">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { icon: MapPin, label: "Destination", placeholder: "Where to?" },
            { icon: Compass, label: "Trip Type", placeholder: "Safari type" },
            { icon: Clock, label: "Duration", placeholder: "How long?" },
            { icon: Calendar, label: "Travel Date", placeholder: "When?" },
            { icon: Users, label: "Guests", placeholder: "How many?" },
          ].map(({ icon: Icon, label, placeholder }) => (
            <div key={label} className="flex flex-col">
              <label className="text-xs font-heading font-bold text-muted-foreground mb-1">{label}</label>
              <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2.5 bg-background">
                <Icon className="w-4 h-4 text-primary" />
                <input type="text" placeholder={placeholder} className="text-sm bg-transparent outline-none w-full" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Link to="/destinations" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-heading font-bold flex items-center gap-2 hover:brightness-110 transition-all">
            <Search className="w-5 h-5" /> Search Tours
          </Link>
        </div>
      </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="section-beige py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4">Why Choose Roaming Africa?</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">With years of experience organizing East African safaris, we ensure every journey exceeds your expectations.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: "Best Holiday Planning", desc: "Our expert safari consultants craft personalized itineraries tailored to your interests, budget, and travel style for an unforgettable African adventure." },
            { icon: Shield, title: "Best Price Guaranteed", desc: "We offer competitive pricing with no hidden costs. Get the best value for your safari with transparent pricing and flexible payment options." },
            { icon: Headphones, title: "24/7 Customer Service", desc: "Our dedicated support team is available around the clock to assist you before, during, and after your safari. We're always just a call away." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8 rounded-xl shadow-md text-center border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full safari-gradient flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FEATURED DEALS */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4">Best Featured Safari Deals</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Explore our most popular safari packages across East Africa. Each tour is carefully designed to showcase the best wildlife and landscapes.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((pkg) => (
            <SafariCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/kenya-safaris" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-heading font-bold hover:brightness-110 transition-all">
            View All Safaris <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>

    {/* POPULAR DESTINATIONS */}
    <section className="section-green py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4 text-primary-foreground">Popular Safari Destinations</h2>
        <p className="text-center text-primary-foreground opacity-80 mb-12 max-w-2xl mx-auto">From the iconic Masai Mara to the exotic beaches of Zanzibar, discover East Africa's most spectacular destinations.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topDestinations.map((dest) => (
            <Link key={dest.id} to={`/destination/${dest.slug}`} className="group relative rounded-xl overflow-hidden h-64 block">
              <img src={getDestinationImage(dest.image)} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={400} height={256} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-primary-foreground text-lg">{dest.name}</h3>
                <p className="text-primary-foreground opacity-70 text-sm">{dest.country}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* DAY TRIPS */}
    <section className="section-beige py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4">Explore Day Trips</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Short on time? Our exciting day trips offer incredible safari experiences without overnight stays.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dayTrips.map((pkg) => (
            <SafariCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA BAND */}
    <section className="section-brown py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4">Ready to Start Your African Safari Adventure?</h2>
        <p className="opacity-80 mb-8 max-w-2xl mx-auto">Let our experienced safari experts help you plan the trip of a lifetime. Get a custom quote tailored to your preferences.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking" className="bg-safari-gold text-safari-dark px-8 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-all">
            Get Custom Safari Quote
          </Link>
          <a
            href={whatsappLink("Hi! I need help planning my East Africa safari.")}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-lg justify-center"
          >
            <MessageCircle className="w-5 h-5" /> Chat with Safari Expert
          </a>
        </div>
      </div>
    </section>

    {/* PARTNERS */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4">Recommended and Endorsed By</h2>
        <p className="text-center text-muted-foreground mb-12">We are proud to be recognized by leading travel organizations and platforms.</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((p) => (
            <img key={p.name} src={p.img} alt={p.name} className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Index;
