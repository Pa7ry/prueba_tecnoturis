export interface HotelOffersResponseModel {
  data?: Datum[];
}

interface Datum {
  type: string;
  hotel: Hotel;
  available: boolean;
  offers: Offer[];
  self: string;
}

interface Offer {
  id: string;
  checkInDate: string;
  checkOutDate: string;
  rateCode: string;
  rateFamilyEstimated: RateFamilyEstimated;
  commission: Commission;
  room: Room;
  guests: Guests;
  price: Price;
  policies: Policies;
  self: string;
}

interface Policies {
  paymentType: string;
  cancellation: Cancellation;
}

interface Cancellation {
  type: string;
  description: Description;
}

interface Price {
  currency: string;
  base: string;
  total: string;
  taxes: Tax[];
  variations: Variations;
}

interface Variations {
  average: Average;
  changes: Change[];
}

interface Change {
  startDate: string;
  endDate: string;
  total: string;
}

interface Average {
  base: string;
}

interface Tax {
  code: string;
  amount: string;
  currency: string;
  included: boolean;
}

interface Guests {
  adults: number;
}

interface Room {
  type: string;
  typeEstimated: TypeEstimated;
  description: Description;
}

interface Description {
  text: string;
  lang: string;
}

interface TypeEstimated {
  category: string;
  beds: number;
  bedType: string;
}

interface Commission {
  percentage: string;
}

interface RateFamilyEstimated {
  code: string;
  type: string;
}

interface Hotel {
  type: string;
  hotelId: string;
  chainCode: string;
  dupeId: string;
  name: string;
  cityCode: string;
  latitude: number;
  longitude: number;
}