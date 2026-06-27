import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "PixelSolve | Digital Solutions that Scale",
  description:
    "PixelSolve is a futuristic tech company delivering cutting-edge solutions in app development, AI automation, SaaS, and web design. We build intelligent systems that learn, adapt, and solve real-world problems.",
  keywords: [
    "web development",
    "app development",
    "AI automation",
    "UI/UX design",
    "SaaS development",
    "Flutter development",
    "React Native",
    "Next.js",
    "Python AI",
    "machine learning",
    "automation tools",
    "digital solutions",
    "tech company",
    "software development"
  ],
  authors: [{ name: "PixelSolve Team" }],
  creator: "PixelSolve",
  publisher: "PixelSolve",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pixelsolve.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "PixelSolve | Digital Solutions that Scale",
    description: "PixelSolve is a futuristic tech company delivering cutting-edge solutions in app development, AI automation, SaaS, and web design.",
    url: 'https://pixelsolve.co',
    siteName: 'PixelSolve',
    images: [
      {
        url: '/PixelSolve.png',
        width: 1200,
        height: 630,
        alt: 'PixelSolve - Digital Solutions that Scale',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelSolve | Digital Solutions that Scale',
    description: 'PixelSolve is a futuristic tech company delivering cutting-edge solutions in app development, AI automation, SaaS, and web design.',
    images: ['/PixelSolve.png'],
    creator: '@pixelsolve',
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
  category: 'technology',
  classification: 'business',
  other: {
    'theme-color': '#0d0d0c',
    'msapplication-TileColor': '#0d0d0c',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'PixelSolve',
    'application-name': 'PixelSolve',
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PixelSolve",
    "url": "https://pixelsolve.co",
    "logo": "https://pixelsolve.co/PixelSolve.png",
    "description": "PixelSolve is a futuristic tech company delivering cutting-edge solutions in app development, AI automation, SaaS, and web design.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "connect@pixelsolve.co"
    },
    "sameAs": [
      "https://github.com/Rauftaha757",
      "https://www.linkedin.com/in/pixelsolve-inc",
      "https://www.instagram.com/pixelsolve.co/"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 30.3753,
        "longitude": 69.3451
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flutter & React Native App Development",
            "description": "Cross-platform mobile apps for iOS and Android using modern UI frameworks."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Performance-focused websites and SPAs using React, Tailwind, and Next.js."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Automation Tools",
            "description": "Smart AI assistants, business logic automation, and custom model integrations."
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/PixelSolve.png" />
        <link rel="apple-touch-icon" href="/PixelSolve.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Fonts: Fraunces + General Sans + Space Mono (all Fontshare, free) */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=fraunces@400,500,600,700,900&f[]=general-sans@400,500,600,700&f[]=space-mono@400,700&display=swap"
        />

        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://www.linkedin.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//www.linkedin.com" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Performance monitoring + Service Worker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData) {
                    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                  }
                }, 0);
              });

              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }

              let deferredPrompt;
              window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
              });
            `,
          }}
        />
      </head>
      <body className="bg-bone text-ink font-body antialiased">
        <ScrollToTop />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
