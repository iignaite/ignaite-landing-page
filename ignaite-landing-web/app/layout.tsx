import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ignaite Labs | Bringing Ideas to Life",
  description: "Ignaite Labs is a development agency committed to lighting up your ideas and bringing them to life with innovative solutions.",
  keywords: ["development agency", "web development", "app development", "software solutions", "Ignaite Labs"],
  authors: [{ name: "Ignaite Labs Team" }],
  creator: "Ignaite Labs",
  publisher: "Ignaite Labs",
  openGraph: {
    title: "Ignaite Labs | Bringing Ideas to Life",
    description: "Ignaite Labs is a development agency committed to lighting up your ideas and bringing them to life with innovative solutions.",
    url: "https://ignaiteLabs.com",
    siteName: "Ignaite Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignaite Labs | Bringing Ideas to Life",
    description: "Ignaite Labs is a development agency committed to lighting up your ideas and bringing them to life with innovative solutions."
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
