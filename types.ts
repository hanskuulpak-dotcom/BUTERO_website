export interface Partner {
  id: number;
  name: string;
  logoText: string; 
}

export interface PartnerLogo {
  id: number;
  name: string;
  placeholder: string;
  link: string;
  image: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  image: string; 
  description: string;
}

export interface Location {
  id: number;
  name: string;
  city: string;
  address: string;
  group: string;
  link: string;
  googleMapsLink?: string; // Optional specific Google Maps link
  lat: number;
  lng: number;
}