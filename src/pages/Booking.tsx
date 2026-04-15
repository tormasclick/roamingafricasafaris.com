import { useState } from "react";
import { Calendar, Users, MapPin, DollarSign, MessageSquare, Send, MessageCircle, ChevronRight, ChevronLeft, CheckCircle, CreditCard, Phone } from "lucide-react";
import { whatsappLink, PHONE, EMAIL } from "@/data/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarWidget } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

const steps = ["Select Safari", "Traveler Details", "Booking Summary", "Payment"];

const destinations = [
  "Masai Mara", "Amboseli", "Lake Nakuru", "Serengeti", "Ngorongoro", "Zanzibar",
  "Bwindi (Gorilla Trekking)", "Tsavo", "Samburu", "Tarangire", "Multiple Destinations", "Not Sure — Need Advice",
];

const accommodationOptions = ["Budget Camping", "Mid-Range Lodge", "Luxury Lodge", "Tented Camp", "No Preference"];

const Booking = () => {
  const [step, setStep] = useState(0);
  const [travelDate, setTravelDate] = useState<Date>();
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", nationality: "",
    destination: "", adults: "2", children: "0", accommodation: "", budget: "", requests: "",
    paymentMethod: "",
  });

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const canProceed = () => {
    if (step === 0) return form.destination && travelDate;
    if (step === 1) return form.firstName && form.lastName && form.email;
    if (step === 2) return true;
    if (step === 3) return form.paymentMethod;
    return false;
  };

  const handleSubmit = () => {
    if (form.paymentMethod === "whatsapp") {
      const msg = `Safari Booking:\nName: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nNationality: ${form.nationality}\nDestination: ${form.destination}\nDate: ${travelDate ? format(travelDate, "PPP") : "TBD"}\nAdults: ${form.adults}\nChildren: ${form.children}\nAccommodation: ${form.accommodation}\nBudget: ${form.budget}\nRequests: ${form.requests}`;
      window.open(whatsappLink(msg), "_blank");
    }
    toast({ title: "Booking Submitted!", description: "We'll confirm your safari booking within 24 hours." });
    setStep(4); // confirmation
  };

  const inputClass = "w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:ring-2 focus:ring-primary outline-none";
  const labelClass = "block text-sm font-heading font-bold mb-2";

  return (
    <>
      <SEO title="Book Your Safari | Step-by-Step Booking" description="Book your East African safari in minutes. Select your destination, enter traveler details, and choose your payment method." />

      <div className="safari-gradient py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-primary-foreground mb-4">Book Your Safari</h1>
          <p className="text-primary-foreground opacity-80 max-w-2xl mx-auto">Complete your booking in just a few steps. Our team will confirm within 24 hours.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: "Book Safari" }]} />
      </div>

      {/* Step Indicator */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-2 max-w-2xl mx-auto">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-heading font-bold transition-colors",
                i < step ? "bg-secondary text-secondary-foreground" :
                i === step ? "bg-primary text-primary-foreground" :
                "bg-muted text-muted-foreground"
              )}>
                {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
              </div>
              <span className="text-xs font-heading hidden sm:inline">{s}</span>
              {i < steps.length - 1 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24 lg:pb-12">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-6 md:p-8">

          {/* Step 0: Select Safari */}
          {step === 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl">Select Your Safari</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={cn(labelClass, "flex items-center gap-1")}><MapPin className="w-4 h-4" />Destination *</label>
                  <select required value={form.destination} onChange={(e) => update("destination", e.target.value)} className={inputClass}>
                    <option value="">Select destination</option>
                    {destinations.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className={cn(labelClass, "flex items-center gap-1")}><Calendar className="w-4 h-4" />Travel Date *</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal h-12", !travelDate && "text-muted-foreground")}>
                        <Calendar className="mr-2 h-4 w-4" />
                        {travelDate ? format(travelDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarWidget mode="single" selected={travelDate} onSelect={setTravelDate} initialFocus className="p-3 pointer-events-auto" disabled={(date) => date < new Date()} />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className={cn(labelClass, "flex items-center gap-1")}><Users className="w-4 h-4" />Adults *</label>
                  <input type="number" min="1" value={form.adults} onChange={(e) => update("adults", e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Children (under 12)</label>
                  <input type="number" min="0" value={form.children} onChange={(e) => update("children", e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Accommodation Preference</label>
                  <select value={form.accommodation} onChange={(e) => update("accommodation", e.target.value)} className={inputClass}>
                    <option value="">Select preference</option>
                    {accommodationOptions.map((a) => <option key={a}>{a}</option>)}
                  </select>
                </div>
                <div>
                  <label className={cn(labelClass, "flex items-center gap-1")}><DollarSign className="w-4 h-4" />Budget Range</label>
                  <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className={inputClass}>
                    <option value="">Select budget</option>
                    <option>Under $1,000</option><option>$1,000 - $2,000</option><option>$2,000 - $5,000</option><option>$5,000 - $10,000</option><option>$10,000+</option><option>Flexible</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Traveler Details */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl">Traveler Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input type="text" required value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass} placeholder="John" />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input type="text" required value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass} placeholder="Doe" />
                </div>
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} placeholder="john@example.com" />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} placeholder="+1 234 567 890" />
                </div>
                <div>
                  <label className={labelClass}>Nationality</label>
                  <input type="text" value={form.nationality} onChange={(e) => update("nationality", e.target.value)} className={inputClass} placeholder="e.g. American" />
                </div>
              </div>
              <div>
                <label className={cn(labelClass, "flex items-center gap-1")}><MessageSquare className="w-4 h-4" />Special Requests</label>
                <textarea rows={3} value={form.requests} onChange={(e) => update("requests", e.target.value)} className={inputClass} placeholder="Dietary requirements, special interests, mobility needs..." />
              </div>
            </div>
          )}

          {/* Step 2: Booking Summary */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl">Booking Summary</h2>
              <div className="bg-muted rounded-lg p-6 space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <span className="font-heading font-bold">Destination:</span><span>{form.destination}</span>
                  <span className="font-heading font-bold">Travel Date:</span><span>{travelDate ? format(travelDate, "PPP") : "TBD"}</span>
                  <span className="font-heading font-bold">Travelers:</span><span>{form.adults} Adults, {form.children} Children</span>
                  <span className="font-heading font-bold">Accommodation:</span><span>{form.accommodation || "No preference"}</span>
                  <span className="font-heading font-bold">Budget:</span><span>{form.budget || "Not specified"}</span>
                  <span className="font-heading font-bold">Name:</span><span>{form.firstName} {form.lastName}</span>
                  <span className="font-heading font-bold">Email:</span><span>{form.email}</span>
                  <span className="font-heading font-bold">Phone:</span><span>{form.phone || "Not provided"}</span>
                  <span className="font-heading font-bold">Nationality:</span><span>{form.nationality || "Not specified"}</span>
                </div>
                {form.requests && (
                  <div className="pt-3 border-t border-border">
                    <span className="font-heading font-bold">Special Requests:</span>
                    <p className="mt-1 text-muted-foreground">{form.requests}</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground">Please review your details above before proceeding to payment.</p>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl">Choose Payment Method</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: "visa", label: "Visa / Mastercard", icon: <CreditCard className="w-6 h-6" />, desc: "Pay securely with your credit or debit card", logos: true },
                  { id: "mpesa", label: "M-Pesa", icon: <Phone className="w-6 h-6" />, desc: "Pay via M-Pesa mobile money" },
                  { id: "whatsapp", label: "Pay Later / Inquire", icon: <MessageCircle className="w-6 h-6" />, desc: "Submit inquiry and pay later after confirmation" },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => update("paymentMethod", method.id)}
                    className={cn(
                      "border-2 rounded-xl p-5 text-left transition-all",
                      form.paymentMethod === method.id ? "border-primary bg-primary/5" : "border-border hover:border-secondary"
                    )}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {method.icon}
                      <span className="font-heading font-bold">{method.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{method.desc}</p>
                    {method.logos && (
                      <div className="flex gap-2 mt-3">
                        <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6" />
                        <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="text-center py-8 space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-secondary/20 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="text-2xl">Booking Submitted!</h2>
              <p className="text-muted-foreground max-w-md mx-auto">Thank you, {form.firstName}! Our safari experts will review your booking and get back to you within 24 hours with a confirmed itinerary and quote.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href={whatsappLink(`Hi! I just submitted a booking for ${form.destination}. My name is ${form.firstName} ${form.lastName}.`)} target="_blank" rel="noopener noreferrer" className="whatsapp-btn justify-center">
                  <MessageCircle className="w-5 h-5" /> Follow Up on WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* Navigation */}
          {step < 4 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                className="flex items-center gap-1 text-sm font-heading font-bold text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="flex items-center gap-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-bold text-sm disabled:opacity-50 hover:bg-secondary transition-colors"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-heading font-bold text-sm disabled:opacity-50 hover:brightness-110 transition-all"
                >
                  <Send className="w-4 h-4" /> Complete Booking
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Booking;
