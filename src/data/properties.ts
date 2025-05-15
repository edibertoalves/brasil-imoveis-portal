
export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  type: 'sale' | 'rent';
  bedrooms: number;
  bathrooms: number;
  area: number;
  garageSpots: number;
  description: string;
  features: string[];
  images: string[];
  contactPhone: string;
  contactName: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Apartamento moderno próximo ao centro',
    address: 'Rua das Flores, 123 - Jardim Botânico',
    city: 'São Paulo',
    state: 'SP',
    price: 650000,
    type: 'sale',
    bedrooms: 2,
    bathrooms: 2,
    area: 75,
    garageSpots: 1,
    description: 'Lindo apartamento com acabamento de alto padrão, piso em porcelanato, cozinha americana, varanda gourmet e área de lazer completa no condomínio. Próximo a shopping, supermercados e estação de metrô.',
    features: ['Varanda', 'Piscina', 'Academia', 'Área de lazer', 'Segurança 24h'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1480&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1470&auto=format&fit=crop'
    ],
    contactPhone: '(11) 98765-4321',
    contactName: 'Carlos Oliveira'
  },
  {
    id: '2',
    title: 'Casa espaçosa com jardim',
    address: 'Av. das Palmeiras, 456 - Morumbi',
    city: 'São Paulo',
    state: 'SP',
    price: 1200000,
    type: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    garageSpots: 2,
    description: 'Casa ampla com 4 quartos sendo 2 suítes, sala de estar e jantar integradas, cozinha planejada, área gourmet com churrasqueira e jardim. Localizada em condomínio fechado com segurança 24h.',
    features: ['Jardim', 'Churrasqueira', 'Condomínio fechado', 'Segurança 24h', 'Área gourmet'],
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1470&auto=format&fit=crop'
    ],
    contactPhone: '(11) 99876-5432',
    contactName: 'Ana Rodrigues'
  },
  {
    id: '3',
    title: 'Apartamento em Copacabana',
    address: 'Av. Atlântica, 789 - Copacabana',
    city: 'Rio de Janeiro',
    state: 'RJ',
    price: 3200,
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
    garageSpots: 1,
    description: 'Excelente apartamento de frente para o mar em Copacabana. Mobiliado, com 3 quartos amplos, sala de estar com vista para o mar, cozinha equipada e área de serviço.',
    features: ['Vista para o mar', 'Mobiliado', 'Ar condicionado', 'Portaria 24h', 'Elevador'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448205-17d99211d42d?q=80&w=1470&auto=format&fit=crop'
    ],
    contactPhone: '(21) 98765-4321',
    contactName: 'Roberto Santos'
  },
  {
    id: '4',
    title: 'Casa de campo em condomínio',
    address: 'Estrada do Vale, 1000 - Granja Viana',
    city: 'Cotia',
    state: 'SP',
    price: 850000,
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    garageSpots: 2,
    description: 'Casa em condomínio fechado com muito verde e tranquilidade. Possui 3 dormitórios, sendo 1 suíte, sala ampla com lareira, cozinha planejada e área gourmet com churrasqueira.',
    features: ['Condomínio fechado', 'Área verde', 'Churrasqueira', 'Lareira', 'Piscina'],
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1470&auto=format&fit=crop'
    ],
    contactPhone: '(11) 97654-3210',
    contactName: 'Marcelo Lima'
  },
  {
    id: '5',
    title: 'Cobertura duplex no Leblon',
    address: 'Rua Dias Ferreira, 200 - Leblon',
    city: 'Rio de Janeiro',
    state: 'RJ',
    price: 2800000,
    type: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 240,
    garageSpots: 3,
    description: 'Cobertura duplex de alto padrão no coração do Leblon. Primeiro andar com ampla sala, cozinha gourmet e 3 suítes. Segundo andar com escritório, terraço com piscina e vista panorâmica para o mar.',
    features: ['Cobertura duplex', 'Terraço', 'Piscina privativa', 'Vista para o mar', 'Área gourmet'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613545325268-9265e1609167?q=80&w=1470&auto=format&fit=crop'
    ],
    contactPhone: '(21) 99876-5432',
    contactName: 'Mariana Costa'
  },
  {
    id: '6',
    title: 'Apartamento no centro',
    address: 'Rua XV de Novembro, 500 - Centro',
    city: 'Curitiba',
    state: 'PR',
    price: 1800,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    garageSpots: 1,
    description: 'Apartamento bem localizado no centro de Curitiba. Próximo a supermercados, restaurantes e transporte público. Possui 2 quartos, sala ampla, cozinha e área de serviço.',
    features: ['Portaria 24h', 'Elevador', 'Próximo ao comércio', 'Transporte na porta', 'Mobiliado'],
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=1470&auto=format&fit=crop'
    ],
    contactPhone: '(41) 98765-4321',
    contactName: 'Paulo Silveira'
  }
];
