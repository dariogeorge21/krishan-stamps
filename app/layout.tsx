import React from "react";
import Script from "next/script";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Krishan Stamps Maker - Custom Rubber Stamps & Professional Printing",
  description: "Professional custom rubber stamp maker offering high-quality stamps, printing solutions, and professional branding services for businesses worldwide.",
  keywords: "custom rubber stamps, stamp maker, professional stamps, printing services, business branding",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  verification: {
    google: "1-t2N8XBo8PBMbncoxxeX3T54I6GebFHaJNRjVqBVug",
  },
  metadataBase: new URL('https://krishanstampsmaker.in'),
  canonical: 'https://krishanstampsmaker.in',
  openGraph: {
    type: 'business.business',
    locale: 'en_US',
    url: 'https://krishanstampsmaker.in',
    siteName: 'Krishan Stamps Maker',
    title: 'Krishan Stamps Maker - Custom Rubber Stamps & Professional Printing',
    description: 'Professional custom rubber stamp maker offering high-quality stamps, printing solutions, and professional branding services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishan Stamps Maker - Custom Rubber Stamps',
    description: 'Professional custom rubber stamp maker offering high-quality stamps and printing solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://krishanstampsmaker.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
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

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8DLK998LQ6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8DLK998LQ6');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '905486202130203');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=905486202130203&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
