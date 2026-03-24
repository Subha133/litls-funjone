import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";
import data from "@/data/data.json";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: data.business.name,
  description: data.business.tagline,
  telephone: data.business.contact.phone_whatsapp,
  address: {
    "@type": "PostalAddress",
    streetAddress: data.business.contact.address,
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700095",
    addressCountry: "IN",
  },
};

const Index = () => (
  <>
    <Helmet>
      <title>Litls Funzone – Kids Playzone & Birthday Party Venue in Kolkata</title>
      <meta name="description" content="Litls Funzone – Where Fun Meets Fitness. Best kids indoor playzone & birthday party venue in Kolkata. Book birthday parties, daycare and fun activities for children." />
      <meta property="og:title" content="Litls Funzone – Kids Playzone Kolkata" />
      <meta property="og:description" content="Best kids indoor playzone & birthday party venue near South City Mall, Kolkata." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://litlsfunzone.com" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
    <Navbar />
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Index;
