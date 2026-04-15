import { useState } from "react";
import { Calendar, Users, MapPin, DollarSign, MessageSquare, Send, MessageCircle } from "lucide-react";
import { whatsappLink, PHONE, EMAIL } from "@/data/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { toast } from "@/hooks/use-toast";

const Booking = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", destination: "", travelDate: "", adults: "2", children: "0", budget: "", requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Safari Inquiry:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDestination: ${form.destination}\nDate: ${form.travelDate}\nAdults: ${form.adults}\nChildren: ${form.children}\nBudget: ${form.budget}\nRequests: ${form.requests}`;
    window.open(whatsappLink(msg), "_blank");
    toast({ title: "Inquiry Sent!", description: "We'll get back to you within 24 hours." });
  };

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  return (
    <>
      <SEO title="Book Your Safari | Free Quote" description="Submit your safari booking inquiry. Choose your destination, travel dates, and preferences. Get a free custom quote within 24 hours." />

      <div className="safari-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-primary-foreground mb-4">Book Your Safari</h1>
          <p className="text-primary-foreground opacity-80 max-w-2xl mx-auto">Fill out the form below and our safari experts will create a custom itinerary just for you. We respond within 24 hours!</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Book Safari" }]} />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-card border border-border rounded-xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-heading font-bold mb-2">Full Name *</label>
                <input type="text" required value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-heading font-bold mb-2">Email Address *</label>
                <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-heading font-bold mb-2">Phone Number</label>
                <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="+1 234 567 890" />
              </div>
              <div>
                <label className="block text-sm font-heading font-bold mb-2 flex items-center gap-1"><MapPin className="w-4 h-4" />Destination *</label>
                <select required value={form.destination} onChange={(e) => update("destination", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:ring-2 focus:ring-primary outline-none">
                  <option value="">Select destination</option>
                  <option>Masai Mara</option><option>Amboseli</option><option>Lake Nakuru</option><option>Serengeti</option><option>Ngorongoro</option><option>Zanzibar</option><option>Bwindi (Gorilla Trekking)</option><option>Tsavo</option><option>Samburu</option><option>Multiple Destinations</option><option>Not Sure — Need Advice</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-heading font-bold mb-2 flex items-center gap-1"><Calendar className="w-4 h-4" />Travel Date *</label>
                <input type="date" required value={form.travelDate} onChange={(e) => update("travelDate", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-heading font-bold mb-2 flex items-center gap-1"><DollarSign className="w-4 h-4" />Budget Range</label>
                <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:ring-2 focus:ring-primary outline-none">
                  <option value="">Select budget</option>
                  <option>Under $1,000</option><option>$1,000 - $2,000</option><option>$2,000 - $5,000</option><option>$5,000 - $10,000</option><option>$10,000+</option><option>Flexible</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-heading font-bold mb-2 flex items-center gap-1"><Users className="w-4 h-4" />Number of Adults *</label>
                <input type="number" min="1" required value={form.adults} onChange={(e) => update("adults", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-heading font-bold mb-2">Number of Children</label>
                <input type="number" min="0" value={form.children} onChange={(e) => update("children", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-heading font-bold mb-2 flex items-center gap-1"><MessageSquare className="w-4 h-4" />Special Requests</label>
              <textarea rows={4} value={form.requests} onChange={(e) => update("requests", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Tell us about your ideal safari, any special interests, dietary requirements, etc." />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button type="submit" className="bg-safari-gold text-safari-dark px-8 py-3 rounded-lg font-heading font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                <Send className="w-5 h-5" /> Submit Inquiry
              </button>
              <a href={whatsappLink("Hi! I'd like to book a safari.")} target="_blank" rel="noopener noreferrer" className="whatsapp-btn justify-center">
                <MessageCircle className="w-5 h-5" /> Quick Chat on WhatsApp
              </a>
            </div>
          </form>

          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="mb-4">Need Help?</h3>
              <p className="text-muted-foreground text-sm mb-4">Our safari experts are ready to help you plan the perfect trip.</p>
              <div className="space-y-3 text-sm">
                <p><strong>Phone:</strong> {PHONE}</p>
                <p><strong>Email:</strong> {EMAIL}</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
              </div>
            </div>
            <div className="section-beige rounded-xl p-6">
              <h3 className="mb-4">What Happens Next?</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="w-6 h-6 rounded-full safari-gradient text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>We receive your inquiry and review your preferences</li>
                <li className="flex gap-3"><span className="w-6 h-6 rounded-full safari-gradient text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>Our expert creates a custom itinerary and quote</li>
                <li className="flex gap-3"><span className="w-6 h-6 rounded-full safari-gradient text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>We refine the plan together until it's perfect</li>
                <li className="flex gap-3"><span className="w-6 h-6 rounded-full safari-gradient text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>Confirm your booking and prepare for adventure!</li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Booking;
