"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              repair2<span className="text-blue-700">.ai</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/assistance"
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              Get Assistance
            </Link>
            <Link
              href="/workshops"
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              Find Workshop
            </Link>
            <Link
              href="/insurance"
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              Insurance
            </Link>
            <Link
              href="/workshop-portal"
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              For Workshops
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/workshop-portal"
              className="text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/assistance"
              className="px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Get Help Now
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-3">
              <Link
                href="/assistance"
                className="text-sm font-medium text-gray-600 hover:text-blue-700 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Get Assistance
              </Link>
              <Link
                href="/workshops"
                className="text-sm font-medium text-gray-600 hover:text-blue-700 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Find Workshop
              </Link>
              <Link
                href="/insurance"
                className="text-sm font-medium text-gray-600 hover:text-blue-700 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Insurance
              </Link>
              <Link
                href="/workshop-portal"
                className="text-sm font-medium text-gray-600 hover:text-blue-700 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                For Workshops
              </Link>
              <Link
                href="/assistance"
                className="mt-2 px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Help Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
