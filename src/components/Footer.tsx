import Link from "next/link";
import { Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Wrench className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                repair2<span className="text-blue-400">.ai</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              AI-powered car repair assistance for drivers across Spain and
              Europe. Connect with certified workshops instantly.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              For Drivers
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/assistance"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Get Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/workshops"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Find Workshop
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Insurance Claims
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              For Workshops
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/workshop-portal"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Join Network
                </Link>
              </li>
              <li>
                <Link
                  href="/workshop-portal"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/workshop-portal"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Earnings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} repair2.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">
              Available in Spain, France, Germany, Italy, Portugal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
