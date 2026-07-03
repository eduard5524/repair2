"use client";

import { useState } from "react";
import {
  Camera,
  Send,
  MapPin,
  Car,
  AlertTriangle,
  CheckCircle,
  Shield,
} from "lucide-react";

type Step = "describe" | "locating" | "matched";

interface Workshop {
  name: string;
  distance: string;
  rating: number;
  speciality: string;
  eta: string;
  address: string;
}

export default function AssistancePage() {
  const [step, setStep] = useState<Step>("describe");
  const [description, setDescription] = useState("");
  const [carMake, setCarMake] = useState("");
  const [urgency, setUrgency] = useState<"low" | "medium" | "high">("medium");
  const [matchedWorkshop, setMatchedWorkshop] = useState<Workshop | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("locating");

    // Simulate AI matching
    setTimeout(() => {
      setMatchedWorkshop({
        name: "AutoFix Madrid Centro",
        distance: "2.3 km",
        rating: 4.8,
        speciality: "General Mechanics & Electronics",
        eta: "12 minutes",
        address: "Calle Gran Via 45, 28013 Madrid",
      });
      setStep("matched");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-800 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Get Car Repair Assistance
          </h1>
          <p className="mt-3 text-blue-200">
            Describe your problem and we&apos;ll match you with the best nearby
            workshop
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {(() => {
            const stepOrder = ["describe", "locating", "matched"];
            const currentIndex = stepOrder.indexOf(step);
            return stepOrder.map((id, i) => {
              const labels = ["Describe Issue", "Finding Workshop", "Matched"];
              return (
            <div key={id} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  i <= currentIndex
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {i < currentIndex ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  i + 1
                )}
              </div>
              <span className="text-sm text-gray-600 hidden sm:inline">
                {labels[i]}
              </span>
              {i < 2 && (
                <div className="w-8 h-px bg-gray-300 hidden sm:block" />
              )}
            </div>
              );
            });
          })()}
        </div>

        {/* Step 1: Describe */}
        {step === "describe" && (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Car className="w-4 h-4 inline mr-1" />
                  Car Make & Model
                </label>
                <input
                  type="text"
                  placeholder="e.g., Volkswagen Golf 2020"
                  value={carMake}
                  onChange={(e) => setCarMake(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <AlertTriangle className="w-4 h-4 inline mr-1" />
                  Describe the Problem
                </label>
                <textarea
                  placeholder="What's happening with your car? e.g., 'Engine makes a grinding noise when starting, check engine light is on'"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(["low", "medium", "high"] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setUrgency(level)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                        urgency === level
                          ? level === "high"
                            ? "bg-red-100 border-red-300 text-red-700"
                            : level === "medium"
                              ? "bg-amber-100 border-amber-300 text-amber-700"
                              : "bg-green-100 border-green-300 text-green-700"
                          : "border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {level === "low"
                        ? "Can wait"
                        : level === "medium"
                          ? "Soon"
                          : "Urgent"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Camera className="w-4 h-4 inline mr-1" />
                  Upload Photos (optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">
                    Drag photos here or tap to upload
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="text-sm text-blue-700">
                  We&apos;ll use your location to find the nearest workshop
                </p>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors"
              >
                <Send className="w-5 h-5" />
                Find Me a Workshop
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Locating */}
        {step === "locating" && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow">
              <MapPin className="w-8 h-8 text-blue-700 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Finding the Best Workshop...
            </h2>
            <p className="text-gray-600 mb-6">
              Our AI is analyzing your issue and matching you with a certified
              workshop nearby
            </p>
            <div className="flex justify-center gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Matched */}
        {step === "matched" && matchedWorkshop && (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Workshop Found!
              </h2>
              <p className="text-gray-600 mt-1">
                We&apos;ve matched you with the best available workshop
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {matchedWorkshop.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {matchedWorkshop.speciality}
                  </p>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-yellow-100 rounded-full">
                  <span className="text-yellow-600 text-sm font-medium">
                    {matchedWorkshop.rating}
                  </span>
                  <span className="text-yellow-500">&#9733;</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Distance</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {matchedWorkshop.distance}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">ETA</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {matchedWorkshop.eta}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Address</p>
                  <p className="text-sm font-medium text-gray-900">
                    {matchedWorkshop.address}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors">
                  Accept & Navigate
                </button>
                <button
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                  onClick={() => setStep("describe")}
                >
                  Find Another
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <p className="text-sm text-blue-700">
                <Shield className="w-4 h-4 inline mr-1" />
                Insurance pre-authorization in progress — you may pay nothing out
                of pocket
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
