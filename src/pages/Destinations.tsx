import { Link } from "react-router-dom";
import { destinations } from "@/data/destinations";
import { getDestinationImage } from "@/data/images";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";

const Destinations = () => (
  <>
    <SEO title="Safari Destinations in East Africa" description="Explore top safari destinations across Kenya, Tanzania, and Uganda. From the Masai Mara to Zanzibar, find your perfect African safari destination." />

    <div className="section-green py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-primary-foreground mb-4">Safari Destinations</h1>
        <p className="text-primary-foreground opacity-80 max-w-2xl mx-auto">Discover the most spectacular wildlife and landscape destinations across East Africa.</p>
      </div>
    </div>

    <div className="container mx-auto px-4">
      <Breadcrumbs items={[{ label: "Destinations" }]} />
    </div>

    <div className="container mx-auto px-4 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <Link key={dest.id} to={`/destination/${dest.slug}`} className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border">
            <div className="relative h-56 overflow-hidden">
              <img src={getDestinationImage(dest.image)} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={400} height={224} />
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">{dest.country}</div>
            </div>
            <div className="p-5">
              <h2 className="text-xl mb-2 group-hover:text-primary transition-colors">{dest.name}</h2>
              <p className="text-muted-foreground text-sm line-clamp-2">{dest.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
);

export default Destinations;
