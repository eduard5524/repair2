import { useTranslations } from "next-intl";
import { Wrench } from "lucide-react";

export function Footer() {
  const t = useTranslations("common");

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-900">{t("appName")}</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Repair2.ai. {t("tagline")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
