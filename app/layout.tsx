import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StarField } from "@/components/ui/StarField";
import { portfolioData } from "@/data/portfolio-data";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abhisheksinghrawat.com"),
  title: `${portfolioData.profile.name} | Business Analyst & Data Analytics Portfolio`,
  description: `${portfolioData.profile.name} is a Business Analyst and analytics professional specializing in PostgreSQL, SQL, Python, R, and Power BI. Discover predictive churn models, large-scale data pipelines, and BI dashboards.`,
  keywords: [
    "Abhishek Singh Rawat",
    "Business Analyst",
    "Data Analyst",
    "Business Analytics",
    "Power BI",
    "SQL",
    "PostgreSQL",
    "Python",
    "R",
    "UPES MBA",
    "Predictive Modeling",
    "Customer 360",
    "Churn Analysis",
  ],
  authors: [{ name: portfolioData.profile.name }],
  creator: portfolioData.profile.name,
  openGraph: {
    title: `${portfolioData.profile.name} | Business Analyst & Data Analytics`,
    description: portfolioData.profile.headline,
    url: "https://abhisheksinghrawat.com",
    siteName: `${portfolioData.profile.name} Portfolio`,
    images: [
      {
        url: "/photo.jpg",
        width: 800,
        height: 1200,
        alt: portfolioData.profile.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.profile.name} | Business Analyst`,
    description: portfolioData.profile.headline,
    images: ["/photo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { ResumeModalProvider } from "@/context/ResumeModalContext";
import { ResumeModal } from "@/components/ui/ResumeModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#09090b] text-slate-100 antialiased selection:bg-purple-500/30 selection:text-white relative">
        <ResumeModalProvider>
          {/* Subtle Ambient Particle Starfield */}
          <StarField />

          {/* Sticky Header Navigation */}
          <Navbar />

          {/* Main Content Area */}
          <main className="relative z-10 flex flex-col">{children}</main>

          {/* Footer */}
          <Footer />

          {/* Global Resume Preview Pop-Up Modal */}
          <ResumeModal />
        </ResumeModalProvider>
      </body>
    </html>
  );
}
