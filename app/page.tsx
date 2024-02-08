import { Hero } from "@/sections/hero/hero";
import { Counters } from "@/sections/counters/counters";
import { CountersSectionData } from "@/data/counters-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Counters {...CountersSectionData} />
    </main>
  );
}
