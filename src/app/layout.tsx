import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "repair2.ai - AI Car Repair Assistance in Spain & Europe",
  description:
    "Get instant car repair assistance, workshop assignment, and insurance support. Workshops earn more with our AI-powered platform.",
  keywords: [
    "car repair",
    "workshop",
    "Spain",
    "Europe",
    "AI",
    "insurance",
    "automotive",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
