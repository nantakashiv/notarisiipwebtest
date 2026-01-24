import React from "react";

import Hero from "../../components/sections/Hero";
import Footer from "../../components/layout/Footer";
import About from "../../components/sections/About";
import CertificationsC from "../../components/sections/CertificationCarousel";
import ServicesPreview from "../../components/sections/ServicesPreview";
import ArticlePreview from "../../components/sections/ArticlePreview";
import TestimonialsPreview from "../../components/sections/TestimonialsPreview";
import FinalCTA from "../../components/sections/FinalCTA";
import OurClients from "../../components/sections/OurClients";
import ClientEngagements from "../../components/sections/CurrentEngagements";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900">
      <Hero />

      {/* Constrained sections */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <About />
        <CertificationsC />
        <ServicesPreview />
        <OurClients />
        <TestimonialsPreview />
        <FinalCTA />
        <ClientEngagements />
      </main>

      {/* Full-width section controls its own background */}
      <ArticlePreview />

      <Footer />
    </div>
  );
}
