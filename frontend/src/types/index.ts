export interface Place {
  id: number;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  image_url: string;
}
export interface PlacesResponse {
  message: string;
  places: Place[];
  results: number;
}
export interface PlaceResponse {
  message: string;
  place: Place;
}
export interface PlaceFormValues {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string;
  price_per_night: number;
  rating: number;
  availability?: boolean;
}
export interface PlaceData {
  address: string;
  amenities: string;
  availability: boolean;
  description: string;
  location: string;
  name: string;
  price_per_night: string;
  rating: string;
}
