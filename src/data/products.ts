export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  description: string;
  category: string;
  specs: ProductSpec[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "TECHNOS ELEGANCE BLACK",
    image: "/lovable-uploads/8da887d0-ec50-4ac0-86fa-e45b362ec40b.png",
    oldPrice: "R$ 840,00",
    price: "R$ 500,00",
    description: "Relógio feminino elegante com mostrador preto e pulseira dourada em malha. Design sofisticado para mulheres que valorizam estilo e funcionalidade.",
    category: "FEMININO",
    specs: [
      { label: "Material da Caixa", value: "Aço Inoxidável" },
      { label: "Material da Pulseira", value: "Aço Dourado" },
      { label: "Tipo de Mostrador", value: "Analógico" },
      { label: "Resistência à Água", value: "5 ATM" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "5Y20IP-4P-001" }
    ]
  },
  {
    id: "2",
    name: "TECHNOS SQUARE ROSE",
    image: "/lovable-uploads/73abb75c-ac35-4bcd-994c-3dbadea09653.png",
    oldPrice: "R$ 880,00",
    price: "R$ 500,00",
    description: "Modelo quadrado em rose gold com pulseira trançada dupla. Perfeito para ocasiões especiais, combina modernidade com elegância clássica.",
    category: "FEMININO",
    specs: [
      { label: "Material da Caixa", value: "Aço Rose Gold" },
      { label: "Material da Pulseira", value: "Aço Rose Gold Trançado" },
      { label: "Tipo de Mostrador", value: "Analógico" },
      { label: "Resistência à Água", value: "50M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "5Y20LY-1J-002" }
    ]
  },
  {
    id: "3",
    name: "TECHNOS SPORT CHRONOS",
    image: "/lovable-uploads/234099ef-c882-488b-8adf-c23171dfeec1.png",
    oldPrice: "R$ 600,00",
    price: "R$ 300,00",
    description: "Cronógrafo esportivo com mostrador preto e detalhes dourados. Ideal para atividades aquáticas e esportivas com máxima precisão e resistência.",
    category: "ESPORTIVO",
    specs: [
      { label: "Material da Caixa", value: "Aço Inoxidável Dourado" },
      { label: "Material da Pulseira", value: "Silicone Preto" },
      { label: "Tipo de Mostrador", value: "Cronógrafo" },
      { label: "Resistência à Água", value: "50M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "6P29ALF-2P-003" }
    ]
  },
  {
    id: "4",
    name: "TECHNOS SLIM MESH",
    image: "/lovable-uploads/6a51980f-bff5-4374-906f-63e0f2da69a4.png",
    oldPrice: "R$ 840,00",
    price: "R$ 400,00",
    description: "Design ultrafino com pulseira mesh preta e caixa dourada. Modelo multifuncional perfeito para o uso diário em ambiente corporativo.",
    category: "EXECUTIVO",
    specs: [
      { label: "Material da Caixa", value: "Aço Dourado" },
      { label: "Material da Pulseira", value: "Mesh Preto" },
      { label: "Tipo de Mostrador", value: "Multifuncional" },
      { label: "Resistência à Água", value: "50M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "6P29ALN-1E-004" }
    ]
  },
  {
    id: "5",
    name: "TECHNOS RIVIERA GREEN",
    image: "/lovable-uploads/44c83094-1a86-425e-95e8-9b62df6db3ba.png",
    oldPrice: "R$ 700,00",
    price: "R$ 400,00",
    description: "Modelo premium com mostrador verde e pulseira dourada maciça. Inspirado no luxo da Riviera Francesa, para quem busca exclusividade.",
    category: "PREMIUM",
    specs: [
      { label: "Material da Caixa", value: "Aço Dourado Premium" },
      { label: "Material da Pulseira", value: "Aço Dourado Maciço" },
      { label: "Tipo de Mostrador", value: "Cronógrafo" },
      { label: "Resistência à Água", value: "50M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "6P79BZ-1V-005" }
    ]
  },
  {
    id: "6",
    name: "TECHNOS RIVIERA BLUE",
    image: "/lovable-uploads/c24bf636-1239-41db-850b-65a3c58c8e41.png",
    oldPrice: "R$ 700,00",
    price: "R$ 500,00",
    description: "Edição especial com mostrador azul marinho e acabamento bicolor. Combina aço inoxidável e detalhes rose gold para máxima sofisticação.",
    category: "PREMIUM",
    specs: [
      { label: "Material da Caixa", value: "Aço Bicolor" },
      { label: "Material da Pulseira", value: "Aço Bicolor Premium" },
      { label: "Tipo de Mostrador", value: "Cronógrafo" },
      { label: "Resistência à Água", value: "50M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "6P79CB-1A-006" }
    ]
  },
  {
    id: "7",
    name: "TECHNOS CRYSTAL BLACK",
    image: "/lovable-uploads/bd3bd51c-5cf2-4430-8b8f-149eda829a50.png",
    oldPrice: "R$ 1.180,00",
    price: "R$ 500,00",
    description: "Design inovador com cristal decorativo e mostrador preto com diamantes. Pulseira slim que combina elegância com modernidade absoluta.",
    category: "FEMININO",
    specs: [
      { label: "Material da Caixa", value: "Aço Preto Premium" },
      { label: "Material da Pulseira", value: "Aço Preto Slim" },
      { label: "Tipo de Mostrador", value: "Analógico com Cristais" },
      { label: "Resistência à Água", value: "30M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "751AB-1P-007" }
    ]
  },
  {
    id: "8",
    name: "TECHNOS CLASSIC GOLD",
    image: "/lovable-uploads/bb28c02d-f55a-4747-8edd-e199561d52be.png",
    oldPrice: "R$ 840,00",
    price: "R$ 500,00",
    description: "Clássico atemporal com mostrador branco e pulseira dourada em elos. Design tradicional que nunca sai de moda, perfeito para qualquer ocasião.",
    category: "CLÁSSICO",
    specs: [
      { label: "Material da Caixa", value: "Aço Dourado" },
      { label: "Material da Pulseira", value: "Aço Dourado em Elos" },
      { label: "Tipo de Mostrador", value: "Analógico" },
      { label: "Resistência à Água", value: "50M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "2035MXJS-1K-008" }
    ]
  },
  {
    id: "9",
    name: "TECHNOS ELOS LUXURY",
    image: "/lovable-uploads/3f1c8848-2550-4714-9e3c-9c76cc89a894.png",
    oldPrice: "R$ 720,00",
    price: "R$ 400,00",
    description: "Modelo de luxo com mostrador preto e pulseira em corrente dourada. Design ousado que combina rock chic com elegância contemporânea.",
    category: "LUXURY",
    specs: [
      { label: "Material da Caixa", value: "Aço Dourado Premium" },
      { label: "Material da Pulseira", value: "Corrente Dourada" },
      { label: "Tipo de Mostrador", value: "Analógico com Diamantes" },
      { label: "Resistência à Água", value: "50M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "2036MQN-1P-009" }
    ]
  },
  {
    id: "10",
    name: "TECHNOS CHAIN ELEGANCE",
    image: "/lovable-uploads/53c3c69e-885b-4a41-8160-eef3f403ce36.png",
    oldPrice: "700,00",
    price: "R$ 500,00",
    description: "Versão octogonal com mostrador preto e corrente dourada. Design geométrico único que expressa personalidade forte e estilo inconfundível.",
    category: "LUXURY",
    specs: [
      { label: "Material da Caixa", value: "Aço Dourado Octogonal" },
      { label: "Material da Pulseira", value: "Corrente Dourada Premium" },
      { label: "Tipo de Mostrador", value: "Analógico com Diamantes" },
      { label: "Resistência à Água", value: "50M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "TCH-CHN-010" }
    ]
  },
  {
    id: "11",
    name: "TECHNOS CRYSTAL GLAMOUR",
    image: "/lovable-uploads/a9376b90-aab7-4bd7-87cd-efb334d5c6f5.png",
    oldPrice: "1.140,00",
    price: "R$ 500,00",
    description: "Modelo feminino com cristais facetados e acabamento dourado premium. Design octogonal único que combina elegância e modernidade.",
    category: "FEMININO",
    specs: [
      { label: "Material da Caixa", value: "Aço Dourado Octogonal" },
      { label: "Material da Pulseira", value: "Cristais Facetados" },
      { label: "Tipo de Mostrador", value: "Analógico com Cristais" },
      { label: "Resistência à Água", value: "30M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "2036MTT-1D-011" }
    ]
  },
  {
    id: "12",
    name: "TECHNOS STEEL DOURADO",
    image: "/lovable-uploads/edcba1a5-df24-44ee-8189-e5a55163c0bd.png",
    oldPrice: "440,00",
    price: "R$ 400,00",
    description: "Relógio clássico com mostrador azul marinho e pulseira de couro marrom. Design atemporal perfeito para uso executivo e social.",
    category: "CLÁSSICO",
    specs: [
      { label: "Material da Caixa", value: "Aço Dourado" },
      { label: "Material da Pulseira", value: "Couro Marrom Premium" },
      { label: "Tipo de Mostrador", value: "Analógico" },
      { label: "Resistência à Água", value: "50M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "2315LAO-0A-012" }
    ]
  },
  {
    id: "13",
    name: "TECHNOS GOLF GRAFITE",
    image: "/lovable-uploads/1efe3e59-2406-454c-8347-683d0e7ac541.png",
    oldPrice: "640,00",
    price: "R$ 400,00",
    description: "Modelo esportivo com mostrador marrom degradê e pulseira de couro. Desenvolvido especialmente para praticantes de golf e esportes terrestres.",
    category: "ESPORTIVO",
    specs: [
      { label: "Material da Caixa", value: "Aço Gunmetal" },
      { label: "Material da Pulseira", value: "Couro Marrom Esportivo" },
      { label: "Tipo de Mostrador", value: "Analógico com Data" },
      { label: "Resistência à Água", value: "50M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "2315LAQ-0M-013" }
    ]
  },
  {
    id: "14",
    name: " DIVER BLACK",
    image: "/lovable-uploads/618a6cb1-990a-4255-a340-cb1f6ae81c83.png",
    oldPrice: "760,00",
    price: "R$ 530,00",
    description: "Relógio de mergulho profissional com bezel unidirecional e mostrador preto. Resistência superior para atividades aquáticas extremas.",
    category: "ESPORTIVO",
    specs: [
      { label: "Material da Caixa", value: "Aço Inoxidável 316L" },
      { label: "Material da Pulseira", value: "Aço Inoxidável" },
      { label: "Tipo de Mostrador", value: "Diver com Bezel" },
      { label: "Resistência à Água", value: "150M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "2415DY-1P-014" }
    ]
  },
  {
    id: "15",
    name: "TECHNOS DIVER GREEN",
    image: "/lovable-uploads/ae2b5ea6-0607-4894-a065-723dba91ddc9.png",
    oldPrice: "760,00",
    price: "R$ 530,00",
    description: "Edição limitada com mostrador verde submarino e bezel cerâmico. Design inspirado nos oceanos profundos com tecnologia de ponta.",
    category: "PREMIUM",
    specs: [
      { label: "Material da Caixa", value: "Aço Inoxidável 316L" },
      { label: "Material da Pulseira", value: "Aço Inoxidável Premium" },
      { label: "Tipo de Mostrador", value: "Diver com Bezel Cerâmico" },
      { label: "Resistência à Água", value: "150M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "2415DY-1V-015" }
    ]
  },
  {
    id: "16",
    name: "TECHNOS DIVER ROSE",
    image: "/lovable-uploads/b9316a80-ee0a-4547-9ad8-66abae67dd45.png",
    oldPrice: "760,00",
    price: "R$ 530,00",
    description: "Modelo exclusivo em rose gold com pulseira mesh e mostrador preto. Combinação única de elegância e funcionalidade para mergulho.",
    category: "LUXURY",
    specs: [
      { label: "Material da Caixa", value: "Aço Rose Gold PVD" },
      { label: "Material da Pulseira", value: "Mesh Rose Gold" },
      { label: "Tipo de Mostrador", value: "Diver Premium" },
      { label: "Resistência à Água", value: "150M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "2415EC-2P-016" }
    ]
  },
  {
    id: "17",
    name: "TECHNOS AUTOMATIC GOLD",
    image: "/lovable-uploads/6c74c2b7-e4ce-4e66-a8f0-3d3d5b5d3e40.png",
    oldPrice: "1.200,00",
    price: "R$ 800,00",
    description: "Relógio automático premium com esqueleto visível e acabamento dourado. Movimento mecânico de alta precisão para colecionadores exigentes.",
    category: "PREMIUM",
    specs: [
      { label: "Material da Caixa", value: "Aço Dourado Premium" },
      { label: "Material da Pulseira", value: "Aço Dourado Maciço" },
      { label: "Tipo de Mostrador", value: "Automático Skeleton" },
      { label: "Resistência à Água", value: "50M" },
      { label: "Garantia", value: "1 Ano" },
      { label: "Código do Produto", value: "G3265AQ-1P-017" }
    ]
   }
];