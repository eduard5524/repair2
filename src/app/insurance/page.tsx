"use client";

import { useState } from "react";
import {
  Shield,
  FileText,
  CheckCircle,
  Clock,
  Upload,
  AlertCircle,
} from "lucide-react";

type ClaimStatus = "idle" | "submitting" | "submitted";

export default function InsurancePage() {
  const [claimStatus, setClaimStatus] = useState<ClaimStatus>("idle");
  const [claimRef, setClaimRef] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [insurer, setInsurer] = useState("");
  const [incidentDescription, setIncidentDescription] = useState("");

  const handleSubmitClaim = (e: React.FormEvent) => {
    e.preventDefault();
    setClaimStatus("submitting");
    setClaimRef(`CLM-2024-${Math.floor(Math.random() * 9000) + 1000}`);
    setTimeout(() => setClaimStatus("submitted"), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Shield className="w-12 h-12 mx-auto mb-4 text-blue-300" />
          <h1 className="text-3xl sm:text-4xl font-bold">
            Insurance & Claims
          </h1>
          <p className="mt-3 text-blue-200 max-w-2xl mx-auto">
            Seamless insurance claim processing. We work with all major Spanish
            and European insurers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Partner Insurers */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Partner Insurance Companies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Mapfre",
              "Allianz",
              "AXA",
              "Zurich",
              "Generali",
              "Liberty",
            ].map((name) => (
              <div
                key={name}
                className="p-4 bg-white rounded-xl border border-gray-200 text-center font-medium text-gray-700"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* How Insurance Works */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <div className="space-y-4">
              {[
                {
                  icon: FileText,
                  title: "Submit Your Claim",
                  desc: "Fill in your policy details and describe the incident. Upload photos if available.",
                },
                {
                  icon: Clock,
                  title: "Instant Pre-Authorization",
                  desc: "Our AI contacts your insurer and gets pre-authorization in minutes, not days.",
                },
                {
                  icon: CheckCircle,
                  title: "Repair Without Worry",
                  desc: "Go to your assigned workshop and get repaired. We handle all paperwork with your insurer.",
                },
                {
                  icon: Shield,
                  title: "Pay Less or Nothing",
                  desc: "Most repairs are fully covered. You only pay your deductible, if applicable.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
              <h3 className="font-semibold text-green-800 mb-3">
                Benefits of Using repair2.ai for Claims
              </h3>
              <ul className="space-y-2">
                {[
                  "Claims processed 10x faster than traditional methods",
                  "Direct insurer integration — no phone calls needed",
                  "Real-time status tracking on your phone",
                  "Transparent pricing — no hidden workshop markups",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Claim Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              File a Claim
            </h2>

            {claimStatus === "submitted" ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Claim Submitted Successfully!
                </h3>
                <p className="text-gray-600 mb-4">
                  Your claim reference: <strong>{claimRef}</strong>
                </p>
                <p className="text-sm text-gray-500">
                  We&apos;re contacting your insurer now. You&apos;ll receive
                  pre-authorization within 15 minutes.
                </p>
                <button
                  className="mt-6 px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                  onClick={() => setClaimStatus("idle")}
                >
                  File Another Claim
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmitClaim}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Insurance Company
                  </label>
                  <select
                    value={insurer}
                    onChange={(e) => setInsurer(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select your insurer</option>
                    <option value="mapfre">Mapfre</option>
                    <option value="allianz">Allianz</option>
                    <option value="axa">AXA</option>
                    <option value="zurich">Zurich</option>
                    <option value="generali">Generali</option>
                    <option value="liberty">Liberty Seguros</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Policy Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., POL-12345678"
                    value={policyNumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Incident Description
                  </label>
                  <textarea
                    placeholder="Describe what happened..."
                    value={incidentDescription}
                    onChange={(e) => setIncidentDescription(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Supporting Documents
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                    <p className="text-sm text-gray-500">
                      Upload photos, police report, or other documents
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-700">
                    For emergencies requiring immediate towing, call 112 first,
                    then file your claim here.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={claimStatus === "submitting"}
                  className="w-full px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {claimStatus === "submitting"
                    ? "Processing..."
                    : "Submit Claim"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
