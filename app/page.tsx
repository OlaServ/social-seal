import { HeroSection } from "@/sections/hero-section/hero-section";
import { CountersSection } from "@/sections/counters-section/counters-section";
import { CountersSectionData } from "@/data/counters-section";
import { SwiperSection } from "@/sections/swiper-section/swiper-section";
import { SwiperSectionData } from "@/data/swiper-section";
import { InboxManagementSection } from "@/sections/counters-section/inbox-management-section/inbox-management-section";
import { InboxManagementSectionData } from "@/data/inbox-management-section";
import { FollowersSection } from "@/sections/followers-section/followers-section";
import { FollowersSectionData } from "@/data/followers-section";
import { ThreatMonitoringSection } from "@/sections/threat-monitoring-section/threat-monitoring-section";
import { ThreatMonitoringSectionData } from "@/data/threat-monitoring-section";
import { BrandSectionData } from "@/data/brand-section";
import { BrandSection } from "@/sections/brand-section/brand-section";
import { GradientContainer } from "@/components/gradient-container/gradient-container";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CountersSection {...CountersSectionData} />
      <SwiperSection {...SwiperSectionData} />
      <InboxManagementSection sectionData={InboxManagementSectionData} />
      <FollowersSection sectionData={FollowersSectionData} />
      <ThreatMonitoringSection sectionData={ThreatMonitoringSectionData} />
      <BrandSection {...BrandSectionData} />
      <GradientContainer></GradientContainer>
    </main>
  );
}
