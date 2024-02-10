import { HeroSection } from "@/sections/hero-section/hero-section";
import { CountersSection } from "@/sections/counters-section/counters-section";
import { CountersSectionData } from "@/data/counters-section";
import { SwiperSection } from "@/sections/swiper-section/swiper-section";
import { SwiperSectionData } from "@/data/swiper-section";
import { InboxManagementSection } from "@/sections/counters-section/inbox-management-section/inbox-management-section";
import { InboxManagementSectionData } from "@/data/inbox-management-section";
import { FollowersSection } from "@/sections/followers-section/followers-section";
import { FollowersSectionData } from "@/data/followers-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CountersSection {...CountersSectionData} />
      <SwiperSection {...SwiperSectionData} />
      <InboxManagementSection sectionData={InboxManagementSectionData} />
      <FollowersSection sectionData={FollowersSectionData} />
    </main>
  );
}
