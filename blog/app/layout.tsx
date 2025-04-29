import type { Metadata } from "next";
import { Roboto, Staatliches } from "next/font/google";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const staatliches = Staatliches({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-staatliches",
});

export const metadata: Metadata = {
  title: "TopeAanu - News Site",
  description:
    "A modern news site with articles on music, technology, and sports",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/5cc6b0f723.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${roboto.variable} ${staatliches.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
