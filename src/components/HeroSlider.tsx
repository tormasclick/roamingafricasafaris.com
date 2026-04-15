import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ChevronDown } from "lucide-react";
import { whatsappLink } from "@/data/constants";
import heroImg from "@/assets/hero-safari.jpg";

const slides = [
  {
    type: "video" as const,
    src: "https://videos.pexels.com/video-files/4434242/4434242-uhd_2560_1440_24fps.mp4",
    poster: heroImg,
  },
  {
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80",
  },
  {
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1920&q=80",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const scrollDown = () => {
    document.getElementById("safari-planner")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          {slide.type === "video" ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={slide.poster}
              className="w-full h-full object-cover"
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={slide.src}
              alt="Safari experience"
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          )}
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-primary-foreground mb-6 animate-fade-in-up">
          Discover Africa's Greatest Safari Adventures
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-body animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Explore Kenya, Tanzania and Uganda with local safari experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={scrollDown}
            className="bg-accent text-accent-foreground px-7 py-3 rounded-full font-heading font-bold text-base hover:brightness-110 transition-all shadow-lg"
          >
            Check Availability
          </button>
          <a
            href={whatsappLink("Hi! I'd like to plan a safari with Roaming Africa Tours.")}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-base justify-center rounded-full"
          >
            <MessageCircle className="w-5 h-5" /> Book via WhatsApp
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-accent w-8" : "bg-white/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-1.5 mb-1">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-[scroll-dot_2s_ease-in-out_infinite]" />
        </div>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};

export default HeroSlider;
