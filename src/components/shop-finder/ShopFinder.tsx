"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Search, MapPin, Phone, Star, ExternalLink, BadgeCheck } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { ShopInfo } from "@/types";

export function ShopFinder() {
  const t = useTranslations("shops");
  const [shops, setShops] = useState<ShopInfo[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchShops();
  }, []);

  async function fetchShops(q?: string) {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (q) params.set("q", q);
      const res = await fetch(`/api/shops?${params}`);
      const data = await res.json();
      setShops(data);
    } catch {
      setShops([]);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    fetchShops(query);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
        <form onSubmit={handleSearch} className="mt-4 flex gap-2">
          <div className="flex-1">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full"
            />
          </div>
          <Button type="submit">
            <Search className="mr-2 h-4 w-4" />
            {t("filters")}
          </Button>
        </form>
      </div>

      {loading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 animate-pulse rounded-xl bg-gray-200" />
          ))}
        </div>
      ) : shops.length === 0 ? (
        <div className="text-center py-12">
          <MapPin className="mx-auto h-12 w-12 text-gray-300" />
          <p className="mt-4 text-gray-500">{t("searchPlaceholder")}</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shops.map((shop) => (
            <Card key={shop.id} className="flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-gray-900">{shop.name}</h3>
                  {shop.verified && (
                    <BadgeCheck className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  )}
                </div>
                <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {shop.address}, {shop.city}, {shop.country}
                  </span>
                </div>
                {shop.rating && (
                  <div className="mt-2 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{shop.rating}</span>
                  </div>
                )}
                <div className="mt-3 flex flex-wrap gap-1">
                  {shop.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                {shop.phone && (
                  <a href={`tel:${shop.phone}`}>
                    <Button variant="outline" size="sm">
                      <Phone className="mr-1 h-3 w-3" />
                      {t("callShop")}
                    </Button>
                  </a>
                )}
                {shop.website && (
                  <a href={shop.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Web
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
