import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { carMake, description, urgency, latitude, longitude } = body;

  if (!carMake || !description) {
    return Response.json(
      { error: "Car make and description are required" },
      { status: 400 }
    );
  }

  // Simulate AI processing and workshop matching
  const workshop = {
    id: Math.floor(Math.random() * 1000),
    name: "AutoFix Madrid Centro",
    address: "Calle Gran Via 45, 28013 Madrid",
    distance: "2.3 km",
    eta: "12 minutes",
    rating: 4.8,
    phone: "+34 912 345 678",
    speciality: "General Mechanics & Electronics",
    availableSlot: new Date(Date.now() + 30 * 60000).toISOString(),
  };

  const diagnosis = {
    possibleIssues: [
      "Worn brake pads",
      "Brake disc corrosion",
      "Low brake fluid",
    ],
    severity: urgency || "medium",
    estimatedCost: { min: 150, max: 350, currency: "EUR" },
    recommendedAction:
      "Visit workshop for inspection within 24 hours",
  };

  return Response.json({
    success: true,
    requestId: `REQ-${Date.now()}`,
    diagnosis,
    assignedWorkshop: workshop,
    insurancePreAuth: {
      status: "pending",
      estimatedApproval: "15 minutes",
    },
    location: { latitude: latitude || 40.4168, longitude: longitude || -3.7038 },
  });
}
