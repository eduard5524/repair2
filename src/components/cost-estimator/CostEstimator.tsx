"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Calculator, Loader2, Euro, Clock, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { Card } from "@/components/ui/Card";
import type { CostEstimate } from "@/types";

const CAR_MAKES = [
  "SEAT", "Volkswagen", "Renault", "Peugeot", "Citroën", "BMW", "Mercedes-Benz",
  "Audi", "Fiat", "Opel", "Toyota", "Ford", "Hyundai", "Kia", "Skoda",
  "Dacia", "Nissan", "Mazda", "Volvo", "Mini",
];

const REPAIR_TYPES = [
  "Oil change", "Brake pads replacement", "Brake discs replacement",
  "Battery replacement", "Timing belt replacement", "Clutch replacement",
  "Spark plugs replacement", "Air filter replacement", "Tire replacement (4)",
  "Suspension repair", "AC recharge", "Alternator replacement",
  "Starter motor replacement", "Water pump replacement", "Exhaust repair",
  "Engine diagnostics (OBD)", "ITV preparation", "Full service",
  "Transmission repair", "Turbo replacement",
];

export function CostEstimator() {
  const t = useTranslations("estimator");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [repairType, setRepairType] = useState("");
  const [estimate, setEstimate] = useState<CostEstimate | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  async function handleEstimate(e: React.FormEvent) {
    e.preventDefault();
    if (!make || !model || !year || !repairType) return;

    setLoading(true);
    setError("");
    setEstimate(null);

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          make,
          model,
          year: parseInt(year),
          repairType,
        }),
      });

      if (!res.ok) throw new Error("Failed to get estimate");
      const data = await res.json();
      setEstimate(data);
    } catch {
      setError("Failed to generate estimate. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
        <p className="mt-2 text-gray-500">{t("disclaimer")}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form */}
        <Card>
          <form onSubmit={handleEstimate} className="space-y-4">
            <Select
              label={t("selectMake")}
              value={make}
              onChange={(e) => setMake(e.target.value)}
              placeholder={t("selectMake")}
              options={CAR_MAKES.map((m) => ({ value: m, label: m }))}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("selectModel")}
              </label>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder={t("selectModel")}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <Select
              label={t("selectYear")}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder={t("selectYear")}
              options={years.map((y) => ({ value: String(y), label: String(y) }))}
            />
            <Select
              label={t("repairType")}
              value={repairType}
              onChange={(e) => setRepairType(e.target.value)}
              placeholder={t("repairType")}
              options={REPAIR_TYPES.map((r) => ({ value: r, label: r }))}
            />
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={!make || !model || !year || !repairType || loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("estimate")}...
                </>
              ) : (
                <>
                  <Calculator className="mr-2 h-4 w-4" />
                  {t("estimate")}
                </>
              )}
            </Button>
          </form>
        </Card>

        {/* Result */}
        <div>
          {error && (
            <Card className="border-red-200 bg-red-50">
              <p className="text-red-600">{error}</p>
            </Card>
          )}

          {estimate && (
            <Card className="border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t("result")}
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-4 text-center">
                  <p className="text-sm text-blue-600 font-medium">{t("totalRange")}</p>
                  <p className="text-3xl font-bold text-blue-700 mt-1">
                    {estimate.estimatedCostLow}€ - {estimate.estimatedCostHigh}€
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock className="h-4 w-4" />
                      {t("laborCost")}
                    </div>
                    <p className="mt-1 font-semibold">
                      {estimate.laborEstimate}€
                    </p>
                    <p className="text-xs text-gray-400">
                      {estimate.laborHours}h
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Wrench className="h-4 w-4" />
                      {t("partsCost")}
                    </div>
                    <p className="mt-1 font-semibold">
                      {estimate.partsEstimate}€
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-sm font-medium text-gray-700">
                    {estimate.vehicleYear} {estimate.vehicleMake} {estimate.vehicleModel}
                  </p>
                  <p className="text-sm text-gray-500">{estimate.repairType}</p>
                </div>

                {estimate.notes && (
                  <p className="text-sm text-gray-500 italic">{estimate.notes}</p>
                )}
              </div>
            </Card>
          )}

          {!estimate && !error && (
            <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 p-12 text-center">
              <Euro className="h-12 w-12 text-gray-300" />
              <p className="mt-4 text-sm text-gray-400">
                {t("disclaimer")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
