export const FILTER_DEFINITIONS = [
  {
    key: 'brand',
    labelToken: 1101, // Marca
    options: ['Porsche', 'BMW', 'Mercedes-Benz', 'Audi', 'Land Rover'],
  },
  {
    key: 'category',
    labelToken: 1102, // Carroceria
    options: [
      { value: 'SUV', labelToken: 1022 },
      { value: 'SEDAN', labelToken: 1023 },
      { value: 'COUPE', labelToken: 1027 },
      { value: 'ELECTRIC', labelToken: 1024 },
    ],
  },
  {
    key: 'color',
    labelToken: 1103, // Cor
    options: [
      { value: 'BLACK', labelToken: 1110 },
      { value: 'WHITE', labelToken: 1111 },
      { value: 'SILVER', labelToken: 1112 },
      { value: 'BLUE', labelToken: 1113 },
    ],
  },
  {
    key: 'fuel',
    labelToken: 1045, // Combustível
    options: [
      { value: 'GASOLINE', labelToken: 1071 },
      { value: 'HYBRID', labelToken: 1073 },
      { value: 'ELECTRIC', labelToken: 1072 },
    ],
  },
];

export const catalogItems = [
  {
    id: 'porsche-macan-gts-2024',
    sku: 'PRC-2024',
    title: 'Porsche Macan GTS 2.9 V6 Biturbo',
    subtitle: '2024 • 8.200 km • Blindado Nível III-A',
    price: 689000,
    badgeToken: 1049,
    // Atributos estruturados para filtros combinados (Marca + Cor + Carroceria + Combustível)
    attributes: {
      brand: 'Porsche',
      category: 'SUV',
      color: 'BLACK',
      fuel: 'GASOLINE',
    },
    descriptionToken: 2001,
    highlights: [
      { labelToken: 1046, value: '8.200 km' },
      { labelToken: 1047, value: '440 cv' },
      { labelToken: 1044, valueToken: 1070 },
    ],
    // Ficha técnica agrupada por seções na página do veículo
    specGroups: [
      {
        groupTitleToken: 1120, // Motor & Performance
        items: [
          { labelToken: 1123, value: '2.9 V6 Biturbo' },
          { labelToken: 1047, value: '440 cv @ 5.700 rpm' },
          { labelToken: 1124, value: '550 Nm' },
          { labelToken: 1125, value: '4,3 s (0-100 km/h)' },
        ],
      },
      {
        groupTitleToken: 1121, // Transmissão & Tração
        items: [
          { labelToken: 1044, valueToken: 1070 },
          { labelToken: 1126, value: 'Integral (AWD)' },
          { labelToken: 1127, value: 'Suspensão Pneumática PASM' },
          { labelToken: 1128, value: 'Rodas RS Spyder 21"' },
        ],
      },
      {
        groupTitleToken: 1122, // Procedência & Documentação
        items: [
          { labelToken: 1046, value: '8.200 km' },
          { labelToken: 1129, value: '2024 / 2024' },
          { labelToken: 1130, value: 'Final 8 (IPVA Pago)' },
          { labelToken: 1131, value: 'Aprovado 100% (Dekra)' },
        ],
      },
    ],
    featureTokens: [1074, 1075, 1076, 1077, 1078, 1079],
    images: [
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
  },
  {
    id: 'bmw-330e-msport-2025',
    sku: 'BMW-2025',
    title: 'BMW 330e M Sport Plug-in Hybrid',
    subtitle: '2025 • 3.500 km • Garantia de Fábrica',
    price: 398900,
    badgeToken: 1048,
    attributes: {
      brand: 'BMW',
      category: 'SEDAN',
      color: 'WHITE',
      fuel: 'HYBRID',
    },
    descriptionToken: 2002,
    highlights: [
      { labelToken: 1046, value: '3.500 km' },
      { labelToken: 1047, value: '292 cv' },
      { labelToken: 1045, valueToken: 1073 },
    ],
    specGroups: [
      {
        groupTitleToken: 1120,
        items: [
          { labelToken: 1123, value: '2.0 TwinPower + Elétrico' },
          { labelToken: 1047, value: '292 cv (Combinada)' },
          { labelToken: 1124, value: '420 Nm' },
          { labelToken: 1125, value: '5,8 s (0-100 km/h)' },
        ],
      },
      {
        groupTitleToken: 1121,
        items: [
          { labelToken: 1044, valueToken: 1070 },
          { labelToken: 1126, value: 'Traseira (RWD)' },
          { labelToken: 1127, value: 'Suspensão Adaptativa M' },
          { labelToken: 1128, value: 'Aro 19" Double Spoke' },
        ],
      },
      {
        groupTitleToken: 1122,
        items: [
          { labelToken: 1046, value: '3.500 km' },
          { labelToken: 1129, value: '2025 / 2025' },
          { labelToken: 1130, value: 'Final 4 (Licenciado)' },
          { labelToken: 1131, value: 'Aprovado 100%' },
        ],
      },
    ],
    featureTokens: [1074, 1075, 1076, 1078],
    images: [
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
  },
  {
    id: 'audi-etron-gt-2024',
    sku: 'AUD-2024',
    title: 'Audi e-tron GT Quattro Performance',
    subtitle: '2024 • 0 km • Pacote Carbono',
    price: 745000,
    badgeToken: 1048,
    attributes: {
      brand: 'Audi',
      category: 'ELECTRIC',
      color: 'SILVER',
      fuel: 'ELECTRIC',
    },
    descriptionToken: 2003,
    highlights: [
      { labelToken: 1046, value: '0 km' },
      { labelToken: 1047, value: '530 cv' },
      { labelToken: 1045, valueToken: 1072 },
    ],
    specGroups: [
      {
        groupTitleToken: 1120,
        items: [
          { labelToken: 1123, value: 'Dois Motores Síncronos' },
          { labelToken: 1047, value: '530 cv (Overboost)' },
          { labelToken: 1124, value: '640 Nm' },
          { labelToken: 1125, value: '4,1 s (0-100 km/h)' },
        ],
      },
      {
        groupTitleToken: 1121,
        items: [
          { labelToken: 1044, value: 'Automático 2 Marchas' },
          { labelToken: 1126, value: 'Quattro Elétrico' },
          { labelToken: 1127, value: 'Eixo Traseiro Esterçante' },
          { labelToken: 1128, value: 'Aro 20" Aero Design' },
        ],
      },
      {
        groupTitleToken: 1122,
        items: [
          { labelToken: 1046, value: '0 km (Faturado)' },
          { labelToken: 1129, value: '2024 / 2024' },
          { labelToken: 1130, value: 'Isento / 0 km' },
          { labelToken: 1131, value: 'Garantia 8 anos Bateria' },
        ],
      },
    ],
    featureTokens: [1074, 1075, 1076, 1077, 1078, 1079],
    images: [
      'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=1400',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ],
  },
];