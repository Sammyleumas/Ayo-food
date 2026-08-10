import { GalleryItem } from '../types';

import jollofImg from '../assets/images/nigerian_jollof_rice_1786377865954.jpg';
import egusiImg from '../assets/images/egusi_pounded_yam_1786377878319.jpg';
import suyaImg from '../assets/images/nigerian_beef_suya_1786377889957.jpg';
import ofadaImg from '../assets/images/ofada_rice_ayamase_1786377900988.jpg';
import femaleChefImg from '../assets/images/nigerian_female_chef_1786378744018.jpg';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Smokey Party Jollof & Dodo',
    subtitle: 'Firewood Smokey Perfection',
    category: 'food',
    image: jollofImg,
    aspect: 'aspect-square'
  },
  {
    id: 'gallery-2',
    title: 'Candlelit Main Dining Room',
    subtitle: 'Intimate Atmosphere & Warm Lighting',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gallery-3',
    title: 'Executive Chef Amara & Chef Abiodun',
    subtitle: 'Heritage & Culinary Excellence',
    category: 'chef',
    image: femaleChefImg,
    aspect: 'aspect-square'
  },
  {
    id: 'gallery-4',
    title: 'Rich Egusi Soup & Fluffy Pounded Yam',
    subtitle: 'Traditional Melon Seed & Stockfish Delight',
    category: 'food',
    image: egusiImg,
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gallery-5',
    title: 'Spicy Ram & Beef Suya',
    subtitle: 'Coated in Yaji Pepper & Sliced Onions',
    category: 'food',
    image: suyaImg,
    aspect: 'aspect-square'
  },
  {
    id: 'gallery-6',
    title: 'Ayamase & Ofada Rice in Banana Leaf',
    subtitle: 'Victoria Island, Lagos',
    category: 'atmosphere',
    image: ofadaImg,
    aspect: 'aspect-[4/3]'
  }
];


