import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Ckarlos Encanador - Serviços Hidráulicos em Arapongas/PR",
  description: "Encanador profissional em Arapongas/PR com 20 anos de experiência. Desentupimento, instalação hidráulica, conserto de vazamentos e limpeza de caixa d'água. Atendimento 24h.",
  keywords: "encanador Arapongas, desentupimento Arapongas, serviços hidráulicos PR, conserto vazamentos, limpeza caixa d'água",
  openGraph: {
    title: "Ckarlos Encanador - Serviços Hidráulicos em Arapongas/PR",
    description: "Encanador profissional em Arapongas/PR com 20 anos de experiência. Desentupimento, instalação hidráulica, conserto de vazamentos e limpeza de caixa d'água.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body className="font-sans text-gray-800 bg-gray-50 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
