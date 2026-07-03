import { NextRequest, NextResponse } from "next/server";

const DEMO_REPAIRS = [
  {
    id: "1",
    title: "Cambio de pastillas de freno",
    description: "Sustitución de pastillas de freno delanteras y traseras",
    status: "COMPLETED",
    cost: 180,
    currency: "EUR",
    date: "2024-11-15T10:00:00Z",
    notes: "Pastillas Bosch instaladas. Próximo cambio en 30.000 km.",
    vehicle: { id: "v1", make: "SEAT", model: "León", year: 2020 },
    shop: { id: "1", name: "AutoTaller Madrid Centro", city: "Madrid" },
  },
  {
    id: "2",
    title: "Revisión ITV",
    description: "Inspección Técnica de Vehículos anual",
    status: "COMPLETED",
    cost: 45,
    currency: "EUR",
    date: "2024-10-01T09:00:00Z",
    notes: "Aprobada sin incidencias.",
    vehicle: { id: "v1", make: "SEAT", model: "León", year: 2020 },
  },
  {
    id: "3",
    title: "Cambio de aceite y filtros",
    description: "Aceite sintético 5W30 + filtro de aceite + filtro de aire",
    status: "COMPLETED",
    cost: 95,
    currency: "EUR",
    date: "2024-08-20T11:00:00Z",
    vehicle: { id: "v1", make: "SEAT", model: "León", year: 2020 },
    shop: { id: "2", name: "Taller Mecánico Barcelona", city: "Barcelona" },
  },
  {
    id: "4",
    title: "Diagnóstico motor - luz de avería",
    description: "Lectura de códigos OBD y diagnóstico de sensor de oxígeno",
    status: "IN_PROGRESS",
    cost: null,
    currency: "EUR",
    date: "2025-01-10T14:00:00Z",
    notes: "Pendiente de pieza de recambio.",
    vehicle: { id: "v2", make: "Volkswagen", model: "Golf", year: 2018 },
    shop: { id: "1", name: "AutoTaller Madrid Centro", city: "Madrid" },
  },
];

export async function GET() {
  return NextResponse.json(DEMO_REPAIRS);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newRepair = {
      id: String(Date.now()),
      ...body,
      date: new Date().toISOString(),
      status: body.status ?? "PENDING",
      currency: body.currency ?? "EUR",
    };
    return NextResponse.json(newRepair, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create repair" },
      { status: 500 }
    );
  }
}
