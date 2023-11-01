import Footer from "@/components/Footer";
import GetStartedSection from "@/components/GetStartedSection";
import ServiceSection from "@/components/ServiceSection";
import StepSection from "@/components/StepSection";
import "aos/dist/aos.css";
import FeatureHero from "@/components/FeatureHero";

export default function FeaturePage() {
  return (
    <main className="bg-amber-50">
      <FeatureHero />
      <ServiceSection />
      <StepSection />
      <GetStartedSection />
      <Footer />
    </main>
  );
}
