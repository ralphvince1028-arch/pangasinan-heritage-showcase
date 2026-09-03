import { Destination, DestinationCategory } from '../types/destination';

const BASE_IMG = 'https://ralphvince1028-arch.github.io/pangasinan-heritage-showcase/images';

export const DESTINATIONS: Destination[] = [
  {
    id: 'hundred-islands',
    slug: 'hundred-islands',
    name: 'Hundred Islands National Park',
    municipality: 'Alaminos City',
    category: 'Coastal',
    tagline: 'Ancient Coral Islets & Marine Sanctuaries',
    shortDescription: 'A protected marine reserve comprising 124 ancient mushroom-shaped limestone islands surrounded by crystal-clear waters.',
    description: 'Scattered across the turquoise waters of the Lingayen Gulf, Hundred Islands National Park spans over 1,844 hectares of protected marine territory. Formed over two million years ago from ancient coral reefs exposed by sea-level fluctuations, each mushroom-shaped islet is topped with lush vegetation and skirted by wave-eroded limestone bases. The park serves as a sanctuary for diverse marine biodiversity, coral gardens, and migratory coastal birds.',
    image: `${BASE_IMG}/hundred-islands.png`,
    imageAlt: 'Panoramic aerial view of mushroom-shaped limestone islands in Hundred Islands National Park, Alaminos, Pangasinan',
    featured: true,
    editorialFeature: true,
    highlights: [
      {
        title: 'Geological Formation',
        description: 'Over 124 ancient coral islets sculpted over millions of years by tidal waves and ocean currents.',
      },
      {
        title: 'Marine Eco-Sanctuary',
        description: 'Vibrant giant clam sanctuaries, coral reefs, and protected habitat for sea turtles and endemic shorebirds.',
      },
      {
        title: 'Governor’s & Quezon Islands',
        description: 'Scenic elevated view decks offering panoramic vistas of the entire archipelago.',
      },
    ],
    travelTip: 'Charter boats depart from Lucap Wharf. Early morning departures offer the calmest sea conditions.',
    bestTimeToVisit: 'November through May during the dry coastal season.',
  },
  {
    id: 'bolinao-lighthouse',
    slug: 'bolinao-lighthouse',
    name: 'Cape Bolinao Lighthouse',
    municipality: 'Bolinao',
    category: 'Heritage',
    tagline: 'A Century-Old Beacon Over the West Philippine Sea',
    shortDescription: 'Built in 1905 on Punta Piedra Point, this 101-foot historic lighthouse stands as one of Northern Luzon’s most iconic maritime monuments.',
    description: 'Erected in 1905 through a joint collaboration of American, British, and Filipino engineers, the Cape Bolinao Lighthouse rises 101 feet atop the rugged limestone cliffs of Punta Piedra Point. For over a century, its luminous beacon has guided international vessels navigating the treacherous waters of the West Philippine Sea. Built with reinforced concrete and classical architectural proportions, the tower remains an enduring symbol of Pangasinan maritime history.',
    image: `${BASE_IMG}/bolinao-lighthouse.png`,
    imageAlt: 'Historic Cape Bolinao Lighthouse rising majestically above the coastal cliffs in Bolinao, Pangasinan',
    featured: true,
    heritageSpotlight: true,
    highlights: [
      {
        title: 'Century-Old Architecture',
        description: 'Completed in 1905 with classical spiral stairways and an elevated lantern room overlooking the sea.',
      },
      {
        title: 'Punta Piedra Point Cliffs',
        description: 'Spectacular elevated panoramic viewpoints showing the convergence of ocean currents and coral flats.',
      },
      {
        title: 'Maritime Heritage Preservation',
        description: 'Recognized landmark preserving Philippine maritime navigation history through modern navigational technology.',
      },
    ],
    travelTip: 'Visit during late afternoon to catch the dramatic sunset over the West Philippine Sea.',
    bestTimeToVisit: 'Dry season between December and April for clear coastal visibility.',
  },
  {
    id: 'balungao-hot-spring',
    slug: 'balungao-hot-spring',
    name: 'Balungao Hot and Cold Springs',
    municipality: 'Balungao',
    category: 'Nature',
    tagline: 'Therapeutic Geothermal Pools at Mount Balungao',
    shortDescription: 'Natural mineral-rich thermal springs nestled along the base of Mount Balungao, offering restorative wellness and eco-tourism trails.',
    description: 'Resting quietly at the foot of Mount Balungao—an inactive volcano rising above the southeastern plains of Pangasinan—this natural geothermal resort features sulfuric hot springs and refreshing cold springs. The natural thermal water is known for its soothing and revitalizing properties, while the surrounding eco-park provides canopy zipline runs and hiking trails across volcanic slopes.',
    image: `${BASE_IMG}/balungao-hot-spring.png`,
    imageAlt: 'Natural geothermal pools surrounded by green hills at Mount Balungao Hot and Cold Spring Resort',
    featured: true,
    highlights: [
      {
        title: 'Natural Geothermal Heating',
        description: 'Naturally flowing mineral pools with therapeutic temperatures ranging from 38°C to 42°C.',
      },
      {
        title: 'Mount Balungao Foothills',
        description: 'Lush inland ecosystem featuring agro-tourism orchards, endemic flora, and hiking routes.',
      },
      {
        title: 'Eco-Adventure Park',
        description: 'Features a hillside canopy zipline with wide vistas across the southeastern agricultural valley.',
      },
    ],
    travelTip: 'Bring comfortable swimwear and footwear for the walking trails leading to the spring sources.',
    bestTimeToVisit: 'Year-round; early mornings and late afternoons provide the most refreshing soak.',
  },
  {
    id: 'manaoag-basilica',
    slug: 'manaoag-basilica',
    name: 'Minor Basilica of Our Lady of Manaoag',
    municipality: 'Manaoag',
    category: 'Culture',
    tagline: 'Centuries-Old Pilgrimage Shrine of Northern Luzon',
    shortDescription: 'A historic Catholic pilgrimage basilica renowned for its sacred religious art, Baroque-inspired nave, and deep cultural traditions.',
    description: 'Founded in the late 16th century by Augustinian and Dominican friars, the Minor Basilica of Our Lady of the Rosary of Manaoag stands as the spiritual heart of Pangasinan. Elevated to a minor basilica in 2014 and canonically crowned, the sanctuary welcomes millions of cultural pilgrims annually. The church grounds feature museum collections of antique religious vestments, wooden retablos, and historic bells.',
    image: `${BASE_IMG}/manaoag-basilica.png`,
    imageAlt: 'Façade and bell tower of the Minor Basilica of Our Lady of Manaoag in Pangasinan',
    featured: false,
    highlights: [
      {
        title: 'Centuries-Old Religious History',
        description: 'Spiritual sanctuary dating back to 1605, symbolizing centuries of community faith and devotion.',
      },
      {
        title: 'Sacred Art & Museum',
        description: 'Houses antique ecclesiastical vestments, centuries-old manuscripts, and historic reliquaries.',
      },
      {
        title: 'Pilgrim Rosary Gardens',
        description: 'Tranquil meditation grounds surrounded by native shaded trees and stone pathways.',
      },
    ],
    travelTip: 'Observe respectful church attire. Museum exhibits open on morning and afternoon schedules.',
    bestTimeToVisit: 'April and May during the traditional patronal feast celebrations.',
  },
  {
    id: 'provincial-capitol',
    slug: 'provincial-capitol',
    name: 'Pangasinan Provincial Capitol Building',
    municipality: 'Lingayen',
    category: 'Heritage',
    tagline: 'Neoclassical Architectural Masterpiece by Daniel Burnham',
    shortDescription: 'Built in 1918 facing the Lingayen Gulf, this grand neoclassical government palace is celebrated as one of the most beautiful civic buildings in the Philippines.',
    description: 'Commissioned during the American period and designed by celebrated architect Daniel Burnham and Ralph Harrington Doane, the Pangasinan Provincial Capitol in Lingayen exemplifies classical Beaux-Arts and Neoclassical architecture. With colossal limestone columns, expansive verandas, and high ceilings that maximize sea breezes, the building witnessed the historic Allied landings of World War II on the Lingayen Gulf.',
    image: `${BASE_IMG}/provincial-capitol.png`,
    imageAlt: 'Stately neoclassical façade and grand ionic columns of the Pangasinan Provincial Capitol in Lingayen',
    featured: false,
    highlights: [
      {
        title: 'Neoclassical Architecture',
        description: 'Imposing Ionic colonnade and symmetrical Beaux-Arts civic façade completed in 1918.',
      },
      {
        title: 'Historic Lingayen Gulf Waterfront',
        description: 'Directly adjoins Capitol Beach Park where General MacArthur landed in January 1945.',
      },
      {
        title: 'Provincial Heritage Museum',
        description: 'Exhibits detailing the pre-colonial salt trade and wartime artifacts of Pangasinan.',
      },
    ],
    travelTip: 'Walk the Capitol Beach Park during twilight for seaside ocean breezes and evening illumination.',
    bestTimeToVisit: 'Weekdays for museum tours; late afternoons for photography of the grand façade.',
  },
  {
    id: 'balingasay-river',
    slug: 'balingasay-river',
    name: 'Balingasay River Eco-Reserve',
    municipality: 'Bolinao',
    category: 'Nature',
    tagline: 'Pristine Mangrove Sanctuary & Riparian Corridor',
    shortDescription: 'Repeatedly awarded the Cleanest Inland River in Northern Luzon, featuring century-old mangrove forests and clear emerald waters.',
    description: 'Meandering through the municipality of Bolinao into the West Philippine Sea, Balingasay River is a celebrated model for community-based environmental conservation. Spanning over 15 kilometers, the river is fringed by pristine nipa palms and century-old mangrove species that protect coastal water quality and provide nursery habitats for migratory fish and wild birds.',
    image: `${BASE_IMG}/balingasay-river.png`,
    imageAlt: 'Calm emerald waters of Balingasay River framed by lush tropical mangrove forests in Bolinao',
    featured: false,
    highlights: [
      {
        title: 'Award-Winning Clean River',
        description: 'Consistently recognized as the Cleanest Inland River in Region 1 for superior water clarity.',
      },
      {
        title: 'Centuries-Old Mangrove Sanctuary',
        description: 'Over 30 species of true mangroves providing sanctuary for wild egrets and marine life.',
      },
      {
        title: 'Eco-Cruise & Kayaking',
        description: 'Low-impact river cruises and paddle tours run by local community conservation guides.',
      },
    ],
    travelTip: 'Book river cruise tours in advance through the Bolinao Municipal Tourism Office.',
    bestTimeToVisit: 'Morning hours during low tidal currents.',
  },
  {
    id: 'umbrella-rocks',
    slug: 'umbrella-rocks',
    name: 'Umbrella Rocks Geological Formations',
    municipality: 'Agno',
    category: 'Coastal',
    tagline: 'Sculpted Coral & Sandstone Sea Towers',
    shortDescription: 'Giant umbrella-shaped geological boulders sculpted by thousands of years of wave action along the Sabangan Cove in Agno.',
    description: 'Along the rugged coast of Agno in western Pangasinan, massive limestone and sandstone boulders rise from the surf resembling open umbrellas. Sculpted continuously by the relentless surges of the West Philippine Sea, these unique geological formations create natural tide pools and dramatic foregrounds against crashing ocean waves.',
    image: `${BASE_IMG}/umbrella-rocks.png`,
    imageAlt: 'Distinctive umbrella-shaped rock formations standing on the rocky beach of Agno, Pangasinan',
    featured: false,
    highlights: [
      {
        title: 'Unique Wave-Cut Geology',
        description: 'Rare coastal erosional landforms created by thousands of years of Pacific and South China Sea tidal surges.',
      },
      {
        title: 'Sabangan Cove Tidal Pools',
        description: 'Natural shallow rock pools teeming with sea urchins, crabs, and colorful reef fishes at low tide.',
      },
      {
        title: 'Untouched Western Seaboard',
        description: 'Scenic off-the-beaten-path destination surrounded by peaceful fishing villages.',
      },
    ],
    travelTip: 'Wear sturdy water shoes when exploring the slippery rock platforms at low tide.',
    bestTimeToVisit: 'Morning low tides for safe exploration of the tidal pools.',
  },
  {
    id: 'patar-beach',
    slug: 'patar-beach',
    name: 'Patar White Sand Beach',
    municipality: 'Bolinao',
    category: 'Coastal',
    tagline: 'Golden Sand Coastline & Pristine Reef Flats',
    shortDescription: 'A broad stretch of creamy golden sand with azure waters, coral rock formations, and front-row views of coastal sunsets.',
    description: 'Located at the westernmost tip of Luzon, Patar Beach is famed for its extensive shoreline of fine golden-cream coral sand, shallow turquoise waters, and tranquil coastal ambiance. The beach slopes gently into a wide intertidal reef flat, while the background is framed by coconut groves and rustic cottages.',
    image: `${BASE_IMG}/patar-beach.png`,
    imageAlt: 'Golden sand shoreline with gentle turquoise waves at Patar Beach in Bolinao, Pangasinan',
    featured: false,
    highlights: [
      {
        title: 'Golden Coral Sand',
        description: 'Naturally pulverized shells and limestone corals producing soft creamy sands.',
      },
      {
        title: 'Sunset Coast of Northern Luzon',
        description: 'Unobstructed western horizon offering vibrant evening sunset colors across the sea.',
      },
      {
        title: 'Living Intertidal Reefs',
        description: 'Extensive coral shelf reachable during low tide for observing living marine flora and fauna.',
      },
    ],
    travelTip: 'Public access is available with minimal municipal environmental fees. Cottages are available for day rent.',
    bestTimeToVisit: 'December to May for calm swimming conditions and sunny skies.',
  },
];

export function getAllDestinations(): Destination[] {
  return DESTINATIONS;
}

export function getFeaturedDestinations(): Destination[] {
  return DESTINATIONS.filter((d) => d.featured);
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

export function getDestinationsByCategory(category: DestinationCategory): Destination[] {
  return DESTINATIONS.filter((d) => d.category === category);
}

export function getRelatedDestinations(currentSlug: string, limit = 3): Destination[] {
  const current = getDestinationBySlug(currentSlug);
  if (!current) return DESTINATIONS.slice(0, limit);
  return DESTINATIONS.filter((d) => d.slug !== currentSlug && d.category === current.category)
    .concat(DESTINATIONS.filter((d) => d.slug !== currentSlug && d.category !== current.category))
    .slice(0, limit);
}