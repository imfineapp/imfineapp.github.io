"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    const lang =
      typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("ru")
        ? "ru"
        : "en";
    window.location.href = `/${lang}`;
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center">
      <div className="text-white">Redirecting...</div>
    </div>
  );
}
