import { Link } from "react-router-dom";
import { whatsappLink, COMPANY, PHONE, EMAIL, LOCATION } from "@/data/constants";
import { MessageCircle, Award, Users, MapPin, Globe, Heart, Shield } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import heroImg from "@/assets/hero-safari.jpg";

const About = () => (
  <>
    <SEO title="About Us | Your Trusted East African Safari Operator" description={`Learn about ${COMPANY}, your trusted safari operator based in Nairobi, Kenya. We offer expertly guided tours across Kenya, Tanzania, and Uganda.`} />

    <div className="relative h-64 md:h-80" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-4 pb-8">
          <h1 className="text-primary-foreground">About Us</h1>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4">
      <Breadcrumbs items={[{ label: "About" }]} />
    </div>

    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        <section>
          <h2 className="mb-4">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {COMPANY} is a premier safari operator based in {LOCATION}, specializing in unforgettable wildlife adventures across East Africa. With years of experience and deep knowledge of Kenya, Tanzania, and Uganda, we craft personalized safari itineraries that bring you face-to-face with Africa's most magnificent wildlife and landscapes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From the sweeping plains of the Masai Mara and the snow-capped peaks of Kilimanjaro to the misty forests of Bwindi where mountain gorillas roam, we open doors to experiences that will stay with you forever. Our team of experienced guides, drivers, and safari consultants are passionate about sharing the beauty and wonder of East Africa with travelers from around the world.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: "Our Mission", desc: "To provide authentic, sustainable, and unforgettable safari experiences that showcase the best of East Africa while supporting local communities and conservation." },
            { icon: Heart, title: "Our Values", desc: "We believe in responsible tourism, fair pricing, exceptional service, and creating meaningful connections between travelers and the natural world." },
            { icon: Shield, title: "Our Promise", desc: "Every safari is backed by our commitment to safety, quality, and personalized attention. We're with you every step of the journey." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-6">
              <Icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <section className="section-beige rounded-xl p-8">
          <h2 className="mb-6 text-center">Why Travel With Us?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Award, text: "Licensed and registered safari operator" },
              { icon: Users, text: "Expert English-speaking safari guides" },
              { icon: MapPin, text: "Locally based in Nairobi with deep regional knowledge" },
              { icon: Shield, text: "Endorsed by TripAdvisor, SafariBookings, and Tourism Kenya" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4">Contact Information</h2>
          <div className="space-y-2 text-muted-foreground">
            <p><strong>Phone:</strong> {PHONE}</p>
            <p><strong>Email:</strong> {EMAIL}</p>
            <p><strong>Location:</strong> {LOCATION}</p>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/booking" className="bg-safari-gold text-safari-dark px-8 py-3 rounded-lg font-heading font-bold text-center hover:brightness-110 transition-all">
            Plan My Safari
          </Link>
          <a href={whatsappLink("Hi! I'd like to learn more about Roaming Africa Tours.")} target="_blank" rel="noopener noreferrer" className="whatsapp-btn justify-center">
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </>
);

export default About;
