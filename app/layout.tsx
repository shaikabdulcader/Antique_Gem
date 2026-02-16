import type { Metadata } from "next";
import { Poppins, Orbitron, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antique Gem | Luxury Gemstones",
  description: "Premium gemstone e-commerce landing page",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
        <link href="https://fonts.cdnfonts.com/css/good-times" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${poppins.variable} ${orbitron.variable} ${montserrat.variable} antialiased bg-light-bg text-text-dark`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}


