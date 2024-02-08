import { HeroSection } from "@/sections/hero-section/hero-section";
import { CountersSection } from "@/sections/counters-section/counters-section";
import { CountersSectionData } from "@/data/counters-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CountersSection {...CountersSectionData} />
    </main>
  );
}
