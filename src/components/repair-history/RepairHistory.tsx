"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  History,
  Plus,
  Car,
  MapPin,
  Calendar,
  Euro,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface RepairRecord {
  id: string;
  title: string;
  description: string;
  status: string;
  cost: number | null;
  currency: string;
  date: string;
  notes?: string;
  vehicle?: { id: string; make: string; model: string; year: number };
  shop?: { id: string; name: string; city: string };
}

const statusConfig: Record<
  string,
  { icon: typeof CheckCircle2; color: string; bg: string }
> = {
  COMPLETED: { icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
  IN_PROGRESS: { icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
  PENDING: { icon: AlertCircle, color: "text-yellow-600", bg: "bg-yellow-50" },
  CANCELLED: { icon: XCircle, color: "text-red-600", bg: "bg-red-50" },
};

export function RepairHistory() {
  const t = useTranslations("history");
  const [repairs, setRepairs] = useState<RepairRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepairs() {
      try {
        const res = await fetch("/api/repairs");
        const data = await res.json();
        setRepairs(data);
      } catch {
        setRepairs([]);
      } finally {
        setLoading(false);
      }
    }
    fetchRepairs();
  }, []);

  function getStatusLabel(status: string) {
    const labels: Record<string, string> = {
      PENDING: t("pending"),
      IN_PROGRESS: t("inProgress"),
      COMPLETED: t("completed"),
      CANCELLED: t("cancelled"),
    };
    return labels[status] ?? status;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          {t("addRepair")}
        </Button>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 animate-pulse rounded-xl bg-gray-200" />
          ))}
        </div>
      ) : repairs.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 p-16 text-center">
          <History className="h-12 w-12 text-gray-300" />
          <p className="mt-4 text-gray-500">{t("noRepairs")}</p>
          <Button className="mt-4">
            <Plus className="mr-2 h-4 w-4" />
            {t("addRepair")}
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {repairs.map((repair) => {
            const config = statusConfig[repair.status] ?? statusConfig.PENDING;
            const StatusIcon = config.icon;

            return (
              <Card
                key={repair.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-gray-900">
                        {repair.title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${config.bg} ${config.color}`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {getStatusLabel(repair.status)}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {repair.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500">
                      {repair.vehicle && (
                        <div className="flex items-center gap-1">
                          <Car className="h-4 w-4" />
                          <span>
                            {repair.vehicle.year} {repair.vehicle.make}{" "}
                            {repair.vehicle.model}
                          </span>
                        </div>
                      )}
                      {repair.shop && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>
                            {repair.shop.name}, {repair.shop.city}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(repair.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    {repair.notes && (
                      <p className="mt-2 text-sm text-gray-400 italic">
                        {repair.notes}
                      </p>
                    )}
                  </div>

                  {repair.cost !== null && (
                    <div className="ml-4 text-right flex-shrink-0">
                      <div className="flex items-center gap-1 text-lg font-bold text-gray-900">
                        <Euro className="h-4 w-4" />
                        {repair.cost}
                      </div>
                      <span className="text-xs text-gray-400">
                        {repair.currency}
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
