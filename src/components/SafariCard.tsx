import { Link } from "react-router-dom";
import { getDestinationImage } from "@/data/images";
import { Clock, ArrowRight } from "lucide-react";
import type { SafariPackage } from "@/data/safariPackages";

const SafariCard = ({ pkg }: { pkg: SafariPackage }) => (
  <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
    <div className="relative overflow-hidden h-52">
      <img
        src={getDestinationImage(pkg.image)}
        alt={pkg.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
        width={400}
        height={208}
      />
      <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">
        {pkg.country.charAt(0).toUpperCase() + pkg.country.slice(1)}
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
        <Clock className="w-4 h-4" />
        <span>{pkg.duration}</span>
      </div>
      <h3 className="text-lg leading-snug mb-2 group-hover:text-primary transition-colors">{pkg.name}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{pkg.shortDescription}</p>
      <Link
        to={`/safari/${pkg.slug}`}
        className="inline-flex items-center gap-1 text-sm font-heading font-bold text-primary hover:text-safari-green-light transition-colors"
      >
        View Details <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

export default SafariCard;
