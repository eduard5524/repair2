"use client";

import { useState } from "react";
import {
  TrendingUp,
  Users,
  Wrench,
  DollarSign,
  BarChart3,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";

type View = "overview" | "register";

export default function WorkshopPortalPage() {
  const [view, setView] = useState<View>("overview");
  const [workshopName, setWorkshopName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Workshop Portal
              </h1>
              <p className="mt-2 text-amber-100">
                Join the repair2.ai network and grow your business
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setView("overview")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  view === "overview"
                    ? "bg-white text-amber-700"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setView("register")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  view === "register"
                    ? "bg-white text-amber-700"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {view === "overview" && (
          <>
            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                {
                  icon: DollarSign,
                  label: "Avg Monthly Revenue",
                  value: "\u20AC8,500",
                  change: "+23%",
                },
                {
                  icon: Users,
                  label: "New Customers/Month",
                  value: "45",
                  change: "+12%",
                },
                {
                  icon: Star,
                  label: "Avg Rating",
                  value: "4.7",
                  change: "+0.2",
                },
                {
                  icon: Wrench,
                  label: "Jobs Completed",
                  value: "1,240",
                  change: "+18%",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl border border-gray-200 p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon className="w-5 h-5 text-gray-500" />
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Join repair2.ai?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Increase Revenue by 40%",
                    desc: "Receive a steady stream of pre-qualified customers matched by our AI to your specialities.",
                  },
                  {
                    icon: Bell,
                    title: "Instant Job Notifications",
                    desc: "Get notified immediately when a customer nearby needs your services. Accept with one tap.",
                  },
                  {
                    icon: Calendar,
                    title: "Smart Scheduling",
                    desc: "AI manages your booking calendar to maximize shop utilization and minimize downtime.",
                  },
                  {
                    icon: DollarSign,
                    title: "Guaranteed Payments",
                    desc: "Insurance-backed payments processed within 48 hours. No more chasing customers for money.",
                  },
                  {
                    icon: BarChart3,
                    title: "Business Analytics",
                    desc: "Dashboard with real-time insights on revenue, customer satisfaction, and performance metrics.",
                  },
                  {
                    icon: Users,
                    title: "Grow Your Brand",
                    desc: "Get listed in our directory with ratings and reviews. Build your reputation across the platform.",
                  },
                ].map((benefit) => (
                  <div
                    key={benefit.title}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:border-amber-200 hover:shadow-sm transition-all"
                  >
                    <benefit.icon className="w-8 h-8 text-amber-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How Earnings Work */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How You Earn
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Bell className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="font-medium text-gray-900">Receive Job</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Customer matched to your workshop
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="font-medium text-gray-900">Complete Repair</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Fix the car at your standard rates
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="font-medium text-gray-900">Get Paid</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Payment within 48h via insurance or direct
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg text-center">
                <p className="text-sm text-amber-800">
                  <strong>Platform fee:</strong> Only 8% per job — the lowest in
                  the industry. No monthly subscription.
                </p>
              </div>
            </div>

            {/* Simulated Dashboard Preview */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Dashboard Preview
              </h2>
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">Recent Jobs</h3>
                  <span className="text-sm text-blue-600 cursor-pointer">
                    View All
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      customer: "Maria G.",
                      car: "Seat Leon 2021",
                      issue: "Brake pads replacement",
                      amount: "\u20AC280",
                      status: "completed",
                    },
                    {
                      customer: "Carlos R.",
                      car: "BMW 320d 2019",
                      issue: "Engine diagnostics",
                      amount: "\u20AC150",
                      status: "completed",
                    },
                    {
                      customer: "Ana P.",
                      car: "VW Golf 2020",
                      issue: "AC recharge + filter",
                      amount: "\u20AC120",
                      status: "in-progress",
                    },
                    {
                      customer: "Pedro M.",
                      car: "Renault Clio 2022",
                      issue: "Oil change + inspection",
                      amount: "\u20AC95",
                      status: "pending",
                    },
                  ].map((job, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 text-sm">
                            {job.customer}
                          </span>
                          <span className="text-xs text-gray-400">
                            {job.car}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{job.issue}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {job.amount}
                        </p>
                        <span
                          className={`text-xs font-medium ${
                            job.status === "completed"
                              ? "text-green-600"
                              : job.status === "in-progress"
                                ? "text-blue-600"
                                : "text-amber-600"
                          }`}
                        >
                          {job.status === "completed" && (
                            <CheckCircle className="w-3 h-3 inline mr-1" />
                          )}
                          {job.status === "in-progress" && (
                            <Clock className="w-3 h-3 inline mr-1" />
                          )}
                          {job.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {view === "register" && (
          <div className="max-w-xl mx-auto">
            {registered ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Application Submitted!
                </h2>
                <p className="text-gray-600 mb-4">
                  Thank you, <strong>{workshopName}</strong>! We&apos;ll review
                  your application and get back to you within 24 hours.
                </p>
                <p className="text-sm text-gray-500">
                  Check your email ({email}) for confirmation and next steps.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleRegister}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Register Your Workshop
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Workshop Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., AutoFix Madrid"
                      value={workshopName}
                      onChange={(e) => setWorkshopName(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      placeholder="workshop@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Madrid, Barcelona, Valencia..."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Specialities
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Brakes, Engine, Electronics, Painting..."
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Number of Mechanics
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500">
                      <option value="1-3">1-3 mechanics</option>
                      <option value="4-8">4-8 mechanics</option>
                      <option value="9-15">9-15 mechanics</option>
                      <option value="15+">15+ mechanics</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors"
                  >
                    Submit Application
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    No subscription fee. You only pay 8% per completed job.
                  </p>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
