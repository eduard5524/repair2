"use client";

import { useState } from "react";
import { MapPin, Star, Clock, Phone, Filter, Search } from "lucide-react";

interface Workshop {
  id: number;
  name: string;
  address: string;
  city: string;
  rating: number;
  reviews: number;
  specialities: string[];
  distance: string;
  openNow: boolean;
  phone: string;
  image: string;
}

const MOCK_WORKSHOPS: Workshop[] = [
  {
    id: 1,
    name: "AutoFix Madrid Centro",
    address: "Calle Gran Via 45, 28013 Madrid",
    city: "Madrid",
    rating: 4.8,
    reviews: 342,
    specialities: ["General Mechanics", "Electronics", "AC Systems"],
    distance: "2.3 km",
    openNow: true,
    phone: "+34 912 345 678",
    image: "/workshop-1.jpg",
  },
  {
    id: 2,
    name: "TallerPro Barcelona",
    address: "Avinguda Diagonal 120, 08018 Barcelona",
    city: "Barcelona",
    rating: 4.9,
    reviews: 518,
    specialities: ["BMW Specialist", "Engine Overhaul", "Diagnostics"],
    distance: "4.1 km",
    openNow: true,
    phone: "+34 933 456 789",
    image: "/workshop-2.jpg",
  },
  {
    id: 3,
    name: "MecanicaRapida Valencia",
    address: "Calle Colon 78, 46004 Valencia",
    city: "Valencia",
    rating: 4.6,
    reviews: 189,
    specialities: ["Quick Service", "Oil Change", "Brakes"],
    distance: "1.8 km",
    openNow: false,
    phone: "+34 961 234 567",
    image: "/workshop-3.jpg",
  },
  {
    id: 4,
    name: "EuroAuto Sevilla",
    address: "Av. de la Constitucion 30, 41001 Sevilla",
    city: "Sevilla",
    rating: 4.7,
    reviews: 276,
    specialities: ["European Cars", "Transmission", "Suspension"],
    distance: "3.5 km",
    openNow: true,
    phone: "+34 954 567 890",
    image: "/workshop-4.jpg",
  },
  {
    id: 5,
    name: "Taller Express Bilbao",
    address: "Gran Via Don Diego 15, 48001 Bilbao",
    city: "Bilbao",
    rating: 4.5,
    reviews: 156,
    specialities: ["Quick Repairs", "Tires", "Battery"],
    distance: "5.2 km",
    openNow: true,
    phone: "+34 944 678 901",
    image: "/workshop-5.jpg",
  },
  {
    id: 6,
    name: "AutoService Malaga",
    address: "Calle Larios 42, 29005 Malaga",
    city: "Malaga",
    rating: 4.8,
    reviews: 298,
    specialities: ["Full Service", "Painting", "Body Work"],
    distance: "2.9 km",
    openNow: true,
    phone: "+34 952 345 678",
    image: "/workshop-6.jpg",
  },
];

export default function WorkshopsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");

  const filteredWorkshops = MOCK_WORKSHOPS.filter((w) => {
    const matchesSearch =
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.specialities.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesCity = selectedCity === "all" || w.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Find a Certified Workshop
          </h1>
          <p className="mt-3 text-blue-200">
            2,500+ verified workshops across Spain and Europe
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or speciality..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Cities</option>
                <option value="Madrid">Madrid</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Valencia">Valencia</option>
                <option value="Sevilla">Sevilla</option>
                <option value="Bilbao">Bilbao</option>
                <option value="Malaga">Malaga</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{workshop.name}</h3>
                  {workshop.openNow ? (
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      Open
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                      Closed
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-3">{workshop.address}</p>

                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">
                      {workshop.rating}
                    </span>
                    <span className="text-xs text-gray-400">
                      ({workshop.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-sm">{workshop.distance}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {workshop.specialities.map((spec) => (
                    <span
                      key={spec}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors">
                    Book Now
                  </button>
                  <a
                    href={`tel:${workshop.phone}`}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredWorkshops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No workshops found matching your criteria
            </p>
          </div>
        )}

        {/* Map placeholder */}
        <div className="mt-10 bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-6 h-6 text-blue-600" />
            <Clock className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Interactive Map Coming Soon
          </h3>
          <p className="text-gray-500">
            View all workshops on an interactive map with real-time availability
          </p>
        </div>
      </div>
    </div>
  );
}
