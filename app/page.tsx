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
import { CreativeDesignSectionData } from "@/data/creative-design-section";
import { CreativeDesignSection } from "@/sections/creative-designs-section/creative-designs-section";
import { WhatWeDoSection } from "@/sections/what-we-do-section/what-we-do-section";
import { WhatWeDoSectionData } from "@/data/what-we-do-section";

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
      <GradientContainer>
        <CreativeDesignSection {...CreativeDesignSectionData} />
        <WhatWeDoSection {...WhatWeDoSectionData} />
      </GradientContainer>
    </main>
  );
}
