import { Destination, HeritageCategory } from '@/types/heritage';

export const HERITAGE_CATEGORIES: HeritageCategory[] = [
  'Natural Heritage',
  'Historical & Architectural',
  'Wellness & Natural Springs',
  'Religious & Cultural',
  'Coastal & Marine',
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'hundred-islands',
    slug: 'hundred-islands',
    name: 'Hundred Islands National Park',
    tagline: 'Ancient limestone coral formations scattered across the Lingayen Gulf',
    municipality: 'Alaminos City',
    province: 'Pangasinan',
    category: 'Natural Heritage',
    description:
      'A world-renowned protected marine reserve comprising approximately 124 ancient mushroom-shaped islands and islets formed over two million years ago.',
    longOverview:
      'The Hundred Islands National Park spans 1,844 hectares of coastal waters and islets across the Lingayen Gulf. Believed to be around two million years old, these ancient coral reef deposits were raised by geological upheaval and eroded over millennia by waves into their distinct mushroom silhouettes. The park serves as a vital sanctuary for diverse marine species, giant clams (Tridacna gigas), and coastal avian wildlife.',
    culturalSignificance:
      'Deeply rooted in local folklore and maritime heritage, the Hundred Islands symbolize the geological resilience and biodiversity of the western Pangasinan coastline. The park was declared the first national park in the Philippines in 1940.',
    highlights: [
      {
        title: 'Governor Island & Viewing Deck',
        description: 'Features a panoramic 360-degree observation deck overlooking the expanse of islets across the turquoise gulf.'
      },
      {
        title: 'Quezon Island Family Marine Hub',
        description: 'The central hub for eco-tourism, kayaking, and marine conservation education.'
      },
      {
        title: 'Giant Clam (Taklobo) Ocean Nursery',
        description: 'An active marine sanctuary cultivating and protecting thousands of endangered giant clams.'
      },
      {
        title: 'Imelda Cave & Helmet Diving Reefs',
        description: 'Underwater natural caverns and coral shelves accommodating eco-friendly water exploration.'
      }
    ],
    imageUrl: '/images/hundred-islands.png',
    imageAlt: 'Scenic panoramic view of the mushroom-shaped limestone islets of Hundred Islands National Park in Alaminos, Pangasinan',
    gallery: [
      {
        url: '/images/hundred-islands.png',
        caption: 'Aerial perspective of the turquoise waters and emerald islets.',
        alt: 'Hundred Islands emerald islets rising above clear blue waters'
      },
      {
        url: '/images/hundred-islands.png',
        caption: 'Protected marine reef teeming with native aquatic life.',
        alt: 'Coral reef formations at Hundred Islands'
      }
    ],
    featured: true,
  },
  {
    id: 'bolinao-lighthouse',
    slug: 'bolinao-lighthouse',
    name: 'Cape Bolinao Lighthouse',
    tagline: 'A historic maritime beacon guiding seafarers along the West Philippine Sea since 1905',
    municipality: 'Bolinao',
    province: 'Pangasinan',
    category: 'Historical & Architectural',
    description:
      'One of the tallest and most iconic century-old historical lighthouses in the Philippines, perched on Punta Piedra Point overlooking the West Philippine Sea.',
    longOverview:
      'Constructed in 1905 by a tripartite team of Filipino, British, and American civil engineers, the Cape Bolinao Lighthouse stands proudly atop Punta Piedra Point. Rising over 101 feet (30.8 meters) tall on a 250-foot natural limestone cliff, its original lantern provided a crucial navigation marker along international shipping lanes crossing the West Philippine Sea and South China Sea.',
    culturalSignificance:
      'A premier sentinel of Pangasinan’s maritime heritage, the lighthouse stands as a monument to early 20th-century coastal civil engineering and centuries of navigational history along the western Luzon corridor.',
    highlights: [
      {
        title: 'Historic Masonry Tower',
        description: 'Well-preserved masonry tower featuring a classic spiraling staircase and original observation gallery.'
      },
      {
        title: 'Punta Piedra Cliffside Lookout',
        description: 'Offers dramatic sunset vistas of rugged coastal limestone shelves and open ocean waters.'
      },
      {
        title: 'Architectural Heritage Site',
        description: 'Recognized landmark symbolizing colonial-era maritime safety infrastructure in the Philippines.'
      }
    ],
    imageUrl: '/images/bolinao-lighthouse.png',
    imageAlt: 'Historic Cape Bolinao Lighthouse standing tall against the coastal sky in Bolinao, Pangasinan',
    gallery: [
      {
        url: '/images/bolinao-lighthouse.png',
        caption: 'The century-old beacon perched upon Punta Piedra limestone cliff.',
        alt: 'Cape Bolinao Lighthouse tower detail'
      },
      {
        url: '/images/bolinao-lighthouse.png',
        caption: 'Panoramic ocean view looking toward Patar coastal horizon.',
        alt: 'West Philippine Sea coastline viewed from the lighthouse cliff'
      }
    ],
    featured: true,
  },
  {
    id: 'balungao-hot-spring',
    slug: 'balungao-hot-spring',
    name: 'Balungao Hot and Cold Spring Resort',
    tagline: 'Therapeutic mineral waters flowing from the dormant volcanic foothills of Mount Balungao',
    municipality: 'Balungao',
    province: 'Pangasinan',
    category: 'Wellness & Natural Springs',
    description:
      'A natural geothermal wellness destination nestled at the base of Mount Balungao, renowned for its therapeutic natural sulfuric springs and eco-adventure trails.',
    longOverview:
      'Situated at the southeastern gateway of Pangasinan, the Balungao Hot and Cold Spring Resort harnesses geothermal waters naturally heated deep within Mount Balungao, an extinct volcano. The mineral-rich spring waters flow into tiered recreational pools offering variable therapeutic temperatures, surrounded by verdant agricultural landscapes and mountain hiking paths.',
    culturalSignificance:
      'Long cherished by local communities as a place of holistic rest, restoration, and folklore, Balungao represents Pangasinan’s inland natural geothermal wonders distinct from its famous coastal regions.',
    highlights: [
      {
        title: 'Tiered Geothermal Thermal Pools',
        description: 'Naturally heated mineral springs reputed to alleviate joint stiffness and rejuvenate fatigued travelers.'
      },
      {
        title: 'Mount Balungao Eco-Trail',
        description: 'Lush biodiversity trail leading through native woodlands and scenic panoramic vantage points.'
      },
      {
        title: 'Extreme Eco-Adventure Facilities',
        description: 'Features one of Northern Luzon’s pioneering hillside ziplines and cable canopy walks.'
      }
    ],
    imageUrl: '/images/balungao-hot-spring.png',
    imageAlt: 'Serene natural geothermal hot spring pools surrounded by lush greenery in Balungao, Pangasinan',
    gallery: [
      {
        url: '/images/balungao-hot-spring.png',
        caption: 'Warm mineral pool waters fed directly by Mount Balungao geothermal veins.',
        alt: 'Balungao hot spring thermal pool waters'
      },
      {
        url: '/images/balungao-hot-spring.png',
        caption: 'Lush tree canopies enveloping the inland resort landscape.',
        alt: 'Foothills of Mount Balungao'
      }
    ],
    featured: true,
  },
  {
    id: 'manaoag-basilica',
    slug: 'manaoag-basilica',
    name: 'Minor Basilica of Our Lady of the Rosary of Manaoag',
    tagline: 'The revered spiritual heart and pilgrimage sanctuary of Northern Luzon',
    municipality: 'Manaoag',
    province: 'Pangasinan',
    category: 'Religious & Cultural',
    description:
      'One of the most sacred and historically significant pilgrimage shrines in the Philippines, canonically crowned and designated as a Minor Basilica by the Vatican.',
    longOverview:
      'Administered by the Order of Preachers (Dominicans) since the 17th century, the Minor Basilica of Our Lady of the Rosary of Manaoag attracts millions of pilgrims annually. The church’s distinct neo-classical and baroque architectural synthesis houses the revered ivory icon brought from Spain via the Acapulco Galleon trade in the early 1600s.',
    culturalSignificance:
      'An enduring testament to Pangasinan’s spiritual identity, communal devotion, and four centuries of documented ecclesiastical history.',
    highlights: [
      {
        title: 'Historic Basilica Complex',
        description: 'Grand church hall featuring ornate altars, vaulted ceilings, and classic stained-glass biblical narratives.'
      },
      {
        title: 'Ecclesiastical Heritage Museum',
        description: 'Houses antique vestments, centuries-old religious artifacts, and archival historical chronicles.'
      },
      {
        title: 'Rosary Garden of Contemplation',
        description: 'Quiet outdoor garden pathways designed for reflective prayer and tranquil respite.'
      }
    ],
    imageUrl: '/images/manaoag-basilica.png',
    imageAlt: 'The majestic facade and belfry of the Minor Basilica of Our Lady of Manaoag in Pangasinan',
    gallery: [
      {
        url: '/images/manaoag-basilica.png',
        caption: 'Historic facade of the Minor Basilica in Manaoag.',
        alt: 'Manaoag Basilica facade'
      }
    ],
    featured: false,
  },
  {
    id: 'provincial-capitol-lingayen',
    slug: 'provincial-capitol-lingayen',
    name: 'Pangasinan Provincial Capitol & Lingayen Gulf Beach',
    tagline: 'A stately neoclassical architectural marvel facing the historic waters of Lingayen Gulf',
    municipality: 'Lingayen',
    province: 'Pangasinan',
    category: 'Historical & Architectural',
    description:
      'Dubbed the "Most Beautiful Capitol in the Philippines," this 1918 Daniel Burnham-inspired neoclassical civic edifice anchors the historic Lingayen Gulf war memorial beach.',
    longOverview:
      'Completed in 1918 under the architectural direction of Ralph Harrington Doane following Daniel Burnham’s civic urban layout, the Pangasinan Provincial Capitol is constructed with reinforced concrete and classical Ionic columns. The adjoining Lingayen Gulf beach was the historic landing site of General Douglas MacArthur and Allied Liberation forces in January 1945.',
    culturalSignificance:
      'The administrative epicenter and civic pride of the province, celebrating the historical courage of Pangasinenses during World War II and the architectural grandeur of early 20th-century civic planning.',
    highlights: [
      {
        title: 'Neoclassical Ionic Colonnade',
        description: 'Majestic exterior facade, ceremonial grand staircase, and restored ceremonial state rooms.'
      },
      {
        title: 'Veterans Memorial Park',
        description: 'Open-air military heritage museum displaying historic tanks, aircraft, and liberation war monuments.'
      },
      {
        title: 'Lingayen Coastal Baywalk',
        description: 'Expansive public promenade offering tranquil sea breezes, pine tree groves, and golden sands.'
      }
    ],
    imageUrl: '/images/provincial-capitol.png',
    imageAlt: 'Neoclassical architecture of the Pangasinan Provincial Capitol building in Lingayen',
    gallery: [
      {
        url: '/images/provincial-capitol.png',
        caption: 'Colonnaded facade of the Pangasinan Provincial Capitol.',
        alt: 'Pangasinan Capitol building'
      }
    ],
    featured: false,
  },
  {
    id: 'balingasay-river',
    slug: 'balingasay-river',
    name: 'Balingasay River & Mangrove Ecopark',
    tagline: 'One of the cleanest and most pristine river ecosystems in the Philippines',
    municipality: 'Bolinao',
    province: 'Pangasinan',
    category: 'Natural Heritage',
    description:
      'A multi-awarded national clean-river sanctuary featuring centuries-old mangrove forests, rich estuarine biodiversity, and sustainable river-cruise eco-tours.',
    longOverview:
      'Stretching through the coastal municipality of Bolinao, the Balingasay River has been repeatedly recognized as the Cleanest River in Northern Luzon. Its brackish waters sustain over 30 species of mangroves, vibrant wild bird colonies, and traditional artisanal fishing communities committed to community-based conservation.',
    culturalSignificance:
      'A living model of sustainable community stewardship, showcasing traditional harmony between coastal Pangasinan settlements and delicate riverine ecosystems.',
    highlights: [
      {
        title: 'Balingasay River Cruise',
        description: 'Gentle bamboo raft and boat excursions guided by local conservationists through pristine mangrove tunnels.'
      },
      {
        title: 'Mangrove Canopy Sanctuary',
        description: 'Ancient Rhizophora mangrove trees providing crucial nurseries for local marine and avian species.'
      },
      {
        title: 'Bolinao Cansisit Falls Gateway',
        description: 'Tributary nature trails leading to hidden refreshing freshwater cascades.'
      }
    ],
    imageUrl: '/images/balingasay-river.png',
    imageAlt: 'Lush green mangrove trees flanking the crystal clear waters of Balingasay River in Bolinao',
    gallery: [
      {
        url: '/images/balingasay-river.png',
        caption: 'Calm reflective waters flanked by thick mangrove canopies.',
        alt: 'Balingasay River landscape'
      }
    ],
    featured: false,
  },
  {
    id: 'umbrella-rocks-agno',
    slug: 'umbrella-rocks-agno',
    name: 'Umbrella Rocks of Agno',
    tagline: 'Distinctive umbrella-like geological coastal monuments shaped by tides',
    municipality: 'Agno',
    province: 'Pangasinan',
    category: 'Coastal & Marine',
    description:
      'Enchanting mushroom- and umbrella-shaped geological rock formations sculpted over millions of years by tidal waves along the pristine Sabangan Beach.',
    longOverview:
      'Located along the untouched coastline of Agno, the Umbrella Rocks are natural geological wonders resembling gigantic umbrellas or mushrooms rising directly from the rocky shores of Sabangan Cove. The steady rhythmic action of the West Philippine Sea tides combined with natural weathering gave these limestone and sandstone boulders their distinct flared caps.',
    culturalSignificance:
      'Celebrated in western Pangasinan coastal culture as nature’s organic sculptures and a tranquil symbol of raw coastal beauty untouched by heavy commercialization.',
    highlights: [
      {
        title: 'Sabangan Rock Garden Shoreline',
        description: 'Stroll along the rocky shore during low tide to inspect the intricate geological base undercuts.'
      },
      {
        title: 'Agno Coastal Tidal Pools',
        description: 'Clear natural saltwater pockets harboring small marine crabs, mollusks, and colorful coastal flora.'
      },
      {
        title: 'Panoramic Sunset Vista',
        description: 'Unobstructed western horizon vistas where the golden sun sets directly behind the rock formations.'
      }
    ],
    imageUrl: '/images/umbrella-rocks.png',
    imageAlt: 'Unique umbrella-shaped rock formations lining the coast of Agno, Pangasinan',
    gallery: [
      {
        url: '/images/umbrella-rocks.png',
        caption: 'The iconic mushroom-shaped boulders of Agno facing the open sea.',
        alt: 'Umbrella rocks in Agno'
      }
    ],
    featured: false,
  },
  {
    id: 'patar-white-beach',
    slug: 'patar-white-beach',
    name: 'Patar White Beach & Enchanted Cave',
    tagline: 'Golden-creamy sands, dramatic coral reef shelves, and subterranean freshwater pools',
    municipality: 'Bolinao',
    province: 'Pangasinan',
    category: 'Coastal & Marine',
    description:
      'Often called the "Boracay of the North," Patar features a long stretch of creamy golden sand, turquoise waves, and proximity to sacred ancient limestone cave pools.',
    longOverview:
      'Patar White Beach stretches along the westernmost tip of Luzon, meeting the open expanse of the West Philippine Sea. The beach is characterized by its wide shoreline of natural coral-sand, crystal-clear surf, and adjacent geological wonders including the subterranean freshwater pool of Enchanted Cave, formed deep within fossilized coral rock beds.',
    culturalSignificance:
      'An iconic Pangasinan vacation haven embodying the province’s rich coastal lifestyle, artisanal fish-drying heritage (*danggit*), and geological wonders.',
    highlights: [
      {
        title: 'Patar Golden-White Coral Strand',
        description: 'Natural uncrowded coastline with soft sand and turquoise breakers ideal for coastal walks.'
      },
      {
        title: 'Enchanted Cave Subterranean Pool',
        description: 'An ancient underground limestone cavern holding a crystal-clear natural freshwater pool.'
      },
      {
        title: 'Bolinao Rock Formations',
        description: 'Rugged fossilized coral shelves providing dramatic coastal backdrops against ocean spray.'
      }
    ],
    imageUrl: '/images/patar-beach.png',
    imageAlt: 'Pristine turquoise waters and golden coral sands at Patar Beach in Bolinao, Pangasinan',
    gallery: [
      {
        url: '/images/patar-beach.png',
        caption: 'Patar Beach coast during a serene golden sunset.',
        alt: 'Patar Beach coast'
      }
    ],
    featured: false,
  }
];

export function getFeaturedDestinations(): Destination[] {
  return DESTINATIONS.filter((d) => d.featured);
}

export function getAllDestinations(): Destination[] {
  return DESTINATIONS;
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

