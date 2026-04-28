"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/en/stress-cards", label: "Stress Cards" },
  { href: "/en/techniques", label: "Techniques" },
  { href: "/en/professions", label: "For Profession" },
  { href: "/en/compare", label: "Compare" },
  { href: "/en/blog", label: "Blog" },
  { href: "/en/pricing", label: "Pricing" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-[#333333]">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/en" className="text-xl font-bold text-[#E1FF00]">
          Menhausen
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#E1FF00] ${
                pathname === item.href ? "text-[#E1FF00]" : "text-[#A1A1A1]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="https://t.me/menhausen_app_bot/app"
          className="btn-primary h-10 px-4 text-sm"
        >
          Open App
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#333333] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#A1A1A1] text-sm">
              Anonymous stress management for men. Practical tools, scientific
              methods (CBT, ACT), and privacy-first design.
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/en/privacy" className="text-sm text-[#A1A1A1] hover:text-white">
              Privacy
            </Link>
            <Link href="/en/terms" className="text-sm text-[#A1A1A1] hover:text-white">
              Terms
            </Link>
            <Link href="/en/contact" className="text-sm text-[#A1A1A1] hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-[#666666] text-sm">
          © 2024 Menhausen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
