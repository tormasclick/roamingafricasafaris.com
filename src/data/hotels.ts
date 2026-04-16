export interface Hotel {
  id: string;
  slug: string;
  name: string;
  location: string;
  country: "kenya" | "tanzania" | "uganda";
  destination: string;
  tier: "budget" | "mid-range" | "luxury";
  image: string;
  shortDescription: string;
  overview: string;
  roomTypes: string[];
  amenities: string[];
  nearbyParks: string[];
  priceFrom?: string;
}

export const hotels: Hotel[] = [
  // Kenya – Masai Mara
  {
    id: "mara-sopa-lodge",
    slug: "mara-sopa-lodge",
    name: "Mara Sopa Lodge",
    location: "Masai Mara",
    country: "kenya",
    destination: "masai-mara",
    tier: "mid-range",
    image: "masai-mara",
    shortDescription: "Nestled on the slopes of the Oloolaimutia Hills overlooking the Masai Mara.",
    overview: "Mara Sopa Lodge is located on the slopes of the Oloolaimutia Hills with panoramic views of the Masai Mara National Reserve. The lodge offers comfortable accommodation with authentic African hospitality, a swimming pool, and excellent cuisine. It is an ideal base for exploring the Mara's diverse wildlife including the annual Great Wildebeest Migration.",
    roomTypes: ["Standard Room", "Superior Room", "Suite"],
    amenities: ["Swimming Pool", "Restaurant", "Bar", "Wi-Fi", "Game Drives", "Gift Shop", "Laundry Service"],
    nearbyParks: ["Masai Mara National Reserve"],
    priceFrom: "$120",
  },
  {
    id: "mara-serena-safari-lodge",
    slug: "mara-serena-safari-lodge",
    name: "Mara Serena Safari Lodge",
    location: "Masai Mara",
    country: "kenya",
    destination: "masai-mara",
    tier: "luxury",
    image: "masai-mara",
    shortDescription: "Award-winning luxury lodge with stunning views across the Mara Triangle.",
    overview: "Mara Serena Safari Lodge is an award-winning lodge perched high on a hill in the heart of the Masai Mara. Designed to blend into its environment, the lodge features traditionally styled rooms with panoramic views of the savannah. Guests enjoy world-class dining, a heated swimming pool, and expertly guided game drives. The lodge is perfectly positioned for witnessing the Great Migration river crossings.",
    roomTypes: ["Standard Room", "Triple Room", "Family Room"],
    amenities: ["Heated Swimming Pool", "Spa", "Restaurant", "Bar", "Wi-Fi", "Balloon Safaris", "Cultural Visits"],
    nearbyParks: ["Masai Mara National Reserve"],
    priceFrom: "$280",
  },
  {
    id: "mara-explorers-camp",
    slug: "mara-explorers-camp",
    name: "Mara Explorers Camp",
    location: "Masai Mara",
    country: "kenya",
    destination: "masai-mara",
    tier: "budget",
    image: "masai-mara",
    shortDescription: "Affordable tented camp offering authentic bush experience in the Mara.",
    overview: "Mara Explorers Camp provides a budget-friendly safari experience without compromising on the authentic bush atmosphere. The camp features comfortable tented accommodation, communal dining, and experienced guides. Located near the Talek Gate, it offers easy access to the best game viewing areas in the Masai Mara.",
    roomTypes: ["Standard Tent", "Double Tent"],
    amenities: ["Restaurant", "Camp Fire", "Game Drives", "Bush Walks"],
    nearbyParks: ["Masai Mara National Reserve"],
    priceFrom: "$65",
  },
  // Kenya – Amboseli
  {
    id: "amboseli-serena-safari-lodge",
    slug: "amboseli-serena-safari-lodge",
    name: "Amboseli Serena Safari Lodge",
    location: "Amboseli",
    country: "kenya",
    destination: "amboseli",
    tier: "luxury",
    image: "amboseli",
    shortDescription: "Luxury lodge with unrivalled views of Mount Kilimanjaro.",
    overview: "Amboseli Serena Safari Lodge sits amid lush gardens at the foot of Africa's highest mountain. The lodge captures the spirit of the Maasai people and offers excellent game viewing. Guests enjoy spacious rooms decorated in traditional Maasai style, a swimming pool facing Kilimanjaro, and guided nature walks.",
    roomTypes: ["Standard Room", "Pool-facing Room", "Suite"],
    amenities: ["Swimming Pool", "Restaurant", "Bar", "Spa", "Wi-Fi", "Nature Walks"],
    nearbyParks: ["Amboseli National Park"],
    priceFrom: "$250",
  },
  {
    id: "kibo-safari-camp",
    slug: "kibo-safari-camp",
    name: "Kibo Safari Camp",
    location: "Amboseli",
    country: "kenya",
    destination: "amboseli",
    tier: "mid-range",
    image: "amboseli",
    shortDescription: "Comfortable tented camp on the edge of Amboseli with Kilimanjaro views.",
    overview: "Kibo Safari Camp is a permanent tented camp on the outskirts of Amboseli National Park. Each spacious tent is en-suite with a private veranda overlooking the park. The camp offers an authentic safari experience with the comfort of modern facilities, making it ideal for families and couples.",
    roomTypes: ["Standard Tent", "Family Tent"],
    amenities: ["Restaurant", "Bar", "Swimming Pool", "Wi-Fi", "Game Drives"],
    nearbyParks: ["Amboseli National Park"],
    priceFrom: "$100",
  },
  // Kenya – Nairobi
  {
    id: "nairobi-serena-hotel",
    slug: "nairobi-serena-hotel",
    name: "Nairobi Serena Hotel",
    location: "Nairobi",
    country: "kenya",
    destination: "nairobi",
    tier: "luxury",
    image: "nairobi",
    shortDescription: "Five-star hotel in the heart of Nairobi with lush tropical gardens.",
    overview: "Nairobi Serena Hotel is a five-star property set amidst lush tropical gardens in the heart of Nairobi. The hotel combines African artistry with modern luxury, featuring elegant rooms, multiple dining options, a spa, and a swimming pool. It is the perfect base for exploring Nairobi's attractions before heading out on safari.",
    roomTypes: ["Deluxe Room", "Club Room", "Presidential Suite"],
    amenities: ["Spa", "Swimming Pool", "Fitness Center", "Multiple Restaurants", "Business Center", "Wi-Fi"],
    nearbyParks: ["Nairobi National Park"],
    priceFrom: "$200",
  },
  // Tanzania – Serengeti
  {
    id: "serengeti-serena-safari-lodge",
    slug: "serengeti-serena-safari-lodge",
    name: "Serengeti Serena Safari Lodge",
    location: "Serengeti",
    country: "tanzania",
    destination: "serengeti",
    tier: "luxury",
    image: "serengeti",
    shortDescription: "Luxury lodge overlooking the Serengeti plains, ideal for migration viewing.",
    overview: "Serengeti Serena Safari Lodge is built around a cluster of traditional domed rondavels overlooking the vast Serengeti plains. The lodge is strategically located in the Western Corridor, offering prime access to the Great Migration. Guests enjoy spacious rooms with African décor, an infinity pool, and sunset cocktails on the terrace.",
    roomTypes: ["Standard Room", "Suite", "Family Room"],
    amenities: ["Infinity Pool", "Restaurant", "Bar", "Spa", "Wi-Fi", "Balloon Safaris"],
    nearbyParks: ["Serengeti National Park"],
    priceFrom: "$350",
  },
  {
    id: "serengeti-heritage-camp",
    slug: "serengeti-heritage-camp",
    name: "Serengeti Heritage Camp",
    location: "Serengeti",
    country: "tanzania",
    destination: "serengeti",
    tier: "mid-range",
    image: "serengeti",
    shortDescription: "Mobile tented camp following the Great Migration across the Serengeti.",
    overview: "Serengeti Heritage Camp is a seasonal mobile camp that moves with the Great Migration, ensuring guests are always in the best position to witness this natural spectacle. The camp offers comfortable safari tents with en-suite bathrooms, bush dining experiences, and expert guides.",
    roomTypes: ["Safari Tent", "Family Tent"],
    amenities: ["Bush Dining", "Game Drives", "Sundowner Cocktails", "Cultural Visits"],
    nearbyParks: ["Serengeti National Park"],
    priceFrom: "$180",
  },
  // Tanzania – Ngorongoro
  {
    id: "ngorongoro-serena-safari-lodge",
    slug: "ngorongoro-serena-safari-lodge",
    name: "Ngorongoro Serena Safari Lodge",
    location: "Ngorongoro",
    country: "tanzania",
    destination: "ngorongoro",
    tier: "luxury",
    image: "ngorongoro",
    shortDescription: "Built into the rim of the Ngorongoro Crater with breathtaking views.",
    overview: "Ngorongoro Serena Safari Lodge is dramatically built into the crater rim, blending seamlessly into the landscape. The lodge offers uninterrupted views into the caldera, ivy-covered stone walls, and indigenous timber interiors. It is the perfect base for exploring the Ngorongoro Crater's incredible concentration of wildlife.",
    roomTypes: ["Standard Room", "Suite"],
    amenities: ["Restaurant", "Bar", "Lounge", "Gift Shop", "Wi-Fi", "Crater Tours"],
    nearbyParks: ["Ngorongoro Conservation Area"],
    priceFrom: "$300",
  },
  // Uganda – Bwindi
  {
    id: "bwindi-lodge",
    slug: "bwindi-lodge",
    name: "Bwindi Lodge",
    location: "Bwindi",
    country: "uganda",
    destination: "bwindi",
    tier: "luxury",
    image: "bwindi",
    shortDescription: "Eco-luxury lodge at the edge of Bwindi Impenetrable Forest.",
    overview: "Bwindi Lodge sits at the edge of the Bwindi Impenetrable Forest, one of the last habitats for endangered mountain gorillas. The lodge offers spacious bandas with private verandas overlooking the forest canopy. After gorilla trekking, guests can relax in the infinity pool or enjoy a spa treatment surrounded by pristine tropical forest.",
    roomTypes: ["Forest Banda", "Honeymoon Banda", "Family Banda"],
    amenities: ["Infinity Pool", "Spa", "Restaurant", "Bar", "Wi-Fi", "Gorilla Trekking Packages"],
    nearbyParks: ["Bwindi Impenetrable National Park"],
    priceFrom: "$400",
  },
  {
    id: "gorilla-safari-lodge",
    slug: "gorilla-safari-lodge",
    name: "Gorilla Safari Lodge",
    location: "Bwindi",
    country: "uganda",
    destination: "bwindi",
    tier: "mid-range",
    image: "bwindi",
    shortDescription: "Comfortable lodge near Bwindi offering gorilla trekking packages.",
    overview: "Gorilla Safari Lodge is a comfortable mid-range property near the Rushaga sector of Bwindi Impenetrable National Park. The lodge features cozy rooms with en-suite bathrooms, a restaurant serving local and international cuisine, and a lounge with fireplace. It is an excellent base for gorilla trekking and forest walks.",
    roomTypes: ["Standard Room", "Deluxe Room"],
    amenities: ["Restaurant", "Lounge", "Fireplace", "Garden", "Gorilla Trekking"],
    nearbyParks: ["Bwindi Impenetrable National Park"],
    priceFrom: "$150",
  },
];

export const getHotelsByCountry = (country: string) =>
  hotels.filter((h) => h.country === country);

export const getHotelsByDestination = (destination: string) =>
  hotels.filter((h) => h.destination === destination);

export const getHotelBySlug = (slug: string) =>
  hotels.find((h) => h.slug === slug);

export const getHotelsByTier = (tier: string) =>
  hotels.filter((h) => h.tier === tier);
