export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  image: string;
  shortDescription: string;
  overview: string;
  wildlife: string[];
  bestTime: string;
  travelTips: string[];
  faqs: { question: string; answer: string }[];
}

export const destinations: Destination[] = [
  {
    id: "masai-mara",
    slug: "masai-mara",
    name: "Masai Mara",
    country: "Kenya",
    image: "masai-mara",
    shortDescription: "Kenya's premier game reserve and home to the Great Migration.",
    overview: "The Masai Mara National Reserve is Kenya's most famous wildlife conservation area, forming the northern section of the Mara-Serengeti ecosystem. Covering approximately 1,510 square kilometers of open grassland, the Mara is home to an exceptional population of big cats — lions, leopards, and cheetahs — along with all of the Big Five. The reserve is most famous for hosting the Great Wildebeest Migration from July to October, when over two million animals cross the Mara River in dramatic fashion. The Mara also offers cultural encounters with the Maasai people who live alongside the wildlife in community conservancies. Game viewing is excellent year-round, making this the must-visit destination for any Kenya safari.",
    wildlife: ["Lions", "Leopards", "Cheetahs", "Elephants", "Buffalo", "Wildebeest", "Zebras", "Hippos", "Crocodiles", "Hyenas", "Giraffes", "Over 470 bird species"],
    bestTime: "July to October for the Great Migration. January to February for calving season. Game viewing is excellent year-round.",
    travelTips: ["Book accommodations well in advance for July-October", "Bring warm layers for early morning game drives", "A hot air balloon safari is highly recommended", "Carry binoculars and a good camera with zoom lens"],
    faqs: [
      { question: "What is the best time to visit Masai Mara?", answer: "The best time is July to October for the Great Migration. However, game viewing is excellent year-round with fewer crowds from November to June." },
      { question: "How much does a Masai Mara safari cost?", answer: "A 3-day Masai Mara safari typically starts from $450 per person sharing. Luxury options can range from $800 to $2,000+ per person." },
      { question: "Can I visit a Masai village?", answer: "Yes, most Masai Mara safaris include an optional visit to a nearby Masai village where you can learn about their culture and traditions." }
    ],
  },
  {
    id: "amboseli",
    slug: "amboseli",
    name: "Amboseli",
    country: "Kenya",
    image: "amboseli",
    shortDescription: "Famous for large elephant herds and views of Mount Kilimanjaro.",
    overview: "Amboseli National Park is one of Kenya's most popular destinations, offering breathtaking views of Africa's highest mountain, Mount Kilimanjaro. The park is renowned for its large herds of free-ranging elephants, which can be photographed against the stunning backdrop of Kilimanjaro's snow-capped peak. Covering 392 square kilometers, Amboseli features a variety of habitats including dry lake beds, wetlands, savannah, and woodlands. The park's ecosystem is sustained by the underground water systems of Kilimanjaro, creating lush swamps that attract diverse wildlife. Amboseli is also an important research site for elephant behavior studies by the Amboseli Trust for Elephants.",
    wildlife: ["Elephants (large herds)", "Lions", "Cheetahs", "Giraffes", "Zebras", "Wildebeest", "Hippos", "Buffaloes", "Over 400 bird species"],
    bestTime: "June to October (dry season) for best wildlife viewing. January to March for bird watching.",
    travelTips: ["Visit early morning for best Kilimanjaro views", "Observation Hill offers panoramic views of the park", "The swamp areas are excellent for elephant viewing", "Dust can be significant in dry season — bring protection"],
    faqs: [
      { question: "Can I see Mount Kilimanjaro from Amboseli?", answer: "Yes, Amboseli offers the most iconic views of Kilimanjaro. Early mornings and late afternoons provide the clearest views." },
      { question: "How far is Amboseli from Nairobi?", answer: "Amboseli is approximately 230 km from Nairobi, about a 4-hour drive." }
    ],
  },
  {
    id: "lake-nakuru",
    slug: "lake-nakuru",
    name: "Lake Nakuru",
    country: "Kenya",
    image: "lake-nakuru",
    shortDescription: "A flamingo paradise and important rhino sanctuary in the Rift Valley.",
    overview: "Lake Nakuru National Park is a compact but incredibly diverse park in Kenya's Great Rift Valley. The park was established in 1961 to protect the shallow, alkaline Lake Nakuru and its flamingo population. At times, millions of flamingos line the lake shore, creating one of the world's most spectacular natural displays. The park is also a critical rhino sanctuary, home to both black and white rhinos. Other highlights include tree-climbing lions, Rothschild's giraffes, and a large population of leopards. The varied habitats of lake, woodland, grassland, and rocky escarpments make this one of Kenya's most scenic parks.",
    wildlife: ["Flamingos", "Black Rhinos", "White Rhinos", "Rothschild's Giraffes", "Lions", "Leopards", "Buffaloes", "Over 450 bird species"],
    bestTime: "Year-round. June to September for drier conditions and best flamingo viewing.",
    travelTips: ["Can be visited as a day trip from Nairobi", "Baboon Cliff offers the best viewpoint over the lake", "Combine with Lake Naivasha for a Great Rift Valley experience"],
    faqs: [
      { question: "Are there still flamingos at Lake Nakuru?", answer: "Yes, both greater and lesser flamingos visit Lake Nakuru, though numbers fluctuate seasonally based on water levels and food availability." }
    ],
  },
  {
    id: "serengeti",
    slug: "serengeti",
    name: "Serengeti",
    country: "Tanzania",
    image: "serengeti",
    shortDescription: "Endless plains hosting the world-famous Great Migration.",
    overview: "The Serengeti National Park is Tanzania's oldest and most popular national park, covering 14,763 square kilometers of endless plains that support the largest terrestrial animal migration in the world. Over two million wildebeest, zebras, and gazelles make their annual circular journey through the Serengeti ecosystem in search of fresh grazing and water. The Serengeti is also home to one of the highest concentrations of large predators in Africa, including an estimated 3,000 lions. The park's diverse habitats range from short-grass plains to woodland and riverine forest, supporting an extraordinary diversity of wildlife. A UNESCO World Heritage Site, the Serengeti is consistently rated among the best safari destinations in Africa.",
    wildlife: ["Lions", "Leopards", "Cheetahs", "Elephants", "Buffaloes", "Wildebeest (millions)", "Zebras", "Hippos", "Crocodiles", "Wild Dogs", "Hyenas"],
    bestTime: "June to October for the Migration river crossings. December to March for calving season in the southern plains.",
    travelTips: ["The Serengeti is vast — plan to stay at least 3 nights", "Different areas are better at different times of year", "Consider a hot air balloon safari over the plains", "Central Serengeti (Seronera) has year-round game viewing"],
    faqs: [
      { question: "How many days do I need in the Serengeti?", answer: "We recommend at least 3 nights in the Serengeti to fully appreciate its vastness and wildlife." },
      { question: "Is the Serengeti connected to the Masai Mara?", answer: "Yes, the Serengeti and Masai Mara form one continuous ecosystem. The migration moves between them seasonally." }
    ],
  },
  {
    id: "ngorongoro",
    slug: "ngorongoro",
    name: "Ngorongoro Crater",
    country: "Tanzania",
    image: "ngorongoro",
    shortDescription: "Africa's Garden of Eden — a volcanic caldera teeming with wildlife.",
    overview: "The Ngorongoro Crater is the world's largest intact volcanic caldera and one of Africa's most remarkable natural wonders. This UNESCO World Heritage Site spans 260 square kilometers and shelters approximately 25,000 large animals, including the Big Five. The crater floor features grasslands, swamps, forests, and a soda lake, creating diverse habitats that support one of the densest concentrations of wildlife in Africa. The crater walls rise 600 meters above the floor, creating a natural enclosure that makes game viewing exceptionally rewarding. The broader Ngorongoro Conservation Area also supports the Maasai people who live alongside the wildlife in a unique multi-use conservation model.",
    wildlife: ["Black Rhinos", "Lions", "Elephants", "Buffaloes", "Leopards", "Hippos", "Wildebeest", "Zebras", "Flamingos", "Crowned Cranes"],
    bestTime: "Year-round. June to September is the dry season with excellent game viewing.",
    travelTips: ["You need a 4x4 to descend into the crater", "Plan to spend a full half-day on the crater floor", "Bring warm clothing — the crater rim can be cold", "Combine with Serengeti for the best Tanzania safari"],
    faqs: [
      { question: "Can I stay inside the crater?", answer: "No, overnight stays inside the crater are not permitted. Lodges are located on the crater rim with stunning views." }
    ],
  },
  {
    id: "tarangire",
    slug: "tarangire",
    name: "Tarangire",
    country: "Tanzania",
    image: "tarangire",
    shortDescription: "Ancient baobab trees and the largest elephant herds in Tanzania.",
    overview: "Tarangire National Park is named after the Tarangire River that flows through it, attracting large concentrations of wildlife during the dry season. The park is famous for its iconic baobab trees, some of which are hundreds of years old, and its large elephant population — the highest density in Tanzania. During the dry season (June to November), the Tarangire River becomes a lifeline for wildlife from a vast surrounding ecosystem, creating spectacular game viewing opportunities.",
    wildlife: ["Elephants (largest herds in Tanzania)", "Lions", "Leopards", "Giraffes", "Lesser Kudu", "Fringe-eared Oryx", "Over 550 bird species"],
    bestTime: "June to November for dry season wildlife concentrations.",
    travelTips: ["Often less crowded than Serengeti and Ngorongoro", "Excellent for photography with baobab tree backdrops", "Combine with Ngorongoro for a short Tanzania safari"],
    faqs: [
      { question: "Is Tarangire worth visiting?", answer: "Absolutely! Tarangire offers unique landscapes with ancient baobabs and incredible elephant herds, often with fewer tourists than Serengeti." }
    ],
  },
  {
    id: "zanzibar",
    slug: "zanzibar",
    name: "Zanzibar",
    country: "Tanzania",
    image: "zanzibar",
    shortDescription: "Tropical spice island with pristine beaches and rich cultural heritage.",
    overview: "Zanzibar is a semi-autonomous archipelago off the coast of Tanzania, known for its pristine white-sand beaches, turquoise Indian Ocean waters, and rich cultural heritage. Stone Town, the old quarter of Zanzibar City, is a UNESCO World Heritage Site with a fascinating blend of Arab, Persian, Indian, and European influences. Beyond the beaches, Zanzibar offers spice plantation tours, dolphin watching, snorkeling on vibrant coral reefs, and visits to Jozani Forest to see the endemic red colobus monkeys. Zanzibar is the perfect extension to a mainland Tanzania safari.",
    wildlife: ["Red Colobus Monkeys", "Dolphins", "Sea Turtles", "Tropical Fish", "Coral Reefs"],
    bestTime: "June to October and December to February for dry weather and beach activities.",
    travelTips: ["Combine with a mainland safari for the ultimate Tanzania trip", "Stone Town is best explored on foot with a local guide", "Respect local culture — dress modestly when not on the beach", "Try the local seafood at Forodhani Night Market"],
    faqs: [
      { question: "How do I get to Zanzibar from the mainland?", answer: "Short flights operate daily from Arusha, Dar es Salaam, and Kilimanjaro. Ferries run from Dar es Salaam (about 2 hours)." }
    ],
  },
  {
    id: "bwindi",
    slug: "bwindi",
    name: "Bwindi Impenetrable Forest",
    country: "Uganda",
    image: "bwindi",
    shortDescription: "Home to half the world's mountain gorillas — a once-in-a-lifetime encounter.",
    overview: "Bwindi Impenetrable National Park in southwestern Uganda is one of the most biodiverse areas on Earth and home to approximately half of the world's remaining mountain gorilla population. A UNESCO World Heritage Site, this ancient rainforest covers 331 square kilometers of steep, densely forested mountains. Gorilla trekking in Bwindi is one of Africa's most extraordinary wildlife experiences — spending an hour with a habituated gorilla family in their natural habitat is truly life-changing. The park is also home to over 120 mammal species, 348 bird species, and 220 butterfly species.",
    wildlife: ["Mountain Gorillas", "Chimpanzees", "L'Hoest's Monkeys", "Red-tailed Monkeys", "African Elephants", "Giant Forest Hogs", "Over 348 bird species"],
    bestTime: "June to September and December to February for drier trekking conditions.",
    travelTips: ["Book gorilla permits well in advance (at least 3-6 months)", "Physical fitness is important — treks can be strenuous", "Bring waterproof layers and sturdy hiking boots", "Maximum 8 visitors per gorilla family per day"],
    faqs: [
      { question: "How much is a gorilla trekking permit?", answer: "A gorilla trekking permit in Uganda costs $700 per person for foreign non-residents." },
      { question: "How long is the gorilla trek?", answer: "The trek itself varies from 1-8 hours depending on the gorilla family's location. You spend 1 hour with the gorillas once found." }
    ],
  },
];

export const getDestinationBySlug = (slug: string) =>
  destinations.find((d) => d.slug === slug);
