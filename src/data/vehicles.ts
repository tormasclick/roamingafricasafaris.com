export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  overview: string;
  capacity: string;
  features: string[];
  idealFor: string[];
  priceInfo?: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "open-sided-land-cruiser",
    slug: "4x4-open-sided-land-cruiser",
    name: "4×4 Open Sided Land Cruiser",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    shortDescription: "The ultimate open-air safari vehicle for game viewing in East Africa's national parks.",
    overview: "Our 4×4 Open Sided Land Cruisers are specially designed for game drives in East Africa's national parks and reserves. The open sides provide unobstructed views for photography and wildlife observation. These vehicles are rugged, reliable, and driven by experienced professional guides with deep knowledge of local wildlife behavior. Perfect for private safaris in the Masai Mara, Serengeti, and other premier parks.",
    capacity: "6-7 passengers",
    features: ["Open sides for panoramic views", "Pop-up roof for standing photography", "Professional driver guide", "Radio communication system", "Cool box for drinks", "First aid kit", "Fire extinguisher", "Binoculars available"],
    idealFor: ["Private safari tours", "Wildlife photography", "Small group safaris", "Honeymoon safaris"],
  },
  {
    id: "luxury-land-cruiser",
    slug: "luxury-4x4-safari-land-cruiser",
    name: "Luxury 4×4 Safari Land Cruiser",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
    shortDescription: "Premium safari Land Cruiser available for hire in Kenya and Tanzania.",
    overview: "Our Luxury 4×4 Safari Land Cruisers represent the pinnacle of safari vehicle comfort. These vehicles feature custom interiors, enhanced suspension systems, and premium amenities for discerning travelers. Available for hire in Nairobi (Kenya) and Arusha (Tanzania), each vehicle comes with an experienced professional driver guide. The vehicles are meticulously maintained to the highest standards of safety and comfort.",
    capacity: "4-6 passengers",
    features: ["Luxury interior with canvas seats", "Pop-up roof for wildlife viewing", "Charging ports for devices", "Mini fridge", "Professional driver guide", "Enhanced shock absorbers", "Double springs", "Tubeless tires", "Toolkit and spare parts", "High frequency radio"],
    idealFor: ["Luxury private safaris", "VIP tours", "Corporate groups", "Honeymoon travel", "Tour operators"],
  },
  {
    id: "accessible-safari-vehicle",
    slug: "accessible-4x4-safari-vehicle",
    name: "Accessible 4×4 Safari Vehicle",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    shortDescription: "Modified safari vehicle designed for travelers with mobility needs.",
    overview: "Our Accessible 4×4 Safari Vehicles are specially modified to accommodate travelers with mobility challenges. These vehicles feature wheelchair ramps, secure wheelchair anchoring systems, and extra-wide doors for easy entry. We believe everyone deserves an unforgettable safari experience, and our accessible vehicles ensure comfort and safety without compromising on the game viewing experience.",
    capacity: "4-5 passengers + wheelchair",
    features: ["Wheelchair ramp", "Secure wheelchair anchoring", "Extra-wide doors", "Pop-up roof", "Professional driver guide", "First aid kit", "Radio communication"],
    idealFor: ["Travelers with mobility needs", "Wheelchair users", "Elderly travelers", "Accessibility tours"],
  },
  {
    id: "safari-tour-van",
    slug: "safari-tour-vans-kenya",
    name: "Safari Tour Vans for Hire",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    shortDescription: "Reliable and comfortable safari minivans for group tours across Kenya.",
    overview: "Our Safari Tour Vans are the most popular choice for budget-friendly safaris in Kenya. These specially modified Toyota HiAce and Nissan Urvan minivans feature pop-up roofs for game viewing, comfortable seating, and ample luggage space. Ideal for group safaris, family trips, and budget-conscious travelers who want a great safari experience at competitive rates.",
    capacity: "7-8 passengers",
    features: ["Pop-up roof for game viewing", "Comfortable reclining seats", "Ample luggage space", "Professional driver guide", "Cool box", "First aid kit", "Seat belts"],
    idealFor: ["Group safaris", "Family tours", "Budget travelers", "School trips", "Corporate outings"],
  },
  {
    id: "overland-safari-truck",
    slug: "overland-safari-trucks",
    name: "Overland Safari Trucks",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    shortDescription: "Heavy-duty overland trucks for adventure safari expeditions across East Africa.",
    overview: "Our Overland Safari Trucks are purpose-built for extended adventure safaris across East Africa. These heavy-duty vehicles can carry large groups and are equipped with all the essentials for multi-day overland expeditions. Featuring raised seating for panoramic views, ample storage for camping gear, and robust construction for rough terrain, these trucks are the vehicle of choice for adventure tours.",
    capacity: "12-24 passengers",
    features: ["Raised panoramic seating", "Ample storage lockers", "Onboard water tank", "Kitchen equipment", "Camping gear storage", "PA system", "USB charging ports", "First aid kit", "Fire extinguisher", "Heavy-duty suspension"],
    idealFor: ["Adventure tours", "Overland expeditions", "Large group safaris", "Camping safaris", "Student groups"],
  },
  {
    id: "buses-for-hire",
    slug: "buses-for-hire-kenya",
    name: "Buses for Hire in Kenya",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    shortDescription: "Comfortable buses for large group transport, corporate events, and school trips.",
    overview: "We offer a range of modern buses for hire in Kenya and Tanzania, suitable for corporate events, school trips, wedding transfers, and large group transport. Our fleet includes 25-seater, 33-seater, and 51-seater coaches, all well maintained with experienced professional drivers. All buses feature air conditioning, comfortable reclining seats, and entertainment systems.",
    capacity: "25-51 passengers",
    features: ["Air conditioning", "Reclining seats", "Entertainment system", "Luggage compartments", "Professional driver", "Seat belts", "First aid kit", "Fire extinguisher"],
    idealFor: ["Corporate transport", "School trips", "Wedding transfers", "Church groups", "Conference shuttles", "Tour operators"],
  },
];

export const getVehicleBySlug = (slug: string) =>
  vehicles.find((v) => v.slug === slug);
