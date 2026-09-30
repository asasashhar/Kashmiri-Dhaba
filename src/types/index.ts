export type CuisineCategory = 
  | 'all'
  | 'tandoor'
  | 'handi'
  | 'biryani'
  | 'veg'
  | 'dessert'
  | 'beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: CuisineCategory;
  price: number;
  isVeg: boolean;
  tag?: string;
  portion: string;
  description: string;
  spiceLevel?: 1 | 2 | 3; // 1 = Mild, 2 = Medium, 3 = Dhaba Teekha
  preparationTime?: string;
  pairsWith?: string;
  image?: string;
}

export interface OrderItem {
  item: MenuItem;
  quantity: number;
  spicePreference?: 'Mild' | 'Medium' | 'Dhaba Spicy';
  specialNotes?: string;
}

export interface ReservationData {
  id: string;
  guestName: string;
  phone: string;
  partySize: number;
  date: string;
  timeSlot: string;
  seatingPreference: 'family-gazebo' | 'timber-pergola' | 'starlit-lawn' | 'ac-family-suite';
  notes?: string;
  createdAt: string;
}

export interface GuestReview {
  id: string;
  author: string;
  tripType: string;
  rating: number;
  text: string;
  date: string;
  favoriteDish: string;
}

export interface TimelinePhase {
  time: string;
  phase: string;
  title: string;
  description: string;
  vibe: string;
}
