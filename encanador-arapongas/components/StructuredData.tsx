export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "Ckarlos Encanador",
    "image": "https://www.ckarlosen.canador.com.br/logo.jpg",
    "telephone": "+5543999714142",
    "email": "contato@ckarlosen.canador.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Arapongas",
      "addressLocality": "Arapongas",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "City",
      "name": "Arapongas"
    },
    "url": "https://www.ckarlosen.canador.com.br",
    "description": "Encanador profissional em Arapongas/PR com 20 anos de experiência. Desentupimento, instalação hidráulica, conserto de vazamentos e limpeza de caixa d'água.",
    "serviceType": [
      "Desentupimento",
      "Instalação Hidráulica", 
      "Conserto de Vazamentos",
      "Limpeza de Caixa d'Água"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Hidráulicos",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desentupimento",
            "description": "Desentupimento de pias, vasos e ralos com equipamentos modernos"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Instalação Hidráulica",
            "description": "Instalação de tubulações, torneiras e equipamentos hidráulicos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Conserto de Vazamentos",
            "description": "Detecção e reparo de vazamentos com equipamentos eletrônicos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Limpeza de Caixa d'Água", 
            "description": "Higienização completa seguindo normas da vigilância sanitária"
          }
        }
      ]
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
