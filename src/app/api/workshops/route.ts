import { NextRequest } from "next/server";

const workshops = [
  {
    id: 1,
    name: "AutoFix Madrid Centro",
    address: "Calle Gran Via 45, 28013 Madrid",
    city: "Madrid",
    country: "Spain",
    rating: 4.8,
    reviews: 342,
    specialities: ["General Mechanics", "Electronics", "AC Systems"],
    latitude: 40.4200,
    longitude: -3.7025,
    openNow: true,
    phone: "+34 912 345 678",
  },
  {
    id: 2,
    name: "TallerPro Barcelona",
    address: "Avinguda Diagonal 120, 08018 Barcelona",
    city: "Barcelona",
    country: "Spain",
    rating: 4.9,
    reviews: 518,
    specialities: ["BMW Specialist", "Engine Overhaul", "Diagnostics"],
    latitude: 41.3920,
    longitude: 2.1540,
    openNow: true,
    phone: "+34 933 456 789",
  },
  {
    id: 3,
    name: "MecanicaRapida Valencia",
    address: "Calle Colon 78, 46004 Valencia",
    city: "Valencia",
    country: "Spain",
    rating: 4.6,
    reviews: 189,
    specialities: ["Quick Service", "Oil Change", "Brakes"],
    latitude: 39.4699,
    longitude: -0.3763,
    openNow: false,
    phone: "+34 961 234 567",
  },
  {
    id: 4,
    name: "EuroAuto Sevilla",
    address: "Av. de la Constitucion 30, 41001 Sevilla",
    city: "Sevilla",
    country: "Spain",
    rating: 4.7,
    reviews: 276,
    specialities: ["European Cars", "Transmission", "Suspension"],
    latitude: 37.3891,
    longitude: -5.9845,
    openNow: true,
    phone: "+34 954 567 890",
  },
  {
    id: 5,
    name: "Atelier Auto Paris",
    address: "45 Rue de Rivoli, 75001 Paris",
    city: "Paris",
    country: "France",
    rating: 4.7,
    reviews: 421,
    specialities: ["French Cars", "Diagnostics", "Electrical"],
    latitude: 48.8566,
    longitude: 2.3522,
    openNow: true,
    phone: "+33 1 42 33 44 55",
  },
  {
    id: 6,
    name: "AutoWerkstatt Berlin",
    address: "Friedrichstrasse 100, 10117 Berlin",
    city: "Berlin",
    country: "Germany",
    rating: 4.8,
    reviews: 389,
    specialities: ["German Cars", "Performance", "Hybrid/EV"],
    latitude: 52.5200,
    longitude: 13.4050,
    openNow: true,
    phone: "+49 30 1234 5678",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const country = searchParams.get("country");
  const speciality = searchParams.get("speciality");

  let filtered = workshops;

  if (city) {
    filtered = filtered.filter(
      (w) => w.city.toLowerCase() === city.toLowerCase()
    );
  }

  if (country) {
    filtered = filtered.filter(
      (w) => w.country.toLowerCase() === country.toLowerCase()
    );
  }

  if (speciality) {
    filtered = filtered.filter((w) =>
      w.specialities.some((s) =>
        s.toLowerCase().includes(speciality.toLowerCase())
      )
    );
  }

  return Response.json({
    workshops: filtered,
    total: filtered.length,
    countries: [...new Set(workshops.map((w) => w.country))],
    cities: [...new Set(workshops.map((w) => w.city))],
  });
}
