export type VideoCategory =
  | "Stage 1"
  | "Stage 2"
  | "FuelTech"
  | "Intake"
  | "Escapamento"
  | "Remap"
  | "Projetos"
  | "Dicas"
  | "Testes"
  | "Preparação";

export interface TvVideo {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  thumbnail: string;
  /** Replace with a real TikTok embed URL when integrating. */
  embedUrl: string;
  views: number;
  publishedAt: string; // ISO date
  tiktokUrl: string;
  relatedProductIds: string[];
}

const thumb = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const videoCategories: VideoCategory[] = [
  "Stage 1",
  "Stage 2",
  "FuelTech",
  "Intake",
  "Escapamento",
  "Remap",
  "Projetos",
  "Dicas",
  "Testes",
  "Preparação",
];

export const tvVideos: TvVideo[] = [
  {
    id: "intake-polo-tsi",
    title: "Instalando Intake no Polo TSI — Ganho Real?",
    description:
      "Mostramos passo a passo a instalação de um intake cônico de alta vazão em um VW Polo TSI e medimos o ganho real em dinamômetro.",
    category: "Intake",
    thumbnail: thumb("photo-1492144534655-ae79c964c9d7"),
    embedUrl: "https://www.tiktok.com/embed/v2/0000000000000000001",
    views: 184320,
    publishedAt: "2026-05-22",
    tiktokUrl: "https://www.tiktok.com/@girauto",
    relatedProductIds: ["intake-cone-esportivo", "scanner-obd2-pro", "kit-ferramentas-200"],
  },
  {
    id: "stage2-bem-feito",
    title: "Quanto ganha um Stage 2 bem feito?",
    description:
      "Comparativo antes e depois de um Stage 2 completo: intake, escapamento esportivo e remap dedicado.",
    category: "Stage 2",
    thumbnail: thumb("photo-1503376780353-7e6692767b70"),
    embedUrl: "https://www.tiktok.com/embed/v2/0000000000000000002",
    views: 312540,
    publishedAt: "2026-04-30",
    tiktokUrl: "https://www.tiktok.com/@girauto",
    relatedProductIds: ["kit-remap-stage", "intake-cone-esportivo", "kit-escapamento-inox", "scanner-obd2-pro"],
  },
  {
    id: "fueltech-do-zero",
    title: "FuelTech FT450 do zero — Como começar",
    description:
      "Guia direto sobre o que você precisa para iniciar um projeto FuelTech com segurança e organização.",
    category: "FuelTech",
    thumbnail: thumb("photo-1486262715619-67b85e0b08d3"),
    embedUrl: "https://www.tiktok.com/embed/v2/0000000000000000003",
    views: 96230,
    publishedAt: "2026-05-10",
    tiktokUrl: "https://www.tiktok.com/@girauto",
    relatedProductIds: ["fueltech-ft450", "scanner-obd2-pro", "kit-ferramentas-200"],
  },
  {
    id: "escapamento-inox",
    title: "Escapamento Inox 304 — Vale a pena?",
    description: "Teste de som, fluxo e durabilidade de um kit de escapamento inox 304.",
    category: "Escapamento",
    thumbnail: thumb("photo-1502877338535-766e1452684a"),
    embedUrl: "https://www.tiktok.com/embed/v2/0000000000000000004",
    views: 142090,
    publishedAt: "2026-03-18",
    tiktokUrl: "https://www.tiktok.com/@girauto",
    relatedProductIds: ["kit-escapamento-inox", "intake-cone-esportivo"],
  },
  {
    id: "remap-stage1-tsi",
    title: "Remap Stage 1 TSI — antes e depois",
    description: "Mostramos como uma remap bem feita transforma a dirigibilidade no dia a dia.",
    category: "Remap",
    thumbnail: thumb("photo-1581094488379-6f70a3f0d5a3"),
    embedUrl: "https://www.tiktok.com/embed/v2/0000000000000000005",
    views: 221450,
    publishedAt: "2026-02-04",
    tiktokUrl: "https://www.tiktok.com/@girauto",
    relatedProductIds: ["kit-remap-stage", "scanner-obd2-pro"],
  },
  {
    id: "projeto-civic-si",
    title: "Projeto Civic Si — Da concepção à pista",
    description: "Acompanhe a evolução completa de um projeto Civic Si preparado pela equipe Girauto.",
    category: "Projetos",
    thumbnail: thumb("photo-1517524008697-84bbe3c3fd98"),
    embedUrl: "https://www.tiktok.com/embed/v2/0000000000000000006",
    views: 412330,
    publishedAt: "2026-01-20",
    tiktokUrl: "https://www.tiktok.com/@girauto",
    relatedProductIds: ["fueltech-ft450", "kit-escapamento-inox", "kit-pneu-performance"],
  },
  {
    id: "dicas-revisao",
    title: "5 Dicas de Revisão que Salvam seu Motor",
    description: "Checklist prático para quem quer rodar tranquilo e prolongar a vida do motor.",
    category: "Dicas",
    thumbnail: thumb("photo-1632823471565-1ecdf5c6da77"),
    embedUrl: "https://www.tiktok.com/embed/v2/0000000000000000007",
    views: 73210,
    publishedAt: "2026-06-01",
    tiktokUrl: "https://www.tiktok.com/@girauto",
    relatedProductIds: ["scanner-obd2-pro", "kit-ferramentas-200"],
  },
  {
    id: "teste-pneu-performance",
    title: "Teste de Pneus Performance no Molhado",
    description: "Comparativo real de frenagem e aderência em pista molhada.",
    category: "Testes",
    thumbnail: thumb("photo-1494976388531-d1058494cdd8"),
    embedUrl: "https://www.tiktok.com/embed/v2/0000000000000000008",
    views: 58430,
    publishedAt: "2026-05-12",
    tiktokUrl: "https://www.tiktok.com/@girauto",
    relatedProductIds: ["kit-pneu-performance"],
  },
];
