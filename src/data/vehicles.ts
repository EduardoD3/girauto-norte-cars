import carSuv from "@/assets/car-suv.jpg";
import carSedan from "@/assets/car-sedan.jpg";
import carPickup from "@/assets/car-pickup.jpg";
import motoCb500 from "@/assets/moto-cb500.jpg";
import carHatch from "@/assets/car-hatch.jpg";

export interface Vehicle {
  id: number;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  color: string;
  type: "carro" | "moto";
  city: string;
  state: string;
  description: string;
  image: string;
  images: string[];
  advertiser: {
    name: string;
    phone: string;
    whatsapp: string;
  };
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    title: "SUV Premium 4x4",
    brand: "Mercedes-Benz",
    model: "GLC 300",
    year: 2023,
    price: 0,
    mileage: 18000,
    fuel: "Gasolina",
    transmission: "Automático",
    color: "Cinza Grafite",
    type: "carro",
    city: "Belém",
    state: "PA",
    description: "Veículo em excelente estado, único dono, revisado na concessionária. Completo com todos os opcionais de fábrica.",
    image: carSuv,
    images: [carSuv, carSedan, carPickup],
    advertiser: { name: "João Mendes", phone: "(00) 00000-0000", whatsapp: "00000000000" },
  },
  {
    id: 2,
    title: "Sedan Esportivo",
    brand: "Mazda",
    model: "Mazda3 Sport",
    year: 2022,
    price: 0,
    mileage: 32000,
    fuel: "Gasolina",
    transmission: "Automático",
    color: "Vermelho Soul",
    type: "carro",
    city: "Manaus",
    state: "AM",
    description: "Carro impecável, todas as revisões feitas, nunca bateu. Documentação em dia, IPVA pago.",
    image: carSedan,
    images: [carSedan, carSuv],
    advertiser: { name: "Carlos Silva", phone: "(00) 00000-0000", whatsapp: "00000000000" },
  },
  {
    id: 3,
    title: "Pickup 4x4 Cabine Dupla",
    brand: "Mitsubishi",
    model: "L200 Triton",
    year: 2021,
    price: 0,
    mileage: 54000,
    fuel: "Diesel",
    transmission: "Manual",
    color: "Preto Perola",
    type: "carro",
    city: "Santarém",
    state: "PA",
    description: "Pickup robusta ideal para trabalho e lazer. Tração 4x4, equipada com acessórios originais.",
    image: carPickup,
    images: [carPickup, carSuv],
    advertiser: { name: "Pedro Farias", phone: "(00) 00000-0000", whatsapp: "00000000000" },
  },
  {
    id: 4,
    title: "Naked Sport 500cc",
    brand: "Honda",
    model: "CB 500F",
    year: 2022,
    price: 0,
    mileage: 12000,
    fuel: "Gasolina",
    transmission: "Manual",
    color: "Prata",
    type: "moto",
    city: "Belém",
    state: "PA",
    description: "Moto em ótimo estado, revisada, pneus novos. Perfeita para cidade e estrada.",
    image: motoCb500,
    images: [motoCb500],
    advertiser: { name: "Ana Pereira", phone: "(91) 00000-0000", whatsapp: "0000000000" },
  },
  {
    id: 5,
    title: "Hatch Compacto Econômico",
    brand: "Nissan",
    model: "March SV",
    year: 2020,
    price: 0,
    mileage: 41000,
    fuel: "Flex",
    transmission: "Manual",
    color: "Branco Pérola",
    type: "carro",
    city: "Macapá",
    state: "AP",
    description: "Carro econômico e confiável, ideal para cidade. Documentação em dia, pronto para transferir.",
    image: carHatch,
    images: [carHatch],
    advertiser: { name: "Roberto Lima", phone: "(00) 00000-0000", whatsapp: "000000000" },
  },
  {
    id: 6,
    title: "SUV Familiar Completo",
    brand: "Honda",
    model: "CR-V Touring",
    year: 2021,
    price: 0,
    mileage: 27000,
    fuel: "Flex",
    transmission: "Automático",
    color: "Prata Lunar",
    type: "carro",
    city: "Manaus",
    state: "AM",
    description: "SUV familiar completo com teto panorâmico, câmera 360°, bancos de couro. Entrada + financiamento facilitado.",
    image: carSuv,
    images: [carSuv, carHatch],
    advertiser: { name: "Marcos Sousa", phone: "(00) 00000-0000", whatsapp: "0000000000" },
  },
];

export const brands = ["Todas", "Mercedes-Benz", "Honda", "Toyota", "Volkswagen", "Chevrolet", "Mitsubishi", "Mazda", "Nissan", "Yamaha"];
export const fuelTypes = ["Todos", "Gasolina", "Flex", "Diesel", "Elétrico"];
export const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018];
