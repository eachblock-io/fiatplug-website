import Breadcrum from "@/components/Breadcrum";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-amber-50">
      <Hero />
      <Breadcrum />
      <ServiceSection />
    </main>
  );
}
