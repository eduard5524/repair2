import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repair2.ai - Car Repair Assistant",
  description: "Intelligent car repair assistant for Spain and Europe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
