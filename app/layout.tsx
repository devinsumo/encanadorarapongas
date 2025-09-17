import type { Metadata } from "next";
import "./globals.css";
import ModernHeader from "@/components/ModernHeader";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Ckarlos Encanador - Serviços Hidráulicos em Arapongas/PR",
  description: "Encanador profissional em Arapongas/PR com 20 anos de experiência. Desentupimento, instalação hidráulica, conserto de vazamentos e limpeza de caixa d'água. Atendimento de Segunda a Sexta.",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KB63DBCB');`
          }}
        />
        {/* End Google Tag Manager */}
        <StructuredData />
      </head>
      <body className="font-sans text-gray-800 bg-gray-50 antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KB63DBCB"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <ModernHeader />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
