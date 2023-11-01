import Footer from "@/components/Footer";
import GetStartedSection from "@/components/GetStartedSection";
import "aos/dist/aos.css";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <main className="bg-amber-50">
      <About />
      <GetStartedSection />
      <Footer />
    </main>
  );
}
