import { MenuItem } from '../types';

import jollofImg from '../assets/images/nigerian_jollof_rice_1786377865954.jpg';
import egusiImg from '../assets/images/egusi_pounded_yam_1786377878319.jpg';
import suyaImg from '../assets/images/nigerian_beef_suya_1786377889957.jpg';
import ofadaImg from '../assets/images/ofada_rice_ayamase_1786377900988.jpg';
import pepperSoupImg from '../assets/images/goat_pepper_soup_1786377914018.jpg';

export const FEATURED_MENU_ITEMS: MenuItem[] = [
  {
    id: 'smokey-jollof',
    name: 'Smokey Party Jollof Rice',
    description: 'Authentic Nigerian firewood-smokey jollof rice served with fried ripe plantains (dodo), peppered chicken, and moin moin.',
    price: '₦12,500',
    numericPrice: 12500,
    category: 'mains',
    image: jollofImg,
    tags: ['National Favorite', 'Signature'],
    dietary: ['Gluten-Free', 'Spicy'],
    isFeatured: true
  },
  {
    id: 'spicy-ram-suya',
    name: 'Spicy Ram & Beef Suya',
    description: 'Fire-grilled tender beef & ram skewers dusted with authentic Hausa yaji pepper, sliced red onions, and fresh tomatoes.',
    price: '₦10,000',
    numericPrice: 10000,
    category: 'starters',
    image: suyaImg,
    tags: ['Street Food Classic', 'Must Try'],
    dietary: ['Gluten-Free', 'Spicy'],
    isFeatured: true
  },
  {
    id: 'egusi-pounded-yam',
    name: 'Rich Egusi Soup & Pounded Yam',
    description: 'Slow-simmered melon seed soup cooked with stockfish, assorted beef, goat meat, and fresh spinach, served with smooth fluffy pounded yam.',
    price: '₦16,000',
    numericPrice: 16000,
    category: 'mains',
    image: egusiImg,
    tags: ['Chef Special', 'Traditional'],
    dietary: ['Gluten-Free', 'Spicy'],
    isFeatured: true
  },
  {
    id: 'ayamase-ofada-rice',
    name: 'Ayamase & Ofada Rice',
    description: 'Aromatic unpolished Ofada rice served in a banana leaf with spicy green pepper bleached palm oil sauce (Ayamase), boiled egg, shaki, and fried beef.',
    price: '₦14,500',
    numericPrice: 14500,
    category: 'mains',
    image: ofadaImg,
    tags: ['Heritage Classic', 'Spicy'],
    dietary: ['Gluten-Free', 'Spicy'],
    isFeatured: true
  },
  {
    id: 'goat-pepper-soup',
    name: 'Goat Meat Pepper Soup',
    description: 'Steaming fiery broth infused with native pepper soup spices, tender goat meat cuts, calabash nutmeg, and fresh scent leaves.',
    price: '₦9,500',
    numericPrice: 9500,
    category: 'starters',
    image: pepperSoupImg,
    tags: ['Native Comfort', 'Hot & Spicy'],
    dietary: ['Gluten-Free', 'Spicy'],
    isFeatured: true
  },
  {
    id: 'golden-puff-puff',
    name: 'Golden Puff Puff & Ice Cream',
    description: 'Warm fluffy Nigerian fried dough balls dusted with nutmeg sugar, served with coconut caramel and vanilla ice cream.',
    price: '₦6,500',
    numericPrice: 6500,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1000&q=80',
    tags: ['Sweet Delight'],
    dietary: ['Vegetarian'],
    isFeatured: true
  }
];

export const ALL_MENU_ITEMS: MenuItem[] = [
  ...FEATURED_MENU_ITEMS,
  {
    id: 'smoked-asun',
    name: 'Smoked Asun (Spicy Goat)',
    description: 'Fire-roasted goat meat chopped and tossed with scotch bonnet peppers, onions, and bell peppers.',
    price: '₦9,000',
    numericPrice: 9000,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    tags: ['Party Favorite', 'Spicy'],
    dietary: ['Gluten-Free', 'Spicy']
  },
  {
    id: 'gisdodo',
    name: 'Gisdodo (Peppered Gizzard & Dodo)',
    description: 'Crispy fried sweet ripe plantain cubes tossed with seasoned chicken gizzard in a rich bell pepper and onion sauce.',
    price: '₦8,500',
    numericPrice: 8500,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    tags: ['Crowd Favorite'],
    dietary: ['Gluten-Free', 'Spicy']
  },
  {
    id: 'ewa-aganyin',
    name: 'Ewa Aganyin & Fried Plantain',
    description: 'Slow-cooked mashed honey beans topped with dark caramelized chili onion palm oil sauce and sweet fried ripe plantains.',
    price: '₦8,000',
    numericPrice: 8000,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1000&q=80',
    tags: ['Lagos Street Classic'],
    dietary: ['Vegan', 'Gluten-Free', 'Spicy']
  },
  {
    id: 'charred-catfish',
    name: 'Charred Point-and-Kill Catfish',
    description: 'Whole grilled river catfish slathered in spicy chilli tomato glaze, served with roasted plantain (bole) and spicy chili dip.',
    price: '₦18,000',
    numericPrice: 18000,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80',
    tags: ['Seafood Special', 'Lagos Classic'],
    dietary: ['Gluten-Free', 'Dairy-Free', 'Spicy']
  },
  {
    id: 'edikang-ikong',
    name: 'Edikang Ikong & Yellow Eba',
    description: 'Nutritious Calabar vegetable soup loaded with waterleaf, fluted pumpkin leaves (ugwu), smoked fish, periwinkle, and dried prawns, served with yellow garri eba.',
    price: '₦15,000',
    numericPrice: 15000,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=80',
    tags: ['Calabar Special'],
    dietary: ['Gluten-Free', 'Spicy']
  },
  {
    id: 'roasted-bole',
    name: 'Roasted Bole & Toasted Groundnut',
    description: 'Caramelized charcoal-grilled ripe plantain served with warm peppered sauce and roasted crunch groundnuts.',
    price: '₦7,000',
    numericPrice: 7000,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=80',
    tags: ['Street Gourmet'],
    dietary: ['Vegan', 'Gluten-Free']
  },
  {
    id: 'palmwine-spritz',
    name: 'Lagos Palmwine Spritz',
    description: 'Fresh palm wine, artisanal gin, citrus blend, and sparkling soda over crushed ice.',
    price: '₦7,000',
    numericPrice: 7000,
    category: 'cocktails',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80',
    tags: ['Signature Cocktail'],
    dietary: ['Vegan', 'Gluten-Free']
  },
  {
    id: 'nigerian-chapman',
    name: 'Classic Nigerian Chapman',
    description: 'Iconic Nigerian red cocktail made with Angostura bitters, citrus soda, cucumber ribbon, and fresh orange slice.',
    price: '₦6,000',
    numericPrice: 6000,
    category: 'cocktails',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    tags: ['National Drink'],
    dietary: ['Vegan', 'Gluten-Free']
  },
  {
    id: 'zobo-ginger-cooler',
    name: 'Chilled Zobo & Ginger Cooler',
    description: 'Cold-pressed hibiscus tea infused with fresh ginger, pineapple juice, cloves, and mint leaves.',
    price: '₦5,500',
    numericPrice: 5500,
    category: 'cocktails',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1000&q=80',
    tags: ['Non-Alcoholic', 'Refreshing'],
    dietary: ['Vegan', 'Gluten-Free']
  }
];
