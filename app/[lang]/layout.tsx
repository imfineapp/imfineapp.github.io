import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export const metadata: Metadata = {
  title: {
    default: "Menhausen - Anonymous Stress Management for Men",
    template: "%s | Menhausen",
  },
  description: "Practical stress management for men using CBT & ACT techniques. No registration, 100% anonymous, 3-7 minute daily practices via Telegram.",
  metadataBase: new URL("https://menhausen.com"),
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧠</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "Menhausen",
    title: "Menhausen - Anonymous Stress Management for Men",
    description: "Practical stress management for men using CBT & ACT techniques.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menhausen - Anonymous Stress Management for Men",
    description: "Practical stress management for men using CBT & ACT techniques.",
  },
};

export default async function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased dark:bg-[#111111] dark:text-white">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
