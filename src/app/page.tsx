import Link from "next/link";
import {
  Wrench,
  MapPin,
  Shield,
  Clock,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/50 rounded-full text-sm mb-6 animate-fade-in">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>AI-Powered Car Repair Platform</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Car trouble?
              <br />
              <span className="text-blue-300">We fix it. Fast.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl animate-fade-in-delay">
              Get instant AI-powered car repair assistance, certified workshop
              assignment, and seamless insurance processing across Spain and
              Europe.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Link
                href="/assistance"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-800 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Get Assistance Now
              </Link>
              <Link
                href="/workshop-portal"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Join as Workshop
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Workshops", value: "2,500+" },
              { label: "Countries", value: "12" },
              { label: "Avg Response", value: "< 3 min" },
              { label: "Satisfaction", value: "4.9/5" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="text-2xl sm:text-3xl font-bold">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              From breakdown to fixed in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: Zap,
                title: "Describe Your Problem",
                description:
                  "Tell our AI about your car issue — engine noise, warning light, flat tire, or anything else. Upload photos for faster diagnosis.",
              },
              {
                step: "2",
                icon: MapPin,
                title: "Get Matched to a Workshop",
                description:
                  "Our AI assigns you to the nearest certified workshop based on your location, car make, and repair type. Real-time availability.",
              },
              {
                step: "3",
                icon: Wrench,
                title: "Get Repaired & Covered",
                description:
                  "Drive in, get fixed, drive out. We handle insurance claims automatically so you pay less out of pocket.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mt-2">
                  <item.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Drivers & Workshops Choose Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Instant Response",
                description:
                  "AI diagnosis in under 60 seconds. No waiting on hold, no searching through Google.",
              },
              {
                icon: MapPin,
                title: "Nearest Workshop",
                description:
                  "GPS-based matching finds the closest certified repair shop with availability right now.",
              },
              {
                icon: Shield,
                title: "Insurance Integration",
                description:
                  "Automatic claim filing with major Spanish and European insurers. Less paperwork for you.",
              },
              {
                icon: Star,
                title: "Certified Network",
                description:
                  "All workshops are vetted and rated. Only work with professionals you can trust.",
              },
              {
                icon: TrendingUp,
                title: "Workshop Revenue",
                description:
                  "Workshops receive a steady stream of customers and earn more with our platform.",
              },
              {
                icon: Users,
                title: "Multilingual Support",
                description:
                  "Available in Spanish, English, French, German, Italian, and Portuguese.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
              >
                <feature.icon className="w-8 h-8 text-blue-700 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Workshops CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Are You a Workshop Owner?
          </h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto mb-8">
            Join our network and receive a steady flow of customers. Increase
            your revenue by up to 40% with AI-powered job matching and insurance
            partnerships.
          </p>
          <Link
            href="/workshop-portal"
            className="inline-flex items-center px-8 py-4 bg-white text-amber-700 font-semibold rounded-xl hover:bg-amber-50 transition-colors shadow-lg"
          >
            Join the Network — Start Earning
          </Link>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Coverage Across Europe
            </h2>
            <p className="mt-4 text-gray-600">
              Active in 12 countries with 2,500+ certified workshops
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { country: "Spain", workshops: "800+" },
              { country: "France", workshops: "450+" },
              { country: "Germany", workshops: "380+" },
              { country: "Italy", workshops: "320+" },
              { country: "Portugal", workshops: "250+" },
              { country: "Netherlands", workshops: "180+" },
            ].map((item) => (
              <div
                key={item.country}
                className="p-4 bg-white rounded-xl border border-gray-200 text-center"
              >
                <div className="text-lg font-semibold text-gray-900">
                  {item.country}
                </div>
                <div className="text-sm text-blue-600 font-medium">
                  {item.workshops}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Help With Your Car?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Get instant AI-powered diagnosis and connect with a certified
            workshop near you in under 3 minutes.
          </p>
          <Link
            href="/assistance"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get Assistance Now — It&apos;s Free
          </Link>
        </div>
      </section>
    </>
  );
}
