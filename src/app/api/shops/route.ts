import { NextRequest, NextResponse } from "next/server";

const SAMPLE_SHOPS = [
  {
    id: "1",
    name: "AutoTaller Madrid Centro",
    address: "Calle Gran Vía 42",
    city: "Madrid",
    country: "Spain",
    postalCode: "28013",
    phone: "+34 912 345 678",
    email: "info@autotaller-madrid.es",
    website: "https://autotaller-madrid.es",
    latitude: 40.4200,
    longitude: -3.7025,
    rating: 4.7,
    specialties: ["General repair", "Brake systems", "Engine diagnostics"],
    verified: true,
  },
  {
    id: "2",
    name: "Taller Mecánico Barcelona",
    address: "Carrer de Balmes 120",
    city: "Barcelona",
    country: "Spain",
    postalCode: "08008",
    phone: "+34 933 456 789",
    email: "contacto@tallerbcn.es",
    latitude: 41.3925,
    longitude: 2.1530,
    rating: 4.5,
    specialties: ["Electrical systems", "Air conditioning", "ITV preparation"],
    verified: true,
  },
  {
    id: "3",
    name: "Eurocar Service Valencia",
    address: "Avenida del Puerto 88",
    city: "Valencia",
    country: "Spain",
    postalCode: "46023",
    phone: "+34 963 567 890",
    latitude: 39.4620,
    longitude: -0.3385,
    rating: 4.3,
    specialties: ["European cars", "Transmission", "Suspension"],
    verified: false,
  },
  {
    id: "4",
    name: "Garage Saint-Denis",
    address: "12 Rue de la République",
    city: "Paris",
    country: "France",
    postalCode: "75010",
    phone: "+33 1 42 34 56 78",
    latitude: 48.8710,
    longitude: 2.3560,
    rating: 4.6,
    specialties: ["French cars", "Renault specialist", "Peugeot specialist"],
    verified: true,
  },
  {
    id: "5",
    name: "AutoWerkstatt München",
    address: "Leopoldstraße 45",
    city: "Munich",
    country: "Germany",
    postalCode: "80802",
    phone: "+49 89 1234 5678",
    latitude: 48.1610,
    longitude: 11.5850,
    rating: 4.8,
    specialties: ["BMW specialist", "Audi specialist", "VW Group"],
    verified: true,
  },
  {
    id: "6",
    name: "Officina Meccanica Roma",
    address: "Via Appia Nuova 200",
    city: "Rome",
    country: "Italy",
    postalCode: "00183",
    phone: "+39 06 7890 1234",
    latitude: 41.8780,
    longitude: 12.5100,
    rating: 4.4,
    specialties: ["Fiat specialist", "Alfa Romeo", "General maintenance"],
    verified: true,
  },
  {
    id: "7",
    name: "Taller Sevilla Sur",
    address: "Calle Torneo 15",
    city: "Seville",
    country: "Spain",
    postalCode: "41002",
    phone: "+34 954 678 901",
    latitude: 37.3940,
    longitude: -5.9910,
    rating: 4.2,
    specialties: ["SEAT specialist", "Oil changes", "Tire service"],
    verified: false,
  },
  {
    id: "8",
    name: "Auto Repair Bilbao",
    address: "Gran Vía de Don Diego López de Haro 30",
    city: "Bilbao",
    country: "Spain",
    postalCode: "48009",
    phone: "+34 944 789 012",
    latitude: 43.2630,
    longitude: -2.9350,
    rating: 4.6,
    specialties: ["Hybrid vehicles", "Electric vehicles", "Diagnostics"],
    verified: true,
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.toLowerCase() ?? "";
  const country = searchParams.get("country")?.toLowerCase();

  let shops = SAMPLE_SHOPS;

  if (query) {
    shops = shops.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.city.toLowerCase().includes(query) ||
        s.postalCode?.includes(query) ||
        s.specialties.some((sp) => sp.toLowerCase().includes(query))
    );
  }

  if (country) {
    shops = shops.filter((s) => s.country.toLowerCase() === country);
  }

  return NextResponse.json(shops);
}
