export const CATEGORIES = [
  { id: 'ALL', labelToken: 1021 },
  { id: 'SUV', labelToken: 1022 },
  { id: 'SEDAN', labelToken: 1023 },
  { id: 'ELECTRIC', labelToken: 1024 },
];

export const catalogItems = [
  {
    id: 'item-01',
    sku: 'APX-2025',
    category: 'SUV',
    badgeToken: 1049, // Ex: "Único Dono" ou "Pronta Entrega"
    subtitle: 'Apex Motors • 2025',
    title: 'Horizon Touring 2.0 Turbo',
    descriptionToken: 2001,
    // Aparece resumido no Card (máximo 2 ou 3 itens principais)
    highlights: [
      { labelToken: 1046, value: '12.400 km' },
      { labelToken: 1044, valueToken: 1070 },
    ],
    // Aparece completo na Ficha Técnica do Modal
    specs: [
      { labelToken: 1046, value: '12.400 km' },
      { labelToken: 1044, valueToken: 1070 },
      { labelToken: 1045, valueToken: 1071 },
      { labelToken: 1047, value: '252 cv' },
    ],
    featureTokens: [1074, 1075, 1076, 1077],
    images: [
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    id: 'item-02',
    sku: 'VGD-2024',
    category: 'SEDAN',
    badgeToken: 1048,
    subtitle: 'Vanguard • 2024',
    title: 'Sovereign GT Line',
    descriptionToken: 2002,
    highlights: [
      { labelToken: 1046, value: '18.900 km' },
      { labelToken: 1045, valueToken: 1073 },
    ],
    specs: [
      { labelToken: 1046, value: '18.900 km' },
      { labelToken: 1044, valueToken: 1070 },
      { labelToken: 1045, valueToken: 1073 },
      { labelToken: 1047, value: '211 cv' },
    ],
    featureTokens: [1075, 1076, 1078, 1079],
    images: [
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    id: 'item-03',
    sku: 'EMT-2026',
    category: 'ELECTRIC',
    badgeToken: 1048,
    subtitle: 'E-Motion • 2026',
    title: 'Pulse EV Long Range',
    descriptionToken: 2003,
    highlights: [
      { labelToken: 1046, value: '0 km' },
      { labelToken: 1045, valueToken: 1072 },
    ],
    specs: [
      { labelToken: 1046, value: '0 km' },
      { labelToken: 1044, valueToken: 1070 },
      { labelToken: 1045, valueToken: 1072 },
      { labelToken: 1047, value: '310 cv' },
    ],
    featureTokens: [1074, 1076, 1077, 1078],
    images: [
      'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  }
];