import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ellas Óticas - Proteção Máxima, Visão de Alta Definição",
  description:
    "Óculos de sol, grau e lentes das melhores marcas. Proteção máxima e visão de alta definição para qualquer aventura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}