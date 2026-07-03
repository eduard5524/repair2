import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MessageSquare, MapPin, Calculator, History, ArrowRight, Wrench, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  const t = useTranslations();

  const features = [
    {
      icon: MessageSquare,
      title: t("landing.feature1Title"),
      desc: t("landing.feature1Desc"),
      href: "/assistant" as const,
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: MapPin,
      title: t("landing.feature2Title"),
      desc: t("landing.feature2Desc"),
      href: "/shops" as const,
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Calculator,
      title: t("landing.feature3Title"),
      desc: t("landing.feature3Desc"),
      href: "/estimator" as const,
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: History,
      title: t("landing.feature4Title"),
      desc: t("landing.feature4Desc"),
      href: "/history" as const,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
              <Wrench className="h-4 w-4" />
              <span>Repair2.ai</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {t("landing.hero")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              {t("landing.heroSub")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/assistant">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg">
                  {t("landing.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "50+", label: "European car brands" },
              { value: "24/7", label: "AI availability" },
              { value: "6", label: "Languages" },
              { value: "Free", label: "Basic diagnostics" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200"
                >
                  <div className={`inline-flex rounded-lg p-3 ${feature.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{feature.desc}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-50 p-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">ITV Compatible</h3>
              <p className="mt-2 text-sm text-gray-500">
                Advice aligned with Spanish ITV inspection requirements
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-50 p-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Instant Diagnosis</h3>
              <p className="mt-2 text-sm text-gray-500">
                AI-powered analysis in seconds, not hours
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-50 p-4">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">European Expertise</h3>
              <p className="mt-2 text-sm text-gray-500">
                Specialized in SEAT, Renault, VW, BMW, and more
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
