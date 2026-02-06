export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Krishan Stamps Maker",
  "url": "https://krishanstampsmaker.in",
  "description": "Professional custom rubber stamp maker offering high-quality stamps, printing solutions, and professional branding services.",
  "sameAs": [
    "https://www.facebook.com/krishanstamps",
    "https://www.instagram.com/krishanstamps",
    "https://www.linkedin.com/company/krishan-stamps"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": "en"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Stamp Making Services",
  "provider": {
    "@type": "Organization",
    "name": "Krishan Stamps Maker",
    "url": "https://krishanstampsmaker.in"
  },
  "description": "Professional custom rubber stamp making services including design consultation, bulk orders, and same-day express delivery.",
  "areaServed": {
    "@type": "City",
    "name": "Delhi NCR"
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
