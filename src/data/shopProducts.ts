export type ProductCategory =
  | "Performance"
  | "Ferramentas"
  | "Limpeza e Estética"
  | "Som Automotivo"
  | "Iluminação"
  | "Segurança"
  | "Tecnologia Automotiva"
  | "Pneus e Rodas"
  | "Acessórios"
  | "Recomendados pela Girauto";

export type ProductBadge =
  | "Mais Vendido"
  | "Novo"
  | "Escolha da Equipe"
  | "Recomendado"
  | "Oferta";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  hoverImage?: string;
  badge?: ProductBadge;
  bestSeller?: boolean;
  isNew?: boolean;
  teamPick?: boolean;
  trending?: boolean;
  releasedAt: string; // ISO date
  sales: number;
  shortDescription: string;
}

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const productCategories: ProductCategory[] = [
  "Recomendados pela Girauto",
  "Performance",
  "Ferramentas",
  "Tecnologia Automotiva",
  "Limpeza e Estética",
  "Som Automotivo",
  "Iluminação",
  "Pneus e Rodas",
  "Segurança",
  "Acessórios",
];

export const products: Product[] = [
  {
    id: "intake-cone-esportivo",
    name: "Intake Cone Esportivo Alta Vazão",
    category: "Performance",
    price: 1289,
    oldPrice: 1499,
    rating: 4.9,
    reviews: 187,
    image: img("photo-1492144534655-ae79c964c9d7"),
    hoverImage: img("photo-1581094488379-6f70a3f0d5a3"),
    badge: "Escolha da Equipe",
    teamPick: true,
    bestSeller: true,
    releasedAt: "2025-09-12",
    sales: 980,
    shortDescription:
      "Aumento real de fluxo de ar com filtro cônico de alta performance para Stage 1 e Stage 2.",
  },
  {
    id: "fueltech-ft450",
    name: "Injeção FuelTech FT450 Programável",
    category: "Performance",
    price: 5990,
    rating: 5.0,
    reviews: 64,
    image: img("photo-1486262715619-67b85e0b08d3"),
    hoverImage: img("photo-1517524008697-84bbe3c3fd98"),
    badge: "Recomendado",
    teamPick: true,
    releasedAt: "2025-07-22",
    sales: 220,
    shortDescription:
      "ECU programável referência para projetos de alta performance, com mapas avançados.",
  },
  {
    id: "scanner-obd2-pro",
    name: "Scanner Automotivo OBD2 Pro Bluetooth",
    category: "Tecnologia Automotiva",
    price: 489,
    oldPrice: 649,
    rating: 4.7,
    reviews: 1320,
    image: img("photo-1632823471565-1ecdf5c6da77"),
    hoverImage: img("photo-1518779578993-ec3579fee39f"),
    badge: "Mais Vendido",
    bestSeller: true,
    trending: true,
    releasedAt: "2025-04-10",
    sales: 4200,
    shortDescription:
      "Leia falhas, monitore sensores em tempo real e acompanhe sua remap pelo celular.",
  },
  {
    id: "kit-escapamento-inox",
    name: "Kit Escapamento Inox 304 Esportivo",
    category: "Performance",
    price: 3290,
    rating: 4.8,
    reviews: 142,
    image: img("photo-1502877338535-766e1452684a"),
    hoverImage: img("photo-1503376780353-7e6692767b70"),
    badge: "Novo",
    isNew: true,
    releasedAt: "2026-05-30",
    sales: 95,
    shortDescription:
      "Sonoridade premium, ganho de fluxo e acabamento em aço inox 304 polido.",
  },
  {
    id: "kit-iluminacao-led",
    name: "Kit Farol Full LED 12.000 Lúmens",
    category: "Iluminação",
    price: 749,
    oldPrice: 999,
    rating: 4.6,
    reviews: 530,
    image: img("photo-1610647752706-3bb12232b3ab"),
    hoverImage: img("photo-1542362567-b07e54358753"),
    badge: "Oferta",
    trending: true,
    releasedAt: "2025-11-02",
    sales: 1500,
    shortDescription:
      "Luz branca, alcance superior e instalação plug-and-play em diversos modelos.",
  },
  {
    id: "polidora-rotorbital",
    name: "Polidora Rotorbital Profissional 900W",
    category: "Limpeza e Estética",
    price: 1190,
    rating: 4.9,
    reviews: 311,
    image: img("photo-1607860108855-64acf2078ed9"),
    hoverImage: img("photo-1605164599901-db7f68c4b1e6"),
    badge: "Escolha da Equipe",
    teamPick: true,
    releasedAt: "2025-08-14",
    sales: 640,
    shortDescription:
      "Acabamento de detalhamento profissional sem holograma, ideal para polimento técnico.",
  },
  {
    id: "central-multimidia",
    name: "Central Multimídia 10\" Android Auto",
    category: "Som Automotivo",
    price: 1599,
    oldPrice: 1899,
    rating: 4.5,
    reviews: 870,
    image: img("photo-1571607388263-1044f9ea01dd"),
    hoverImage: img("photo-1502877338535-766e1452684a"),
    badge: "Mais Vendido",
    bestSeller: true,
    releasedAt: "2025-03-18",
    sales: 2200,
    shortDescription:
      "Tela full HD, CarPlay sem fio, câmera de ré HD e processador octa-core.",
  },
  {
    id: "kit-pneu-performance",
    name: "Pneu Performance 225/45 R17 (Par)",
    category: "Pneus e Rodas",
    price: 2190,
    rating: 4.8,
    reviews: 410,
    image: img("photo-1449965408869-eaa3f722e40d"),
    hoverImage: img("photo-1494976388531-d1058494cdd8"),
    badge: "Recomendado",
    releasedAt: "2025-06-01",
    sales: 880,
    shortDescription:
      "Composto de alta aderência ideal para carros preparados e uso esportivo seguro.",
  },
  {
    id: "alarme-presenca",
    name: "Alarme Automotivo Presença + App",
    category: "Segurança",
    price: 689,
    rating: 4.7,
    reviews: 245,
    image: img("photo-1605559424843-9e4c228bf1c3"),
    hoverImage: img("photo-1542362567-b07e54358753"),
    badge: "Recomendado",
    releasedAt: "2025-10-09",
    sales: 540,
    shortDescription:
      "Bloqueio, rastreamento em tempo real e controle completo via aplicativo.",
  },
  {
    id: "kit-ferramentas-200",
    name: "Maleta de Ferramentas 200 peças Profissional",
    category: "Ferramentas",
    price: 1349,
    oldPrice: 1599,
    rating: 4.9,
    reviews: 198,
    image: img("photo-1581092580497-e0d23cbdf1dc"),
    hoverImage: img("photo-1530124566582-a618bc2615dc"),
    badge: "Escolha da Equipe",
    teamPick: true,
    bestSeller: true,
    releasedAt: "2025-12-01",
    sales: 720,
    shortDescription:
      "Conjunto completo em aço cromo-vanádio com chaves, soquetes e acessórios.",
  },
  {
    id: "tapete-pvc-premium",
    name: "Jogo de Tapetes PVC Premium Bordas Altas",
    category: "Acessórios",
    price: 289,
    rating: 4.6,
    reviews: 1102,
    image: img("photo-1502877338535-766e1452684a"),
    hoverImage: img("photo-1532974297617-c0f05fe48bff"),
    badge: "Mais Vendido",
    bestSeller: true,
    trending: true,
    releasedAt: "2025-02-20",
    sales: 3300,
    shortDescription:
      "Proteção total, fácil higienização e caimento perfeito para diversos modelos.",
  },
  {
    id: "kit-remap-stage",
    name: "Kit Remap Stage 1 — Volkswagen TSI",
    category: "Performance",
    price: 2890,
    rating: 5.0,
    reviews: 78,
    image: img("photo-1492144534655-ae79c964c9d7"),
    hoverImage: img("photo-1503376780353-7e6692767b70"),
    badge: "Novo",
    isNew: true,
    teamPick: true,
    releasedAt: "2026-06-01",
    sales: 60,
    shortDescription:
      "Mapeamento desenvolvido pela equipe Girauto para ganho real e dirigibilidade.",
  },
];

export const getProductsByIds = (ids: string[]): Product[] =>
  ids
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));
