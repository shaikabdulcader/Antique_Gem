import type { Metadata } from "next";
import { Inter, Outfit, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
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
        <link href="https://fonts.cdnfonts.com/css/good-times" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${montserrat.variable} antialiased bg-light-grey text-maroon`}
      >
        {children}
      </body>
    </html>
  );
}
