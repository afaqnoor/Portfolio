import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/lib/data";

const siteUrl = "https://afaqnoor.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.intro,
  keywords: [
    "Afaq Noor",
    "Software Engineer",
    "Android Developer",
    "Full Stack Developer",
    "Kotlin Developer",
    "React Developer",
    "Next.js Developer",
    "Firebase Developer",
    "Pakistan Software Engineer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  applicationName: `${siteConfig.name} Portfolio`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.intro,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.intro,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    email: siteConfig.email,
    url: siteUrl,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
    },
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.university,
    },
    knowsAbout: [
      "Android Development",
      "Kotlin",
      "Jetpack Compose",
      "React.js",
      "Next.js",
      "Node.js",
      "Firebase",
      "TypeScript",
      "MongoDB",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
