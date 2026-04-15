export interface SafariPackage {
  id: string;
  slug: string;
  name: string;
  duration: string;
  durationDays: number;
  country: "kenya" | "tanzania" | "uganda" | "combo";
  category: "safari" | "day-trip" | "fly-in" | "beach" | "combo";
  destinations: string[];
  price?: string;
  priceFrom?: number;
  image: string;
  shortDescription: string;
  overview: string;
  itinerary: { day: number; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
  dayTrip?: boolean;
}

export const safariPackages: SafariPackage[] = [
  {
    id: "1day-amboseli",
    slug: "1-day-amboseli-safari",
    name: "1 Day Amboseli Safari",
    duration: "1 Day",
    durationDays: 1,
    country: "kenya",
    category: "day-trip",
    destinations: ["Amboseli"],
    image: "amboseli",
    shortDescription: "Experience the magic of Amboseli National Park with stunning views of Mount Kilimanjaro on this exciting day trip from Nairobi.",
    overview: "Embark on an unforgettable day safari to Amboseli National Park, one of Kenya's most popular wildlife destinations. Enjoy breathtaking views of Africa's highest peak, Mount Kilimanjaro, while observing large herds of elephants, lions, cheetahs, and over 400 bird species. This well-planned day trip departs early from Nairobi and returns the same evening, perfect for travelers with limited time who still want an authentic safari experience.",
    itinerary: [
      { day: 1, title: "Nairobi – Amboseli National Park – Nairobi", description: "Early morning pick-up from your Nairobi hotel at 5:30 AM. Drive to Amboseli National Park (approximately 4 hours). Arrive and begin your game drive, exploring the park's diverse ecosystems including swamps, woodlands, and open plains. Enjoy a picnic lunch with views of Mount Kilimanjaro. Afternoon game drive focusing on elephant herds and big cats. Depart for Nairobi at 4:00 PM, arriving by evening." }
    ],
    inclusions: ["Park entrance fees", "Professional safari guide", "Transport in 4x4 safari vehicle", "Picnic lunch and drinking water", "Hotel pick-up and drop-off in Nairobi"],
    exclusions: ["Personal expenses", "Tips and gratuities", "Travel insurance"],
    faqs: [
      { question: "What time does the Amboseli day trip start?", answer: "Pick-up is at 5:30 AM from your Nairobi hotel." },
      { question: "Will I see Mount Kilimanjaro?", answer: "On clear days, you'll have spectacular views of Mount Kilimanjaro. Early morning offers the best visibility." }
    ],
    featured: true,
    dayTrip: true,
  },
  {
    id: "4day-samburu-nakuru",
    slug: "4-days-samburu-lake-nakuru-safari",
    name: "4 Days Samburu and Lake Nakuru Safari",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    country: "kenya",
    category: "safari",
    destinations: ["Samburu", "Lake Nakuru"],
    image: "samburu",
    shortDescription: "Explore the semi-arid landscapes of Samburu and the flamingo-lined shores of Lake Nakuru on this 4-day adventure.",
    overview: "Discover two of Kenya's most diverse ecosystems on this 4-day safari adventure. Samburu National Reserve is home to unique wildlife species found nowhere else in Kenya, including the reticulated giraffe, Grevy's zebra, and Somali ostrich. Lake Nakuru National Park is famous for its flamingos, rhinos, and tree-climbing lions. This safari combines the best of northern Kenya's wilderness with the Great Rift Valley's stunning scenery.",
    itinerary: [
      { day: 1, title: "Nairobi to Samburu", description: "Depart Nairobi and drive north through the scenic highlands to Samburu National Reserve. Arrive in time for an afternoon game drive along the Ewaso Ng'iro River." },
      { day: 2, title: "Full Day in Samburu", description: "Full day of game drives in Samburu exploring both the reserve and Buffalo Springs. Look for the Samburu Special Five and enjoy the dramatic semi-arid landscape." },
      { day: 3, title: "Samburu to Lake Nakuru", description: "After breakfast, drive to Lake Nakuru National Park. Afternoon game drive around the lake, known for its flamingos and rhino sanctuary." },
      { day: 4, title: "Lake Nakuru to Nairobi", description: "Morning game drive in Lake Nakuru with focus on rhinos and leopards. After lunch, drive back to Nairobi arriving by evening." }
    ],
    inclusions: ["All park entrance fees", "Professional English-speaking guide", "Transport in 4x4 safari vehicle", "3 nights accommodation on full board", "All meals during safari", "Drinking water"],
    exclusions: ["International flights", "Visa fees", "Personal expenses", "Tips and gratuities", "Travel insurance", "Optional activities"],
    faqs: [
      { question: "What wildlife will I see in Samburu?", answer: "Samburu is known for the Special Five: reticulated giraffe, Grevy's zebra, Somali ostrich, gerenuk, and Beisa oryx." },
      { question: "Is Lake Nakuru still home to flamingos?", answer: "Yes, Lake Nakuru hosts both greater and lesser flamingos, though numbers vary seasonally." }
    ],
    featured: true,
  },
  {
    id: "5day-mara-nakuru",
    slug: "5-days-masai-mara-lake-nakuru",
    name: "5 Days Masai Mara & Lake Nakuru",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    country: "kenya",
    category: "safari",
    destinations: ["Masai Mara", "Lake Nakuru"],
    image: "masai-mara",
    shortDescription: "Combine Kenya's premier game reserve with the flamingo paradise of Lake Nakuru on this classic 5-day safari.",
    overview: "This classic Kenya safari takes you to two of the country's most iconic wildlife destinations. The Masai Mara National Reserve is world-renowned for the Great Migration and offers exceptional year-round game viewing with all of the Big Five. Lake Nakuru National Park provides a stunning contrast with its alkaline lake, flamingos, and rhino sanctuary. This is the perfect introduction to East African wildlife.",
    itinerary: [
      { day: 1, title: "Nairobi to Lake Nakuru", description: "Depart Nairobi after breakfast and drive to Lake Nakuru National Park. Afternoon game drive around the lake." },
      { day: 2, title: "Lake Nakuru to Masai Mara", description: "Morning game drive in Nakuru, then drive to the Masai Mara via the Great Rift Valley. Arrive in time for sunset." },
      { day: 3, title: "Full Day Masai Mara", description: "Full day exploring the Masai Mara with morning and afternoon game drives. Look for the Big Five and visit a Masai village." },
      { day: 4, title: "Full Day Masai Mara", description: "Another full day in the Mara. Optional hot air balloon safari at dawn (extra cost). Explore different areas of the reserve." },
      { day: 5, title: "Masai Mara to Nairobi", description: "Final morning game drive, then depart for Nairobi arriving by late afternoon." }
    ],
    inclusions: ["All park entrance fees", "Professional guide", "4x4 safari vehicle", "4 nights full board accommodation", "All meals", "Drinking water", "Masai village visit"],
    exclusions: ["International flights", "Visa fees", "Hot air balloon safari ($450)", "Personal expenses", "Tips", "Travel insurance"],
    faqs: [
      { question: "When is the best time for the Great Migration?", answer: "The Great Migration in Masai Mara typically occurs from July to October, with the Mara River crossings being the highlight." },
      { question: "Can I do a hot air balloon safari?", answer: "Yes, hot air balloon safaris are available in the Masai Mara at an additional cost of approximately $450 per person." }
    ],
    featured: true,
  },
  {
    id: "3day-turkana",
    slug: "3-days-lake-turkana-fly-in-safari",
    name: "3 Days Lake Turkana Fly-in Safari",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    country: "kenya",
    category: "fly-in",
    destinations: ["Lake Turkana"],
    image: "lake-turkana",
    shortDescription: "Fly to the Jade Sea for an exclusive Lake Turkana experience, exploring volcanic landscapes and ancient cultures.",
    overview: "Experience the raw beauty of Lake Turkana, the world's largest permanent desert lake, on this exclusive fly-in safari. Known as the Jade Sea for its stunning turquoise waters, Lake Turkana sits in one of the most remote and spectacular landscapes in Africa. Explore volcanic islands, encounter the Turkana people, and witness a landscape that has remained unchanged for millennia.",
    itinerary: [
      { day: 1, title: "Fly to Lake Turkana", description: "Morning flight from Nairobi to Loiyangalani on the shores of Lake Turkana. Afternoon exploration of the lake shore and local El Molo fishing village." },
      { day: 2, title: "South Island & Exploration", description: "Full day exploring Lake Turkana. Boat trip to South Island National Park, a volcanic island inhabited by Nile crocodiles. Visit local communities." },
      { day: 3, title: "Return to Nairobi", description: "Morning at leisure to enjoy the lakeshore. Afternoon flight back to Nairobi." }
    ],
    inclusions: ["Return flights Nairobi-Loiyangalani", "2 nights accommodation", "All meals", "Boat excursions", "Park fees", "Local guide"],
    exclusions: ["Personal expenses", "Tips", "Travel insurance", "Extra activities"],
    faqs: [
      { question: "How do I get to Lake Turkana?", answer: "This safari includes charter flights from Nairobi to Loiyangalani, making the remote location easily accessible." }
    ],
    featured: true,
  },
  {
    id: "7day-scenic-air",
    slug: "7-days-scenic-kenya-air-safari",
    name: "7 Days Scenic Kenya Air Safari",
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    country: "kenya",
    category: "fly-in",
    destinations: ["Masai Mara", "Samburu", "Amboseli"],
    image: "masai-mara",
    shortDescription: "Fly between Kenya's top three reserves on this luxury air safari covering Masai Mara, Samburu, and Amboseli.",
    overview: "This premium air safari takes you to Kenya's three most iconic wildlife destinations by light aircraft, maximizing your time on game drives and minimizing travel time. Experience the vast plains of the Masai Mara, the semi-arid beauty of Samburu, and the elephant-dotted landscape of Amboseli with Mount Kilimanjaro as a backdrop. Stay in luxury tented camps and lodges throughout.",
    itinerary: [
      { day: 1, title: "Nairobi to Masai Mara", description: "Morning flight to the Masai Mara. Afternoon game drive." },
      { day: 2, title: "Full Day Masai Mara", description: "Full day game drives in the Mara ecosystem." },
      { day: 3, title: "Masai Mara to Samburu", description: "Fly to Samburu. Afternoon game drive along the river." },
      { day: 4, title: "Full Day Samburu", description: "Explore Samburu and Buffalo Springs reserves." },
      { day: 5, title: "Samburu to Amboseli", description: "Fly to Amboseli. Afternoon game drive with Kilimanjaro views." },
      { day: 6, title: "Full Day Amboseli", description: "Full day with the elephants of Amboseli." },
      { day: 7, title: "Amboseli to Nairobi", description: "Morning game drive. Fly back to Nairobi." }
    ],
    inclusions: ["All internal flights", "6 nights luxury accommodation", "All meals and drinks", "All game drives", "Park fees", "Airport transfers"],
    exclusions: ["International flights", "Visa fees", "Personal expenses", "Tips", "Travel insurance"],
    faqs: [
      { question: "What type of aircraft is used?", answer: "Light aircraft such as Cessna Caravans are used for inter-park flights." }
    ],
    featured: true,
  },
  {
    id: "5day-amboseli-tsavo",
    slug: "5-days-amboseli-tsavo-east-safari",
    name: "5 Days Amboseli & Tsavo East Safari",
    duration: "5 Days / 4 Nights",
    durationDays: 5,
    country: "kenya",
    category: "safari",
    destinations: ["Amboseli", "Tsavo East"],
    image: "tsavo",
    shortDescription: "Explore the elephants of Amboseli and the red earth wilderness of Tsavo East on this 5-day southern Kenya safari.",
    overview: "Journey through southern Kenya's most captivating landscapes on this 5-day safari combining Amboseli and Tsavo East National Parks. Amboseli offers unparalleled views of Mount Kilimanjaro and large elephant herds, while Tsavo East is one of the oldest and largest parks in Kenya, famous for its red elephants, vast open spaces, and the Galana River.",
    itinerary: [
      { day: 1, title: "Nairobi to Amboseli", description: "Drive to Amboseli National Park. Afternoon game drive with Kilimanjaro views." },
      { day: 2, title: "Full Day Amboseli", description: "Morning and afternoon game drives in Amboseli. Visit Observation Hill for panoramic views." },
      { day: 3, title: "Amboseli to Tsavo East", description: "Drive to Tsavo East National Park. Afternoon game drive along the Galana River." },
      { day: 4, title: "Full Day Tsavo East", description: "Full day exploring Tsavo East. Visit Mudanda Rock and Lugard Falls." },
      { day: 5, title: "Tsavo East to Nairobi", description: "Morning game drive. Drive back to Nairobi or transfer to Mombasa." }
    ],
    inclusions: ["All park fees", "Professional guide", "4x4 vehicle", "4 nights full board", "All meals", "Water"],
    exclusions: ["Flights", "Visa", "Personal expenses", "Tips", "Insurance"],
    faqs: [
      { question: "Why are the elephants red in Tsavo?", answer: "The elephants in Tsavo appear red because they dust-bathe in the park's distinctive red laterite soil." }
    ],
    featured: true,
  },
  {
    id: "7day-highlights-kenya",
    slug: "7-days-highlights-of-kenya",
    name: "7 Days Highlights of Kenya",
    duration: "7 Days / 6 Nights",
    durationDays: 7,
    country: "kenya",
    category: "safari",
    destinations: ["Masai Mara", "Lake Nakuru", "Amboseli"],
    image: "masai-mara",
    shortDescription: "The ultimate Kenya safari covering Masai Mara, Lake Nakuru, and Amboseli — all the highlights in one week.",
    overview: "This comprehensive 7-day safari is the ultimate way to experience Kenya's finest wildlife destinations. From the world-famous Masai Mara and its Big Five to the flamingo-filled Lake Nakuru and the elephant paradise of Amboseli with Mount Kilimanjaro views, this itinerary covers the best Kenya has to offer. Perfect for first-time visitors who want a complete Kenya safari experience.",
    itinerary: [
      { day: 1, title: "Nairobi to Amboseli", description: "Drive to Amboseli. Afternoon game drive." },
      { day: 2, title: "Full Day Amboseli", description: "Full day exploring Amboseli's wetlands and plains." },
      { day: 3, title: "Amboseli to Lake Nakuru", description: "Drive to Lake Nakuru via Nairobi. Afternoon game drive." },
      { day: 4, title: "Lake Nakuru to Masai Mara", description: "Morning game drive in Nakuru. Drive to Masai Mara." },
      { day: 5, title: "Full Day Masai Mara", description: "Full day game drives. Optional Masai village visit." },
      { day: 6, title: "Full Day Masai Mara", description: "Another full day in the Mara. Optional balloon safari." },
      { day: 7, title: "Masai Mara to Nairobi", description: "Morning game drive. Drive back to Nairobi." }
    ],
    inclusions: ["All park fees", "Professional guide", "4x4 vehicle", "6 nights accommodation", "All meals", "Water", "Masai village visit"],
    exclusions: ["Flights", "Visa", "Balloon safari", "Personal expenses", "Tips", "Insurance"],
    faqs: [
      { question: "Is this safari suitable for children?", answer: "Yes, this safari is family-friendly. Children of all ages are welcome, and game drives can be adjusted for younger travelers." }
    ],
    featured: true,
  },
  {
    id: "3day-tanzania-discovery",
    slug: "3-days-tanzania-discovery",
    name: "3 Days Tanzania Discovery",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    country: "tanzania",
    category: "safari",
    destinations: ["Tarangire", "Ngorongoro"],
    image: "ngorongoro",
    shortDescription: "A short but action-packed introduction to Tanzania's northern circuit featuring Tarangire and Ngorongoro Crater.",
    overview: "This 3-day safari offers a perfect introduction to Tanzania's incredible northern safari circuit. Explore Tarangire National Park, known for its ancient baobab trees and large elephant herds, followed by the Ngorongoro Crater — a UNESCO World Heritage Site and one of Africa's most spectacular natural wonders. The crater floor hosts an extraordinary concentration of wildlife including the Big Five.",
    itinerary: [
      { day: 1, title: "Arusha to Tarangire", description: "Pick up from Arusha. Drive to Tarangire National Park for a full day game drive among baobab trees and elephants." },
      { day: 2, title: "Tarangire to Ngorongoro", description: "Morning drive to Ngorongoro Conservation Area. Afternoon exploration of the crater rim with stunning views." },
      { day: 3, title: "Ngorongoro Crater & Return", description: "Descend into the Ngorongoro Crater for a half-day game drive. Spot the Big Five. Drive back to Arusha." }
    ],
    inclusions: ["All park fees", "Professional guide", "4x4 vehicle", "2 nights accommodation", "All meals", "Crater descent fee"],
    exclusions: ["Flights", "Visa", "Personal expenses", "Tips", "Insurance"],
    faqs: [
      { question: "Can I see the Big Five in Ngorongoro?", answer: "Yes, Ngorongoro Crater is one of the few places where you can see all Big Five in a single game drive." }
    ],
    featured: true,
  },
  {
    id: "1day-nairobi-np",
    slug: "1-day-nairobi-national-park",
    name: "1 Day Nairobi National Park",
    duration: "1 Day",
    durationDays: 1,
    country: "kenya",
    category: "day-trip",
    destinations: ["Nairobi"],
    image: "nairobi",
    shortDescription: "Experience the world's only wildlife park within a capital city. See lions, rhinos, and giraffes against the Nairobi skyline.",
    overview: "Nairobi National Park is a unique wildlife haven set against the backdrop of Nairobi's modern skyline. This half-day or full-day safari takes you just 7 km from the city center to observe lions, leopards, rhinos, buffaloes, giraffes, and over 400 bird species. It's the perfect safari experience for those with limited time in Nairobi.",
    itinerary: [
      { day: 1, title: "Nairobi National Park Safari", description: "Pick-up from your hotel at 6:00 AM. Game drive through Nairobi National Park spotting wildlife with the city skyline in the background. Visit the ivory burning memorial and hippo pools. Return to Nairobi by afternoon." }
    ],
    inclusions: ["Park fees", "Guide", "4x4 vehicle", "Hotel pick-up/drop-off", "Water"],
    exclusions: ["Meals", "Personal expenses", "Tips"],
    faqs: [
      { question: "How close is the park to Nairobi?", answer: "Nairobi National Park is just 7 km from the city center, making it the world's only capital city national park." }
    ],
    dayTrip: true,
  },
  {
    id: "1day-nakuru",
    slug: "1-day-lake-nakuru-safari",
    name: "1 Day Lake Nakuru Safari",
    duration: "1 Day",
    durationDays: 1,
    country: "kenya",
    category: "day-trip",
    destinations: ["Lake Nakuru"],
    image: "lake-nakuru",
    shortDescription: "A full day trip from Nairobi to Lake Nakuru National Park, home to flamingos, rhinos, and tree-climbing lions.",
    overview: "Lake Nakuru National Park is a stunning birding paradise and rhino sanctuary in the Great Rift Valley. This day trip from Nairobi takes you to see millions of flamingos along the alkaline lake shore, endangered black and white rhinos, tree-climbing lions, and over 450 bird species.",
    itinerary: [
      { day: 1, title: "Nairobi – Lake Nakuru – Nairobi", description: "Early departure from Nairobi. Drive along the Great Rift Valley escarpment to Lake Nakuru. Full day game drive around the lake. Return to Nairobi by evening." }
    ],
    inclusions: ["Park fees", "Guide", "4x4 vehicle", "Lunch", "Hotel pick-up/drop-off"],
    exclusions: ["Personal expenses", "Tips", "Insurance"],
    faqs: [],
    dayTrip: true,
  },
  {
    id: "1day-arusha",
    slug: "1-day-arusha-national-park",
    name: "1 Day Arusha National Park Tour",
    duration: "1 Day",
    durationDays: 1,
    country: "tanzania",
    category: "day-trip",
    destinations: ["Arusha"],
    image: "tarangire",
    shortDescription: "Explore the diverse landscapes of Arusha National Park including Momella Lakes and the rim of Mount Meru.",
    overview: "Arusha National Park is a compact yet diverse park at the foot of Mount Meru. This day trip offers a wonderful introduction to Tanzanian wildlife in a beautiful montane forest setting with stunning views of both Mount Meru and Mount Kilimanjaro.",
    itinerary: [
      { day: 1, title: "Arusha National Park Day Trip", description: "Pick-up from Arusha town. Drive to Arusha National Park. Explore the Momella Lakes, colobus monkey habitat, and enjoy views of Mount Meru crater. Return by afternoon." }
    ],
    inclusions: ["Park fees", "Guide", "Vehicle", "Lunch", "Pick-up/drop-off"],
    exclusions: ["Personal expenses", "Tips"],
    faqs: [],
    dayTrip: true,
  },
];

export const getPackagesByCountry = (country: string) =>
  safariPackages.filter((p) => p.country === country);

export const getFeaturedPackages = () =>
  safariPackages.filter((p) => p.featured);

export const getDayTrips = () =>
  safariPackages.filter((p) => p.dayTrip);

export const getPackageBySlug = (slug: string) =>
  safariPackages.find((p) => p.slug === slug);
