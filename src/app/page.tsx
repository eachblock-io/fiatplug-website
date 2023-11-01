import Breadcrum from "@/components/Breadcrum";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/GetStartedSection";
import Hero from "@/components/Hero";
import OfferSection from "@/components/OfferSection";
import ServiceSection from "@/components/ServiceSection";
import StepSection from "@/components/StepSection";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <main className="bg-amber-50">
      <Hero />
      <Breadcrum />
      <ServiceSection />
      <StepSection />
      <OfferSection />
      <FaqSection />
      <GetStartedSection />
      <Footer />
    </main>
  );
}
