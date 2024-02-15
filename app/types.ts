export interface INearby {
    id: string;
    text: string;
    place_name: string;
    center: [number, number];
  }

export type NearbyContextType = {
    nearbyData: INearby[]
};