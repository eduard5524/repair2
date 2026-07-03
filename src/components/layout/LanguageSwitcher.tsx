"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Globe } from "lucide-react";

const localeLabels: Record<string, string> = {
  es: "ES",
  en: "EN",
  fr: "FR",
  de: "DE",
  it: "IT",
  pt: "PT",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onLocaleChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale as "es" | "en" | "fr" | "de" | "it" | "pt" });
  }

  return (
    <div className="relative flex items-center gap-1">
      <Globe className="h-4 w-4 text-gray-500" />
      <select
        value={locale}
        onChange={(e) => onLocaleChange(e.target.value)}
        className="appearance-none bg-transparent text-sm font-medium text-gray-600 cursor-pointer focus:outline-none pr-1"
      >
        {Object.entries(localeLabels).map(([code, label]) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
