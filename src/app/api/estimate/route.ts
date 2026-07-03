import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/openai";

export async function POST(req: NextRequest) {
  try {
    const { make, model, year, repairType } = await req.json();

    if (!make || !model || !year || !repairType) {
      return NextResponse.json(
        { error: "make, model, year, and repairType are required" },
        { status: 400 }
      );
    }

    const prompt = `You are an automotive cost estimation expert for the Spanish and European market. Provide a JSON cost estimate for the following repair:

Vehicle: ${year} ${make} ${model}
Repair Type: ${repairType}

Respond ONLY with a valid JSON object in this exact format (no markdown, no explanation):
{
  "repairType": "${repairType}",
  "vehicleMake": "${make}",
  "vehicleModel": "${model}",
  "vehicleYear": ${year},
  "estimatedCostLow": <number in EUR>,
  "estimatedCostHigh": <number in EUR>,
  "currency": "EUR",
  "laborHours": <number>,
  "partsEstimate": <number in EUR>,
  "laborEstimate": <number in EUR>,
  "notes": "<brief note about the estimate>"
}`;

    const completion = await getOpenAIClient().chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      max_tokens: 500,
    });

    const content = completion.choices[0]?.message?.content ?? "{}";
    const estimate = JSON.parse(content);

    return NextResponse.json(estimate);
  } catch (error) {
    console.error("Estimate API error:", error);
    return NextResponse.json(
      { error: "Failed to generate estimate" },
      { status: 500 }
    );
  }
}
