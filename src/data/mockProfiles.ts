export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  photos: string[];
  category: 'Restaurant' | 'Club' | 'Bar';
  isNew?: boolean;
  isTop?: boolean;
  tags?: string[];
  lastActive?: string;
  verified?: boolean;
}

export const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Laury',
    age: 26,
    location: 'Paris, France',
    bio: 'Passionate about life and adventures. Let\'s create memories together! 🌟',
    photos: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    ],
    category: 'Restaurant',
    isNew: true,
    tags: ['Foodie', 'Travel', 'Art'],
    verified: true
  },
  {
    id: '2',
    name: 'Shanty',
    age: 24,
    location: 'Lyon, France',
    bio: 'DJ & Music Producer 🎧 Let\'s dance the night away!',
    photos: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
    ],
    category: 'Club',
    isTop: true,
    tags: ['Music', 'Nightlife', 'Fashion'],
    lastActive: '2 minutes ago'
  },
  {
    id: '3',
    name: 'Mel',
    age: 23,
    location: 'Marseille, France',
    bio: 'Wine enthusiast 🍷 Always up for a good conversation',
    photos: [
      'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
    ],
    category: 'Bar',
    isNew: true,
    tags: ['Wine', 'Culture', 'Books'],
    verified: true
  },
  {
    id: '4',
    name: 'Mia',
    age: 26,
    location: 'Nice, France',
    bio: 'Beach lover 🏖️ Yoga instructor & Wellness coach',
    photos: [
      'https://images.unsplash.com/photo-1524638431109-93d95c968f03',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
    ],
    category: 'Restaurant',
    isTop: true,
    tags: ['Fitness', 'Wellness', 'Travel']
  },
  {
    id: '5',
    name: 'Fanny',
    age: 22,
    location: 'Bordeaux, France',
    bio: 'Art gallery curator 🎨 Looking for cultural adventures',
    photos: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    ],
    category: 'Bar',
    tags: ['Art', 'Culture', 'Photography'],
    lastActive: '1 hour ago'
  },
  {
    id: '6',
    name: 'Val',
    age: 25,
    location: 'Toulouse, France',
    bio: 'Chef at Michelin-starred restaurant 👩‍🍳 Food is my love language',
    photos: [
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263',
      'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd'
    ],
    category: 'Restaurant',
    isNew: true,
    tags: ['Cooking', 'Fine Dining', 'Wine'],
    verified: true
  },
  {
    id: '7',
    name: 'Sophie',
    age: 27,
    location: 'Lille, France',
    bio: 'Tech entrepreneur 💻 Building the future of AI',
    photos: [
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
      'https://images.unsplash.com/photo-1524638431109-93d95c968f03'
    ],
    category: 'Bar',
    tags: ['Tech', 'Innovation', 'Coffee'],
    lastActive: '5 minutes ago'
  },
  {
    id: '8',
    name: 'Emma',
    age: 24,
    location: 'Nantes, France',
    bio: 'Professional dancer 💃 Teaching salsa and bachata',
    photos: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f'
    ],
    category: 'Club',
    isTop: true,
    tags: ['Dance', 'Music', 'Fitness'],
    verified: true
  }
];