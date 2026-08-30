export type HeritageCategory =
  | 'Natural Heritage'
  | 'Historical & Architectural'
  | 'Wellness & Natural Springs'
  | 'Religious & Cultural'
  | 'Coastal & Marine';

export interface DestinationHighlight {
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  municipality: string;
  province: string;
  category: HeritageCategory;
  description: string;
  longOverview: string;
  culturalSignificance: string;
  highlights: DestinationHighlight[];
  imageUrl: string;
  imageAlt: string;
  gallery: {
    url: string;
    caption: string;
    alt: string;
  }[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  featured: boolean;
}

export interface HeritageFilterState {
  searchQuery: string;
  selectedCategory: string;
}

