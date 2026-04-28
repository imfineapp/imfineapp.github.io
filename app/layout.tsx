import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Menhausen - Anonymous Stress Management for Men",
  description: "Practical stress management for men using CBT & ACT techniques. No registration, 100% anonymous, 3-7 minute daily practices via Telegram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
