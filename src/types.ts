export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  numericPrice: number;
  category: 'starters' | 'mains' | 'desserts' | 'cocktails';
  image: string;
  tags?: string[];
  dietary?: string[];
  isFeatured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'food' | 'interior' | 'chef' | 'atmosphere' | 'cocktails';
  image: string;
  aspect?: string;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: string;
  specialRequests?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  instructions?: string;
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  orderType: 'delivery' | 'pickup';
  paymentMethod: 'bank_transfer' | 'whatsapp_order';
  specialNotes?: string;
}
