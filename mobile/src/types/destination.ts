export type DestinationCategory = 'Coastal' | 'Heritage' | 'Nature' | 'Culture';

export interface DestinationHighlight {
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  municipality: string;
  category: DestinationCategory;
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  editorialFeature?: boolean;
  heritageSpotlight?: boolean;
  highlights: DestinationHighlight[];
  travelTip?: string;
  bestTimeToVisit?: string;
}